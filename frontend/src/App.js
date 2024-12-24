import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import AddBook from "./components/AddBook";
import BookUpdate from "./components/BookUpdate";
import DisplayBooks from "./components/DisplayBooks";
import DeleteBook from "./components/DeleteBook";
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';


export default function App() {
    return (
        <Router>
            <div className="container">
                <h2>Online Library Management</h2>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <Link to="/" className="navbar-brand">Add Book</Link>
                    <Link to="/display-books" className="navbar-brand">Display Books</Link>
                </nav>
                <Switch>
                    <Route path="/" exact component={AddBook} />    
                    <Route path="/display-books" component={DisplayBooks} />
                    <Route path="/edit/:id" component={BookUpdate} />
                    <Route path="/delete/:id" component={DeleteBook} />
                </Switch>
            </div>
        </Router>
    );
}
