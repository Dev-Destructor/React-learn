import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import Book from "../components/book/Book";
import BookList from "../components/book/BookList";

function Router() {
  return (
    <div>
      <h1>This is Router</h1>
      <ul>
        <li>
          <Link to="/router/book">Books</Link>
        </li>
      </ul>
      <Routes>
        <Route path="/book" element={<BookList />} />
        <Route path="/book/:id" element={<Book />} />
      </Routes>
    </div>
  );
}

export default Router;
