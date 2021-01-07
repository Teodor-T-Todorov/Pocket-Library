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
    }
}

if(localStorage.length != 0)
{
    displayBooks();
}

// UI
function addBookToLibrary(book)
{
    localStorage.setItem(`${localStorage.length}`, JSON.stringify(book));

    let card = document.createElement('div');
    card.setAttribute('class','card');
    card.setAttribute('id', `${localStorage.length}`);

    let imageContainer = document.createElement('div');
    imageContainer.setAttribute('class', 'imageContainer');

    //Book cover image
    let cover = document.createElement('img');
    cover.setAttribute('src', 'covers/cover.png');
    cover.setAttribute('class', 'image');
    imageContainer.append(cover);

    //Delete button
    let deleteButton = document.createElement('button');
    deleteButton.setAttribute('class', 'deleteButton');
    deleteButton.textContent = 'Delete';
    imageContainer.append(deleteButton);

    card.append(imageContainer);

    //Read status
    let readStatus = document.createElement('div');
    readStatus.setAttribute('class', 'readStatus');
    let readStatusText = document.createElement('p');
    readStatusText.textContent = 'Read status';
    readStatus.append(readStatusText);

    //Toggle button
    let toggle = document.createElement('div');
    toggle.setAttribute('class', 'toggle-btn');
    toggle.setAttribute('onclick', 'this.classList.toggle("active")');
    let checkbox = document.createElement('div');
    checkbox.setAttribute('class', 'checkbox');
    toggle.append(checkbox);
    readStatus.append(toggle);
    card.append(readStatus);

    // Book info containing author,title, pages
    let bookInfo = document.createElement('div');
    bookInfo.setAttribute('class', 'bookInfo');

    //Title
    let titleName = document.createElement('h4');
    titleName.textContent = book.title;
    bookInfo.append(titleName);

    //Author
    let authorName = document.createElement('p');
    authorName.textContent = book.author;
    bookInfo.append(authorName);

    //Number of pages
    let numberOfPages = document.createElement('p');
    numberOfPages.textContent = book.pages + ' pages';
    bookInfo.append(numberOfPages);

    card.append(bookInfo)

    //Has it been read
    if(book.hasItBeenRead == true)
    {
        toggle.setAttribute('class', 'toggle-btn active')
        toggle.setAttribute('id', 'clicked');
    }
    else
    {
        toggle.setAttribute('class', 'toggle-btn');
        toggle.setAttribute('id', 'notClicked');

    }

    cards.append(card);
}

function displayBooks()
{
    Object.keys(localStorage).forEach((key) =>
    {
        let retrievedObject = localStorage.getItem(key);
        console.log(retrievedObject);
        let card = document.createElement('div');
        card.setAttribute('class','card');
        card.setAttribute('id', `${key}`);

    
        let imageContainer = document.createElement('div')
        imageContainer.setAttribute('class', 'imageContainer');
    
        //Book cover image
        let cover = document.createElement('img');
        cover.setAttribute('src', 'covers/cover.png');
        cover.setAttribute('class', 'image');
        imageContainer.append(cover);
    
        //Delete button
        let deleteButton = document.createElement('button');
        deleteButton.setAttribute('class', 'deleteButton');
        deleteButton.textContent = 'Delete';
        imageContainer.append(deleteButton);
    
        card.append(imageContainer);
    
        //Read status
        let readStatus = document.createElement('div');
        readStatus.setAttribute('class', 'readStatus');
        let readStatusText = document.createElement('p');
        readStatusText.textContent = 'Read status';
        readStatus.append(readStatusText);
    
        //Toggle button
        let toggle = document.createElement('div');
        toggle.setAttribute('class', 'toggle-btn');
        toggle.setAttribute('onclick', 'this.classList.toggle("active")');
        let checkbox = document.createElement('div');
        checkbox.setAttribute('class', 'checkbox');
        toggle.append(checkbox);
        readStatus.append(toggle);
        card.append(readStatus);
    
        // Book info containing author,title, pages
        let bookInfo = document.createElement('div');
        bookInfo.setAttribute('class', 'bookInfo');
    
        //Title
        let titleName = document.createElement('h4');
        titleName.textContent = JSON.parse(retrievedObject).title;
        bookInfo.append(titleName);
    
        //Author
        let authorName = document.createElement('p');
        authorName.textContent = JSON.parse(retrievedObject).author;
        bookInfo.append(authorName);
    
        //Number of pages
        let numberOfPages = document.createElement('p');
        numberOfPages.textContent = JSON.parse(retrievedObject).pages + ' pages';
        bookInfo.append(numberOfPages);
    
        card.append(bookInfo)
    
        //Has it been read
        if(JSON.parse(retrievedObject).hasItBeenRead == true)
        {
            toggle.setAttribute('class', 'toggle-btn active')
            toggle.setAttribute('id', 'clicked');

        }
        else
        {
            toggle.setAttribute('class', 'toggle-btn');
            toggle.setAttribute('id', 'notClicked');
        }
    
        cards.append(card);
    });
}

