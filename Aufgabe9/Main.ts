namespace L09_Canvas {
   
    export let crc2: CanvasRenderingContext2D;
    let middle: number = 0.95;
    export let canvas: HTMLCanvasElement;
    

    

    let humanCell: Humancell[] = [];
    let particles: Particle[] = [];
    
    let viren: Humancell[] = [];
    

    window.addEventListener("load", handleLoad);
    
    
    function handleLoad (_event: Event): void {
        let canvas: HTMLCanvasElement = <HTMLCanvasElement> document.querySelector("canvas");
        if (!canvas)
            return;
        crc2 = <CanvasRenderingContext2D>canvas.getContext("2d");
        
        drawBackground();
        
        drawBloodParticles( new Vector( 260, 490), 50);
        
        drawHumanCells(new Vector (200, 300), new Vector(100, 120), 10, false);
       
        drawVirus(new Vector(120, 300), false, 5);
     
        setInterval(frame, 100);
        
        



    }
   /*Hintergrund mit pattern zeichnen*/ 
   function drawBackground(): void {
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

   /*Menschlichezellen mit Partikeln*/
    function drawHumanCells(_position: Vector, _size: Vector, _number: number, _redraw: boolean): void {
        console.log("menschlicheZelle", _position);
        let r1: number = 0.5;/*inneres */
        let r2: number = 17;/*größe Partikel */
        let nParticles: number = 10;
        let particle: Path2D = new Path2D();
        let gradient: CanvasGradient = crc2.createRadialGradient(0, 0, r1, 0, 0, r2);
        particle.arc(0, 0, r2, 0, 2 * Math.PI);
        gradient.addColorStop(0, "white");/*innere punkt */ 
        gradient.addColorStop(0.8, "blue");/*ganz außen */
        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.fillStyle = gradient;
        

        for (let drawn: number = 0; drawn < _number; drawn++) {
            crc2.save();
            if (_redraw) {
                let cell: any = humanCell[drawn];
                crc2.translate(cell.size.x, cell.size.y);
            }
            else {
                let x: number = (Math.random() - 0.5) * _size.x;
                let y: number = -(Math.random() * _size.y);
                crc2.translate(x, y);
                humanCell.push(new Humancell(_position, new Vector(x, y)));
            }
            crc2.fill(particle);
            crc2.restore();
        }
        crc2.restore();

    }

    
    function createVirus(_position: Vector): void {
        console.log("Virus", _position);
        crc2.restore();
        crc2.save();
        crc2.translate(_position.x, _position.y);
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
    function drawVirus(_size: Vector, _redraw: boolean, _number: number): void {
        
        for (let drawn: number = 0; drawn < _number; drawn++) {
            crc2.save();
            let x: number;
            let y: number;
            if (_redraw) {
                let cell: any = viren[drawn];
                x = cell.size.x;
                y = cell.size.y;

            }
            else {
             x = (Math.random() + 0.5) * _size.x;
             y = -((Math.random() - 2) * _size.y);
             viren.push(new Humancell(new Vector(0, 0), new Vector(x, y)));

            }
            
            crc2.translate(x, y);
            createVirus( new Vector(x, y));
            crc2.restore();
        }
        crc2.restore();
    }
    
    
    function frame(): void {
        refresh();
        for (let i: number = 0; i < particles.length; i++) {
            particles[i].move(1 / 50);
        }
        drawParticles();
    }
    function drawBloodParticles(_position: Vector, _n: number): void {
        for (let i: number = 0; i < _n; i++){
            let x: number = (Math.random() - 0.5) * _position.x;
            let y: number = -(Math.random() * _position.y);
            particles.push(new Particle( new Vector(x, y)));
        }
    }
    function drawParticles(): void {
        for (let i: number = 0; i < particles.length; i++) {
           particles[i].draw();
        }
    }
    function refresh(): void {
        drawBackground();
        drawHumanCells(new Vector(200, 300), new Vector(100, 120), humanCell.length, true);
        drawVirus(new Vector(120, 300), true, 5);
    }
       

    }


