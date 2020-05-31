"use strict";
var L06_Haushaltshilfe;
(function (L06_Haushaltshilfe) {
    window.addEventListener("load", handleLoad);
    let form;
    let url = "https://buluthil.herokuapp.com/";
    async function handleLoad(_event) {
        console.log("Init");
        let response = await fetch("Data.json");
        let offer = await response.text();
        let data = JSON.parse(offer);
        L06_Haushaltshilfe.generateContent(data);
        form = document.querySelector("form");
        let submit = document.querySelector("button[type=button]");
        console.log(submit);
        form.addEventListener("change", handleChange);
        submit.addEventListener("click", sendOrder);
        displayOrder();
    }
    async function sendOrder(_event) {
        console.log("Send order");
        let formData = new FormData(form);
        let query = new URLSearchParams(formData);
        let response = await fetch(url + "?" + query.toString());
        let responseText = await response.text();
        alert("Ihre Bestellung wurde entgegengenommen" + responseText);
    }
    function handleChange(_event) {
        displayOrder();
    }
    function displayOrder() {
        let price = 0;
        let order = document.querySelector("div#order");
        order.innerHTML = "";
        let formData = new FormData(form);
        for (let entry of formData) {
            let selector = "[value='" + entry[1] + "']";
            let item = document.querySelector(selector);
            let itemPrice = Number(item.getAttribute("price"));
            switch (entry[0]) {
                case "Article":
                    break;
                    order.innerHTML += entry[0] + "<br>" + itemPrice + "<br>";
                default:
                    order.innerHTML += item.value + ": €" + itemPrice.toFixed(2) + "<br>";
            }
            price += itemPrice;
        }
        order.innerHTML += "<p><strong>Total: : €" + price.toFixed(2);
    }
})(L06_Haushaltshilfe || (L06_Haushaltshilfe = {}));
//# sourceMappingURL=Aufgabe.6.js.map