//Event listeners
document.querySelector('.addBookButton').addEventListener('click', () => 
{
    const title = document.getElementById('Title');
    const author = document.getElementById('Author');
    const pages = document.getElementById('Pages');

    let read;
    if(document.getElementById('Yes').checked)
    {
        read = true;
    }
    else
    {
        read = false;
    }
    
    const newBook = new Book(title.value, author.value, pages.value, read);
    addBookToLibrary(newBook);

    document.getElementById('Title').value = '';
    document.getElementById('Author').value = '';
    document.getElementById('Pages').value = '';
    document.getElementById("Yes").checked = false;
    document.getElementById("No").checked = false;
})

document.getElementById('button').addEventListener('click', function() 
{
    document.querySelector('.popup').style.display = 'flex';
})

document.querySelector('.popup').addEventListener('click', function(e)
{
    if(e.target.className == 'addBookButton')
    {
        document.querySelector('.popup').style.display = 'none';
    }

    if(e.target.type == 'text' || e.target.type == 'radio' || e.target.className == 'radio-wrapper' || e.target.tagName == 'P')
    {
        document.querySelector('.popup').style.display = 'flex'; 
    }

    else if(e.target.className != 'popup-content')
    {
        document.querySelector('.popup').style.display = 'none';
    }
})

cards.addEventListener('click', function(e)
{
    if(e.target.className == 'deleteButton')
    {
        localStorage.removeItem(`${e.target.parentElement.parentElement.getAttribute('id')}`)
        e.target.parentElement.parentElement.remove();
    }

    else if(e.target.id == 'clicked')
    {
        let retrievedObject = localStorage.getItem(e.target.parentElement.parentElement.getAttribute('id'));
        retrievedObject = retrievedObject.replace(',"hasItBeenRead":true', ',"hasItBeenRead":false');
        localStorage.setItem(`${e.target.parentElement.parentElement.getAttribute('id')}`, retrievedObject);
        e.target.setAttribute('id', 'notClicked');

    }

    else if(e.target.id == 'notClicked')
    {
        let retrievedObject = localStorage.getItem(e.target.parentElement.parentElement.getAttribute('id'));
        retrievedObject = retrievedObject.replace(',"hasItBeenRead":false', ',"hasItBeenRead":true');
        localStorage.setItem(`${e.target.parentElement.parentElement.getAttribute('id')}`, retrievedObject);
        e.target.setAttribute('id', 'clicked');
    }

    else if(e.target.className == 'checkbox')
    {
        if(e.target.parentElement.id == 'clicked')
        {
            let retrievedObject = localStorage.getItem(e.target.parentElement.parentElement.parentElement.getAttribute('id'));
            retrievedObject = retrievedObject.replace(',"hasItBeenRead":true', ',"hasItBeenRead":false');
            localStorage.setItem(`${e.target.parentElement.parentElement.parentElement.getAttribute('id')}`, retrievedObject);
            e.target.parentElement.setAttribute('id', 'notClicked');
        }
        else if(e.target.parentElement.id == 'notClicked')
        {
            let retrievedObject = localStorage.getItem(e.target.parentElement.parentElement.parentElement.getAttribute('id'));
            retrievedObject = retrievedObject.replace(',"hasItBeenRead":false', ',"hasItBeenRead":true');
            localStorage.setItem(`${e.target.parentElement.parentElement.parentElement.getAttribute('id')}`, retrievedObject);
            e.target.parentElement.setAttribute('id', 'clicked');
        }
    }
})

console.log(localStorage);