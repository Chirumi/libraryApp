const flexContainer = document.getElementById("flexContainer")
const dialog = document.querySelector("dialog")
const showBtn = document.getElementById("showBtn")
const confirmBtn = document.getElementById("confirmBtn")
const cancelBtn = document.getElementById("cancelBtn")
const div = document.querySelector("dialog > div")
const inputTitle = document.getElementById("title")
const inputAuthor = document.getElementById("author")
const inputPages = document.getElementById("pages")
const errorMsg = document.querySelector(".errorMsg")
const main = document.querySelector(".main")

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

    const title = document.createElement("h2")
    title.setAttribute("id", `title`)
    const author = document.createElement("div")
    author.setAttribute("id", `author`)
    const pages = document.createElement("div")
    pages.setAttribute("id", `pages`)


    const readStatus = document.createElement("button")
    readStatus.setAttribute("id", `readStatus`)
    readStatus.setAttribute("class", `cardBtn`)
    readStatus.addEventListener("click", () => {
        if (myLibrary[lastArrayItem].readStatus == false) {
            myLibrary[lastArrayItem].readStatus = true
            readStatus.textContent = `Read`
        }
        else {
            myLibrary[lastArrayItem].readStatus = false
            readStatus.textContent = `Not read`
        }
    })

    const removeBtn = document.createElement("button")
    removeBtn.textContent = "Remove"
    removeBtn.setAttribute("class", `cardBtn`)
    removeBtn.addEventListener("click", () => {
        bookCard.remove()
        cards = document.querySelectorAll("#bookCard") // Selects divs with id bookCard
        cards.forEach((e) => { // Only decrement dataset values that are more than the index position of the bookCard being removed from the array
            if (e.dataset.book > bookCard.dataset.book) {
                e.dataset.book = e.dataset.book - 1

                //REMOVE BUTTON AND MAKE NEW EVENT LISTENERS THAT ARE AFTER THE REMOVED CARD
                const eBtn = e.querySelector("#readStatus")
                const eBtnNew = eBtn.cloneNode(true) //SELECTS ALL readStatus BUTTONS AFTER THE REMOVED CARD
                eBtn.parentNode.replaceChild(eBtnNew, eBtn)
                
                //APPLY NEW EVENT LISTENER THAT CHANGES READ STATUS OF THE RIGHT OBJECT
                eBtnNew.addEventListener("click", () => {
                    if (myLibrary[eBtnNew.parentNode.dataset.book].readStatus == false) {
                        myLibrary[eBtnNew.parentNode.dataset.book].readStatus = true
                        eBtnNew.textContent = `Read`
                    }
                    else {
                        myLibrary[eBtnNew.parentNode.dataset.book].readStatus = false
                        eBtnNew.textContent = `Not read`
                    }
                })
            }
        })
        
        myLibrary.splice(bookCard.dataset.book, 1)
   
        if (myLibrary.length == 0) {
            main.style.justifyContent = "center"
        }
    })


    flexContainer.append(bookCard)
    bookCard.append(title)
    bookCard.append(author)
    bookCard.append(pages)
    bookCard.append(readStatus)
    bookCard.append(removeBtn)

    title.textContent = `${myLibrary[lastArrayItem].title}`
    title.style.fontSize = "20px"
    author.textContent = `by ${myLibrary[lastArrayItem].author}`
    author.style.fontSize = "15px"
    pages.textContent = `${myLibrary[lastArrayItem].pages} pages`
    readStatus.style.marginTop = "40px" 
    if  (myLibrary[lastArrayItem].readStatus == true) {
        readStatus.textContent = `Read`
    } else {
        readStatus.textContent = `Not read`
    }

}

showBtn.addEventListener("click", () => {
    dialog.showModal()
    dialog.setAttribute("class", "dialogShow")
})
cancelBtn.addEventListener("click", () => {
    dialog.close()
})
dialog.addEventListener("click", () => {
    inputTitle.value = ""
    inputAuthor.value = ""
    inputPages.value = ""
    document.getElementById("read").checked = false
    errorMsg.textContent = ""
    dialog.close()
})
div.addEventListener("click", (e) => {
    e.stopPropagation()
})
confirmBtn.addEventListener("click", (e) => {
    e.preventDefault()
    if (inputTitle.value == "" || inputAuthor.value == "" || inputPages.value == "") {
        errorMsg.textContent = "Please enter all the book's information"
    }
    else {
        const newBook = new Book(inputTitle.value, inputAuthor.value, inputPages.value, document.getElementById("read").checked)
        addBookToLibrary(newBook)
        createCard()
        inputTitle.value = ""
        inputAuthor.value = ""
        inputPages.value = ""
        document.getElementById("read").checked = false
        errorMsg.textContent = ""
        main.style.justifyContent = "unset"
        dialog.close()
    }
})

