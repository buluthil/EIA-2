namespace L04_Haushaltshilfe {
    window.addEventListener("load", handleLoad);

    function handleLoad(_event: Event): void {
        console.log("Init");

        generateContent(data);

        let form: HTMLDivElement = <HTMLDivElement>document.querySelector("div#form");
        

        form.addEventListener("change", handleChange);
       

        displayOrder();
    }

    function handleChange(_event: Event): void {
        displayOrder();
    }

    function displayOrder(): void {
       
        let price: number = 0;
        let order: HTMLDivElement = <HTMLDivElement>document.querySelector("div#order");
        order.innerHTML = "";

        let formData: FormData = new FormData(<HTMLFormElement>document.querySelector("form"));

      
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