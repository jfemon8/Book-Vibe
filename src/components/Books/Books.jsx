import React, { useEffect, useState } from "react";
import Book from "../Book/Book";

const Books = () => {
  const [allBooks, setAllBooks] = useState([]);

  useEffect(() => {
    fetch("booksData.json")
      .then((res) => res.json())
      .then((data) => {
        setAllBooks(data);
      });
  }, []);

  return (
    <div className="my-6 lg:my-12">
      <h1 className="text-center playfair-display font-bold text-4xl text-[#131313]">
        Books
      </h1>
      <div className="py-4 lg:py-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {allBooks.map((book) => (
          <Book key={book.bookId} book={book}></Book>
        ))}
      </div>
    </div>
  );
};

export default Books;
