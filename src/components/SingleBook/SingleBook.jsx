import { BookCheck, BookOpenCheck, BookOpenText } from "lucide-react";
import React from "react";

const SingleBook = ({ book }) => {
  const {
    image,
    bookName,
    author,
    tags,
    yearOfPublishing,
    totalPages,
    publisher,
    category,
    rating,
  } = book;

  return (
    <div className="border border-[#131313]/15 rounded-2xl p-3 lg:p-6 grid lg:grid-cols-3 gap-6 items-center justify-center">
      <div className="bg-[#131313]/5 rounded-2xl p-6 h-60 w-60 flex justify-center items-center">
        <img
          className="h-full w-auto object-contain"
          src={image}
          alt="Book Image"
        />
      </div>
      <div className="col-span-2 work-sans">
        <h1 className="playfair-display font-bold text-2xl text-[#131313]">
          {bookName}
        </h1>
        <p className="text-[#131313] font-medium mt-4">By: {author}</p>
        <div className="mt-4 flex gap-3 flex-wrap items-center">
          <p className="flex gap-3 flex-wrap items-center">
            <div className="font-bold">Tag </div>
            {tags.map((tag, index) => (
              <button
                key={index}
                className="px-4 py-2 bg-[#23BE0A]/5 rounded-3xl text-[#23BE0A] work-sans font-medium"
              >
                #{tag}
              </button>
            ))}
          </p>
          <p className="flex gap-3 items-center text-[#424242]">
            <BookOpenCheck /> Year of Publishing: {yearOfPublishing}
          </p>
        </div>
        <div className="text-[#131313]/60 flex gap-6 items-center flex-wrap mt-4">
          <p className="flex gap-3 items-center">
            <BookCheck /> Publisher: {publisher}
          </p>
          <p className="flex gap-3 items-center">
            <BookOpenText /> Page: {totalPages}
          </p>
        </div>
        <hr className="border border-[#131313]/15 my-4" />
        <div className="flex flex-wrap gap-3">
          <button className="py-2.5 px-5 rounded-3xl bg-[#328EFF]/15 text-[#328EFF]">
            Category: {category}
          </button>
          <button className="py-2.5 px-5 rounded-3xl bg-[#FFAC33]/15 text-[#FFAC33]">
            Rating: {rating}
          </button>
          <button className="py-2 px-5 rounded-3xl bg-[#23BE0A] border border-[#23BE0A] text-white hover:bg-white hover:text-[#23BE0A] cursor-pointer">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleBook;
