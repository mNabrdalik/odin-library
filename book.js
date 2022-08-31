let myLibrary = [];
const library = document.querySelector("#library");
const addBtn = document.querySelector("#add");
const closeBtn = document.querySelector("#close");
const bookForm = document.querySelector("#bookForm");
const submit = document.querySelector("#submit");
const form = document.querySelector(".form");

//title, author, the number of pages, and whether or not you have read the book.

function Book(title, author, pages, haveRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.haveRead = haveRead;
    /*this.info = function() {
        return `The ${title} by ${author}, ${pages} pages, ${haveRead}`;
    } lepiej wywalac funkcje do protype*/ 
}

//prototype method
Book.prototype.info = function() {
    return `The ${this.title} by ${this.author}, ${this.pages} pages, ${this.haveRead}`;
}

Book.prototype.showInLib = function() {
    let tag = document.createElement("div");

}

//add book to library
function addBookToLibrary() {
    let newTitle = document.querySelector("#title").value;
    let newAuthor = document.querySelector("#author").value;
    let newPages = document.querySelector("#pages").value;
    let newRead = document.querySelector('input[name="readIt"]:checked').value;

    let addedBook = new Book(newTitle, newAuthor, newPages, newRead); 

    myLibrary.push(addedBook);
}

//show books on website
function showBooks() {
    library.innerHTML = "";
    
    for(let i = 0; i < myLibrary.length; i++) {
        let tag = document.createElement("div");
        tag.classList.add("book");
        tag.innerHTML += `<p class="bTitle">"${myLibrary[i]['title']}"</p>`;
        tag.innerHTML += `<p>${myLibrary[i]['author']}</p>`;
        tag.innerHTML += `<p>${myLibrary[i]['pages']}</p>`;
        tag.innerHTML += `<button class="isRead btn" value="${myLibrary[i]['haveRead']}" onclick="changeStatus(${i})">${myLibrary[i]['haveRead']}</button>`;
        tag.innerHTML += `<button class="remove btn" type="button" onclick="removeBook(${i})">Remove</button>`;
        library.appendChild(tag);
    }
}


//stworzenie obiektu (ksiazki)
const theHobbit = new Book('The Hobbit', 'J.R.R. Tolkien', '295 pages', 'read');

//stworzenie obiektu (ksiazki)
const powerOfNow = new Book('The Power of Now', 'Eckhart Tolle', '250 pages', 'read');

//stworzenie obiektu (ksiazki)
const aurelius = new Book('Meditations', 'Marcus Aurelius', '254 pages', 'not read yet');



myLibrary.push(theHobbit);
myLibrary.push(powerOfNow);
myLibrary.push(aurelius);


//sprawdzenie
// console.log(theHobbit.info());
console.log(myLibrary);

function showHideForm() {
    form.classList.toggle("active");
}

addBtn.addEventListener('click', function() {
    showHideForm();
});

closeBtn.addEventListener('click', function() {
    showHideForm();
});

function submitForm() {
    
    addBookToLibrary();
    
    bookForm.reset();

    showHideForm();

    showBooks();

};

function removeBook(index) {
    myLibrary.splice(index, 1);
    showBooks();
}

function changeStatus(index) {
    if(myLibrary[index].haveRead == "not read yet") {
        myLibrary[index].haveRead = "read"
    } else {
        myLibrary[index].haveRead = "not read yet"
    }

    showBooks();
}

showBooks();

