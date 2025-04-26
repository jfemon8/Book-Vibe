import { Star } from "lucide-react";
import React from "react";

const Book = ({ book }) => {
  const { tags, bookName, author, category, rating, image } = book;
  return (
    <div className="border border-[#131313]/15 rounded-2xl p-6">
      <div className="bg-[#F3F3F3] rounded-2xl w-full h-60 flex items-center justify-center p-4">
        <img
          className="max-h-full max-w-full object-contain"
          src={image}
          alt="Book Image"
        />
      </div>
      <div className="mt-6 flex gap-3 flex-wrap">
        {tags.map((tag) => (
          <button className="px-4 py-2 bg-[#23BE0A]/5 rounded-3xl text-[#23BE0A] work-sans font-medium">
            {tag}
          </button>
        ))}
      </div>
      <h1 className="mt-4 text-[#131313] playfair-display font-bold text-2xl">
        {bookName}
      </h1>
      <p className="mt-4 text-[#131313]/80 work-sans font-medium">
        By: {author}
      </p>
      <hr className="my-5 border-dashed border-[#131313]/15" />
      <div className="flex justify-between items-center work-sans font-medium text-[#131313]/80">
        <p>{category}</p>
        <p className="flex gap-1 items-center">
          {rating} <Star />
        </p>
      </div>
    </div>
  );
};

export default Book;
