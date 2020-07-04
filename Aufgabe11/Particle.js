"use strict";
var L11_Canvas;
(function (L11_Canvas) {
    class Particle extends L11_Canvas.Moveable {
        constructor(_position) {
            super(_position);
            if (_position)
                this.position = _position;
            else
                this.position = new L11_Canvas.Vector(0, 0);
            this.velocity = new L11_Canvas.Vector(0, 0);
            this.velocity.random(100, 100);
        }
        draw() {
            L11_Canvas.crc2.save();
            let r1 = 1;
            let r2 = 7;
            let particle = new Path2D();
            let gradient = L11_Canvas.crc2.createRadialGradient(0, 0, r1, 0, 0, r2);
            particle.arc(0, 0, r2, 0, 2 * Math.PI);
            gradient.addColorStop(0, "white");
            gradient.addColorStop(0.6, "red");
            L11_Canvas.crc2.save();
            L11_Canvas.crc2.translate(this.position.x, this.position.y);
            L11_Canvas.crc2.fillStyle = gradient;
            L11_Canvas.crc2.fill(particle);
            L11_Canvas.crc2.restore();
        }
    }
    L11_Canvas.Particle = Particle;
})(L11_Canvas || (L11_Canvas = {}));
//# sourceMappingURL=Particle.js.map