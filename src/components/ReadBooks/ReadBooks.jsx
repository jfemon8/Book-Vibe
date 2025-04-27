import React from "react";
import SingleBook from "../SingleBook/SingleBook";

const ReadBooks = ({ readlist }) => {
  return (
    <div className="py-8 grid grid-cols-1 gap-6">
      {readlist.map((book) => (
        <SingleBook key={book.bookId} book={book}></SingleBook>
      ))}
    </div>
  );
};

export default ReadBooks;
