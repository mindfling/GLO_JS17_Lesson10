'use strict';
//Lesson10

//убираем рекламный баннер
const adv = document.querySelector('.adv');
adv.remove();


//меняем фон
document.body.style.backgroundImage = 'url("image/you-dont-know-js.jpg")';


//получим коллекцию всех книг book
const book = document.querySelectorAll('.book');
//общий контейнер для всех books
const books = document.querySelector('.books');

console.log('book: ', book);
console.log('books: ', books);


//выставим книги по порядку
books.prepend(book[1]);
books.append(book[3]);
books.append(book[5]);
books.append(book[2]);

//выставим главы книги номер 2
//это элемент 0 в HTML коллекции
let mybook = book[0];
let ul = mybook.querySelector('ul');
let li = ul.querySelectorAll('li');

console.log('mybook: ', mybook);
console.log('ul: ', ul);
console.log('li: ', li);

ul.prepend(li[8]);
ul.prepend(li[6]);
ul.prepend(li[3]);
ul.prepend(li[1]);
ul.prepend(li[0]);
ul.append(li[7]);
ul.append(li[9]);
ul.append(li[2]);
ul.append(li[10]);


//выставим главы книги номер 5
mybook = book[5];
ul = mybook.querySelector('ul');
li = mybook.querySelectorAll('li');
console.log('mybook: ', mybook);
console.log('li: ', li);

ul.prepend(li[4]);
ul.prepend(li[3]);
ul.prepend(li[9]);
ul.append(li[5]);
ul.append(li[8]);
ul.append(li[10]);
ul.prepend(li[0]);
ul.prepend(li[1]);

