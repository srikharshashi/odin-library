const addbutton = document.querySelector(".addbutton");
const modalbg = document.querySelector(".modal-bg");
const closebutton = document.querySelector(".closebutton");
const booknameip = document.querySelector("#booknameip");
const authornameip = document.querySelector("#authornameip");
const submitbutton = document.querySelector(".submit")

let myLibrary = [];

function Book(name, author, status) {
    this.name = name;
    this.author = author;
    this.status = status;
}
addbutton.addEventListener("click", () => {
    modalbg.classList.add("bg-active");
});
closebutton.addEventListener("click", () => {
    modalbg.classList.remove("bg-active");
});
function update(card) {
    const row1 = document.querySelector(".row1");
    const row2 = document.querySelector(".row2");
    const row3 = document.querySelector(".row3");
    const row4 = document.querySelector(".row4");
    const i = myLibrary.length;
    if (i <= 5) {
        row1.appendChild(card);
    } else if (i > 5 && i <= 10) {
        row2.appendChild(card);

    } else if (i > 10 && i <= 15) {
        row3.appendChild(card);

    } else if (i > 15 && i <= 20) {
        row4.appendChild(card);

    }

}
function getcard(bookname, authorname) {
    const card = document.createElement("div");
    card.classList.add("card");

    card.dataset.no = myLibrary.length;

    const book = document.createElement("p");
    book.innerText = bookname;

    const author = document.createElement("p");
    author.classList.add("author");
    author.innerText = authorname;

    const toggle = document.createElement("div");
    toggle.classList.add("switch");
    toggle.innerText = "Unread";
    toggle.addEventListener("click", (event) => {
        const id = event.path[1].dataset.no;
        myLibrary[id].status = myLibrary[id].status == false ? true : false;
        toggle.innerText = toggle.innerText == "Unread" ? "Read" : "Unread";
    });

    card.appendChild(book);
    card.appendChild(author);
    card.appendChild(toggle);
    return card;
}
submitbutton.addEventListener("click", () => {
    if (booknameip.value !== "" && authornameip.value !== "") {
        let newbook = new Book(booknameip.value, authornameip.value, false);
        update(getcard(booknameip.value, authornameip.value));
        myLibrary.push(newbook);
        booknameip.value = "";
        authornameip.value = "";
        modalbg.classList.remove("bg-active");
    }
});