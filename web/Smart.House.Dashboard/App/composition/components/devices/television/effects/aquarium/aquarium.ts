import { Fish } from './fish'

class Aquarium {
    ctx: any;                    //canvas context for drawing the fish
    startFish: number;          //number of fish to start with
    fish: Fish [];               //array of fish
    backgroundImage: any;         //background image
    backgroundImageW: number;  //background image width
    backgroundImageH: number;  //background image height
    imageStrip: any;              //fish image strip 
    canvasWidth: number;
    canvasHeight: number;

    constructor() {
        this.startFish = 5;
        this.backgroundImageW = 250;
        this.backgroundImageH = 125;
        this.fish = [];
    }

    init = function (background: any) {
        this.ctx = background.getContext('2d');
        this.canvasWidth = background.width;
        this.canvasHeight = background.height;

        //draw the background
        this.backgroundImage = document.getElementById('imageBackground');
        this.drawBackground(this.ctx);

        //create the fish
        this.imageStrip = document.getElementById('imageStrip');
        this.createFish(this.startFish);
    }

    createFish = function(max) {
        if (this.fish.length < max) {
            for (var i = this.fish.length; i < max; i++) {
                this.fish.push(new Fish(this.backgroundImageW, this.backgroundImageH));
            }
        }
        else {
            //remove fish
            this.fish.splice(max, this.fish.length - max);
        }
    }

    drawBackground = function (ctx: any) {
        if (this.canvasWidth < this.backgroundImageW) {
            //Show a portion of the background if the window is more narrow than the backgroundImage
            ctx.drawImage(this.backgroundImage, 0, 0, this.backgroundImageW, this.canvasHeight);
        }
        else {
            //tile the backgroundImage horizontally if the window is more wide than the image
            var tileCount = Math.floor(this.canvasWidth / this.backgroundImageW);
            var flip = 1; //flip the image when flip==-1 for better looking tiles
            for (var i = 0; i <= tileCount; i++) {
                //loop through all the tiles that are needed and position them
                ctx.save();
                ctx.transform(flip, 0, 0, 1, 0, 0);
                ctx.drawImage(this.backgroundImage, (flip - 1) * this.backgroundImageW / 2 + flip * this.backgroundImageW * i, 0, this.backgroundImageW, this.canvasHeight);
                ctx.restore();
                flip = flip * -1;
            }

        }
    }

    draw = function (canvas: any) {
        var ctx = canvas.getContext('2d');
        ctx.clearRect(0, 0, this.canvasWidth, this.canvasHeight);

        for (var fishie in this.fish) {
            this.fish[fishie].swim(ctx, this.imageStrip);
        }
    }

    clear = function (canvas: any) {
        var ctx = canvas.getContext('2d');
        ctx.clearRect(0, 0, this.canvasWidth, this.canvasHeight);
    }
}

export { Aquarium };