let toDolist;
let taskList;
let container = document.getElementById("container");
let taskItem;
let delButton;
let markAsDone;
let textSpan


function addNewTask() {
  toDolist = document.createElement("ul");
  container.appendChild(toDolist);
  taskList = document.createElement("li");
  toDolist.appendChild(taskList)

  textSpan = document.createElement("span");
  taskItem = document.createTextNode(document.getElementById("new-task").value);
  textSpan.appendChild(taskItem);
  taskList.appendChild(textSpan);

  markAsDone = document.createElement("span");
  markAsDone.textContent = " Done "
  markAsDone.style.border = "1px solid black";
  markAsDone.className = "done";

 
  delButton= document.createElement("span");

  taskList.appendChild(markAsDone)
  delButton.textContent=" Delete"
  delButton.style.border = "1px solid black";
  delButton.className = "close";
  taskList.appendChild(delButton)
  
  var close = document.getElementsByClassName("close")
  var done = document.getElementsByClassName("done")
  var i;
  
  for (i = 0; i < close.length; i++) {
    close[i].onclick = function () {
      
      var div = this.parentElement;
      div.style.display = "none";
    }
  }

  for (i = 0; i < done.length; i++) {
    done[i].onclick = function () {
      
      var div = this.parentElement;
      var fChild =div.firstElementChild;
      fChild.style.textDecoration = "line-through";
    }
  }


}





    
