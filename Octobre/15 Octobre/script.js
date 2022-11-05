let incr = document.getElementById("count-entered");
let count = 0;

function increment() {
  count += 1;
  incr.innerText = count;

}

function initialize() {
  window.location.reload();

}

function savebtn() {
  let newText = document.getElementById("savebox");
  newText.textContent += count + " - ";
  count = 0;
  incr.textContent = 0;
  
}
