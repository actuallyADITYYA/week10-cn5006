import React, { useState } from "react";
import axios from "axios";

export default function AddBook() {
    const [book, setBook] = useState({
        title: "",
        author: "",
        topic: "",
        format: "Hard Copy",
        year: 2000,
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setBook({ ...book, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post("http://localhost:5000/api/books/add", book);
            alert("Book added successfully!");
        } catch (error) {
            console.error("Error adding book:", error.message);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h3>Add Book</h3>
            <label>Title:</label>
            <input name="title" value={book.title} onChange={handleChange} />
            <label>Author:</label>
            <input name="author" value={book.author} onChange={handleChange} />
            <label>Topic:</label>
            <input name="topic" value={book.topic} onChange={handleChange} />
            <label>Format:</label>
            <select name="format" value={book.format} onChange={handleChange}>
                <option>Hard Copy</option>
                <option>Electronic Copy</option>
            </select>
            <label>Year:</label>
            <input name="year" type="number" value={book.year} onChange={handleChange} />
            <button type="submit">Add Book</button>
        </form>
    );
}
