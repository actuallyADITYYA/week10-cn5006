const mongoose = require('mongoose');

const MONG_URI = 'mongodb://localhost:27017/BooksData';
mongoose.connect(MONG_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useFindAndModify: false,
});

const db = mongoose.connection;

db.on('error', (err) => console.error('Error occurred:', err));
db.once('connected', () => {
    console.log('Connected to MongoDB:', MONG_URI);
});

module.exports = db;
