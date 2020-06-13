"use strict";
var L08_Canvas;
(function (L08_Canvas) {
    let crc2;
    let middle = 0.95;
    let width = 0.0;
    let height;
    window.addEventListener("load", handleLoad);
    function handleLoad(_event) {
        let canvas = document.querySelector("canvas");
        if (!canvas)
            return;
        crc2 = canvas.getContext("2d");
        drawbackground();
        drawbloodParticles({ x: 110, y: 500 }, { x: 280, y: 500 });
        drawKillerCell({ x: 55, y: 400 }, { x: 100, y: 110 });
        drawAntibody({ x: 70, y: 450 }, { x: 100, y: 110 });
        drawHumanCells({ x: 170, y: 300 }, { x: 100, y: 110 });
    }
    /*Hintergrund mit pattern zeichnen*/
    function drawbackground() {
        console.log("background");
        let gradient = crc2.createLinearGradient(0, 0, 0, crc2.canvas.height);
        gradient.addColorStop(0, "HSL(0, 100%, 70%)"); /*rot wird dünkler*/
        gradient.addColorStop(middle, "white");
        crc2.fillStyle = gradient;
        crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
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
        crc2.fillStyle = crc2.createPattern(pattern.canvas, "repeat");
        crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
    }
    /*Blutstrom */
    function drawbloodParticles(_position, _size) {
        console.log("particles", _position, _size);
        let r1 = 1; /*inneres */
        let r2 = 7; /*Größe partikel */
        let nParticles = 25;
        let particle = new Path2D();
        let gradient = crc2.createRadialGradient(0, 0, r1, 0, 0, r2);
        particle.arc(0, 0, r2, 0, 2 * Math.PI);
        gradient.addColorStop(0, "white");
        gradient.addColorStop(0.6, "red");
        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.fillStyle = gradient;
        for (let drawn = 0; drawn < nParticles; drawn++) {
            crc2.save();
            let x = (Math.random() - 0.5) * _size.x;
            let y = -(Math.random() * _size.y);
            crc2.translate(x, y);
            crc2.fill(particle);
            crc2.restore();
        }
        crc2.restore();
    }
    /*Killerzellen Zeichnen */
    function drawKillerCell(_position, _size) {
        console.log("Killerzelle", _position, _size);
        let amount = 5;
        let killerCell = new Path2D();
        crc2.beginPath();
        crc2.arc(100, 100, 20, 0 * Math.PI, 2 * Math.PI);
        crc2.closePath();
        crc2.fillStyle = "purple";
        crc2.strokeStyle = "black"; /*äusere rand */
        crc2.font = "20px Georgia";
        crc2.fillText("Killer", 70, 70);
        crc2.fill();
        crc2.stroke();
        crc2.save();
        for (let i = 0; i < amount; i++) {
            crc2.save();
            let x = (Math.random() - 0.5) * _size.x;
            let y = -(Math.random() * _size.y);
            crc2.translate(x, y);
            crc2.fill(killerCell);
            crc2.restore();
        }
        crc2.restore();
    }
    /*Antikörper*/
    function drawAntibody(_position, _size) {
        console.log("Antibody", _position, _size);
        let amountanti = 10;
        let antibody = new Path2D;
        crc2.beginPath();
        crc2.arc(_position.x + 30, _position.y - 18, 12, 0, 2 * Math.PI);
        crc2.strokeStyle = "black"; /*äusere rand */
        crc2.stroke();
        crc2.fillStyle = "lightgreen";
        crc2.fill();
        crc2.closePath();
        crc2.save();
        crc2.translate(_position.x, _position.y);
        for (let drawn = 0; drawn < amountanti; drawn++) {
            crc2.save();
            let x = (Math.random() - 0.5) * _size.x;
            let y = -(Math.random() * _size.y);
            crc2.translate(x, y);
            crc2.fill(antibody);
            crc2.restore();
        }
        crc2.restore();
    }
    /*Menschlichezellen mit Partikeln*/
    function drawHumanCells(_position, _size) {
        console.log("menschlichezellen", _position);
        let r1 = 0.5; /*inneres */
        let r2 = 17; /*größe Partikel */
        let nParticles = 10;
        let particle = new Path2D();
        let gradient = crc2.createRadialGradient(0, 0, r1, 0, 0, r2);
        particle.arc(0, 0, r2, 0, 2 * Math.PI);
        gradient.addColorStop(0, "white"); /*innere punkt */
        gradient.addColorStop(0.8, "blue"); /*ganz außen */
        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.fillStyle = gradient;
        for (let drawn = 0; drawn < nParticles; drawn++) {
            crc2.save();
            let x = (Math.random() - 0.5) * _size.x;
            let y = -(Math.random() * _size.y);
            crc2.translate(x, y);
            crc2.fill(particle);
            crc2.restore();
        }
        crc2.restore();
    }
})(L08_Canvas || (L08_Canvas = {}));
//# sourceMappingURL=Aufgabe8.js.map