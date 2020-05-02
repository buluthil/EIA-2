namespace LO2_Sequenzmemory{
    console.log("start")
    let chosenWord: string;
    window.addEventListener("load", handleLoad);

    function handleLoad(_event: Event): void{
        let div: HTMLElement = <HTMLElement>document.querySelector("div.card");
         div.addEventListener ("click", card);
        document.addEventListener("keydown", activateJoker);
  }
  function card(_event: MouseEvent): void {
      console.log("hello")
  }
  function activateJoker(_event: KeyboardEvent): void {
      console.log("help")

  }
}