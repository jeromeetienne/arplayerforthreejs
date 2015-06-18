title: Three.js Mini Game Workshop
output: index.html
--

# Augmented Reality in Three.js

## By [@jerome_etienne](https://twitter.com/jerome_etienne)

---

### What Will i Talk About ?

- Doing Augmented Reality
- Using Web Technology
- Using Open Source

---

### Who i Am ?

- [Learning Three.js Author](http://learningthreejs.com/) author
- Wrote more than [45 game extensions for three.js]()
- Lead for
Three.js Team at [Daqri](http://daqri.com) in Dublin

Contact me on twitter [@jerome_etienne](https://twitter.com/jerome_etienne)

---

# The Challenge

---

#### Doing AR 

#### with Web Technology 

#### And Open Source

---

# A Good Recipe ?

---

## Let's see What We Need

---

### Ingredients Needed For AR

1. Get a camera feed 
1. Analize it to localize AR Markers
1. Generate 3d on top 
1. Finally Display both, 3d and video, on the screen

---

## A Pinch of Web Standards

---

### Camera Feed

- Simple color video like Webcam
- webrtc/getUserMedia - [spec](http://www.w3.org/TR/mediacapture-streams/) - [example](http://simpl.info/getusermedia/)
- Supported on Desktop and Android mobile
- not IOS unfortunatly - [details](http://caniuse.com/#feat=stream)

---

### Display 3D

- WebGL - [spec](https://www.khronos.org/registry/webgl/specs/latest/)
- Based on openGL 2.0
- Available on desktop and modern mobile phones

---

### Usual Web Platform

- Javascript to code the app
- CSS to layout elements on the page

---

## All the Ingredients are there...

---

# Demo Time

---

TODO here show video of each the Demo
- video is safer
- no live

---

---

## How we implemented it

---

### A Spoon of Open Source

- [three.js](http://threejs.org/) to ease webgl display
- [jsaruco](https://github.com/jcmellado/js-aruco) to find AR markers within video streams

---


## Let's see how far can we go ?

---

### Display WebGL

- Three.js javascript library from [mrdoob](https://twitter.com/mrdoob)
- Leading library to display webgl
- MIT license, so easy to integrate
- Run on desktop and mobile.

---

### AR Marker Recognition

Several possibilities, we focused on

- jsaruco
- jsartoolkit

---

### js-aruco

>>> ArUco library is a minimal library for Augmented Reality 
>>> applications based on OpenCv.

- js-aruco is a Javascript Port of [ArUco library](http://www.uco.es/investiga/grupos/ava/node/26).

---

### jsartoolkit

- Javascript port of [artoolkit](artoolkit.org) - Rather Old - 3 years old
- Written by [Ilmari Heikkinen](http://www.fhtr.net/)
- Available on [github](https://github.com/kig/JSARToolKit)
- To use it in this in the pipe

---

- We picked js-aruco 
- Using js-artoolkit is in progress 

---

# Blank
-----------------------------------------

---

# Blank
-----------------------------------------

---

# How Does Web Compare with Native ?

---

## Well it depends... :)

---

### PRO Native
- Better controls on running platform
  - e.g. can't read webcam in ios browser 
  - but possible in ios native 
- More efficient
  - native typically run faster
  - less latency.

---

### PRO Web
- Lots less code to write
  - no need for android version + ios version
- Easier to learn
  - More standard
  - Less Varied

---

### Choosing Between Native and Web

- It depends on your goals

- For serious, long term project, native may be better

- For fun, short project, go for web technology

---

# Blank
---------------------------------------------

---

# Demos

- TODO explains each demo
- TODO what could be reused
- TODO inpire people

---

# Blank
---------------------------------------------

---

# Markers

---

### Looks Like That

<img src="images/image-marker-265.png" width="50%">

---

## Not too sexy but practical

---

### Markers Details

- Each got a ID
- From 0 to 1023
- Simple to recognize many markers

---

### This One is 265

<img src="images/image-marker-265.png" width="50%">

---

### How to Generate Marker

- Web app to automatically generate it
- find it in [repo](http://jeromeetienne.github.io/arplayerforthreejs/marker/builder/iframe.html#265)

---

## What to do with it ?

---

### Print It on Paper

- CON: Require a printer
- PRO: No/little reflection - so ease recognition
- So paper is usually better
- Glue it on cardboard for robustness

---

### Display it on Mobile

- Load the image on your phone or tablet
- Put the mobile in front of the camera
- CON: mobile screens reflective
- PRO: highly available

---

### Where to put the marker ?

In front of the camera :)

---

### Moving the camera

- fix marker on walls/tables
- move around with the camera

---

TODO image of moving camera app

---

### Moving the marker

- fix the camera
- move the marker around

---

TODO image of moving marker app
