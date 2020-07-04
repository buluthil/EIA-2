"use strict";
var L11_Canvas;
(function (L11_Canvas) {
    class Humancell {
        constructor(_position) {
            if (_position)
                this.position = _position;
            else
                this.position = new L11_Canvas.Vector(0, 0);
        }
        draw() {
            let r1 = 0.5;
            let r2 = 30;
            let gradient = L11_Canvas.crc2.createRadialGradient(0, 0, r1, 0, 0, r2);
            gradient.addColorStop(0, "white"); /*innere punkt */
            gradient.addColorStop(0.8, "blue"); /*ganz außen */
            L11_Canvas.crc2.save();
            L11_Canvas.crc2.translate(this.position.x, this.position.y);
            L11_Canvas.crc2.fillStyle = gradient;
            L11_Canvas.crc2.beginPath();
            L11_Canvas.crc2.arc(0, 0, r2, 0, 2 * Math.PI);
            L11_Canvas.crc2.closePath();
            L11_Canvas.crc2.fill();
            L11_Canvas.crc2.restore();
        }
    }
    L11_Canvas.Humancell = Humancell;
})(L11_Canvas || (L11_Canvas = {}));
//# sourceMappingURL=Humancell.js.map