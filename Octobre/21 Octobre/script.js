var books = [
  {
    title: "The Design of EveryDay Things",
    author: "Don Norman",
    alreadyRead: false,
    img: "https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/lrg/9780/4650/9780465050659.jpg",
  },
  {
    title: "The Most Human Human",
    author: "Brian Christian",
    alreadyRead: true,
    img: "https://images.thalia.media/00/-/27a9a66bf7c745bd87f603cf0c6e1609/the-most-human-human-what-artificial-intelligence-teaches-us-about-being-alive-taschenbuch-brian-christian-englisch.jpeg",
  },
  {
    title: "The Design of EveryDay Things",
    author: "Don Norman",
    alreadyRead: false,
    img: "https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/lrg/9780/4650/9780465050659.jpg",
  },
  {
    title: "The Most Human Human",
    author: "Brian Christian",
    alreadyRead: true,
    img: "https://images.thalia.media/00/-/27a9a66bf7c745bd87f603cf0c6e1609/the-most-human-human-what-artificial-intelligence-teaches-us-about-being-alive-taschenbuch-brian-christian-englisch.jpeg",
  },
  {
    title: "The Design of EveryDay Things",
    author: "Don Norman",
    alreadyRead: false,
    img: "https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/lrg/9780/4650/9780465050659.jpg",
  },
  {
    title: "The Most Human Human",
    author: "Brian Christian",
    alreadyRead: true,
    img: "https://images.thalia.media/00/-/27a9a66bf7c745bd87f603cf0c6e1609/the-most-human-human-what-artificial-intelligence-teaches-us-about-being-alive-taschenbuch-brian-christian-englisch.jpeg",
  },
  {
    title: "The Design of EveryDay Things",
    author: "Don Norman",
    alreadyRead: false,
    img: "https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/lrg/9780/4650/9780465050659.jpg",
  },
  {
    title: "The Most Human Human",
    author: "Brian Christian",
    alreadyRead: true,
    img: "https://images.thalia.media/00/-/27a9a66bf7c745bd87f603cf0c6e1609/the-most-human-human-what-artificial-intelligence-teaches-us-about-being-alive-taschenbuch-brian-christian-englisch.jpeg",
  },
];

//Creating Variables
let bookTitle;
let bookImage;
let bookAuthor;
let readOrNot;
let ulList;
let liForImage;
let eachBookContainer


let container = document.getElementById("container");
//Creating my first heading

for (var i = 0; i <= books.length-1; i++) {
  //   Create 1st paragraph for title
  eachBookContainer = document.createElement("div");
  container.appendChild(eachBookContainer)
  bookTitle = document.createElement("p");
  eachBookContainer.appendChild(bookTitle);
  bookTitle.textContent = books[i].title;
  ulList = document.createElement("ul");
  eachBookContainer.appendChild(ulList);

  //   Create 2nd paragraph for author
  bookAuthor = document.createElement("li");
  ulList.appendChild(bookAuthor);
  bookAuthor.textContent = "By : " + books[i].author;

  //   Create 3rd paragraph for read-or-not
  readOrNot = document.createElement("li");
  ulList.appendChild(readOrNot);
  if (books[i].alreadyRead == false) {
    readOrNot.textContent = "Not Read";
  } else {
    readOrNot.textContent = "Read";
    bookImage.style.border = "10px red solid";
  }
  //Creating img tag
  liForImage = document.createElement("li");
  ulList.appendChild(liForImage);
  bookImage = document.createElement("img");
  bookImage.src = books[i].img;
  bookImage.style.width = "100px";
  liForImage.appendChild(bookImage);
  
}

function addNewBook() {
 let newBookTitle = document.getElementById("bookname").value;
 let newBookAuthor = document.getElementById("author").value ;
 let newBookReadorNot = document.getElementById("read").value ;
 let newBookImg = document.getElementById("addimage") ;
 
 let newBookDiv = document.createElement("div");
 let newBookTitlePara= document.createElement("p");
 let newBookUl= document.createElement("ul");
 let newBookliAuthor = document.createElement("li");
 let newBookliRead = document.createElement("li");
 let newBookliImg= document.createElement("li");

 newBookTitlePara.textContent = newBookTitle;
 newBookliAuthor.textContent = newBookAuthor;
 newBookliRead.textContent = newBookReadorNot;
 newBookliImg.innerHTML = newBookImg;


newBookDiv.appendChild(newBookTitlePara);
newBookDiv.appendChild(newBookUl);
newBookUl.appendChild(newBookliAuthor);
newBookUl.appendChild(newBookliRead);
newBookUl.appendChild(newBookliImg);
container.appendChild(newBookDiv)

}

