'use strict';
//Lesson10


//* 1) Восстановить порядок книг.
const book = document.querySelectorAll('.book'); //получим коллекцию всех книг book
const books = document.querySelector('.books'); //общий контейнер для всех books
// console.log('book: ', book);
// console.log('books: ', books);
//выставим книги по порядку
books.prepend(book[1]);
books.append(book[3]);
books.append(book[5]);
books.append(book[2]);


//* 2) Заменить картинку заднего фона на другую из папки image
document.body.style.backgroundImage = 'url("image/you-dont-know-js.jpg")';


// * 3) Исправить заголовок в книге 3( Получится - "Книга 3. this и Прототипы Объектов")
let mybook = book[4];
console.log('mybook 4 Книга 3: ', mybook);
//исправляем заголовок
mybook.getElementsByTagName('a')[0].textContent = 'Книга 3. this и Прототипы Объектов';


//* 4) Удалить рекламу со страницы
const adv = document.querySelector('.adv');
adv.remove();



// * 5) Восстановить порядок глав во 2й второй и 5й пятой книге

// * выставим главы Книги 2
//это элемент 0 в HTML коллекции
mybook = book[0];
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
//это элемент 0 в HTML коллекции
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


// * 6) в шестой книге добавить главу “Глава 8: За пределами ES6” 
// * и поставить её в правильное место
console.log('mybook: ', mybook);
mybook = book[2]; //Книга 6
console.log('mybook: ', mybook);
console.log('mybook: ', mybook);
console.log('mybook: ', mybook);

console.log('mybook: ', mybook);

const newChapter = document.createElement('li');
newChapter.textContent = 'Глава 8: За пределами ES6';
console.log('newgnewChapterlnewChapter', newChapter);

ul = mybook.querySelector('ul');
li = mybook.querySelectorAll('li');
console.log('mybook: ', mybook);
console.log('li: ', li);

ul.append(newChapter);
ul.append(li[9]);
