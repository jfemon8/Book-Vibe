import { createBrowserRouter } from "react-router";
import Root from "../Pages/Root/Root";
import Home from "../Pages/Home/Home";
import ListedBook from "../Pages/ListedBook/ListedBook";
import BookDetails from "../Pages/BookDetails/BookDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "listedBook",
        Component: ListedBook,
      },
      {
        path: "bookDetails/:id",
        Component: BookDetails,
        loader: () => fetch("/booksData.json").then((res) => res.json()),
      },
    ],
  },
]);
