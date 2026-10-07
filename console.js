const myLibrary = [];

const display = document.querySelector("#display");
const newBook = document.querySelector("#new");

function Book(bookTitle, bookAuthor, bookPages, isRead = false) {

    if (!new.target) {

        throw Error("You must use the 'new' operator");

    }
    
    this.bookID = crypto.randomUUID();
    this.bookTitle = bookTitle;
    this.bookAuthor = bookAuthor;
    this.bookPages = bookPages;
    this.isRead = isRead;

}

Book.prototype.info = function() {

    const readStatus = this.isRead ? "Read" : "Not read yet";
    return `Book ID = ${this.bookID}, ${this.bookTitle} by ${this.bookAuthor}, pages: ${this.bookPages} — Status: ${readStatus}`;

};

Book.prototype.toggleRead = function() {

    this.isRead = !this.isRead;

};

function addBookToLibrary(bookTitle, bookAuthor, bookPages, isRead) {

    myLibrary.push(new Book(bookTitle, bookAuthor, bookPages, isRead));
    
}

function displayBooks() {

    display.innerHTML = "";

    for (let i = 0; i < myLibrary.length; i++) {

        const book = myLibrary[i];

        const bookCard = document.createElement("div");
        const bookDiv = document.createElement("p");
        const toggleReadBtn = document.createElement("button");
        const deleteBtn = document.createElement("button");

        bookDiv.textContent = book.info();
        
        // Read status toggle button
        toggleReadBtn.textContent = book.isRead ? "Mark as Unread" : "Mark as Read";

        toggleReadBtn.addEventListener("click", () => {

            book.toggleRead();

            displayBooks();

        });

        // Delete button
        deleteBtn.textContent = "Delete";

        deleteBtn.addEventListener("click", () => {

            myLibrary.splice(i, 1);

            displayBooks();

        });

        bookCard.appendChild(bookDiv);
        bookCard.appendChild(toggleReadBtn);
        bookCard.appendChild(deleteBtn);
        display.appendChild(bookCard);

    }

}

newBook.addEventListener("click", () => {

    let bookTitle = prompt("Enter the book's title");
    let bookAuthor = prompt("Enter the book's author");
    let bookPages = prompt("Enter the number of pages");
    let isRead = confirm("Have you read this book");

    if (bookTitle && bookAuthor && bookPages) {

        addBookToLibrary(bookTitle, bookAuthor, bookPages, isRead);
        displayBooks();

    }

});