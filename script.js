let myLibrary = []

let mainContent = document.querySelector(".mainContent")
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

for (let i=0; i < myLibrary.length; i++) {
    mainContent.textContent += "<li>" + myLibrary[i] + "</li>"
}


