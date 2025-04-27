import React from "react";
import WishlistBook from "./wishlistBook";

const WishlistBooks = ({ wishlist, handleReadBook }) => {
  return (
    <div className="py-8 grid grid-cols-1 gap-6">
      {wishlist.map((book) => (
        <WishlistBook
          key={book.bookId}
          book={book}
          handleReadBook={handleReadBook}
        ></WishlistBook>
      ))}
    </div>
  );
};

export default WishlistBooks;
