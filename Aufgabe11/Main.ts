namespace L11_Canvas {

    let humCell: Humancell[] = [];
    let moveableObjects: Moveable[] = [];
    let middle: number = 0.95;
    let backgroundImage: ImageData;
    export let crc2: CanvasRenderingContext2D;
    export let canvas: HTMLCanvasElement = <HTMLCanvasElement>document.querySelector("canvas");

    window.addEventListener("load", handleLoad);




    function handleLoad(_event: Event): void {
        let canvas: HTMLCanvasElement | null = document.querySelector("canvas");
        if (!canvas)
            return;
        crc2 = <CanvasRenderingContext2D>canvas.getContext("2d");
       


        drawBackground();
        drawKillerCell();
        drawAntiBody();
        drawParticle(20);
        drawHumanCell(2);
        drawVirus(13);

        window.setInterval(update, 20);

    }




    function drawBackground(): void {

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


    function drawKillerCell(): void {
   
            let radiusK: number = 13;
       
            crc2.beginPath();
            crc2.arc(50, 80, radiusK, 0 * Math.PI, 2 * Math.PI,);
            crc2.closePath();
            crc2.fillStyle = "purple";
            crc2.strokeStyle = "white";
            crc2.fill();
            crc2.stroke();
            crc2.save();

    }


    function drawAntiBody(): void {

      

          crc2.beginPath();
          crc2.arc(70, 300, 12, 0, 2 * Math.PI);
          crc2.fillStyle = "darkblue";
          crc2.fill();
          crc2.stroke();
          crc2.closePath();
          backgroundImage = crc2.getImageData(0, 0, crc2.canvas.width, crc2.canvas.height);
         

    }



    function drawParticle(_nParticle: number): void {
        for (let drawn: number = 0; drawn < _nParticle; drawn++) {

            let positionX: number = Math.random() * crc2.canvas.height; 
            let positionY: number = Math.random() * crc2.canvas.width; 
            let position: Vector = new Vector(positionX, positionY); 
            let moveableObject: Particle = new Particle(position); 
            moveableObject.draw();
            moveableObjects.push(moveableObject);
        }
    }


    function drawHumanCell(_nCell: number): void {

        for (let drawn: number = 0; drawn < _nCell; drawn++) {

            let positionX: number;
            let positionY: number;

            if (drawn == 1) {

                positionX = 1030;
                positionY = 150;
            }

            else

            positionX = 1100;
            positionY = 175;

            let positionCell: Vector = new Vector(positionX, positionY); 
            let cell: Humancell = new Humancell(positionCell); 
            cell.draw();
            humCell.push(cell);
        }

    }

    function drawVirus(_nVirus: number): void {

        for (let drawn: number = 0; drawn < _nVirus; drawn++) {

            let positionX: number = Math.random() * crc2.canvas.height; 
            let positionY: number = Math.random() * crc2.canvas.width; 
            let positionVirus: Vector = new Vector(positionX, positionY); 
            let moveableObjekt: Virus = new Virus(positionVirus); 
            moveableObjekt.draw();
            moveableObjects.push(moveableObjekt);
        }

    }



    function update(): void {

        crc2.putImageData(backgroundImage, 0, 0);


        for (let moveableObject of moveableObjects) {
            moveableObject.move(1 / 30);
            moveableObject.draw();
        }


        for (let cell of humCell) {
            cell.draw();
        }

    }










}