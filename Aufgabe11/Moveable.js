"use strict";
var L11_Canvas;
(function (L11_Canvas) {
    class Moveable {
        constructor(_position) {
            if (_position)
                this.position = _position;
            else
                this.position = new L11_Canvas.Vector(0, 0);
            this.velocity = new L11_Canvas.Vector(0, 0);
        }
        draw() {
        }
        move(_timeslice) {
            let offset = new L11_Canvas.Vector(this.velocity.y, 0);
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
    L11_Canvas.Moveable = Moveable;
})(L11_Canvas || (L11_Canvas = {}));
//# sourceMappingURL=Moveable.js.map