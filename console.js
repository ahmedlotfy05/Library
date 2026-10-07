const myLibrary = [];

function Book(id, title, author, pages) {

    if (!new.target) {

        throw Error("You must use the 'new' operator");

    }
    
    this.id = id.crypto.randomUUID();
    this.title = title;
    this.author = author;
    this.pages = pages;

    this.read = function(readYet) {

        if (readYet == 0) {

            return `Not read yet`;

        }

        else {

            return `Read`;

        }

    };

    this.info = function() {

        return `${this.title} by ${this.author}, number of pages: ${this.pages}, ${this.readYet()}`

    };

}

function addBookToLibrary(id, title, author, pages) {

    for (i = 0; i < myLibrary.length; i++) {

        if (myLibrary[i] != null) {

            myLibrary[i] = new Book(id, title, author, pages);

        }

    }

}