/// <reference path="p5.min.js" />



function Paddle() {

    this.width=160;

    this.height=20;

    this.x= 500;

    this.y= 600;

    this.showPaddle = function () {
        fill(0,0,255);
        rect(this.x,this.y,this.width,this.height);

     }

        this.move = function (step){

        this.x = step;

     }

    this.checkEdges = function (){

         if (this.x > width - this.width) this.x = width - this.width;



     }

}
