import React from "react";
import { useParams, useHistory } from "react-router-dom";
import axios from "axios";

export default function DeleteBook() {
    const { id } = useParams();
    const history = useHistory();

    const handleDelete = async () => {
        try {
            await axios.delete(`http://localhost:5000/api/books/delete/${id}`);
            alert("Book deleted successfully!");
            history.push("/display-books");
        } catch (error) {
            console.error("Error deleting book:", error.message);
        }
    };

    return (
        <div>
            <h3>Are you sure you want to delete this book?</h3>
            <button onClick={handleDelete}>Yes</button>
            <button onClick={() => history.push("/display-books")}>No</button>
        </div>
    );
}
