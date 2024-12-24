const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const Books = require('./BooksSchema');
require('./MongoDBConnect');

const app = express();
const PORT = process.env.PORT || 5001;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

app.get('/allbooks', async (req, res) => {
    const books = await Books.find();
    res.json(books);
});

app.get('/getbook/:id', async (req, res) => {
    const book = await Books.findById(req.params.id);
    res.json(book);
});

app.post('/addbooks', async (req, res) => {
    const newBook = new Books(req.body);
    try {
        await newBook.save();
        res.status(200).json({ message: 'Book added successfully' });
    } catch (error) {
        res.status(400).send('Failed to add the book');
    }
});

app.post('/updatebook/:id', async (req, res) => {
    const updatedData = req.body;
    try {
        await Books.findByIdAndUpdate(req.params.id, updatedData);
        res.status(200).json({ message: 'Book updated successfully' });
    } catch (error) {
        res.status(400).send('Failed to update the book');
    }
});

app.post('/deleteBook/:id', async (req, res) => {
    try {
        await Books.findByIdAndDelete(req.params.id);
        res.status(200).send('Book deleted');
    } catch (error) {
        res.status(400).send('Failed to delete the book');
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
