let myLibrary = []

let mainContent = document.querySelector(".mainContent")
let main = document.querySelector(".main")
let btnAdd = document.querySelector(".btnAdd")
let btnSubmit = document.querySelector(".btnSubmit")
let form = document.querySelector(".form")

btnAdd.addEventListener("click", () => {
    form.style.display = "block"
})

btnSubmit.addEventListener("click", () => {
    form.style.display = "none"
})

function book(title, author, pages, readStatus) { // Object Constructor
    this.title = title
    this.author = author
    this.pages = pages
    this.readStatus = readStatus
}

function addBookToLibrary(newBook) {
    // Take user input and store the new book objects into myLibrary array
    myLibrary.push(newBook)
}  

book.prototype.makeCard = function () {
    for (let i = 0; i < myLibrary.length; i++) {
        let card = myLibrary[i]
        let cardText = document.createElement("div")
        cardText.textContent = card
        main.appendChild(cardText)
    }
}



