class Fire {
    threshold: number;
    fire: any[];
    time: any;
    fps: number;
    canvasWidth: number;
    canvasHeight: number;
    data: any;
    colors: any[];
    imageData: any;
    ctx: any;
    intensity: any;

    initialize = function (canvas) {
        this.ctx = canvas.getContext('2d');
        this.canvasWidth = canvas.width;
        this.canvasHeight = canvas.height;
        this.intensity = null;
        this.fps = 30;
        this.threshold = 0.5;
        this.imageData = this.ctx.getImageData(0, 0, this.canvasWidth, this.canvasHeight);
        this.data = this.imageData.data;
        var numPixels = this.data.length / 4;

        this.colors = [];

        for (var i = 0; i < 256; i++) {
            var color = [];
            color[0] = color[1] = color[2] = 0;
            this.colors[i] = color;
        }

        for (var i = 0; i < 32; ++i) {
            this.colors[i][2] = i << 1;
            this.colors[i + 32][0] = i << 3;
            this.colors[i + 32][2] = 64 - (i << 1);
            this.colors[i + 64][0] = 255;
            this.colors[i + 64][1] = i << 3;
            this.colors[i + 96][0] = 255;
            this.colors[i + 96][1] = 255;
            this.colors[i + 96][2] = i << 2;
            this.colors[i + 128][0] = 255;
            this.colors[i + 128][1] = 255;
            this.colors[i + 128][2] = 64 + (i << 2);
            this.colors[i + 160][0] = 255;
            this.colors[i + 160][1] = 255;
            this.colors[i + 160][2] = 128 + (i << 2);
            this.colors[i + 192][0] = 255;
            this.colors[i + 192][1] = 255;
            this.colors[i + 192][2] = 192 + i;
            this.colors[i + 224][0] = 255;
            this.colors[i + 224][1] = 255;
            this.colors[i + 224][2] = 224 + i;
        }

        this.fire = [];

        for (var i = 0; i < this.canvasWidth * this.canvasHeight; i++) {
            this.fire[i] = 0;
        }

        this.time = new Date().getTime();
    }

    randomizeThreshold = function () {
        this.threshold += Math.random() * 0.2 - 0.1;
        this.threshold = Math.min(Math.max(this.threshold, 0.5), 0.8);
    }

    burnBurnBurn = function () {

        window.requestAnimationFrame(() => this.burnBurnBurn);
        var now = new Date().getTime();
        var dt = now - this.time;

        if (dt < (1000 / this.fps))
            return; // skip a frame

        this.time = now;

        var bottomLine = this.canvasWidth * (this.canvasHeight - 1);

        // draw random pixels at the bottom line
        for (var x = 0; x < this.canvasWidth; x++) {
            var value = 0;

            if (Math.random() > this.threshold)
                value = 255;

            this.fire[bottomLine + x] = value;
        }

        // move flip upwards, start at bottom
        var value = 0;

        for (var y = 0; y < this.canvasHeight; ++y) {
            for (var x = 0; x < this.canvasWidth; ++x) {
                if (x == 0) {
                    value = this.fire[bottomLine];
                    value += this.fire[bottomLine];
                    value += this.fire[bottomLine - this.canvasWidth];
                    value /= 3;
                } else if (x == this.canvasWidth - 1) {
                    value = this.fire[bottomLine + x];
                    value += this.fire[bottomLine - this.canvasWidth + x];
                    value += this.fire[bottomLine + x - 1];
                    value /= 3;
                } else {
                    value = this.fire[bottomLine + x];
                    value += this.fire[bottomLine + x + 1];
                    value += this.fire[bottomLine + x - 1];
                    value += this.fire[bottomLine - this.canvasWidth + x];
                    value /= 4;
                }

                if (value > 1)
                    value -= 1;

                value = Math.floor(value);
                var index = bottomLine - this.canvasWidth + x;
                this.fire[index] = value;
            }

            bottomLine -= this.canvasWidth;
        }

        var skipRows = 2; // skip the bottom 2 rows

        // render the flames using our color table
        for (var y = skipRows; y < this.canvasHeight; ++y) {
            for (var x = 0; x < this.canvasWidth; ++x) {
                var index = y * this.canvasWidth * 4 + x * 4;
                value = this.fire[(y - skipRows) * this.canvasWidth + x];

                this.data[index] = this.colors[value][0];
                this.data[++index] = this.colors[value][1];
                this.data[++index] = this.colors[value][2];
                this.data[++index] = 255;
            }
        }

        // sometimes change fire intensity
        if (this.intensity == null) {
            if (Math.random() > 0.95) {
                this.randomizeThreshold();
            }
        }

        this.ctx.putImageData(this.imageData, 0, 0);
    }
}

export { Fire };