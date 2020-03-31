"use strict";
// Interfaces 1
// let http = require("http");
//1b
function printBook(book) {
    console.log(`Book info: ${JSON.stringify(book)}`);
}
let bookObj = {
    author: "J.K Rowling",
    title: "Half-Blood Prince",
    published: new Date('2005-08-01'),
    pages: 672
};
//1c
//Duck typing is where you omit writing the used interface. As long as the properties align with the interface, it is an instance of the interface.
//1d - instance of IBook with optional property omitted
let bookOptional = {
    author: "Some author",
    title: "Some title",
    published: new Date('1212-12-12'),
};
//1e 
// bookObj.author = 'Rowlings uncle';
// - value of author cannot be changed. Readonly equates to the "final" keyword known from Java.
//1f
//Java way
/*
class Book implements IBook {
    title: string
    author: string
    published: Date
    pages: number
    constructor(
        private _title: string,
        private readonly _author: string,
        private _published: Date,
        private _pages: number
    ){
        this.title = _title
        this.author = _author
        this.published = _published
        this.pages = _pages
    };

    getTitle() {return this._title}
    setTitle(title : string) {this._title = title}

    getAuthor() {return this._author}
    

    getPublished() {return this._published}
    setPublished(published : Date) {this._published = published}

    getPages() {return this._pages}
    setPages(pages : number) {this._pages = pages}

    */
class Book {
    constructor(_title, _author, _published, _pages) {
        this._title = _title;
        this._author = _author;
        this._published = _published;
        this._pages = _pages;
    }
    ;
    get title() { return this._title; }
    get author() { return this._author; }
    get published() { return this._published; }
    get pages() { return this._pages; }
    set title(title) { this._title = title; }
    set published(published) { this._published = published; }
    set pages(pages) { this.pages = pages; }
}
//# sourceMappingURL=Interface1.js.map