# [Angry Coders Game](http://angrycoders.codingblocks.com/)

A angry bird type game for coders by Coding blocks.

Click the link embedded in title to visit the site.

## Table of contents
* [General info](#general-info)
* [Screenshots](#screenshots)
* [Technologies](#technologies)
* [Setup](#setup)
* [Features](#features)


## General info
Love playing angry birds? We all do.
But ever felt like creating your own angry birds game? Here is the code to develop your own angry birds type game in JS.

So sit back, relax, and code your way into your self-developed Angry Coders game.

Link: http://angrycoders.codingblocks.com/

 **Run Code** Button evaluates your code and runs it accordingly.

* **Reset Level** Button restarts the game for this level.

* **Next Level** Button takes you to a random next level

* You need to *write the code* for the two functions to get *Angle* and *Velocity* at which the ball should be thrown so that it hits the bird.

## Code Examples on how to play:

                    gravity = 1000
                    mass=10
                    Helper Functions:
                    function degreeToRadian(deg){
                      return deg*(Math.PI/180);
                    }

                    function radianToDegree(rad){
                      return rad*(180/Math.PI);
                    }

                    function sin(deg){
                      theta = degreeToRadian(deg);
                      return Math.sin(theta);
                    }

                    function cos(deg){
                      theta = degreeToRadian(deg);
                      return Math.sin(theta)
                    }

                    function tanInv (val) {
                      var rad = (Math.atan(val))
                      var deg = radianToDegree(rad)
                      return deg;
                    }

                    function squareRoot(no){
                      return Math.sqrt(no);
                    }



## Screenshots
Opening above link you'll get the following screen
![homepage](https://user-images.githubusercontent.com/58937669/101068229-74871400-35be-11eb-82e3-b61d9d4c7fc5.JPG)




## Setup
- Clone the repo: `https://github.com/coding-blocks/angry-coders-game.git`
-Download ZIP file




## Bugs & Feature Requests

Click [here](https://github.com/coding-blocks/angry-coders-game/issues) to report a bug for a feature request

###PLEASE DO
- Provide as much information as possible about the issue.
- Provide detailed steps for reproducing the issue.

###PLEASE DO NOT

-Provide any sensitive data or server logs.
-Report potential security issues publicly (see ‘Security Issues’).

