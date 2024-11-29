// Select necessary DOM elements
const form = document.getElementById('book-form');
const titleInput = document.getElementById('title');
const authorInput = document.getElementById('author');
const isbnInput = document.getElementById('isbn');
const bookList = document.getElementById('book-list');

// Add event listener for form submission
form.addEventListener('submit', function (e) {
  e.preventDefault(); // Prevent default form submission

  // Get input values
  const title = titleInput.value.trim();
  const author = authorInput.value.trim();
  const isbn = isbnInput.value.trim();

  // Validate inputs
  if (title === '' || author === '' || isbn === '') {
    alert('Please fill in all fields');
    return;
  }

  // Create a new row
  const row = document.createElement('tr');

  // Add table cells for title, author, and ISBN
  row.innerHTML = `
    <td>${title}</td>
    <td>${author}</td>
    <td>${isbn}</td>
    <td><button class="delete">Clear</button></td>
  `;

  // Append the row to the table
  bookList.appendChild(row);

  // Clear form inputs
  titleInput.value = '';
  authorInput.value = '';
  isbnInput.value = '';
});

// Add event listener for delete button
bookList.addEventListener('click', function (e) {
  if (e.target.classList.contains('delete')) {
    if (confirm('Are you sure you want to delete this book?')) {
      const row = e.target.parentElement.parentElement; // Get the <tr>
      bookList.removeChild(row); // Remove the row
    }
  }
});
