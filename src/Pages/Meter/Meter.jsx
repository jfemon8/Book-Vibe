import React, { useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { scaleOrdinal } from "d3-scale";
import { schemeCategory10 } from "d3-scale-chromatic";
import { getData } from "../../utilities/manageLocalStorage"; // Make sure you have this utility
import { useLoaderData } from "react-router";

const Meter = () => {
  const colors = scaleOrdinal(schemeCategory10).range();
  const allBooks = useLoaderData();
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    const wishlisted = allBooks.filter((book) =>
      getData("wishlist")?.includes(book.bookId)
    );
    setWishlist(wishlisted);
  }, [allBooks]);

  const data = wishlist.map((book) => ({
    name: book.bookName,
    pages: book.totalPages,
  }));

  const getPath = (x, y, width, height) => {
    return `M${x},${y + height}
      C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3} ${
      x + width / 2
    },${y}
      C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${
      y + height
    } ${x + width},${y + height}
      Z`;
  };

  const TriangleBar = (props) => {
    const { fill, x, y, width, height } = props;
    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
  };

  return (
    <div className="mx-10 lg:mx-20 py-12">
      <div className="mx-auto bg-[#131313]/3 rounded-xl lg:rounded-3xl p-5 lg:p-10">
        <ResponsiveContainer width="100%" height={500}>
          <BarChart data={data} margin={{ top: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar
              dataKey="pages"
              fill="#8884d8"
              shape={<TriangleBar />}
              label={{ position: "top" }}
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={colors[index % colors.length]}
                />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Meter;
