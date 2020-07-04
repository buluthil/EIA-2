namespace L11_Canvas {

    export class Virus extends Moveable {

  
        state: string;
        target: Humancell; 



        constructor(_position: Vector) {
            
            super(_position);

            if (_position)
                this.position = _position;
            else
                this.position = new Vector(0, 0);

            this.velocity = new Vector(0, 0);
            this.velocity.random(50, 50);

            
        }


        public draw(): void {
            crc2.restore();
            crc2.save();
            crc2.translate(this.position.x, this.position.y);
            for (let i: number = 0; i < 9; i++) {
                crc2.beginPath();
                crc2.rotate(30);
                crc2.moveTo(0, 10);
                crc2.lineTo(10, 40);
                crc2.lineTo(3, 30);
                crc2.lineTo(0, 40);
                crc2.lineTo(0, 20);
                crc2.strokeStyle = "darkred";
                crc2.lineWidth = 1;
                crc2.fillStyle = "darkred";
                crc2.fill();
                crc2.stroke();
            }
            crc2.beginPath();
            crc2.arc(0, 0, 17, 0, 2 * Math.PI);
            crc2.fillStyle = "grey";
            crc2.fill();
            crc2.closePath();
            crc2.restore();
        
        
        }

       public move(_timeslice: number): void {
            let offset: Vector = new Vector(0, this.velocity.x);
            offset.scale(_timeslice);
            this.position.add(offset);

            if (this.position.x < 0)
                this.position.x += crc2.canvas.width;
            if (this.position.y < 0)
                this.position.y += crc2.canvas.height;
            if (this.position.x > crc2.canvas.width)
                this.position.x -= crc2.canvas.width;

            if (this.position.y > crc2.canvas.height)
                this.position.y -= crc2.canvas.height;

        }
    }






}