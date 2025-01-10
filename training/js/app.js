import { Book } from './books/book.js';
import { Fantasy } from './ganres/fantasy.js';
import { Detective } from './ganres/detective.js';
import { HistoryNovel } from './ganres/historyNovel.js';

const book = new Book('Harry Potter', 'J.K. Rowling', 1997);
const fantasy = new Fantasy('Harry Potter', 'J.K. Rowling', 1997, true);
const detective = new Detective('Sherlock Holmes', 'Arthur Conan Doyle', 1887, 'Sherlock Holmes');
const historyNovel = new HistoryNovel('Karas ir Taika', 'L. Tolstojus', 1869, 'Napoleono karo metai');

console.log(book);

book.getInfo();
fantasy.getInfo();
detective.getInfo();
historyNovel.getInfo();