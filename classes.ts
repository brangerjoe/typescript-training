import { Book, DamageLogger, Author, Librarian } from './interfaces';

class UniversityLibrarian implements Librarian {
    name: string;
    email: string;

    tellPeopleToShutup() {
        console.log(`${this.name} says: Shhh!`);
    }
}

abstract class ReferenceItem {
    private _dateInstantiated: Date;
    private _publisher: string;
    author: string;

    constructor(public title: string, protected year?: number) {
        this._dateInstantiated = new Date();
        console.log(`Created new ReferenceItem on ${this._dateInstantiated}!`);
    }

    get publisher(): string {
        return this._publisher.toUpperCase();
    }

    set publisher(newPublisher: string) {
        this._publisher = newPublisher + "(Publisher)";
    }

    printItem(): void {
        console.log(`${this.title} was published in ${this.year}.`);
        if (this._publisher) {
            console.log(`Publisher: ${this.publisher}`);
        }
    }

    abstract printCitation(): void;
}

class Encyclopedia extends ReferenceItem {
    constructor(title: string, year: number, public volume?: number) {
        super(title, year);
    }

    printItem(): void {
        super.printItem();
        this.volume && console.log(`Volume: ${this.volume} (year: ${this.year})`);
    }

    printCitation(): void {
        console.log(`Citation: ${this.title}-${this.year}`);
    }
}

class Shelf<T> {
    private _items: Array<T> = [];
    add(item: T): void {
        this._items.push(item);
    }

    getFirst(): T {
        return this._items[0];
    }
}

export { UniversityLibrarian, ReferenceItem, Encyclopedia, Shelf };