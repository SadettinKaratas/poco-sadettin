

function bigHeader (){
    if(window.innerWidth >= 1024) {
    let header = document.getElementById("header");
    header.style.fontSize = "3em"
    header.style.backgroundColor = "#150050"
    header.style.color = "#ADDDD0"; 
    }
}

function normalHeader() {
    header.style.fontSize = "2em";
    header.style.backgroundColor = "#6F38C5";
    header.style.color = "white"; 
}
   

function photoAction(id){
    let photoBigger = document.getElementById(id);
    // photoBigger.style.width = '300px';
    photoBigger.style.border = '5px dotted black';
    photoBigger.style.borderRadius = '5px';
    let myImages = photoBigger.getElementsByTagName('img')[0];
    myImages.style.opacity = 1;

}


function question(magicPhrase, magicWord, hint){

    for (let index = 1; index < 4; index++) {
        let input = prompt (magicPhrase);
        if (input != magicWord){
            alert("Hint : " + hint)}
        if (input == magicWord){
            alert("Well Done")
            break;
        } 
    
    }
}

function normalSize (id){
    let photoNormal = document.getElementById(id); 
    photoNormal.style.width = "209.7px" 
    photoNormal.style.border = 'none';
    photoNormal.style.borderRadius = 'none';
    let myImage = photoNormal.getElementsByTagName('img')[0];
    myImage.style.opacity = 0.2;

}