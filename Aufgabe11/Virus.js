"use strict";
var L11_Canvas;
(function (L11_Canvas) {
    class Virus extends L11_Canvas.Moveable {
        constructor(_position) {
            super(_position);
            if (_position)
                this.position = _position;
            else
                this.position = new L11_Canvas.Vector(0, 0);
            this.velocity = new L11_Canvas.Vector(0, 0);
            this.velocity.random(50, 50);
        }
        draw() {
            L11_Canvas.crc2.restore();
            L11_Canvas.crc2.save();
            L11_Canvas.crc2.translate(this.position.x, this.position.y);
            for (let i = 0; i < 9; i++) {
                L11_Canvas.crc2.beginPath();
                L11_Canvas.crc2.rotate(30);
                L11_Canvas.crc2.moveTo(0, 10);
                L11_Canvas.crc2.lineTo(10, 40);
                L11_Canvas.crc2.lineTo(3, 30);
                L11_Canvas.crc2.lineTo(0, 40);
                L11_Canvas.crc2.lineTo(0, 20);
                L11_Canvas.crc2.strokeStyle = "darkred";
                L11_Canvas.crc2.lineWidth = 1;
                L11_Canvas.crc2.fillStyle = "darkred";
                L11_Canvas.crc2.fill();
                L11_Canvas.crc2.stroke();
            }
            L11_Canvas.crc2.beginPath();
            L11_Canvas.crc2.arc(0, 0, 17, 0, 2 * Math.PI);
            L11_Canvas.crc2.fillStyle = "grey";
            L11_Canvas.crc2.fill();
            L11_Canvas.crc2.closePath();
            L11_Canvas.crc2.restore();
        }
        move(_timeslice) {
            let offset = new L11_Canvas.Vector(0, this.velocity.x);
            offset.scale(_timeslice);
            this.position.add(offset);
            if (this.position.x < 0)
                this.position.x += L11_Canvas.crc2.canvas.width;
            if (this.position.y < 0)
                this.position.y += L11_Canvas.crc2.canvas.height;
            if (this.position.x > L11_Canvas.crc2.canvas.width)
                this.position.x -= L11_Canvas.crc2.canvas.width;
            if (this.position.y > L11_Canvas.crc2.canvas.height)
                this.position.y -= L11_Canvas.crc2.canvas.height;
        }
    }
    L11_Canvas.Virus = Virus;
})(L11_Canvas || (L11_Canvas = {}));
//# sourceMappingURL=Virus.js.map