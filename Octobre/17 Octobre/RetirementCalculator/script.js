let userAge = document.getElementById("userAge");
let userRtrmntAge = document.getElementById("userRtrmntAge");
let resultDiv = document.getElementById("result");
let currentYear = 2022;
let userBirthYear = currentYear - userAge;
let userRtrmnYear = userRtrmntAge + userBirthYear;
let yearsLeft = userRtrmntAge - userAge

function result() {

  if(userRtrmntAge < 65) {
    resultDiv.textContent = "Please write an age between 65-75";
  }else if(userRtrmntAge >= 76) {
    resultDiv.textContent = "Please write an age between 65-75";
  }else{
    resultDiv.textContent =
      "You have " +
      yearsLeft  +
      "years left until you can retire";
    resultDiv.textContent +=
      '<br>' + "It's 2022, sou you can retire in " + userRtrmnYear;
  }
}
