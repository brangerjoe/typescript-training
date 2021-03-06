"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const classes_1 = require("./classes");
const enums_1 = require("./enums");
function GetAllBooks() {
    const books = [
        { id: 0, title: 'To Kill a Mockingbird', author: 'Someone', available: true, category: enums_1.Category.Action },
        { id: 1, title: 'The Secret', author: 'Some Dude', available: true, category: enums_1.Category.Thriller },
        { id: 2, title: 'The Girl in the Train', author: 'A Lady', available: true, category: enums_1.Category.Action },
        { id: 3, title: 'The Woman in the Window', author: 'A Lady', available: false, category: enums_1.Category.Drama },
        { id: 4, title: 'The Female inside the Castle', author: 'A Lady', available: true, category: enums_1.Category.Drama }
    ];
    return books;
}
function LogFirstAvailable(books) {
    console.log(`Books: ${books.length}`);
    for (let book of books) {
        if (book.available) {
            console.log('First available:', book.title);
            return;
        }
    }
    console.log('No books are available.');
}
function GetBookTitlesByCategory(categoryFilter) {
    const books = GetAllBooks();
    const titles = [];
    books.filter(book => book.category === categoryFilter)
        .map(book => titles.push(book.title));
    return titles;
}
function LogStringArray(stringArray) {
    for (let cur of stringArray) {
        console.log(cur);
    }
}
function CreateCustomer(name, age, city) {
    console.log(`Creating customer: ${name}`);
    age && console.log(`Age: ${age}`);
    city && console.log(`City: ${city}`);
}
function GetBookByID(id) {
    let bookTitle = null;
    GetAllBooks().forEach(book => {
        if (book.id === id) {
            bookTitle = book.title;
        }
    });
    return bookTitle;
}
function CheckoutBooks(customer, ...books) {
    let checkedOutBooks = [];
    books.forEach(bookID => {
        const bookTitle = GetBookByID(bookID);
        bookID && checkedOutBooks.push(bookTitle);
    });
    return checkedOutBooks;
}
function GetTitles(bookProperty) {
    const books = GetAllBooks();
    const titles = [];
    books.forEach(book => {
        switch (typeof bookProperty) {
            case 'string':
                book.author === bookProperty && titles.push(book.title);
                break;
            case 'boolean':
                book.available === bookProperty && titles.push(book.title);
                break;
            case 'number':
                book.category == bookProperty && titles.push(book.title);
                break;
        }
    });
    return titles;
}
let bookShelf = new classes_1.Shelf();
GetAllBooks().forEach(book => {
    bookShelf.add(book);
});
console.log(bookShelf.getFirst().title);
// function Purge<T>(array: Array<T>): Array<T> {
//     return array.splice(2);
// }
// let refBook: ReferenceItem = new Encyclopedia('Encarta', 1990, 10);
// refBook.printItem();
// refBook.printCitation();
// let someBooks: Array<Book> = Purge<Book>(GetAllBooks());
// someBooks.forEach(book => {
//     console.log(book.title);
// });
// let someNumbers: Array<number> = Purge<number>([1, 2, 3, 4, 5, 6]);
// console.log(someNumbers);
// let expertCSharp = new ReferenceItem("Expert C#");
// expertCSharp.year = 1998;
// expertCSharp.publisher = "Penguin";
// expertCSharp.printItem();
// new ReferenceItem("Expert JavaScript", 2005).printItem();
// let favoriteLibrarian: Librarian = new UniversityLibrarian();
// favoriteLibrarian.name = "Carol";
// favoriteLibrarian.tellPeopleToShutup();
// let favoriteAuthor: Author = {
//     company: "Penguin Publishing",
//     email: "jstur@gmail.com",
//     name: "Jon Stur",
//     numBooksPublished: 34,
//     write: (content: string) => {
//         console.log(`${favoriteAuthor.name} writes: ${content}!`)
//     }
// }
// favoriteAuthor.write("hello");
// enum Category { Romance, Action, Thriller, Drama }
// function PrintBook(book: Book): void {
//     console.log(
//         "Title:", book.title,
//         "|",
//         "Author:", book.author
//     );
// }
// const damageLogger: DamageLogger = (reason: string) => console.log(`Book is damaged because of ${reason}`);
// const newBook: Book = {
//     id: 5,
//     title: "The Odyssey",
//     author: "Homer Simpson",
//     available: false,
//     category: Category.Action,
//     markDamaged: damageLogger
// };
// GetAllBooks().concat(newBook).forEach(book => {
//     if (book.markDamaged) {
//         book.markDamaged("Termites");
//     }
//     PrintBook(book);
// });
// LogStringArray(GetTitles("A Lady"));
// CreateCustomer("Joe Branger");
// LogStringArray(CheckoutBooks("Joe Branger", 1, 2, 3));
// let getBooksByCategoryFunction: (cat: Category) => Array<string>;
// getBooksByCategoryFunction = GetBookTitlesByCategory;
// getBooksByCategoryFunction(Category.Action).forEach((val, idx, arr) => console.log(`${++idx} - ${val}`));
//# sourceMappingURL=app.js.map