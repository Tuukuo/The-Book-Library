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
      const authors = book.volumeInfo.authors ? book.volumeInfo.authors.join(', ') : 'Unknown Author';
      const thumbnail = book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.thumbnail : 'https://via.placeholder.com/128x196?text=No+Image';
      const previewLink = book.volumeInfo.previewLink;
      const bookDiv = document.createElement('div');
      bookDiv.classList.add('book');
      const bookInfo = `
        <img src="${thumbnail}" alt="${title}" class="thumbnail">
        <div class="info">
          <h2>${title}</h2>
          <p>By: ${authors}</p>
          <a href="${previewLink}" target="_blank">Preview</a>
        </div>
      `;
      bookDiv.innerHTML = bookInfo;
      
      // bookDiv.style.flexDirection = "row"
      // bookDiv.style.width = "300px"
      // bookDiv.style.height = "auto"
      // bookDiv.style.padding = "10px"
      // bookDiv.style.maxWidth= "400px"

      resultsDiv.appendChild(bookDiv);
    });
  console.log({bookInfo})
  }