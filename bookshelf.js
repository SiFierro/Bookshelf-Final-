function Bookshelf(books = []) {
    this.books = books;
  
    this.addBook = function (book) {
      this.books.push(book);
    };
    
    /* CHANGE RENDER! THIS IS A TEMPLATE */
    this.render = function () {
      const ul = document.createElement("ul");
      for (const book of this.books) {
        ul.append(book.render());
      }
      return ul;
    };
  }
  
  