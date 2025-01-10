// Book class

class Book {
    constructor(title, author, year) {
        this.title = title;
        this.author = author;
        this.year = year;
    }

    getInfo() {
        return `Book ${this.title} was written by ${this.author} in ${this.year}`;
    }

    getTitle() {
        return this.title;
    }

    getAuthor() {
        return this.author;
    }

    getYear() {
        return  this.year(Number);
    }

    setTitle(title) {
        this.title = title;
    }

    setAuthor(author) {
        this.author = author;
    }

    setYear(year) {
        this.year = year;
    }
}

export default Book;