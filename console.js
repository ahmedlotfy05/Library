const myLibrary = [];

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