import React from "react";
import bookImage from "../../assets/images/books.jpg";
import { Link } from "react-router";

const Banner = () => {
  return (
    <div className="my-6 lg:my-12 bg-[#131313]/5 rounded-3xl lg:px-32 lg:py-20 px-16 py-10">
      <div className="flex flex-col lg:flex-row justify-between lg:items-center gap-10">
        <div>
          <h1 className="playfair-display font-bold text-5xl text-[#131313] lg:leading-20">
            Books to freshen up your bookshelf
          </h1>
          <Link to={"listedBook"}>
            <div className="btn bg-[#23BE0A] border-[#23BE0A] text-white hover:bg-white hover:text-[#23BE0A] mt-5 lg:mt-10 work-sans">
              View The List
            </div>
          </Link>
        </div>
        <div>
          <img src={bookImage} alt="Book Image" className="rounded-2xl" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
