import { Books } from './Books.js';


// "IstorinisRomanas" klasė
class HistoryNovel extends Books {
    constructor(historyYears, title, author, year) {
        super(title, author, year);
        this.historyYears = historyYears;
    }

    getInfo(){
        return `Book ${this.title} Author: ${this.author}, Years:  ${this.year}, History years: ${this.historyYears}`;
    }
};

export default HistoryNovel;