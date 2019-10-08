# [Angry Coders Game](http://angrycoders.codingblocks.com/)

Opening above link you'll get the following screen
![Angry Coders Game Home Page](/HomePage.jpg)

* **Run Code** Button evaluates your code and runs it accordingly.

* **Reset Level** Button restarts the game for this level.

* **Next Level** Button takes you to a random next level

* You need to *write the code* for the two functions to get *Angle* and *Velocity* at which the ball should be thrown so that it hits the bird.

Extra Information:

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
                
