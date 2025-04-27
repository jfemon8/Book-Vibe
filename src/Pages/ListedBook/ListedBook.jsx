import { ChevronDown } from "lucide-react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { useLoaderData } from "react-router";
import {
  getData,
  removeData,
  setData,
} from "../../utilities/manageLocalStorage";
import ReadBooks from "../../components/ReadBooks/ReadBooks";
import WishlistBooks from "../../components/wishlist/wishlistBooks";
import { toast, ToastContainer } from "react-toastify";
import Swal from "sweetalert2";
import { useEffect, useState } from "react";

const ListedBook = () => {
  const allBooks = useLoaderData();
  const [readlist, setReadlist] = useState([]);
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    const readlisted = allBooks.filter((book) =>
      getData("read")?.includes(book.bookId)
    );
    setReadlist(readlisted);

    const wishlisted = allBooks.filter((book) =>
      getData("wishlist")?.includes(book.bookId)
    );
    setWishlist(wishlisted);
  }, [allBooks]);

  const readNotify = () => toast("This book is already added to Read list!");

  const handleReadBook = (id) => {
    const readData = getData("read");
    const wishlistData = getData("wishlist");
    if (readData.includes(id)) {
      readNotify();
      return;
    }
    if (wishlistData.includes(id)) {
      removeData(id, "wishlist");
      setWishlist((wishlist) => wishlist.filter((book) => book.bookId !== id));
    }
    setData(id, "read");
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Book has been added to Read",
      showConfirmButton: false,
      timer: 1500,
    });
    const addedBook = allBooks.find((book) => book.bookId === id);
    if (addedBook) {
      setReadlist((readlist) => [...readlist, addedBook]);
    }
  };

  const handleSort = (sortValue) => {
    if (sortValue === "rating") {
      const sortedRead = [...readlist].sort((a, b) => a.rating - b.rating);
      const sortedWishlist = [...wishlist].sort((a, b) => a.rating - b.rating);
      setReadlist(sortedRead);
      setWishlist(sortedWishlist);
    } else if (sortValue === "page") {
      const sortedRead = [...readlist].sort(
        (a, b) => a.totalPages - b.totalPages
      );
      const sortedWishlist = [...wishlist].sort((a, b) => a.rating - b.rating);
      setReadlist(sortedRead);
      setWishlist(sortedWishlist);
    } else if (sortValue === "year") {
      const sortedRead = [...readlist].sort(
        (a, b) => a.yearOfPublishing - b.yearOfPublishing
      );
      const sortedWishlist = [...wishlist].sort((a, b) => a.rating - b.rating);
      setReadlist(sortedRead);
      setWishlist(sortedWishlist);
    }
  };

  return (
    <div className="mx-10 lg:mx-20">
      <ToastContainer />
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
            <a onClick={() => handleSort("rating")}>Rating</a>
          </li>
          <li className="text-[#131313]/80">
            <a onClick={() => handleSort("page")}>Number of pages</a>
          </li>
          <li className="text-[#131313]/80">
            <a onClick={() => handleSort("year")}>Publisher year</a>
          </li>
        </ul>
      </div>

      <div className="work-sans my-8">
        <Tabs>
          <TabList>
            <Tab>Read Books</Tab>
            <Tab>Wishlist Books</Tab>
          </TabList>

          <TabPanel>
            <ReadBooks readlist={readlist}></ReadBooks>
          </TabPanel>
          <TabPanel>
            <WishlistBooks
              wishlist={wishlist}
              handleReadBook={handleReadBook}
            ></WishlistBooks>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default ListedBook;
