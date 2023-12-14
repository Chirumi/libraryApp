const gridContainer = document.getElementById("gridContainer")

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

const theHobbit = new Book("The Hobbit", "J.R.R Tolkien", 295, "not read yet")
addBookToLibrary(theHobbit)
const warDoctor = new Book("War Doctor: Surgery on the Front Line", "David Nott", 363, "not read yet")
addBookToLibrary(warDoctor)
const goingInfinite = new Book("Going Infinite: The Rise and Fall of a New Tycoon", "Michael Lews", 267, "read")
addBookToLibrary(goingInfinite)

function createCard() {
    for (let i = 0; i < myLibrary.length; i++) {
        const bookCard = document.createElement("div")
        bookCard.setAttribute("id", `bookCard`)
        const title = document.createElement("div")
        title.setAttribute("id", `title`)
        const author = document.createElement("div")
        author.setAttribute("id", `author`)
        const pages = document.createElement("div")
        pages.setAttribute("id", `pages`)
        const readStatus = document.createElement("div")
        readStatus.setAttribute("id", `readStatus`)

        gridContainer.append(bookCard)
        bookCard.append(title)
        bookCard.append(author)
        bookCard.append(pages)
        bookCard.append(readStatus)

        title.textContent = `Title: ${myLibrary[i].title}`
        author.textContent = `Author: ${myLibrary[i].author}`
        pages.textContent = `Pages: ${myLibrary[i].pages}`
        readStatus.textContent = `Read: ${myLibrary[i].readStatus}`
    }
}
createCard()