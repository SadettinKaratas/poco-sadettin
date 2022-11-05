let myTopChoises = ["skyblue", "Abraham", "Real Madrid", "Kunefe", "Baklava"]
let suffix = ["st", "nd", "rd", "th"]

for (let i = 0; i < myTopChoises.length; i++) {
console.log("My" +(i+1) +suffix[i<suffix.length ? 0+i : 3]+ "choise is " + myTopChoises[i])
   
}