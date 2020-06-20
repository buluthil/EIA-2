"use strict";
var L09_Canvas;
(function (L09_Canvas) {
    class Particle {
        constructor(_position) {
            this.position = _position;
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
            this.velocity = new L09_Canvas.Vector(0, 0);
            this.velocity.random(10, 100);
        }
        draw() {
            console.log("BloodParticles");
            L09_Canvas.crc2.save();
            let r1 = 1;
            let r2 = 7;
            let particle = new Path2D();
            let gradient = L09_Canvas.crc2.createRadialGradient(0, 0, r1, 0, 0, r2);
            particle.arc(0, 0, r2, 0, 2 * Math.PI);
            gradient.addColorStop(0, "white");
            gradient.addColorStop(0.6, "red");
            L09_Canvas.crc2.save();
            L09_Canvas.crc2.translate(this.position.x, this.position.y);
            L09_Canvas.crc2.fillStyle = gradient;
            L09_Canvas.crc2.fill(particle);
            L09_Canvas.crc2.restore();
        }
        move(_timeslice) {
            console.log("move");
            let offset = new L09_Canvas.Vector(this.velocity.x, this.velocity.y);
            offset.x *= 0;
            offset.y *= _timeslice * 2;
            this.position.add(offset);
            if (this.position.x < 0)
                this.position.x += L09_Canvas.crc2.canvas.width;
            if (this.position.y < 0)
                this.position.y += L09_Canvas.crc2.canvas.height;
            if (this.position.x > L09_Canvas.crc2.canvas.width)
                this.position.x -= L09_Canvas.crc2.canvas.width;
            if (this.position.y > L09_Canvas.crc2.canvas.height)
                this.position.y -= L09_Canvas.crc2.canvas.height;
        }
    }
    L09_Canvas.Particle = Particle;
})(L09_Canvas || (L09_Canvas = {}));
//# sourceMappingURL=BloodParticles.js.map