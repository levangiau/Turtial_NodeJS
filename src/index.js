const express = require('express');
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const path = require('path');
const app = express();
const port = 3000;

// setup static file and scss
app.use(express.static(path.join(__dirname, 'public')));
// setup để lấy được thông tin trong body trong form method='post' của html
app.use(express.urlencoded({
    extended: true
}));
// setup để lấy thông tin bằng phương thức:XMLHttpRequest,fetch,axios,...
app.use(express.json())
// Http logger
// app.use(morgan('combined'));
// Template engine defaul khi tạo

// app.engine('handlebars', handlebars.engine());
// app.set('view engine', 'handlebars');

// =>>> Mở rộng đuôi file cho handle bars <<<=
app.engine('hbs', handlebars.engine({
    extname: '.hbs'
}));
app.set('view engine', 'hbs');
// =>>>End mở rộng đuôi file cho handle bars <<<=
app.set('views', path.join(__dirname, 'resource/views'));
// router
app.get('/', (req, res) => {
    res.render('home');
})

app.get('/news', (req, res) => {
    res.render('news');
})

app.get('/search', (req, res) => {
    res.render('search');
})

app.post('/search', (req, res) => {
    console.log("request", req.body)
    res.send('');
})


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})