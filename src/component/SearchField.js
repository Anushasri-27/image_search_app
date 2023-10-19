import React from "react";
import '../App.css';

const SearchField = () => {
  return (
    <div>
      <input
        type="search"
        className="search-input bg-gray-50 border border-emerald-300 text-sm w-3/12 indent-2 p-2.5 outline-none focus:border-blue-500 focus:ring-2 rounded-tl rounded-bl "
        placeholder="Search Your Image Here....."
     />
      <button
      className="search-btn bg-emerald-600 px-6 text-white font-bold rounded-tr rounded-br focus:ring-2 focus:ring-blue-300 disabled:bg-gray-400"
      >search</button>
    </div>
  );
};

export default SearchField;
