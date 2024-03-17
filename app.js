const express = require('express');
const path = require('path');
const indexRouter = require('./routes/index');

const app = express();
const port = process.env.PORT || 3000;

// Set the view engine to ejs
app.set('view engine', 'ejs');

// Set the views directory
app.set('views', path.join(__dirname, 'views'));

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, 'public')));

// Use routes
app.use('/', indexRouter);

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
    console.log("Press CTRL+C to stop the server.");
}).on('error', (err) => {
    console.error("Failed to start the server:", err);
});