import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function BookUpdate() {
    const { id } = useParams();
    const [book, setBook] = useState({});

    useEffect(() => {
        axios.get(`http://localhost:5000/api/books/${id}`)
            .then(res => setBook(res.data))
            .catch(err => console.error("Error fetching book:", err.message));
    }, [id]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setBook({ ...book, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.put(`http://localhost:5000/api/books/update/${id}`, book);
            alert("Book updated successfully!");
        } catch (error) {
            console.error("Error updating book:", error.message);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h3>Update Book</h3>
            <input name="title" value={book.title || ""} onChange={handleChange} />
            <input name="author" value={book.author || ""} onChange={handleChange} />
            <button type="submit">Update</button>
        </form>
    );
}
