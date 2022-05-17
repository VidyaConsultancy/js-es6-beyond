export const apiUrl = "https://fakerapi.it/api/v1/books";

export const renderBooksData = (books) => {
  const playground = document.getElementById("playground");
  playground.innerHTML = "";

  const booksSection = document.createElement("section");
  booksSection.classList.add("books");

  const booksTitle = document.createElement("h2");
  booksTitle.innerText = "Books";
  booksTitle.classList.add("books__title");
  booksSection.appendChild(booksTitle);

  const booksContainer = document.createElement("div");
  booksContainer.classList.add("books__container");

  books.forEach((book) => {
    const bookElement = document.createElement("div");
    bookElement.classList.add("books__item");
    bookElement.id = `book-${book.id}`;

    const bookImg = document.createElement("img");
    bookImg.src = book.image;
    bookImg.classList.add("books__item-image");
    bookElement.appendChild(bookImg);

    const bookTitle = document.createElement("h3");
    bookTitle.innerText = book.title;
    bookTitle.classList.add("books__item-title");
    bookElement.appendChild(bookTitle);

    const bookDesc = document.createElement("p");
    bookDesc.innerText = book.description;
    bookDesc.classList.add("books__item-brief");
    bookElement.appendChild(bookDesc);

    booksContainer.append(bookElement);
  });
  booksSection.append(booksContainer);
  playground.appendChild(booksSection);
};

window.addEventListener("load", () => {
    if(location.pathname === "/books.html") {
        fetch(apiUrl, {
            method: 'GET',
        })
        .then(response => response.json())
        .then(responseData => {
            const { data: books } = responseData;
            renderBooksData(books);
        })
        .catch(error => console.error(error))
    }
});
