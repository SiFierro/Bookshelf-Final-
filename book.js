function Book(author, language, subject, title) {
    this.author = author;
    this.language = language;
    this.subject = subject;
    this.title = title;
    this.favorite = false;
    this.comments = [];
    //
    /* this will display a book*/
    this.render = function () {
      const li = document.createElement("li");
      // li.textContent = this.title;
      li.innerHTML = `
      <p>${this.title} </p>
      
      `
  
      const input = document.createElement("input");
      input.classList.add("hidden");
      input.setAttribute("maxlength",280) /// sets the max length of the comment section to 280 characters
      const button = document.createElement("button"); // add to favorite button 
      const showCommentButton = document.createElement("button"); // this is the toggle comment button // comment related
      const addCommentButton = document.createElement("button"); // this will add a comment to the array 
      addCommentButton.classList.add("hidden") // this keeps the add comment button hidden until the toggle comment button has been pressed
      addCommentButton.innerHTML= "Add Comment"  // this is the add comment button that adds a comment to the array 
      showCommentButton.innerHTML="Toggle Comment Form" // toggle comment button 
      button.innerHTML= "Add To Favorite"
  
      li.appendChild(input);
      li.appendChild(addCommentButton);
      li.appendChild(button);
      li.appendChild(showCommentButton);
  
      button.addEventListener("click", ()=>{
        toggleFavorite(this);
      });
  
      showCommentButton.addEventListener("click", ()=>{
        toggleComment(addCommentButton, input) 
        
      })
  
      addCommentButton.addEventListener("click",()=>{
        addComment(this,input.value, input)
      })
  
      return li;
    };
  }
  function toggleFavorite(book) {
    if(book.favorite == true){
      book.favorite = false;
    } else {
      book.favorite = true;
    }
   
  
  
  }
  
  
  function toggleComment(addCommentButton,input){
    
    addCommentButton.classList.toggle("hidden")
    input.classList.toggle("hidden")
  }
  
  
  // this pushes the comment to be included in the array of books /// trying to add a search function where you can search by comments as well. 
  function addComment(book, value, input){
   book.comments.push(value) 
   input.value=""
   console.log(book)
  }