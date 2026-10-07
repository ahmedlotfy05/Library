const myLibrary = [];

const display = document.querySelector("#display");
const newBook = document.querySelector("#new");

function Book(bookTitle, bookAuthor, bookPages) {

    if (!new.target) {

        throw Error("You must use the 'new' operator");

    }
    
    this.bookID = crypto.randomUUID();
    this.bookTitle = bookTitle;
    this.bookAuthor = bookAuthor;
    this.bookPages = bookPages;

    this.info = function() {

        return `Book ID = ${this.bookID}, ${this.bookTitle} by ${this.bookAuthor}, number of pages: ${this.bookPages}`

    };

}

function addBookToLibrary(bookTitle, bookAuthor, bookPages) {

    for (let i = 0; i <= myLibrary.length; i++) {

        if (myLibrary[i] == null) {

            myLibrary[i] = new Book(bookTitle, bookAuthor, bookPages);
            break;

        }

    }

}

function displayBooks() {

    for (let i = 0; i <= myLibrary.length; i++) {

        display.textContent = myLibrary[i].info();

    }

}

newBook.addEventListener("click", () => {

    let bookTitle = prompt("Enter the book's title");
    let bookAuthor = prompt("Enter the book's author");
    let bookPages = prompt("Enter the number of pages");

    addBookToLibrary(bookTitle, bookAuthor, bookPages);
    displayBooks();

})