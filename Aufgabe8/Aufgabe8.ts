namespace L08_Canvas {
    interface Vector {
        x: number;
        y: number;
    }
    let crc2: CanvasRenderingContext2D;
    let middle: number = 0.95;
    let width: number = 0.0;
    let height: number;
    
    window.addEventListener("load", handleLoad);
     
    function handleLoad (_event: Event): void {
        let canvas: HTMLCanvasElement = <HTMLCanvasElement> document.querySelector("canvas");
        if (!canvas)
            return;
        crc2 = <CanvasRenderingContext2D>canvas.getContext("2d");
        
        
      drawbackground();
      drawbloodParticles({x: 110, y: 500}, {x: 280, y: 500});
      drawKillerCell({x: 55, y: 400}, {x: 100, y: 110});
      drawAntibody({x: 70, y: 450}, {x: 100, y: 110});
      drawHumanCells({x: 170, y: 300}, {x: 100, y: 110});

    }
    /*Hintergrund mit pattern zeichnen*/ 
    function drawbackground(): void {
        console.log("background");
        let gradient: CanvasGradient = crc2.createLinearGradient(0, 0, 0, crc2.canvas.height);
        gradient.addColorStop(0, "HSL(0, 100%, 70%)"); /*rot wird dünkler*/
        gradient.addColorStop(middle, "white");

        crc2.fillStyle = gradient;
        crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
        
        let pattern: CanvasRenderingContext2D = <CanvasRenderingContext2D>document.createElement("canvas").getContext("2d");
        
        pattern.canvas.width = 40;
        pattern.canvas.height = 20;

        pattern.fillStyle = "#97a0db1a";
        pattern.fillRect(0, 0, pattern.canvas.width, pattern.canvas.height);
        pattern.moveTo(0, 10);
        pattern.lineTo(10, 10);
        pattern.lineTo(20, 0);
        pattern.lineTo(30, 0);
        pattern.lineTo(40, 10);
        pattern.lineTo(30, 20);
        pattern.lineTo(20, 20);
        pattern.lineTo(10, 10);
        pattern.stroke();

        pattern.strokeStyle = "HSL(0, 80%, 60%)";
        pattern.stroke();
        pattern.closePath();

        crc2.fillStyle = <CanvasRenderingContext2D>crc2.createPattern(pattern.canvas, "repeat");
        crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);

    }

      /*Blutstrom */
    function drawbloodParticles(_position: Vector, _size: Vector): void {
        console.log("particles", _position, _size);
        let r1: number = 1; /*inneres */
        let r2: number = 7; /*Größe partikel */
        let nParticles: number = 25;
        let particle: Path2D = new Path2D();
        let gradient: CanvasGradient = crc2.createRadialGradient(0, 0, r1, 0, 0, r2);
        particle.arc(0, 0, r2, 0, 2 * Math.PI);
        gradient.addColorStop(0, "white");
        gradient.addColorStop(0.6, "red");

        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.fillStyle = gradient; 

        for (let drawn: number = 0; drawn < nParticles; drawn++) {
            crc2.save();
            let x: number = (Math.random() - 0.5) * _size.x;
            let y: number = - (Math.random() * _size.y);
            crc2.translate(x, y);
            crc2.fill(particle);
            crc2.restore();
        }
        crc2.restore();

    }


/*Killerzellen Zeichnen */
    function drawKillerCell(_position: Vector, _size: Vector): void {
        console.log("Killerzelle", _position, _size);

        let amount: number = 5;
        let killerCell: Path2D = new Path2D();
       
        crc2.beginPath();
        crc2.arc(100, 100, 20, 0 * Math.PI, 2 * Math.PI);
        crc2.closePath();
        crc2.fillStyle = "purple";
        crc2.strokeStyle = "black";/*äusere rand */
        crc2.font = "20px Georgia";
        crc2.fillText("Killer", 70, 70);   
        crc2.fill();
        crc2.stroke();
        crc2.save();

        for (let i: number = 0; i < amount; i++) {
            crc2.save();
            let x: number = (Math.random() - 0.5) * _size.x;
            let y: number = - (Math.random() * _size.y);
            crc2.translate(x, y);
            crc2.fill(killerCell);
            crc2.restore();

        }
        crc2.restore();


    }

    /*Antikörper*/ 
    function drawAntibody(_position: Vector, _size: Vector):void {
        console.log("Antibody", _position, _size);

        let amountanti: number = 10;
       
        let antibody: Path2D = new Path2D;
        crc2.beginPath();
        crc2.arc(_position.x + 30, _position.y - 18, 12, 0, 2 * Math.PI);
        crc2.strokeStyle = "black";/*äusere rand */
        crc2.stroke();
        crc2.fillStyle = "lightgreen";
        crc2.fill();
        crc2.closePath();
        crc2.save();
        crc2.translate(_position.x, _position.y);

      

        for (let drawn: number = 0; drawn < amountanti; drawn++) {
            crc2.save();
            let x: number = (Math.random() - 0.5) * _size.x;
            let y: number = - (Math.random() * _size.y);
            crc2.translate(x, y);
            crc2.fill(antibody);
            crc2.restore();
           
        }
        crc2.restore();
    }


    /*Menschlichezellen mit Partikeln*/
    function drawHumanCells(_position: Vector, _size: Vector): void {
        console.log("menschlichezellen", _position);
        let r1: number = 0.5; /*inneres */
        let r2: number = 17; /*größe Partikel */
        let nParticles: number = 10;
        let particle: Path2D = new Path2D();
        let gradient: CanvasGradient = crc2.createRadialGradient(0, 0, r1, 0, 0, r2);
        particle.arc(0, 0, r2, 0, 2 * Math.PI);
        gradient.addColorStop(0, "white");/*innere punkt */ 
        gradient.addColorStop(0.8, "blue");/*ganz außen */
    
        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.fillStyle = gradient;
        
        for (let drawn: number = 0; drawn < nParticles; drawn++) {
            crc2.save();
            let x: number = (Math.random() - 0.5) * _size.x;
            let y: number = - (Math.random() * _size.y);
            crc2.translate(x, y);
            crc2.fill(particle);
            crc2.restore();
        }
        crc2.restore();









    }

  

}
