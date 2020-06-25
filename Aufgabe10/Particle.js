"use strict";
var L10_Canvas;
(function (L10_Canvas) {
    class Particle extends L10_Canvas.Cell {
        constructor(_position) {
            super(_position);
            let colors = ["0, white", "0.6, red"];
            let numColors = colors.length;
            let color;
            let ColorIndex;
            ColorIndex = Math.round(Math.random() * (numColors - 1));
            color = colors[ColorIndex];
            this.color = color;
            let maxRadius = 3;
            let minRadius = 1;
            this.radius = minRadius + (Math.random() * (maxRadius - minRadius));
            this.velocity = new L10_Canvas.Vector(0, 0);
            this.velocity.random(10, 100);
        }
        draw() {
            L10_Canvas.crc2.save();
            let r1 = 1;
            let r2 = 7;
            let particle = new Path2D();
            let gradient = L10_Canvas.crc2.createRadialGradient(0, 0, r1, 0, 0, r2);
            particle.arc(0, 0, r2, 0, 2 * Math.PI);
            gradient.addColorStop(0, "white");
            gradient.addColorStop(0.6, "red");
            L10_Canvas.crc2.save();
            L10_Canvas.crc2.translate(this.position.x, this.position.y);
            L10_Canvas.crc2.fillStyle = gradient;
            L10_Canvas.crc2.fill(particle);
            L10_Canvas.crc2.restore();
        }
        move(_timeslice) {
            super.move(_timeslice);
            if (this.position.x < 0)
                this.position.x += L10_Canvas.crc2.canvas.width;
            if (this.position.y < 0)
                this.position.y += L10_Canvas.crc2.canvas.height;
            if (this.position.x > L10_Canvas.crc2.canvas.width)
                this.position.x -= L10_Canvas.crc2.canvas.width;
            if (this.position.y > L10_Canvas.crc2.canvas.height)
                this.position.y -= L10_Canvas.crc2.canvas.height;
        }
    }
    L10_Canvas.Particle = Particle;
})(L10_Canvas || (L10_Canvas = {}));
//# sourceMappingURL=Particle.js.map