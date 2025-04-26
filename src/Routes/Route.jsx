import { createBrowserRouter } from "react-router";
import Root from "../Pages/Root/Root";
import Home from "../Pages/Home/Home";
import ListedBook from "../Pages/ListedBook/ListedBook";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, 
        Component: Home, 
        loader: ()=>fetch("booksData.json") },
      {
        path: "listedBook",
        Component: ListedBook,
      },
    ],
  },
]);
