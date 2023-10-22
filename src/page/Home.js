import React, { createContext, useState } from "react";
import Header from "../component/Header";
import SearchField from "../component/SearchField";
import Images from "../component/Images";
import useAxios from "../hooks/useAxios";
import Pagination from "../component/Pagination";
//create context
export const ImageContext = createContext();

const Home = () => {
  const [searchImage ,setSearchImage]=  useState("");
  const [currPage , setCurrPage] = useState(1);
  const { isLoading, fetchData, response, error , page} = useAxios(
    `search/photos?page=${currPage}&query=random&client_id=${process.env.REACT_APP_ACCESS_KEY}`
  );

 console.log(currPage)

  const value = {
    isLoading,
    fetchData,
    response,
    page,
    error,
    currPage,
    setCurrPage,
    setSearchImage,
    searchImage
  };
 

  return (
    <div>
      <ImageContext.Provider value={value}>
        <Header>
          <SearchField />
        </Header>
        <Images />
        <Pagination />
      </ImageContext.Provider>
    </div>
  );
};

export default Home;
