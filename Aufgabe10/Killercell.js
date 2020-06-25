"use strict";
var L10_Canvas;
(function (L10_Canvas) {
    class Killercell extends L10_Canvas.Cell {
        constructor(_position) {
            super(_position);
            this.velocity = new L10_Canvas.Vector(0, 0);
            this.velocity.random(10, 100);
        }
        draw() {
            let radiusK = 13;
            L10_Canvas.crc2.beginPath();
            L10_Canvas.crc2.arc(this.position.x + 20, this.position.y + 20, radiusK, 0 * Math.PI, 2 * Math.PI, false);
            L10_Canvas.crc2.closePath();
            L10_Canvas.crc2.fillStyle = "purple";
            L10_Canvas.crc2.strokeStyle = "white";
            L10_Canvas.crc2.fill();
            L10_Canvas.crc2.stroke();
            L10_Canvas.crc2.save();
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
    L10_Canvas.Killercell = Killercell;
})(L10_Canvas || (L10_Canvas = {}));
//# sourceMappingURL=Killercell.js.map