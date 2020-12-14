document.getElementById('button').addEventListener('click', function() 
{
    document.querySelector('.popup').style.display = 'flex';
})

document.querySelector('.close').addEventListener('click', function()
{
    document.querySelector('.popup').style.display = 'none';
})

let library = [];

function Book(title, author, pages, hasItBeenRead)
{
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.hasItBeenRead = hasItBeenRead;

    let read = (hasItBeenRead == true) ? 'has been read' : 'not read yet';
    this.read = read;
}

function addBookToLibrary(object)
{
    library.push(object);
}

const cards = document.querySelector('#cards');

function displayBooks()
{
    for(i = 0; i <= library.length; i++)
    {
        let card = document.createElement('div');

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

const TheHobbit = new Book('The Hobbit', 'J.R.R. Tolkien', 295, false);
addBookToLibrary(TheHobbit);
displayBooks();
