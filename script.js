const myLibrary = [];

function Book(title, author, pages, isread) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.isread = isread;
  addBookToLibrary(this);
}
// eslint-disable-next-line func-names
Book.prototype.info = function () {
  return `${this.title} by ${this.author}, ${this.pages} pages, read: ${this.isread}`;
};

function addBookToLibrary(book) {
  myLibrary.push(book);
}
const theHobbit = new Book('The Hobbit', 'J.R.R. Tolkien', 295, false);
const theKing = new Book('The King', 'JLL Tolkien', 296, true);
const theSquire = new Book('The Squire', 'JMM Tolkien', 297, true);

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
