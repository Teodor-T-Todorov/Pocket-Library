function Book(title, author, numberOfPages, hasItBeenRead)
{
    this.title = title;
    this.author = author;
    this.numberOfPages = numberOfPages;
    this.hasItBeenRead = hasItBeenRead;

    let read = (hasItBeenRead == true) ? 'has been read' : 'not read yet';
    this.read = read;
}

Book.prototype.info = function()
{
    return `${this.title} by ${this.author}, ${this.numberOfPages} pages, ${this.read}`;
}

function addBookToLibrary(object)
{
    library.push(object);
}

let library = [];

const TheHobbit = new Book('The Hobbit', 'J.R.R. Tolkien', 295, false);
console.log(TheHobbit.info());