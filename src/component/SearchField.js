import React, { useContext, useState } from "react";
import '../App.css';
import { ImageContext } from "../page/Home";


const SearchField = () => {
  const [searchValue ,setSearchValue] = useState("");
  const {fetchData ,setSearchImage} = useContext(ImageContext);
  const handleInputChange = (e) =>{
     setSearchValue(e.target.value);
    
   
  }
  const handleBtnSearch=()=>{
    fetchData(`search/photos?page=1&query=${searchValue}&client_id=${process.env.REACT_APP_ACCESS_KEY}`)
    setSearchValue("");
    setSearchImage(searchValue);
   

  }
  const handleEnterSearch = e =>{
    if(e.key === 'Enter'){
      fetchData(`search/photos?page=1&query=${searchValue}&client_id=${process.env.REACT_APP_ACCESS_KEY}`)
      setSearchValue("");
      setSearchImage(searchValue);
    }
  }
  return (
    <div>
      <input
        type="search"
        className="search-input bg-gray-50 border border-emerald-300 text-sm w-3/12 indent-2 p-2.5 outline-none  rounded-tl rounded-bl "
        placeholder="Search Your Image Here....."
        value={searchValue}
        onChange={handleInputChange}
        onKeyDown={handleEnterSearch}
     />
      <button
      className="search-btn bg-emerald-600 px-6 text-white font-bold rounded-tr rounded-br disabled:bg-gray-400"
      onClick={handleBtnSearch}
      disabled={!searchValue}
      >search</button>
    </div>
  );
};

export default SearchField;
