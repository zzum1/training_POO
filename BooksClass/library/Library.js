import Book from '../books/Book.js';
// rastiPagalZanra(zanras): grąžina visas konkretaus žanro knygas. NESUPRANTU KAIP TAI PADARYTI


class Library extends Book {
    constructor(title, author, year, books) {
        super(title, author, year);
        this.books = [];
    }

    addBook(book) {
        this.books.push(book);
        console.log(`Book ${book.title} was added to the library`);
    }

    showAllBook() {
        return this.books.forEach((books) => {
            console.log(books);
        })
    }

    findBookByAuthor(author) {
        return this.books.filter((book) => book.author === author);
        
    }
}

export default Library;
