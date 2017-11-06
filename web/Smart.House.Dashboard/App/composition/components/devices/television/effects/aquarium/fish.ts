let fishW = 50;
let fishH = 50;
let maxLength = 5;

class Fish {

    width: number;
    height: number;
    angle: number;
    xAngle: number;
    yAngle: number;
    zAngle: number;
    x: number;
    y: number;
    z: number;
    zFar: number;
    zClose: number;
    scale: number;
    flip: number;
    zFarFactor: number;
    cell: number;
    species: number;
    cellCount: number;
    cellReverse: number;

    constructor(width: number, height: number) {

        this.height = height;
        this.width = width;
        this.angle = Math.PI * 2 * Math.random();                            //set the x,y direction this fish swims
        this.xAngle = Math.cos(this.angle);                                       //set the x value of the angle
        this.yAngle = Math.sin(this.angle);                                       //set the y value of the angle
        this.zAngle = 1 + -2 * Math.round(Math.random());                        //set if the fish is swimming toward us or away. 1 = toward us; -1 = away from us
        this.x = Math.floor(Math.random() * (this.width - fishW) + fishW / 2);    //set the starting x location  
        this.y = Math.floor(Math.random() * (this.height - fishH) + fishH / 2);   //set the starting y location  
        this.zFar = 100;                                                     //set how far away can a fish go
        this.zFarFactor = 1;                                                 //set the max size the fish can be. 1=100%
        this.zClose = 0;                                                     //set how near a fish can come
        this.z = Math.floor(Math.random() * ((this.zFar - this.zClose)));              //set the starting z location 
        this.scale = .1;                                                     //set the rate of scaling each frame
        this.flip = 1;                                                       //set the direction of the fish. 1=right; -1=left
        this.cellCount = 16;                                                 //set the number of cells (columns) in the image strip animation
        this.cell = Math.floor(Math.random() * (this.cellCount - 1));               //set the first cell (columns) of the image strip animation
        this.cellReverse = -1;                                               //set which direction we go through the image strip
        this.species = Math.floor(Math.random() * 3);                        //set which species of fish this fish is. each species is a row in the image strip 

        // stop fish from swimming straight up or down
        if (this.angle > Math.PI * 4 / 3 && this.angle < Math.PI * 5 / 3 || this.angle > Math.PI * 1 / 3 && this.angle < Math.PI * 2 / 3) {
            this.angle = Math.PI * 1 / 3 * Math.random();
            this.xAngle = Math.cos(this.angle);
            this.yAngle = Math.sin(this.angle);
        }
        // face the fish the right way if angle is between 6 o'clock and 12 o'clock
        if (this.angle > Math.PI / 2 && this.angle < Math.PI / 2 * 3) {
            this.flip = -1;
        }
    }
    
    // draw the fish each frame -------------------------------------------------------------------------------            
    swim = function (ctx: any, imageStrip: any) {
        var velocity = 20;
        // Calculate next position of fish
        var nextX = this.x + this.xAngle * velocity * .1;
        var nextY = this.y + this.yAngle * velocity * .1;
        var nextZ = this.z + this.zAngle * .1 * velocity * .1;
        var nextScale = Math.abs(nextZ) / (this.zFar - this.zClose);

        // If fish is going to move off right side of screen
        if (nextX + fishW / 2 * this.scale > this.width) {
            // If angle is between 3 o'clock and 6 o'clock
            if ((this.angle >= 0 && this.angle < Math.PI / 2)) {
                this.angle = Math.PI - this.angle;
                this.xAngle = Math.cos(this.angle);
                this.yAngle = Math.sin(this.angle) * Math.random();
                this.flip = -this.flip;
            }
            // If angle is between 12 o'clock and 3 o'clock
            else if (this.angle > Math.PI / 2 * 3) {
                this.angle = this.angle - (this.angle - Math.PI / 2 * 3) * 2
                this.xAngle = Math.cos(this.angle);
                this.yAngle = Math.sin(this.angle) * Math.random();
                this.flip = -this.flip;
            }
        }

        // If fish is going to move off left side of screen
        if (nextX - fishW / 2 * this.scale < 0) {
            // If angle is between 6 o'clock and 9 o'clock
            if ((this.angle > Math.PI / 2 && this.angle < Math.PI)) {
                this.angle = Math.PI - this.angle;
                this.xAngle = Math.cos(this.angle);
                this.yAngle = Math.sin(this.angle) * Math.random();
                this.flip = -this.flip;
            }
            // If angle is between 9 o'clock and 12 o'clock
            else if (this.angle > Math.PI && this.angle < Math.PI / 2 * 3) {
                this.angle = this.angle + (Math.PI / 2 * 3 - this.angle) * 2
                this.xAngle = Math.cos(this.angle);
                this.yAngle = Math.sin(this.angle) * Math.random();
                this.flip = -this.flip;
            }
        }

        // If fish is going to move off bottom side of screen
        if (nextY + fishH / 2 * this.scale > this.height) {
            // If angle is between 3 o'clock and 9 o'clock
            if ((this.angle > 0 && this.angle < Math.PI)) {
                this.angle = Math.PI * 2 - this.angle;
                this.xAngle = Math.cos(this.angle);
                this.yAngle = Math.sin(this.angle) * Math.random();
            }
        }

        // If fish is going to move off top side of screen
        if (nextY - fishH / 2 * this.scale < 0) {
            // If angle is between 9 o'clock and 3 o'clock
            if ((this.angle > Math.PI && this.angle < Math.PI * 2)) {
                this.angle = this.angle - (this.angle - Math.PI) * 2;
                this.xAngle = Math.cos(this.angle);
                this.yAngle = Math.sin(this.angle);
            }
        }

        // If fish is going too far (getting too small)
        if (nextZ <= this.zClose && this.zAngle < 0) {
            this.zAngle = -this.zAngle;
        }
        // If fish is getting to close (getting too large)
        if (((this.width / fishW) * 10) < ((fishW * maxLength) / this.width)) {
            this.zFarFactor = .3
        }
        else if (((this.width / fishW) * 2) < ((fishW * maxLength) / this.width)) {
            this.zFarFactor = .5
        }
        else { this.zFarFactor = 1 }

        if (nextZ >= this.zFar * this.zFarFactor && this.zAngle > 0) {
            this.zAngle = -this.zAngle;
        }
        if (this.scale < .1) { this.scale = .1 }; //don't let fish get too tiny

        //draw the fish
        //locate the fish
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.scale(this.scale, this.scale); // make the fish bigger or smaller depending on how far away it is.
        ctx.transform(this.flip, 0, 0, 1, 0, 0); //make the fish face the way he's swimming.
        ctx.drawImage(imageStrip, fishW * this.cell, fishH * this.species, fishW, fishH, -fishW / 2, -fishH / 2, fishW, fishH); //draw the fish
        ctx.save();
        this.scale = nextScale // increment scale for next time 
        ctx.restore();
        ctx.restore();

        //increment to next state
        this.x = nextX;
        this.y = nextY;
        this.z = nextZ;
        if (this.cell >= this.cellCount - 1 || this.cell <= 0) { this.cellReverse = this.cellReverse * -1; } //go through each cell in the animation
        this.cell = this.cell + 1 * this.cellReverse; //go back down once we hit the end of the animation
    }
}

export { Fish };