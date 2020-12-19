let library = [];
const cards = document.querySelector('#cards');

// Book class
class Book
{
    constructor(title, author, pages, hasItBeenRead)
    {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.hasItBeenRead = hasItBeenRead;

        let read = (hasItBeenRead == true) ? 'has been read' : 'not read yet';
        this.read = read; 
    }
}

// UI
function addBookToLibrary(book)
{
    library.push(book);

    let card = document.createElement('div');
    card.classList.add('card');

    //Book cover image
    let cover = document.createElement('img');
    cover.setAttribute('src', 'covers/cover.png');
    cover.setAttribute('class', 'image');
    card.append(cover);

    //Toggle button
    let toggle = document.createElement('div');
    toggle.setAttribute('class', 'toggle-btn');
    toggle.setAttribute('onclick', 'this.classList.toggle("active")');
    let checkbox = document.createElement('div');
    checkbox.setAttribute('class', 'checkbox');
    toggle.append(checkbox);
    card.append(toggle);
    
    //Title
    let titleName = document.createElement('h4');
    titleName.textContent = book.title;
    card.append(titleName);

    //Author
    let authorName = document.createElement('p');
    authorName.textContent = book.author;
    card.append(authorName);

    //Number of pages
    let numberOfPages = document.createElement('p');
    numberOfPages.textContent = book.pages;
    card.append(numberOfPages);

    cards.append(card);
}

function displayBooks()
{
    for(let i = 0; i < library.length; i++)
    {
        let card = document.createElement('div');
        card.classList.add('card');

        let cover = document.createElement('img');
        cover.setAttribute('src', 'covers/cover.jpg');
        card.append(cover);

        let titleName = document.createElement('h4');
        titleName.textContent = library[i].title;
        card.append(titleName);

        let authorName = document.createElement('p');
        authorName.textContent = library[i].author;
        card.append(authorName);

        let numberOfPages = document.createElement('p');
        numberOfPages.textContent = library[i].pages;
        card.append(numberOfPages);

        cards.append(card);
    }
}

//Event listeners
document.querySelector('.addBookButton').addEventListener('click', () => {
    const title = document.getElementById('Title');
    const author = document.getElementById('Author');
    const pages = document.getElementById('Pages');
    
    const newBook = new Book(title.value, author.value, pages.value, false);
    addBookToLibrary(newBook);
})

document.getElementById('button').addEventListener('click', function() 
{
    document.querySelector('.popup').style.display = 'flex';
})

document.querySelector('.close').addEventListener('click', function()
{
    document.querySelector('.popup').style.display = 'none';
})

displayBooks();
