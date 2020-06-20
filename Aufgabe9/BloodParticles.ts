namespace L09_Canvas {
    export class Particle { 
     position: Vector;
     velocity: Vector;
     radius: number;
     color: string;
 
     constructor(_position: Vector) {
         
         this.position = _position;
 
         let colors: string[] = ["0, white", "0.6, red"];    
         let numColors: number = colors.length;
         let color: string;
         let ColorIndex: number;
         ColorIndex = Math.round(Math.random() * (numColors - 1));
 
         color = colors[ColorIndex];
         this.color = color; 
 
            
         let maxRadius: number = 3;
         let minRadius: number = 1;
         this.radius = minRadius + (Math.random() * (maxRadius - minRadius));
 
         this.velocity = new Vector(0, 0);
         this.velocity.random(10, 100);
     }
     draw(): void {
         console.log("BloodParticles");
         crc2.save(); 
         let r1: number = 1;
         let r2: number = 7;
         let particle: Path2D = new Path2D();
         let gradient: CanvasGradient = crc2.createRadialGradient(0, 0, r1, 0, 0, r2);
         particle.arc(0, 0, r2, 0, 2 * Math.PI);
         gradient.addColorStop(0, "white");
         gradient.addColorStop(0.6, "red");
         
         crc2.save();
         crc2.translate(this.position.x, this.position.y);
         crc2.fillStyle = gradient;
         crc2.fill(particle);
         crc2.restore();    
          
     }
 
     move(_timeslice: number): void {
         console.log("move");
         let offset: Vector = new Vector(this.velocity.x, this.velocity.y);
         offset.x *= 0;
         offset.y *= _timeslice * 2;
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