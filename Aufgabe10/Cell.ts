namespace L10_Canvas {
    export class Cell {
        position: Vector;
        velocity: Vector;

        constructor(_position: Vector) {
            this.position = _position;
            this.velocity = new Vector(0, 0);
        }

        draw(): void {
          //error default
        }

        move(_timeslice: number): void {
            let offset: Vector = new Vector(this.velocity.x, this.velocity.y);
            offset.scale(_timeslice);
            this.position.add(offset);
        }
    }
}