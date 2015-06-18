# How to code the Demo

- record some video

## How to code the UI
- when a marker is seen as visible, 
  - destroy old UI object if needed
  - create the UI object for this markerId if needed
  - create/restart a timeout for this UI
- when the timer expire, stop the UI
- the UI is a class
  - it is updated at every frame
  - .start() to start the UI, so animation may be done there
  - .stop() to stop the UI, so animation may be started in there
  - it has a callback onDestroy. thus caller can remove the UI when it is stopped
- first class will simply display a div containing a text
  - how to handle the CSS. once again think with mobile first

--

- What about displaying an image ? a gif
- with a sound
- a video html element ?
- second class is embedding youtube video

- e.g. a meme gif + a freesound funny sound
