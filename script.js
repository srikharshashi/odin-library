const addbutton=document.querySelector(".addbutton");
const modalbg=document.querySelector(".modal-bg");
const closebutton=document.querySelector(".closebutton");
addbutton.addEventListener("click",()=>{
    modalbg.classList.add("bg-active");
});
closebutton.addEventListener("click",()=>
{
    modalbg.classList.remove("bg-active");
});






let myLibrary = [];

function Book(name,author,status) {
    this.name=name;
    this.author=author;
    this.status=status;
}
  
