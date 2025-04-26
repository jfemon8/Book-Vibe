import React from "react";
import Banner from "../../components/Banner/Banner";
import Books from "../../components/Books/Books";
import { useLoaderData } from "react-router";

const Home = () => {
  const books = useLoaderData();

  return (
    <div className="mx-10 lg:mx-20">
      <Banner></Banner>
      <Books books={books}></Books>
    </div>
  );
};

export default Home;
