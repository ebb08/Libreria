document.addEventListener('DOMContentLoaded', () => {
  fetch('https://raw.githubusercontent.com/ebb08/libreria/master/back/books.json')
      .then(response => response.json())
      .then(data => {
          const booksContainer = document.getElementById('book-container');

          data.forEach(book => {
              const bookElement = document.createElement('div');
              bookElement.className = 'book';
              bookElement.innerHTML = `<div class="book-img"><img src="${book.imageUrl}" alt="${book.title}"></div>
                  <div class="book-info">
                      <h2>${book.title}</h2>
                      <p><strong>Autor:</strong> ${book.author}</p>
                      <p>${book.description}</p>
                  </div>
              `;
              booksContainer.appendChild(bookElement);
          });
      })
      .catch(error => console.error('Error al cargar los datos:', error));
});
