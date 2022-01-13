const addbutton=document.querySelector(".addbutton");
addbutton.addEventListener("click",()=>{
    console.log("click");
})








let myLibrary = [];

function Book(name,author,status) {
    this.name=name;
    this.author=author;
    this.status=status;
}
  
