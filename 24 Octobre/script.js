document.querySelector("h1").addEventListener("click", addSomeText)

function addSomeText(){
    this.innerHTML = "Bonjour"
}


addEventListener("load", createNewPara)

function createNewPara(){
    newPara = document.createElement("p");
    document.body.appendChild(newPara);
    newPara.textContent =  "Hello i am new paragraph"
}