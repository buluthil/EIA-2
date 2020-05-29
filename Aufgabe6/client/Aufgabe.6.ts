namespace L06_Haushaltshilfe {
    window.addEventListener("load", handleLoad);
    let form: HTMLFormElement;
    let url: string ="https://buluthil.herokuapp.com/";

    async function handleLoad(_event: Event): Promise<void> {
        console.log("Init");

        let response: Response = await fetch("Data.json");
        let offer: string = await response.text();
        let data: Data = JSON.parse(offer);

        generateContent(data);

        form = <HTMLFormElement>document.querySelector("form");
        let submit: HTMLButtonElement = <HTMLButtonElement>document.querySelector("button[type=button]");
        console.log(submit);

        form.addEventListener("change", handleChange);
        submit.addEventListener("click", sendOrder);

        displayOrder();
    }

    async function sendOrder(_event: Event): Promise<void> {
        console.log("Send order");
        let formData: FormData = new FormData(form);
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        await fetch("Aufgabe5.html?" + query.toString());
        alert("Order sent!");
    }

    function handleChange(_event: Event): void {
        displayOrder();
    }

    function displayOrder(): void {
        let price: number = 0;
        let order: HTMLDivElement = <HTMLDivElement>document.querySelector("div#order");
        order.innerHTML = "";

        let formData: FormData = new FormData(form);

        for (let entry of formData) {
            let selector: string = "[value='" + entry[1] + "']";
            let item: HTMLInputElement = <HTMLInputElement>document.querySelector(selector);
            let itemPrice: number = Number(item.getAttribute("price"));
            switch (entry[0]) {
                case "Article":
                    break;
                    order.innerHTML += entry [0] + "<br>" + itemPrice + "<br>";
                   
                default:
                    order.innerHTML += item.value + ": €" + itemPrice.toFixed(2) + "<br>";
            }
            price += itemPrice;
        }

        order.innerHTML += "<p><strong>Total: : €" + price.toFixed(2);
    }


   
    
}