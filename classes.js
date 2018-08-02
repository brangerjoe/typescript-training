"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class UniversityLibrarian {
    tellPeopleToShutup() {
        console.log(`${this.name} says: Shhh!`);
    }
}
exports.UniversityLibrarian = UniversityLibrarian;
class ReferenceItem {
    constructor(title, year) {
        this.title = title;
        this.year = year;
        this._dateInstantiated = new Date();
        console.log(`Created new ReferenceItem on ${this._dateInstantiated}!`);
    }
    get publisher() {
        return this._publisher.toUpperCase();
    }
    set publisher(newPublisher) {
        this._publisher = newPublisher + "(Publisher)";
    }
    printItem() {
        console.log(`${this.title} was published in ${this.year}.`);
        if (this._publisher) {
            console.log(`Publisher: ${this.publisher}`);
        }
    }
}
exports.ReferenceItem = ReferenceItem;
class Encyclopedia extends ReferenceItem {
    constructor(title, year, volume) {
        super(title, year);
        this.volume = volume;
    }
    printItem() {
        super.printItem();
        this.volume && console.log(`Volume: ${this.volume} (year: ${this.year})`);
    }
    printCitation() {
        console.log(`Citation: ${this.title}-${this.year}`);
    }
}
exports.Encyclopedia = Encyclopedia;
class Shelf {
    constructor() {
        this._items = [];
    }
    add(item) {
        this._items.push(item);
    }
    getFirst() {
        return this._items[0];
    }
}
exports.Shelf = Shelf;
//# sourceMappingURL=classes.js.map