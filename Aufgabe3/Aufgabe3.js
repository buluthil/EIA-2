"use strict";
var L03_CocktailBar;
(function (L03_CocktailBar) {
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
})(L03_CocktailBar || (L03_CocktailBar = {}));
//# sourceMappingURL=Aufgabe3.js.map