import Book from '../books/Book.js';
import Fantasy from '../ganres/fantasy.js';
import Detective from '../ganres/detective.js';
import HistoryNovel from '../ganres/historyNovel.js';
import Library from '../library/Library.js';

const library = new Library();

const book = new Book('Harry Potter', 'J.K. Rowling', 1997);
const fantasy = new Fantasy('Harry Potter', 'J.K. Simpson', 1997, true);
const detective = new Detective('Sherlock Holmes', 'Arthur Conan Doyle', 1887, 'Sherlock Holmes');
const historyNovel = new HistoryNovel('Karas ir Taika', 'L. Tolstojus', 1869, 'Napoleono karo metai');


// Books

book.getInfo();
fantasy.getInfo();
console.log(fantasy.getAuthor());
detective.getInfo();
historyNovel.getInfo();

// Library

library.addBook(fantasy);
library.addBook(detective);
library.showAllBook();
console.log(library.findBookByAuthor('Arthur Conan Doyle'));

