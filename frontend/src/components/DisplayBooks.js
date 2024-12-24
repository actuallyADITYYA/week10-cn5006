import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function DisplayBooks() {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:5000/api/books")
            .then(res => setBooks(res.data))
            .catch(err => console.error("Error fetching books:", err.message));
    }, []);

    return (
        <div>
            <h3>Book List</h3>
            <ul>
                {books.map(book => (
                    <li key={book._id}>
                        {book.title} - {book.author}
                        <Link to={`/edit/${book._id}`}>Edit</Link>
                        <Link to={`/delete/${book._id}`}>Delete</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

