let birthYear = 1988;
let birthMonth = 11;
let FutureYear = 2029;
let FutureMonth = 1;
let smallAge = (FutureYear - birthYear) - 1
let array = ["January", "February", "March", "April", "Mai", "June", "July", "August", "September", "October", "November", "December"]

if (birthMonth > FutureMonth) {
    document.write(`You will be ${smallAge} years old in ${array[0]} in ${FutureYear}`);
}else{
    document.write(`You will be ${(FutureYear - birthYear)} years old in ${FutureMonth} in ${FutureYear}`);
}
    


