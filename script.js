/*jshint esversion: 6 */

//submit event listener
const submit = document.querySelector('#submit_book');
submit.addEventListener('click', addBookToLibrary);

//+new book button, on click display
const addBookBtn = document.querySelector('#add_book');
//Entry form
const entryForm = document.getElementById('newbook_popup');

addBookBtn.addEventListener('click', () => entryForm.style.display = 'flex');
//x btn
const closeBtn = document.querySelector('.close_btn');

//on click of close button, hide display
closeBtn.addEventListener('click', () => entryForm.style.display = 'none');


let myLibrary = [];

//constructor
function Book(title, author, pages,read) {
  this.title = form.title.value;
  this.author = form.author.value;
  this.pages = form.pages.value;
  this.hasRead = form.read.checked;

}

function addBookToLibrary() {
  //don't send to server /post request
  event.preventDefault();
  //hide entry form
  entryForm.style.display = 'none';
  let newBook = new Book(title, author, pages, read);

  myLibrary.push(newBook);

  console.log("Success", newBook.title);

  //save in local storage
  saveData();
  display();
  //clear form
  form.reset();

}

function display() {
    const display = document.querySelector('.library');
    const books = document.querySelectorAll('.book');

//remove divs to rearrage if one is removed
//calls function for array in books, could also do a while display.lastChild loop here
    books.forEach(book => display.removeChild(book));

//loop thru mylibrary to create divs
    for (i=0; i<myLibrary.length; i++){
      createBook(myLibrary[i]);
    }
}

//creats book DOM elements, loop thru to display
function createBook(book) {
    const library = document.querySelector('.library');

    //create DIVS
    const bookDiv = document.createElement('div');
    const titleDiv = document.createElement('div');
    const authDiv = document.createElement('div');
    const pagesDiv = document.createElement('div');
    const removeBtn = document.createElement('button');
    //so you can update read/not read
    const readBtn = document.createElement('button');

// could also use classList returns classes of a div
    bookDiv.className = 'book';

    // //give ID, not needed
    // bookDiv.setAttribute('id', myLibrary.indexOf(book));

//add title text, class, append
    titleDiv.textContent = '📚 '+ book.title;
    titleDiv.className = 'title';
    bookDiv.appendChild(titleDiv);

    authDiv.textContent = 'By: ' + book.author;
    authDiv.className = 'author';

    pagesDiv.textContent = book.pages + ' pages';
    pagesDiv.className = 'pages';

    readBtn.className = 'readBtn';

    if(book.hasRead===false) {
        readBtn.textContent = 'Not Read';
        readBtn.style.backgroundColor = '#e04f63';
    }else {
        readBtn.textContent = 'Read';
        readBtn.style.backgroundColor = '#63da63';
    }

    removeBtn.textContent = 'Remove';
    removeBtn.className = "remove";

//another way to append
    bookDiv.append(authDiv, pagesDiv, readBtn, removeBtn);

    library.appendChild(bookDiv);

//Remove btn event listener
//inside func to use book
    removeBtn.addEventListener('click', () => {
      //splice, at index of book, remove 1
        myLibrary.splice(myLibrary.indexOf(book),1);
        saveData();
        display();
    });

    //switch between read & not read event listener, save data when updated
    readBtn.addEventListener('click', () => {
        book.hasRead = !book.hasRead;
        saveData();
        display();
    });
}


//function to save library to json string local storage
function saveData() {
    localStorage.setItem(`myLibrary`, JSON.stringify(myLibrary));
}

//turns JSON storage back into JS objects to display
function loadBooks() {
    if(!localStorage.myLibrary) {
        display();
    }else {
        let bookObjs = localStorage.getItem('myLibrary');
        bookObjs = JSON.parse(bookObjs);
        myLibrary = bookObjs;
        console.log(myLibrary);
        display();
    }
}

loadBooks();
