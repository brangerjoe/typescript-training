import { Category } from './enums';

interface Book {
    id: number;
    title: string;
    author: string;
    available: boolean;
    category: Category;
    pages?: number;
    markDamaged?: DamageLogger;
}

interface DamageLogger {
    (reason: string): void
}

interface Person {
    name: string;
    email: string;
}

interface Employee extends Person {
    company: string;
}

interface Author extends Employee {
    numBooksPublished: number;
    write: (content: string) => void;
}

interface Librarian extends Person {
    tellPeopleToShutup: () => void;
}

export { Book, DamageLogger, Author, Librarian };