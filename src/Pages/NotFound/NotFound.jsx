import React from "react";
import { Link } from "react-router";

const NotFound = () => {
  return (
    <section className="py-10 bg-white font-serif">
      <div className="container mx-auto px-4">
        <div className="flex justify-center">
          <div className="text-center max-w-xl">
            <h1 className="text-6xl font-bold text-gray-800">404</h1>
            <div
              className="h-[400px] bg-center bg-no-repeat bg-cover flex items-center justify-center"
              style={{
                backgroundImage:
                  "url('https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif')",
              }}
            ></div>

            <div className="mt-[-50px]">
              <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 mb-2">
                Looks like you're lost
              </h2>
              <p className="text-gray-600 mb-6">
                The page you are looking for is not available!
              </p>
              <Link
                to="/"
                className="inline-block bg-green-600 hover:bg-green-800 text-white font-medium py-2 px-6 rounded transition"
              >
                Go to Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NotFound;
