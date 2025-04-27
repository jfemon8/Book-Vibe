import { ChevronDown } from "lucide-react";
import React, { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { useLoaderData } from "react-router";
import { getData } from "../../utilities/manageLocalStorage";
import ReadBooks from "../../components/ReadBooks/ReadBooks";

const ListedBook = () => {
  const allBooks = useLoaderData();

  const readlist = allBooks.filter((book) =>
    getData("read")?.includes(book.bookId)
  );
  const wishlist = allBooks.filter((book) =>
    getData("wishlist")?.includes(book.bookId)
  );

  return (
    <div className="mx-10 lg:mx-20">
      <div className="bg-[#131313]/5 rounded-2xl mt-8 p-8">
        <h1 className="work-sans font-bold text-3xl text-[#131313] text-center">
          Books
        </h1>
      </div>

      <div className="mt-8 text-center work-sans">
        <button
          className="btn bg-[#23BE0A] border-[#23BE0A] hover:bg-white hover:text-[#23BE0A] text-lg font-semibold"
          popoverTarget="popover-1"
          style={{ anchorName: "--anchor-1" }}
        >
          Sort By <ChevronDown />
        </button>
        <ul
          className="dropdown menu w-40 rounded-box bg-[#131313]/5 shadow-sm"
          popover="auto"
          id="popover-1"
          style={{ positionAnchor: "--anchor-1" }}
        >
          <li className="text-[#131313]/80">
            <a>Rating</a>
          </li>
          <li className="text-[#131313]/80">
            <a>Number of pages</a>
          </li>
          <li className="text-[#131313]/80">
            <a>Publisher year</a>
          </li>
        </ul>
      </div>

      <div className="work-sans my-8">
        <Tabs>
          <TabList>
            <Tab>Read Books</Tab>
            <Tab>Whitelist Books</Tab>
          </TabList>

          <TabPanel>
            <ReadBooks readlist={readlist}></ReadBooks>
          </TabPanel>
          <TabPanel>
            <h2>Any content 2</h2>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default ListedBook;
