// Only decrement values of datasets of the array object items AFTER the one being removed

const gridContainer = document.getElementById("gridContainer")
const dialog = document.querySelector("dialog")
const showBtn = document.getElementById("showBtn")
const confirmBtn = document.getElementById("confirmBtn")
const cancelBtn = document.getElementById("cancelBtn")
const div = document.querySelector("dialog > div")
const inputTitle = document.getElementById("title")
const inputAuthor = document.getElementById("author")
const inputPages = document.getElementById("pages")
const inputRead = document.getElementById("read")

const myLibrary = []

function Book(title, author, pages, readStatus) {
    this.title = title
    this.author = author
    this.pages = pages
    this.readStatus = readStatus
    this.info = function () {
        return `${title} by ${author}, ${pages} pages, ${readStatus}`
    }
}

function addBookToLibrary(book) {
    myLibrary.push(book)
}

function createCard() {
    const lastArrayItem = myLibrary.length - 1

    
    const bookCard = document.createElement("div")
    bookCard.setAttribute("id", `bookCard`)
    bookCard.setAttribute("data-book", `${lastArrayItem}`) // Gives bookCard unique number

    const title = document.createElement("div")
    title.setAttribute("id", `title`)
    const author = document.createElement("div")
    author.setAttribute("id", `author`)
    const pages = document.createElement("div")
    pages.setAttribute("id", `pages`)
    const readStatus = document.createElement("div")
    readStatus.setAttribute("id", `readStatus`)

    const removeBtn = document.createElement("button")
    removeBtn.textContent = "Remove"
    removeBtn.addEventListener("click", () => {
            bookCard.remove()

            cards = document.querySelectorAll("#bookCard") // Selects divs with id bookCard
            cards.forEach((e) => { // Only decrement dataset values that are more than the index position of the bookCard being removed from the array
                if (e.dataset.book > bookCard.dataset.book) {
                    e.dataset.book = e.dataset.book - 1
                }
            })

            myLibrary.splice(bookCard.dataset.book, 1)
            
    })


    gridContainer.append(bookCard)
    bookCard.append(title)
    bookCard.append(author)
    bookCard.append(pages)
    bookCard.append(readStatus)
    bookCard.append(removeBtn)

    title.textContent = `Title: ${myLibrary[lastArrayItem].title}`
    author.textContent = `Author: ${myLibrary[lastArrayItem].author}`
    pages.textContent = `Pages: ${myLibrary[lastArrayItem].pages}`
    readStatus.textContent = `Read: ${myLibrary[lastArrayItem].readStatus}`

}

showBtn.addEventListener("click", () => {
    dialog.showModal()
})
cancelBtn.addEventListener("click", () => {
    dialog.close()
})
dialog.addEventListener("click", () => {
    dialog.close()
})
div.addEventListener("click", (e) => {
    e.stopPropagation()
})
confirmBtn.addEventListener("click", (e) => {
    e.preventDefault() // Prevent form from sending which reloads the page

    const newBook = new Book(inputTitle.value, inputAuthor.value, inputPages.value, inputRead.value)
    addBookToLibrary(newBook)
    createCard()

    inputTitle.value = ""
    inputAuthor.value = ""
    inputPages.value = ""
    inputRead.value= ""

    dialog.close()
})

