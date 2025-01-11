import Book from '../books/Book.js';

// Detektyvas klasė
class Detective extends Book {
    constructor(title, author, year, name) {
        super(title, author, year);
        this.name = name;
    }

    getInfo() {
        return `Book ${this.title} Author:  ${this.author}, Years:  ${this.year}, Detective: ${this.name}`;
    }
}

export default Detective;