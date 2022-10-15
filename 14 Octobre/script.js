
/* Translate exercice with if else

let days = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];
let translated = [
  "Lundi",
  "Mardi",
  "Mercredi",
  "Jeudi",
  "Vendredi",
  "Samedi",
  "Dimanche",
];

let userInput = prompt(`Please write a day of week`);
    if (userInput == days[0]) {
    alert(translated[0]);
    }
    if (userInput == days[1]) {
    alert(translated[1]);
    }
    if (userInput == days[2]) {
    alert(translated[2]);
    }
    if (userInput == days[3]) {
    alert(translated[3]);
    }
    if (userInput == days[4]) {
    alert(translated[4]);
    }
    if (userInput == days[5]) {
    alert(translated[5]);
    }
    if (userInput == days[6]) {
    alert(translated[6]);
} */


//Translate exercice with Switch

function daytranslated(){
let user = document.getElementById('userInput')
let inFrench = "";
let para = document.getElementById('displayp')

switch (user){
    case "monday":
    inFrench="lundi";
    break;
   
    case "tuesday":
    inFrench="mardi";
    break;
   
    case "wednesday":
    inFrench="mercredi";
    break;
   
    case "thursday":
    inFrench="jeudi";
    break;
  
    case "friday":
    inFrench="vendredi";
    break;
   
    case "saturday":
    inFrench="samedi";
    break;
   
    case "sunday":
    inFrench="dimanche";
    break;
 
    default:
        inFrench="Not day name"
    break;
}

para.style.visibility = 'visible';
para.style.width = "200px";
para.style.height = "40px";
para.style.backgroundColor = "lightgreen";
para.textContent = inFrench

}
