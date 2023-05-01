import React from "react";
import Navbar from "../Navbar";
import Searchbar from "./Searchbar";
import CrecheSlider1 from "./CrecheSlider";
import Footer from "../HomePage/Footer";


const Search = () => {
  return (
    <>
      <div>
        <Navbar />
      </div>
      <div className=" max-w-[1300px] mx-auto">
        <Searchbar />
     
        <CrecheSlider1 />
        <CrecheSlider1 />
        <Footer />
        
      </div>
    </>
  );
};

export default Search;
