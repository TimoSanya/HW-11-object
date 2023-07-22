//Helpers
const inputPrompt = 'Enter book data separated by (ISBN, title, author, year of publishing)":"'
let existingBookIsbn = "";
//Data
const library = [];
let inputData = prompt(inputPrompt);
while (inputData) {
    addBook(inputData);

    const existedBookText = existingBookIsbn ? "Book with isbn" + existingBookIsbn + " already exist! " : ""
    const confirmation = confirm(existedBookText + 'Do you want to add another book?');
    inputData = confirmation ? prompt(inputPrompt) : ""
}

printLibrary(library);

function addBook(argsString) {
    const argsArray = argsString.split(':');
    const index = findBook(library, argsArray[0])
    if (index === -1) {
        const book = new Book(...argsArray) // rest operator (opening array to a queue of variables) -> (argsArray[0], argsArray[1], argsArray[2], argsArray[3])
        library.push(book)
    } else {
        existingBookIsbn = argsArray[0];
    }
}

function findBook(library, isbn) {
    //TODO return index if book with isbn exists or -1
    for(let i = 0; i < library.length; i++) {
        if (library[i].isbn === isbn) return i
    }
    return -1;
}

function printLibrary(library) {
    for(let i = 0; i < library.length; i++) {
        console.log(library[i]);
    }
}
function Book(isbn, title, author,year) {
    this.isbn = isbn;
    this.title = title;
    this.author = author;
    this.year = year;
    this.toString = function () {
        return `ISBN: ${this.isbn}, title: ${this.title}, author: ${this.author}
        , Year of publishing: ${this.year}`;
    }
}