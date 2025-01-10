import { Book } from '../books/book.js';


// "Fantastika" klasė
class Fantasy extends Book {
    constructor(title, author, year, magic) {
        super(title, author, year,);
        this.magic = magic;
    }

    getMagic() {
        return this.magic;
    }

    setMagic() {
       return `Magic: ${this.magic = magic}`;
    }

    getInfo() {
        return `Book ${this.title}, Author:  ${this.author}, Years: ${this.year} Magic: ${this.magic}`;
    }
}

export default Fantasy;