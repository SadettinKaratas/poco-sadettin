// let mySections = document.getElementsByClassName("mySections")

// console.log(mySections[1])
// console.log(mySections[2])

// let myList = document.getElementsByTagName("li")

// console.log(myList)

// // let myListgeneral = document.getElementsByTagName("ul")

// let myListgeneral = document.querySelector("ul")

// console.log (myListgeneral) 
// console.log (myListgeneral.hasChildNodes) 
// console.log (myListgeneral.parentNode)
// console.log (myListgeneral.firstChild) 
// console.log (myListgeneral.lastChild) 
// myListgeneral.lastChild.textContent = "Hello World!";
// console.log (myListgeneral.nextSibling)
// myListgeneral.nextSibling.textContent = "What's up?"

// Creating a new <p> in my HTML
// let newPara = document.createElement ("p") ;
// let node = document.createTextNode ("Bonjour"); 
// let parent = document.querySelector(".mySections")
// newPara.appendChild (node);
// parent.appendChild(newPara);

// Creating a new <li> in my HTML
// let myPhoto = document.createElement("li");
// let myLiText = document.createTextNode("6");
// let photoParent = document.querySelector("ul")
// myPhoto.appendChild(myLiText)
// photoParent.appendChild (myPhoto)

//h1 variable write a loop with 2 iterations, always adding the number of the iteration to the content of the tag (after the existing content).
// let myH1 = document.getElementById("myHeading")
// let i = 0;
// while (i<2) {
//     myH1.textContent += " " + i + " " ;
//     i++

// }

//For the p variable write a loop with 4 iterations, always adding the number of the iteration to the content of the tag (before the existing content).
// let myPara = document.getElementById("myPara")
// let i2 =0
// while (i2<4) {
//     myPara.insertAdjacentText("afterbegin", + " " + i2 + " " )  ;
//     i2++

// }

//For the a variable write a loop with 7 iterations, always replacing the content of the tag with the number of the iteration.

// let myA = document.getElementById("my-A")
// let i3 =0
// while (i3<7) {
//     myA.innerHTML = i3;
//     i3++

// }


var books = [
    {
      title: 'The Design of EveryDay Things',
      author: 'Don Norman',
      alreadyRead: false,
      img:"https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSQQ_1I5-MoQiayKuvqZIrt8_PUJy9Iq-bLsavCcUoED5CLy-KTKfjV1yfAybdvKQzUPsjUmHdTRbpvpreFTYBAyFkjkEauftCe8VY0Fc6B&usqp=CAc",
    },
    {
      title: 'The Most Human Human',
      author: 'Brian Christian',
      alreadyRead: true,
      img: "https://images-na.ssl-images-amazon.com/images/I/815+k+N26bL.jpg"

    }
  ];

  let bookTitle;
  let bookImage;
  let author;
  let readOrNot;

  let heading = document.createElement("h1");
  document.body.appendChild(heading);
  heading.textContent = "My Books List";
  heading.style.textAlign = "center";


  for (var i = 0; i <= books.length - 1; i++) {
        bookTitle = document.createElement("p");
        document.body.appendChild(bookTitle);
        bookTitle.textContent = books[i].title;
        author = document.createElement("p");
        document.body.appendChild(author)
        bookTitle.textContent = books[i].author;
        readOrNot=document.createElement("p");
        document.body.appendChild(readOrNot);
        if (books.alreadyRead==false){
            readOrNot.textContent= "Not Read"
        }else{ 
            readOrNot.textContent= "Read"

        }
        bookImage = document.createElement("img");
        bookImage.src = books[i].img;
        bookImage.style.width = "100px"
        document.body.appendChild(bookImage)

    
  }
