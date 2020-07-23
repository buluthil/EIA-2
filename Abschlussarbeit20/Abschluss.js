"use strict";
window.addEventListener("load", start);
let canvas = document.querySelector("#canvas");
let crc2 = canvas.getContext("2d");
let malen = false;
let pensilThickness = 10;
canvas.width = window.innerWidth;
canvas.height = window.innerHeight / 2;
crc2.strokeStyle = "Black";
function start(_event) {
    canvas.addEventListener("mousedown", startDrawing);
    canvas.addEventListener("mousemove", zeichnen);
    canvas.addEventListener("mouseup", stopDrawing);
    let canvassize = document.querySelector("select#canvasSize");
    canvassize.addEventListener("change", canvasSize);
    let pensilcolor = document.querySelector("select#pensilColor");
    pensilcolor.addEventListener("change", pensilColor);
    let backgroundcolor = document.querySelector("select#backgroundColor");
    backgroundcolor.addEventListener("change", backgroundColor);
    let clearcanvasbutton = document.querySelector("button#clearCanvas");
    clearcanvasbutton.addEventListener("click", clearCanvas);
    let savecanvasbutton = document.querySelector("button#savePicture");
    savecanvasbutton.addEventListener("click", savePicture);
    let circle = document.querySelector("button#drawCircle");
    circle.addEventListener("click", drawCircle);
    let triangle = document.querySelector("button#drawTriangle");
    triangle.addEventListener("click", drawTriangle);
    let heart = document.querySelector("button#drawHeart");
    heart.addEventListener("click", drawHeart);
    let rectangle = document.querySelector("button#drawRectangle");
    rectangle.addEventListener("click", drawRectangle);
    let pensilthickness = document.querySelector("input#pensilThickness");
    pensilthickness.addEventListener("input", changeThickness);
    username();
}
function changeThickness(_event) {
    let slider = document.getElementById("pensilThickness");
    pensilThickness = parseFloat(slider.value);
    crc2.lineWidth = pensilThickness;
    return pensilThickness;
}
//Symbole
//Kreis
function drawCircle(_event) {
    let x = canvas.width / 2; // hier die bildschrim größe durch 2 teilen um die mitte des canvas zu erreichen
    let y = canvas.height / 2;
    let radius = 70;
    crc2.beginPath();
    crc2.arc(x, y, radius, 0, Math.PI * 2, false);
    crc2.stroke();
    crc2.beginPath();
}
//Dreieck
function drawTriangle(_event) {
    crc2.beginPath();
    crc2.moveTo(100, 70);
    crc2.lineTo(200, 75);
    crc2.lineTo(200, 25);
    crc2.closePath();
    crc2.stroke(); // nochmals beginPath oder nicht ? save ? closePath?
}
//Herz
function drawHeart(_event) {
    crc2.beginPath();
    crc2.bezierCurveTo(75, 37, 70, 25, 50, 25);
    crc2.bezierCurveTo(20, 25, 20, 62.5, 20, 62.5);
    crc2.bezierCurveTo(20, 80, 40, 102, 75, 120);
    crc2.bezierCurveTo(110, 102, 130, 80, 130, 62.5);
    crc2.bezierCurveTo(130, 62.5, 130, 25, 100, 25);
    crc2.bezierCurveTo(85, 25, 75, 37, 75, 40);
    crc2.stroke();
    crc2.closePath(); // nochmals beginPath oder nicht ?
}
// Rechteck
function drawRectangle(_event) {
    crc2.beginPath();
    crc2.strokeRect(90, 90, 120, 120); // x,y,breite,höhe // mit fillrect ein gefülltes rechteck, mit clearrechteck das gefüllte bissle löschen je nach parameter
    crc2.stroke(); //closePath? save?
}
function backgroundColor() {
    let backgroundcolor = document.querySelector("select#backgroundColor");
    canvas.style.background = backgroundcolor.value;
}
function username() {
    let user = prompt("Please enter your username:", "Username");
    if (user == null) {
        user = "User";
        document.getElementById("username1").innerHTML = "Zauberbild " + user; //Warum ist document null? der ! operator sagt dem Compiler, dass ein spezifisch element nicht null ist. siehe https://stackoverflow.com/questions/38874928/operator-in-typescript-after-object-method
        document.getElementById("username2").innerHTML = "Welcome " + user + " !";
    }
    else {
        document.getElementById("username1").innerHTML =
            "Zauberbild " + user;
        document.getElementById("username2").innerHTML =
            "Welcome " + user + " !";
    }
}
function pensilColor(_event) {
    let pensilcolor = document.querySelector("select#pensilColor");
    crc2.strokeStyle = pensilcolor.value;
    return crc2.strokeStyle; // Color changes back to black after changing canvas size
}
function startDrawing(_event) {
    malen = true;
    zeichnen(_event);
}
function stopDrawing() {
    malen = false;
    crc2.beginPath();
}
function zeichnen(_event) {
    if (malen == false) {
        console.log("Nicht am Zeichnen");
    }
    else {
        let spacingY = _event.offsetY; // Korrektur Mausposition statt clientX/Y nehme offsetX/Y
        let spacingX = _event.offsetX;
        crc2.lineWidth = pensilThickness;
        crc2.lineCap = "round";
        crc2.lineTo(spacingX, spacingY);
        crc2.stroke();
        crc2.beginPath();
        crc2.moveTo(spacingX, spacingY);
    }
}
function clearCanvas() {
    let confirmation = confirm("Do you really want to delete your picture?");
    if (confirmation == true) {
        crc2.clearRect(0, 0, canvas.width, canvas.height);
    }
    else {
        alert("Your picture hasn't been deleted");
    }
}
function canvasSize() {
    let canvassize = document.querySelector("select#canvasSize");
    switch (canvassize.value) {
        case ("small"):
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight / 3;
            crc2.strokeStyle;
            break;
        case ("medium"):
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight / 2;
            crc2.strokeStyle;
            break;
        case ("large"):
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight / 1.5;
            crc2.strokeStyle;
            break;
    }
    return canvas.height;
}
function savePicture() {
    let confirmation = confirm("Do you really want to save your picture?");
    if (confirmation == true) {
        alert("Your picture has been saved");
    }
    else {
        alert("Your picture hasn't been saved");
    }
}
//# sourceMappingURL=Abschluss.js.map