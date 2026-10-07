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

        return `Book ID = ${this.bookID}, ${this.bookTitle} by ${this.bookAuthor}, number of pages: ${this.bookPages}`;

    };
}

function addBookToLibrary(bookTitle, bookAuthor, bookPages) {

    myLibrary.push(new Book(bookTitle, bookAuthor, bookPages));

}

function displayBooks() {

    display.innerHTML = ""; // Clear current display before re-rendering

    for (let i = 0; i < myLibrary.length; i++) {

        const bookDiv = document.createElement("p");
        const deleteBookBtn = document.createElement("button");

        deleteBookBtn.textContent = "Delete"
        bookDiv.textContent = myLibrary[i].info();

        deleteBookBtn.addEventListener("click", () => {
            
            myLibrary.splice(i, 1);
            displayBooks();
        });

        display.appendChild(bookDiv);
        display.appendChild(deleteBookBtn);

    }

}

newBook.addEventListener("click", () => {

    let bookTitle = prompt("Enter the book's title");
    let bookAuthor = prompt("Enter the book's author");
    let bookPages = prompt("Enter the number of pages");

    if (bookTitle && bookAuthor && bookPages) {

        addBookToLibrary(bookTitle, bookAuthor, bookPages);
        displayBooks();

    }

});