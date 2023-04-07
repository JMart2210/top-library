/* eslint-disable indent */
const myLibrary = [];
const container = document.querySelector('.container');
const form = document.getElementsByTagName('form')[0];
let uniqueId = null;

function addBookToLibrary(book) {
    myLibrary.push(book);
    displayBook(book);
  }

function removeFromLibrary(book) {
    myLibrary[book.target.dataset.id].inLibrary = false;
    document.querySelector(`[data-id='${book.target.dataset.id}']`).classList.add('removed');
}

function Book(title, author, pages, isread) {
  this.id = uniqueId++;
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.isread = isread;
  this.inLibrary = true;
  addBookToLibrary(this);
}

Book.prototype.info = function () {
  return `${this.title} by ${this.author}, ${this.pages} pages, read: ${this.isread}`;
};
Book.prototype.toggleRead = function (book) {
    // this toggles isRead from true to false
    if (myLibrary[book.target.dataset.id].isread ^= true) {
        book.target.textContent = 'read';
        book.target.classList.remove('unread');
        book.target.classList.add('read');
    } else {
        book.target.textContent = 'unread';
        book.target.classList.remove('read');
        book.target.classList.add('unread');
    }
}

function displayBook(book) {
        // Create book card to house book info
        console.log(book);
        const card = document.createElement('div');
        card.dataset.id = book.id;
        card.classList.add('card');
        // Title elements
        const title = document.createElement('h2');
        title.classList.add('title');
        title.textContent = `Title: ${book.title}`;
        card.appendChild(title);
        // Author elements
        const author = document.createElement('p');
        author.classList.add('author');
        author.textContent = `Author: ${book.author}`;
        card.appendChild(author);
        // Pages element
        const pages = document.createElement('p');
        pages.classList.add('pages');
        pages.textContent = `Pages: ${book.pages}`;
        card.appendChild(pages);
        const button = document.createElement('button');
        // button.classList.add('button');
        if (book.isread) {
            button.textContent = 'read';
            button.classList.add('book', 'read');
        } else {
            button.textContent = 'unread';
            button.classList.add('book', 'unread');
        }
        button.dataset.id = book.id;
        button.addEventListener('click', book.toggleRead);
        card.appendChild(button);
        const removeBtn = document.createElement('button');
        removeBtn.textContent = 'Remove from Library';
        removeBtn.dataset.id = book.id;
        removeBtn.addEventListener('click', removeFromLibrary);
        // button.classList.add('button');
        card.appendChild(removeBtn);
        container.appendChild(card);
    }


const theHobbit = new Book('The Hobbit', 'J.R.R. Tolkien', 295, false);
const theKing = new Book('The King', 'JLL Tolkien', 296, true);
const theSquire = new Book('The Squire', 'JMM Tolkien', 297, true);

form.addEventListener('submit', (event) => {
    event.preventDefault();
    new Book(this.bTitle.value, this.bAuthor.value, this.bPages.value, this.bIsRead.checked);
});

// function Student(name, grade) {
//     this.name = name
//     this.grade = grade
//   }

//   Student.prototype.sayName = function() {
//     console.log(this.name)
//   }
//   Student.prototype.goToProm = function() {
//     console.log("Eh.. go to prom?")
//   }

//   let head = {
//     glasses: 1
//   };

//   let table = {
//     pen: 3,
//     __proto__: head
//   };

//   let bed = {
//     sheet: 1,
//     pillow: 2,
//     __proto__: table
//   };

//   let pockets = {
//     money: 2000,
//     __proto__: bed
//   };

//   let hamster = {
//     eat(food) {
//       stomach: [],
//       this.stomach = [food];
//     }
//   };

//   let speedy = {
//     __proto__: hamster
//   };

//   let lazy = {
//     __proto__: hamster
//   };

//   // This one found the food
//   speedy.eat("apple");
//   alert( speedy.stomach ); // apple

//   // This one also has it, why? fix please.
//   alert( lazy.stomach ); // apple
