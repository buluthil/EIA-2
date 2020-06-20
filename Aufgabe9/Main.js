"use strict";
var L09_Canvas;
(function (L09_Canvas) {
    let middle = 0.95;
    let humanCell = [];
    let particles = [];
    let viren = [];
    window.addEventListener("load", handleLoad);
    function handleLoad(_event) {
        let canvas = document.querySelector("canvas");
        if (!canvas)
            return;
        L09_Canvas.crc2 = canvas.getContext("2d");
        drawBackground();
        drawBloodParticles(new L09_Canvas.Vector(260, 490), 50);
        drawHumanCells(new L09_Canvas.Vector(200, 300), new L09_Canvas.Vector(100, 120), 10, false);
        drawVirus(new L09_Canvas.Vector(120, 300), false, 5);
        setInterval(frame, 100);
    }
    /*Hintergrund mit pattern zeichnen*/
    function drawBackground() {
        console.log("background");
        let gradient = L09_Canvas.crc2.createLinearGradient(0, 0, 0, L09_Canvas.crc2.canvas.height);
        gradient.addColorStop(0, "HSL(0, 100%, 70%)"); /*rot wird dünkler*/
        gradient.addColorStop(middle, "white");
        L09_Canvas.crc2.fillStyle = gradient;
        L09_Canvas.crc2.fillRect(0, 0, L09_Canvas.crc2.canvas.width, L09_Canvas.crc2.canvas.height);
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
        L09_Canvas.crc2.fillStyle = L09_Canvas.crc2.createPattern(pattern.canvas, "repeat");
        L09_Canvas.crc2.fillRect(0, 0, L09_Canvas.crc2.canvas.width, L09_Canvas.crc2.canvas.height);
    }
    /*Menschlichezellen mit Partikeln*/
    function drawHumanCells(_position, _size, _number, _redraw) {
        console.log("menschlicheZelle", _position);
        let r1 = 0.5; /*inneres */
        let r2 = 17; /*größe Partikel */
        let nParticles = 10;
        let particle = new Path2D();
        let gradient = L09_Canvas.crc2.createRadialGradient(0, 0, r1, 0, 0, r2);
        particle.arc(0, 0, r2, 0, 2 * Math.PI);
        gradient.addColorStop(0, "white"); /*innere punkt */
        gradient.addColorStop(0.8, "blue"); /*ganz außen */
        L09_Canvas.crc2.save();
        L09_Canvas.crc2.translate(_position.x, _position.y);
        L09_Canvas.crc2.fillStyle = gradient;
        for (let drawn = 0; drawn < _number; drawn++) {
            L09_Canvas.crc2.save();
            if (_redraw) {
                let cell = humanCell[drawn];
                L09_Canvas.crc2.translate(cell.size.x, cell.size.y);
            }
            else {
                let x = (Math.random() - 0.5) * _size.x;
                let y = -(Math.random() * _size.y);
                L09_Canvas.crc2.translate(x, y);
                humanCell.push(new L09_Canvas.Humancell(_position, new L09_Canvas.Vector(x, y)));
            }
            L09_Canvas.crc2.fill(particle);
            L09_Canvas.crc2.restore();
        }
        L09_Canvas.crc2.restore();
    }
    function createVirus(_position) {
        console.log("Virus", _position);
        L09_Canvas.crc2.restore();
        L09_Canvas.crc2.save();
        L09_Canvas.crc2.translate(_position.x, _position.y);
        for (let i = 0; i < 9; i++) {
            L09_Canvas.crc2.beginPath();
            L09_Canvas.crc2.rotate(30);
            L09_Canvas.crc2.moveTo(0, 10);
            L09_Canvas.crc2.lineTo(10, 40);
            L09_Canvas.crc2.lineTo(3, 30);
            L09_Canvas.crc2.lineTo(0, 40);
            L09_Canvas.crc2.lineTo(0, 20);
            L09_Canvas.crc2.strokeStyle = "darkred";
            L09_Canvas.crc2.lineWidth = 1;
            L09_Canvas.crc2.fillStyle = "darkred";
            L09_Canvas.crc2.fill();
            L09_Canvas.crc2.stroke();
        }
        L09_Canvas.crc2.beginPath();
        L09_Canvas.crc2.arc(0, 0, 17, 0, 2 * Math.PI);
        L09_Canvas.crc2.fillStyle = "grey";
        L09_Canvas.crc2.fill();
        L09_Canvas.crc2.closePath();
        L09_Canvas.crc2.restore();
    }
    function drawVirus(_size, _redraw, _number) {
        for (let drawn = 0; drawn < _number; drawn++) {
            L09_Canvas.crc2.save();
            let x;
            let y;
            if (_redraw) {
                let cell = viren[drawn];
                x = cell.size.x;
                y = cell.size.y;
            }
            else {
                x = (Math.random() + 0.5) * _size.x;
                y = -((Math.random() - 2) * _size.y);
                viren.push(new L09_Canvas.Humancell(new L09_Canvas.Vector(0, 0), new L09_Canvas.Vector(x, y)));
            }
            L09_Canvas.crc2.translate(x, y);
            createVirus(new L09_Canvas.Vector(x, y));
            L09_Canvas.crc2.restore();
        }
        L09_Canvas.crc2.restore();
    }
    function frame() {
        refresh();
        for (let i = 0; i < particles.length; i++) {
            particles[i].move(1 / 50);
        }
        drawParticles();
    }
    function drawBloodParticles(_position, _n) {
        for (let i = 0; i < _n; i++) {
            let x = (Math.random() - 0.5) * _position.x;
            let y = -(Math.random() * _position.y);
            particles.push(new L09_Canvas.Particle(new L09_Canvas.Vector(x, y)));
        }
    }
    function drawParticles() {
        for (let i = 0; i < particles.length; i++) {
            particles[i].draw();
        }
    }
    function refresh() {
        drawBackground();
        drawHumanCells(new L09_Canvas.Vector(200, 300), new L09_Canvas.Vector(100, 120), humanCell.length, true);
        drawVirus(new L09_Canvas.Vector(120, 300), true, 5);
    }
})(L09_Canvas || (L09_Canvas = {}));
//# sourceMappingURL=Main.js.map