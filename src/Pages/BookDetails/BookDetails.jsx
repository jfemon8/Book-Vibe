import React from "react";
import { useLoaderData, useParams } from "react-router";

const BookDetails = () => {
  const { id } = useParams();
  const parsedId = parseInt(id);
  const bookList = useLoaderData();

  const book = bookList.find((b) => b.bookId == parsedId);
  const {
    image,
    bookName,
    author,
    category,
    review,
    tags,
    totalPages,
    publisher,
    yearOfPublishing,
    rating,
  } = book;

  return (
    <div className="mx-10 lg:mx-20 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 justify-between items-center work-sans gap-8">
        <div className="bg-[#131313]/5 rounded-2xl p-16 h-dvh flex justify-center items-center">
          <img
            className="h-full w-auto object-contain rounded"
            src={image}
            alt="Book Image"
          />
        </div>
        <div>
          <h1 className="playfair-display font-bold text-4xl text-[#131313]">
            {bookName}
          </h1>
          <p className="text-[#131313]/80 font-medium text-xl mt-4">
            By: {author}
          </p>
          <hr className="my-4 border border-[#131313]/15" />
          <p className="text-[#131313]/80 font-medium text-xl">{category}</p>
          <hr className="my-4 border border-[#131313]/15" />
          <p className="text-[#131313]">
            <span className="font-bold">Review: </span>
            <span className="opacity-70">{review}</span>
          </p>
          <p className="mt-4 flex gap-3 flex-wrap items-center">
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
          <hr className="my-4 border border-[#131313]/15" />
          <p>
            <span className="text-[#131313]/70">Number of Pages: </span>
            <span className="font-semibold">{totalPages}</span>
          </p>
          <p className="mt-3">
            <span className="text-[#131313]/70">Publisher: </span>
            <span className="font-semibold">{publisher}</span>
          </p>
          <p className="mt-3">
            <span className="text-[#131313]/70">Year of Publishing: </span>
            <span className="font-semibold">{yearOfPublishing}</span>
          </p>
          <p className="mt-3">
            <span className="text-[#131313]/70">Rating: </span>
            <span className="font-semibold">{rating}</span>
          </p>

          <div className="mt-8 flex gap-4">
            <a className="btn hover:bg-[#131313] border-[#131313]/30 text-[#131313] bg-white hover:text-white">
              Read
            </a>
            <a className="btn bg-[#59C6D2] border-[#59C6D2] text-white hover:bg-white hover:text-[#59C6D2]">
              Wishlist
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
