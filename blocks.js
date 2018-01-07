function Blocks(x,y) {



    this.x = x + 80;

    this.y = y + 80;



    this.showBlocks = function () {



        for(var i = 0 ; i < 10 ; i++){

                rectMode(CENTER);

                fill(0,0,255);

                rect(this.x,this.y,100,40);



            }

     }

}
