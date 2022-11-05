let homeScore = document.getElementById ('homeboard');
let guestScore = document.getElementById ('guestboard');

let count = 0;
let count2 =0;
function plusOneH(){
    count+=1
    homeScore.textContent =count;
}
function plusTwoH(){
    
    homeScore.textContent = count+2
    count=count+2
}
function plusThreeH(){
    homeScore.textContent =count+3;
    count+=3
}
function plusOneG(){
    count2+=1
    guestScore.textContent =count2;
}
function plusTwoG(){
    guestScore.textContent = count2 + 2;
    count2+=2
}
function plusThreeG(){
    guestScore.textContent =count2 +3;
    count2+=3
}