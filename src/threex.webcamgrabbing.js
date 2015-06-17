var THREEx = THREEx || {}

// shim
navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia;
window.URL = window.URL || window.webkitURL;

/**
 * Grab camera
 */
THREEx.WebcamGrabbing = function(){

        //////////////////////////////////////////////////////////////////////////////////
        //		Comments
        //////////////////////////////////////////////////////////////////////////////////
        // create video element
        var domElement        = document.createElement('video')
        domElement.setAttribute('autoplay', true)

        // window.domElement = video
        domElement.style.position = 'absolute';
        domElement.style.top = 0;
        domElement.style.left = 0;
        domElement.style.minWidth = '100%';
        domElement.style.minHeight = '100%';
        domElement.style.zIndex = -100;
        domElement.style.overflow   = "hidden";

        /**
        * Resize video element.
        * - Made complex to handle the aspect change
        * - it is frequently when the mobile is changing orientation
        * - after a search on the internet, it seems hard/impossible to prevent browser from changing orientation
        */
        function onResize(){
                // is the size of the video available ?
                if( domElement.videoHeight === 0 )   return

                var videoAspect = domElement.videoWidth / domElement.videoHeight;
                var windowAspect = window.innerWidth / window.innerHeight;
        }

        window.addEventListener('resize', function(event){
                onResize()
        })


        // get the media sources
        MediaStreamTrack.getSources(function(sourceInfos) {
                // define getUserMedia() constraints
                var aspectRatio = window.innerWidth / window.innerHeight;
                var constraints = {
                        // video: true,
                        audio: false,
                        video: {
                                mandatory: {
                                        minAspectRatio: aspectRatio
                                }
                        }
                }
                // to mirror the video element when it isnt 'environment'
                // domElement.style.transform   = 'scaleX(-1)'
                // it it finds the videoSource 'environment', modify constraints.video
                for (var i = 0; i != sourceInfos.length; ++i) {
                        var sourceInfo = sourceInfos[i];
                        if(sourceInfo.kind == "video" && sourceInfo.facing == "environment") {
                                constraints.video = {
                                        optional: [{sourceId: sourceInfo.id}]
                                }
                                // not to mirror the video element when it is 'environment'
                                // domElement.style.transform   = ''
                        }
                }

                // try to get user media (click event)
                navigator.getUserMedia( constraints, function(stream){
                        domElement.src = URL.createObjectURL(stream);
                }, function(error) {
                        console.error("Cant getUserMedia()! due to ", error);
                });
        });
        function mediaStreamTrack(){

        }

	this.domElement = domElement
}
