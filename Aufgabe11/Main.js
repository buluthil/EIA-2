"use strict";
var L11_Canvas;
(function (L11_Canvas) {
    let humCell = [];
    let moveableObjects = [];
    let middle = 0.95;
    let backgroundImage;
    L11_Canvas.canvas = document.querySelector("canvas");
    window.addEventListener("load", handleLoad);
    function handleLoad(_event) {
        let canvas = document.querySelector("canvas");
        if (!canvas)
            return;
        L11_Canvas.crc2 = canvas.getContext("2d");
        drawBackground();
        drawKillerCell();
        drawAntiBody();
        drawParticle(20);
        drawHumanCell(2);
        drawVirus(13);
        window.setInterval(update, 20);
    }
    function drawBackground() {
        let gradient = L11_Canvas.crc2.createLinearGradient(0, 0, 0, L11_Canvas.crc2.canvas.height);
        gradient.addColorStop(0, "HSL(0, 100%, 70%)"); /*rot wird dünkler*/
        gradient.addColorStop(middle, "white");
        L11_Canvas.crc2.fillStyle = gradient;
        L11_Canvas.crc2.fillRect(0, 0, L11_Canvas.crc2.canvas.width, L11_Canvas.crc2.canvas.height);
        let pattern = document.createElement("canvas").getContext("2d");
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
        L11_Canvas.crc2.fillStyle = L11_Canvas.crc2.createPattern(pattern.canvas, "repeat");
        L11_Canvas.crc2.fillRect(0, 0, L11_Canvas.crc2.canvas.width, L11_Canvas.crc2.canvas.height);
    }
    function drawKillerCell() {
        let radiusK = 13;
        L11_Canvas.crc2.beginPath();
        L11_Canvas.crc2.arc(50, 80, radiusK, 0 * Math.PI, 2 * Math.PI);
        L11_Canvas.crc2.closePath();
        L11_Canvas.crc2.fillStyle = "purple";
        L11_Canvas.crc2.strokeStyle = "white";
        L11_Canvas.crc2.fill();
        L11_Canvas.crc2.stroke();
        L11_Canvas.crc2.save();
    }
    function drawAntiBody() {
        L11_Canvas.crc2.beginPath();
        L11_Canvas.crc2.arc(70, 300, 12, 0, 2 * Math.PI);
        L11_Canvas.crc2.fillStyle = "darkblue";
        L11_Canvas.crc2.fill();
        L11_Canvas.crc2.stroke();
        L11_Canvas.crc2.closePath();
        backgroundImage = L11_Canvas.crc2.getImageData(0, 0, L11_Canvas.crc2.canvas.width, L11_Canvas.crc2.canvas.height);
    }
    function drawParticle(_nParticle) {
        for (let drawn = 0; drawn < _nParticle; drawn++) {
            let positionX = Math.random() * L11_Canvas.crc2.canvas.height;
            let positionY = Math.random() * L11_Canvas.crc2.canvas.width;
            let position = new L11_Canvas.Vector(positionX, positionY);
            let moveableObject = new L11_Canvas.Particle(position);
            moveableObject.draw();
            moveableObjects.push(moveableObject);
        }
    }
    function drawHumanCell(_nCell) {
        for (let drawn = 0; drawn < _nCell; drawn++) {
            let positionX;
            let positionY;
            if (drawn == 1) {
                positionX = 1030;
                positionY = 150;
            }
            else
                positionX = 1100;
            positionY = 175;
            let positionCell = new L11_Canvas.Vector(positionX, positionY);
            let cell = new L11_Canvas.Humancell(positionCell);
            cell.draw();
            humCell.push(cell);
        }
    }
    function drawVirus(_nVirus) {
        for (let drawn = 0; drawn < _nVirus; drawn++) {
            let positionX = Math.random() * L11_Canvas.crc2.canvas.height;
            let positionY = Math.random() * L11_Canvas.crc2.canvas.width;
            let positionVirus = new L11_Canvas.Vector(positionX, positionY);
            let moveableObjekt = new L11_Canvas.Virus(positionVirus);
            moveableObjekt.draw();
            moveableObjects.push(moveableObjekt);
        }
    }
    function update() {
        L11_Canvas.crc2.putImageData(backgroundImage, 0, 0);
        for (let moveableObject of moveableObjects) {
            moveableObject.move(1 / 30);
            moveableObject.draw();
        }
        for (let cell of humCell) {
            cell.draw();
        }
    }
})(L11_Canvas || (L11_Canvas = {}));
//# sourceMappingURL=Main.js.map