let firstCard = 20
let secondCard = 4
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let message = ""
let messageEl =document.getElementById ('questionPara')
let sumEl = document.getElementById ('sum-el')

function myFunction(){
    if (sum < 21){
         message = "Do you want to draw a new card? 🙂";
    }else if (sum===21) 
        {message="Wohoo! You've got Blackjack! 🥳"
        hasBlackJack = true}
    else{  
        message = "You're out of the game! 😭"
        isAlive = false
    }
    sumEl.textContent += " " +sum
    messageEl.textContent=message
}