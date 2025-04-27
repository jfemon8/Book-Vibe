import { Facebook, GithubIcon, Heart, Linkedin } from "lucide-react";
import React from "react";
import { removeAll } from "../../utilities/manageLocalStorage";
import { Link } from "react-router";
import Swal from "sweetalert2";

const Footer = () => {
  const handleReset = () => {
    removeAll("read");
    removeAll("wishlist");
    Swal.fire({
      title: "Data Reset!",
      text: "Read Books and Wishlist Books have been reset!",
      icon: "success",
    });
  };

  return (
    <div className="bg-black text-white p-10 lg:px-20 work-sans text-sm lg:text-lg flex flex-col lg:flex-row justify-between items-center gap-4">
      <div>
        <h1 className="flex gap-1 items-center">
          Made with <Heart /> by{" "}
          <a
            href="https://bpemon.netlify.app/"
            target="_blank"
            className="hover:text-[#23BE0A] hover:italic"
          >
            Emon
          </a>
        </h1>
        <div className="flex gap-4 justify-center items-center mt-4">
          <a
            className="p-1 hover:bg-white hover:text-black rounded"
            href="https://github.com/jfemon8"
            target="_blank"
          >
            <GithubIcon />
          </a>
          <a
            className="p-1 hover:bg-white hover:text-black rounded"
            href="https://www.linkedin.com/in/jfemon/"
            target="_blank"
          >
            <Linkedin />
          </a>
          <a
            className="p-1 hover:bg-white hover:text-black rounded"
            href="https://facebook.com/jfemon"
            target="_blank"
          >
            <Facebook />
          </a>
        </div>
      </div>
      <div>
        <Link to={"/"}>
          <button
            onClick={handleReset}
            className="cursor-pointer hover:text-[#59C6D2] hover:italic"
          >
            Reset Data
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Footer;
