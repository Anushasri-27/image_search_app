import React, { createContext } from "react";
import Header from "../component/Header";
import SearchField from "../component/SearchField";
import Images from "../component/Images";
import useAxios from "../hooks/useAxios";
//create context
export const ImageContext = createContext();

const Home = () => {
  const { isLoading, fetchData, response, error } = useAxios(
    `search/photos?page=1&query=office&client_id=${process.env.REACT_APP_ACCESS_KEY}`
  );

  const value = {
    isLoading,
    fetchData,
    response,
    error
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
