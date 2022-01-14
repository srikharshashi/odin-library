const addbutton=document.querySelector(".addbutton");
const modalbg=document.querySelector(".modal-bg");
const closebutton=document.querySelector(".closebutton");
const bookname=document.querySelector("#booknameip");
const authorname=document.querySelector("#authornameip");
const submitbutton=document.querySelector(".submit")

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
  
submitbutton.addEventListener("click",()=>{
    if(bookname.value!=="" && authorname.value!=="")
    {
        let newbook=new Book(bookname.value,authorname.value,false);
        myLibrary.push(newbook);
        bookname.value="";
        authorname.value="";
        console.log(myLibrary);
        modalbg.classList.remove("bg-active");
    }
});