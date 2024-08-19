const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Serve the JSON file
app.get('/api/books', (req, res) => {
    res.sendFile(path.join(__dirname, 'books.json'));
});

// Serve static files (e.g., images) from the 'front' directory
app.use(express.static(path.join(__dirname, 'front')));

// Serve the index.html file for the root route
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'front', 'index.html'));
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
