"use strict";
var L03_Hauhaltshilfe;
(function (L03_Hauhaltshilfe) {
    window.addEventListener("load", handleLoad);
    function handleLoad(_event) {
        console.log("start");
        let form = document.querySelector("div#form");
        let slider = document.querySelector("input#amount");
        form.addEventListener("change", handleChange);
        slider.addEventListener("input", displayAmount);
        function handleChange(_event) {
            console.log(_event);
        }
        function displayAmount(_event) {
            let progress = document.querySelector("progress");
            let amount = _event.target.value;
            progress.value = parseFloat(amount);
        }
    }
})(L03_Hauhaltshilfe || (L03_Hauhaltshilfe = {}));
//# sourceMappingURL=Aufgabe3.js.map