"use strict";
var L10_Canvas;
(function (L10_Canvas) {
    class Antibody extends L10_Canvas.Cell {
        constructor(_position) {
            super(_position);
            this.velocity = new L10_Canvas.Vector(0, 0);
            this.velocity.random(10, 100);
        }
        draw() {
            L10_Canvas.crc2.beginPath();
            L10_Canvas.crc2.moveTo(this.position.x, this.position.y);
            L10_Canvas.crc2.lineTo(this.position.x + 22, this.position.y - 12);
            L10_Canvas.crc2.lineWidth = 3;
            L10_Canvas.crc2.strokeStyle = "darkblue";
            L10_Canvas.crc2.stroke();
            L10_Canvas.crc2.closePath();
            L10_Canvas.crc2.beginPath();
            L10_Canvas.crc2.arc(this.position.x + 31, this.position.y - 18, 12, 0, 2 * Math.PI);
            L10_Canvas.crc2.fillStyle = "darkblue";
            L10_Canvas.crc2.fill();
            L10_Canvas.crc2.stroke();
            L10_Canvas.crc2.closePath();
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
    L10_Canvas.Antibody = Antibody;
})(L10_Canvas || (L10_Canvas = {}));
//# sourceMappingURL=Antibody.js.map