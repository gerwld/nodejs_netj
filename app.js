const express = require('express');

// express app
const app = express();

// register new engine
app.set('view engine', 'ejs');

// listen for requests
app.listen(3000);

app.get('/', (req, res) => {
   res.render('index', {title: "home", blogs: []})
});
app.get('/about', (req, res) => {
   res.render('about' , {title: "",})
});
app.get('/blogs/create', (req, res) => {
    res.render('blog' , {title: "",})
 });

// redirects
app.get('/about-me', (req, res) => {
   res.redirect('/about' , {title: "",})
});

app.get('*', (req, res) => {
   res.status(404).render('404' , {title: "",})
});

app.use((_, res) => res.status(400).json({ message: 'Unauthorized' }));
