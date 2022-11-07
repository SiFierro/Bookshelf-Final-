const app = document.querySelector('#app');
const updateBtn = document.querySelector("#update") //selecting button for updating the # of favorites
const numFavs = document.querySelector("#numFavs"); // selecting <p> for displaying number of favorites. 
const bookshelf = new Bookshelf();

// Load in book data
for (const bookInfo of bookData) {
  const book = new Book(
    bookInfo.author,
    bookInfo.language,
    bookInfo.subject,
    bookInfo.title
  );
  bookshelf.addBook(book);
}

app.append(bookshelf.render());


updateBtn.addEventListener('click', updateFavs); // this updates the number of favorite books you have favorited  

function updateFavs(){
  // using .filter to get all the books that are favorite.
  const favBooks = bookshelf.books.filter((book)=> {
    if(book.favorite == true){
      return true
    }
  })
  // displaying the # of favorite books & putting this into <P> tag 
  numFavs.innerHTML = favBooks.length;
} 
  // this will eventually add a book still cant put into local storage 
const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const author = document.querySelector("#addAuthor").value;
  const title = document.querySelector("#addTitle").value;
  const language = document.querySelector("#addLanguage").value;
  const subjects = document.querySelector("#addSubject").value.split(' ');
  const bookInstance = new Book(author, language, subjects, title);
  bookshelf.addBook(bookInstance)
  app.innerHTML=""  
  app.append(bookshelf.render());
  form.reset()

  localStorage.setItem("books",JSON.stringify(bookshelf.books))

});

const searchInput = document.querySelector("searchbar");

  
