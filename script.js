

/// <reference path="p5.js" />

/// <reference path="p5.min.js" />

var paddle = new Paddle();

var ball = new Ball();

var blocks = [];

function setup() {

   createCanvas(windowWidth, windowHeight-50);

   for (var i = 0; i < 12; i++){

       for(var j = 0; j < 4; j++){

           blocks.push(new Blocks(i*105,j*45));

       }

   }

}

function draw() {
background(255);
   paddle.showPaddle();

   paddle.move(mouseX);

   paddle.checkEdges();

   ball.showBall();

   ball.move(2);

   ball.checkEdges(2);

   for(var i = 0; i < blocks.length; i++){

        blocks[i].showBlocks();

   }

}
