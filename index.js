function searchBooks() {
  const keyword = document.getElementById('searchInput').value;
  const url = `https://www.googleapis.com/books/v1/volumes?q=${keyword}`;
  fetch(url)
    .then(response => response.json())
    .then(data => {
      console.log(displayResults(data.items));
    })
    .catch(error => {
      console.log.error('Error:', error);
    });
}

function displayResults(books) {
  const resultsDiv = document.getElementById('results');
  resultsDiv.innerHTML = '';
  if (books.length === 0) {
    resultsDiv.innerHTML = 'No books found';
    return;
  }
  
  books.forEach(book => {
    const title = book.volumeInfo.title;
    console.log(title)
    const authors = book.volumeInfo.authors ? book.volumeInfo.authors.join(', ') : 'Unknown Author';
    const thumbnail = book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.thumbnail : 'https://via.placeholder.com/128x196?text=No+Image';
    const previewLink = book.volumeInfo.previewLink;
    const bookDiv = document.createElement('div');
    bookDiv.classList.add("thumbnail");
    const bookInfo = `
      <img src="${thumbnail}" alt="${title}" class="thumbnail" style = "width: 200px; height:auto; ">
      <div class="info">
        <h2>${title}</h2>
        <p>By: ${authors}</p>
        <a href="${previewLink}" target="_blank">Info</a>
      </div>
    `;
    bookDiv.innerHTML = bookInfo;
    bookDiv.style.color = "white"
    bookDiv.style.width = "290px"
    bookDiv.style.height = "470px"
    bookDiv.style.padding = "10px"
    bookDiv.style.border = "1px solid black";
    bookDiv.style.borderColor = "navy blue"; 
    bookDiv.style.borderWidth = "5px"; 
    bookDiv.style.borderRadius = "7px"; 
    resultsDiv.appendChild(bookDiv);
  });
console.log({bookInfo})
}
function displayAllBooks() {
  const defaultQuery = 'Vampire Diaries';
  const url = `https://www.googleapis.com/books/v1/volumes?q=${defaultQuery}`;
  fetch(url)
   .then(response => response.json())
   .then(data => {
      console.log(displayResults(data.items));
    })
   .catch(error => {
      console.error('Error fetching books:', error);
    });
}


document.addEventListener('DOMContentLoaded', () => {
  displayAllBooks();
});
document.getElementById('searchInput').addEventListener('input', function() {
  if (this.value.trim() === '') {
    displayAllBooks();
  }
});

function displayBTS() {
  const defaultQuery = 'BTS';
  const url = `https://www.googleapis.com/books/v1/volumes?q=${defaultQuery}`;
  fetch(url)
   .then(response => response.json())
   .then(data => {
      console.log(displayResults(data.items));
    })
   .catch(error => {
      console.error('Error fetching books:', error);
    });
}

function displayRomance() {
  const defaultQuery = 'romance';
  const url = `https://www.googleapis.com/books/v1/volumes?q=${defaultQuery}`;
  fetch(url)
   .then(response => response.json())
   .then(data => {
      console.log(displayResults(data.items));
    })
   .catch(error => {
      console.error('Error fetching books:', error);
    });
}
function displayHorror() {
  const defaultQuery = 'horror';
  const url = `https://www.googleapis.com/books/v1/volumes?q=${defaultQuery}`;
  fetch(url)
   .then(response => response.json())
   .then(data => {
      console.log(displayResults(data.items));
    })
   .catch(error => {
      console.error('Error fetching books:', error);
    });
}
function displayMagazines() {
  const defaultQuery = 'magazines';
  const url = `https://www.googleapis.com/books/v1/volumes?q=${defaultQuery}`;
  fetch(url)
   .then(response => response.json())
   .then(data => {
      console.log(displayResults(data.items));
    })
   .catch(error => {
      console.error('Error fetching books:', error);
    });
}
function displayCode() {
  const defaultQuery = 'code';
  const url = `https://www.googleapis.com/books/v1/volumes?q=${defaultQuery}`;
  fetch(url)
   .then(response => response.json())
   .then(data => {
      console.log(displayResults(data.items));
    })
   .catch(error => {
      console.error('Error fetching books:', error);
    });
}
function displayScienceFiction() {
  const defaultQuery = 'Science fiction';
  const url = `https://www.googleapis.com/books/v1/volumes?q=${defaultQuery}`;
  fetch(url)
   .then(response => response.json())
   .then(data => {
      console.log(displayResults(data.items));
    })
   .catch(error => {
      console.error('Error fetching books:', error);
    });
}