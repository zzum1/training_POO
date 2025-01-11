import Book from '../books/Book.js';


// "IstorinisRomanas" klasė
class HistoryNovel extends Book {
    constructor(historyYears, title, author, year) {
        super(title, author, year);
        this.historyYears = historyYears;
    }

    getInfo(){
        return `Book ${this.title} Author: ${this.author}, Years:  ${this.year}, History years: ${this.historyYears}`;
    }
};

export default HistoryNovel;