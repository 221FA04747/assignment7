const express = require('express');
const app = express();
const path = require('path');

// Static files
app.use(express.static(path.join(__dirname, 'public')));

// Body parser middleware for JSON and form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Set Pug as the template engine
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

// Routes
app.get('/', (req, res) => {
    res.render('inner');  // Home page or main dashboard
});

app.get('/login', (req, res) => {
    res.render('login');  // Login page
});

app.get('/registration', (req, res) => {
    res.render('registration');  // Registration page
});

app.get('/dashboard', (req, res) => {
    res.render('dashboard');  // User dashboard
});

app.get('/personal', (req, res) => {
    res.render('personal');  // Personal information page
});

app.get('/about', (req, res) => {
    res.render('about');  // About page
});

app.get('/logout', (req, res) => {
    res.render('logout');  // Logout page
});

// 404 Page not found handler
app.use((req, res) => {
    res.status(404).render('404', { message: 'Page not found' });  // Render a custom 404 Pug template
});

// Start the server
app.listen(5000, () => {
    console.log('Server is running @ http://localhost:5000');
});
