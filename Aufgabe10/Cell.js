"use strict";
var L10_Canvas;
(function (L10_Canvas) {
    class Cell {
        constructor(_position) {
            this.position = _position;
            this.velocity = new L10_Canvas.Vector(0, 0);
        }
        draw() {
            //error default
        }
        move(_timeslice) {
            let offset = new L10_Canvas.Vector(this.velocity.x, this.velocity.y);
            offset.scale(_timeslice);
            this.position.add(offset);
        }
    }
    L10_Canvas.Cell = Cell;
})(L10_Canvas || (L10_Canvas = {}));
//# sourceMappingURL=Cell.js.map