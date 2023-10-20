import React, { createContext, useState } from "react";
import Header from "../component/Header";
import SearchField from "../component/SearchField";
import Images from "../component/Images";
import useAxios from "../hooks/useAxios";
//create context
export const ImageContext = createContext();

const Home = () => {
  const [searchImage ,setSearchImage]=  useState("");
  const { isLoading, fetchData, response, error } = useAxios(
    `search/photos?page=1&query=random&client_id=${process.env.REACT_APP_ACCESS_KEY}`
  );

  console.log(response);

  const value = {
    isLoading,
    fetchData,
    response,
    error,
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
      </ImageContext.Provider>
    </div>
  );
};

export default Home;
