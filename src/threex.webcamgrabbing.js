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
	domElement.style.zIndex = -1;
    domElement.style.position = 'absolute'

    // domElement.style.top = '0px'
    // domElement.style.left = '0px'
    // domElement.style.width = '100%'
    // domElement.style.height = '100%'

    domElement.style.right  = 0; 
    domElement.style.bottom = 0;
    domElement.style.minWidth   = "100%"; 
    domElement.style.minHeight  = "100%";
    domElement.style.width  = "auto"; 
    domElement.style.height = "auto"; 
    domElement.style.zIndex = -100;
    // domElement.style.backgroundSize = "cover";
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
            if(windowAspect<0.60){
                console.log("9:16")
            }else if(windowAspect<0.69){
                console.log("10:16")
            }else if(windowAspect<0.78){
                console.log("3:4")
            }else if(windowAspect<0.9){
                console.log("4:5")
            }else if(windowAspect<1.125){
                console.log("1:1")
            }else if(windowAspect<1.29){
                console.log("5:4")
            }else if(windowAspect<1.47){
                console.log("4:3")
            }else if (windowAspect<1.69){
                console.log("16:10")
            }else{
                console.log("16:9")
            }
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
                      // minWidth: 1280,
                      // minHeight: 720,
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

        // try to get user media
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
