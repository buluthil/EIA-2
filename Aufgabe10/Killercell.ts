namespace L10_Canvas{
    export class Killercell extends Cell {
        
        constructor(_position: Vector) {
            super(_position);
    
            this.velocity = new Vector(0, 0);
            this.velocity.random(10, 100);
            
        }
        draw(): void {
            let radiusK: number = 13;
       
            crc2.beginPath();
            crc2.arc(this.position.x + 20, this.position.y + 20, radiusK, 0 * Math.PI, 2 * Math.PI, false);
            crc2.closePath();
            crc2.fillStyle = "purple";
            crc2.strokeStyle = "white";
            crc2.fill();
            crc2.stroke();
            crc2.save();
        }

        move(_timeslice: number): void {
            super.move(_timeslice);
    
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