namespace L03_Hauhaltshilfe{
    window.addEventListener("load", handleLoad);

    function handleLoad(_event: Event):void{
        console.log("start");
        let form:HTMLDivElement =<HTMLDivElement>document.querySelector("div#form");
        let slider: HTMLInputElement =<HTMLInputElement>document.querySelector("input#amount");

        form.addEventListener("change",handleChange);
        slider.addEventListener("input",displayAmount);

        function handleChange(_event: Event): void{
            console.log(_event);
        }
        function displayAmount(_event:Event):void{
            let progress: HTMLProgressElement = <HTMLProgressElement>document.querySelector("progress");
            let amount: string=(<HTMLInputElement>_event.target).value;
            progress.value = parseFloat(amount);

        }

    }
}