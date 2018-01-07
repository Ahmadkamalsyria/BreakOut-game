/// <reference path="p5.min.js" />

/// <reference path="p5.js" />

function Ball() {

    this.r = 15;

    this.x = 500;

    this.y = 500;

    this.vx = 3;

    this.vy= 3;



    this.showBall = function() {

        fill(99);

        ellipse(this.x,this.y,this.r * 2,this.r * 2);

    }

    this.move = function () {

        this.x += this.vx;

        this.y+= this.vy;

        if (this.x > width || this.x < 0)

            this.vx = -this.vx;

        if (this.y > height || this.y < 0)

            this.vy = -this.vy;

        if (this.y > 900)

            this.vy = -this.vy;

    }

     this.checkEdges = function() {



        if (this.directionY < 0 && this.y > height - this.r*2) {

                this.y = height - this.r*2;

        }

        else if (this.directionY > 0 && this.y < 0) {

                this.y = 0;

        }

        else if (this.directionX > 0 && this.X > width - this.r*2) {



        }

        else if (this.directionX < 0 && this.X < 0) {

                this.X = 0;

        }

    }

}
