// TRANSLATION EXEMPLE
let helloPara = document.getElementById('hello-tr')
var translation;

function translator(){
    // alert(translation);
    switch (translation){
        case "ES":
        helloPara.textContent = "Hola Mundo";
        break;
        
        case "FR":
        helloPara.textContent = "Bonjour le Monde";
        break;
        
        case "DE":
            helloPara.textContent = "Hallo Welt";
        break;
        default:
         helloPara.textContent = "Hello World";
    }

}

function function2(){
    translation='ES';
    translator();
}
function function3(){
    translation='FR';
    translator();
}
function function4(){
    translation='DE';
    translator();
}

