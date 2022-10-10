import React from "react";
import { Link, useSearchParams } from "react-router-dom";

function BookList() {
  const [searchParams, setSearchParams] = useSearchParams({ n: 3 });
  const number = searchParams.get("n");

  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/router/book/1">Book 1</Link>
          </li>
          <li>
            <Link to="/router/book/2">Book 2</Link>
          </li>
          <li>
            <Link to={`/router/book/${number}`}>Book {number}</Link>
          </li>
        </ul>
      </nav>
      <input
        type="number"
        onChange={(e) => {
          setSearchParams({ n: e.target.value });
        }}
      />
    </div>
  );
}

export default BookList;
