namespace L11_Canvas {



    export class Particle extends Moveable {

        constructor(_position: Vector) {

            super(_position);

            if (_position)
                this.position = _position;
            else
                this.position = new Vector(0, 0);

            this.velocity = new Vector(0, 0);
            this.velocity.random(100, 100);
        }


       public draw(): void {


        crc2.save();
        let r1: number = 1;
        let r2: number = 7;
        let particle: Path2D = new Path2D();
        let gradient: CanvasGradient = crc2.createRadialGradient(0, 0, r1, 0, 0, r2);
        particle.arc(0, 0, r2, 0, 2 * Math.PI);
        gradient.addColorStop(0, "white");
        gradient.addColorStop(0.6, "red")

        crc2.save();
        crc2.translate(this.position.x, this.position.y);
        crc2.fillStyle = gradient;
        crc2.fill(particle);
        crc2.restore();
        }


    }
}