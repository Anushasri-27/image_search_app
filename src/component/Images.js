import React, { useContext } from "react";
import { ImageContext } from "../page/Home";
import ImageCard from "./ImageCard";
import Skeleton from "./Skeleton";
const Images = () => {
  const {response , isLoading , searchImage} =useContext(ImageContext);

  return (
    <>
      <h1 className="search-heading text-center mt-6  text-2xl">Result for {searchImage || "search" }</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 my-10 max-w-7xl mx-auto px-4">
        {isLoading ? <Skeleton item={10} />  :response.map((data,key)=> <ImageCard key={key} data={data} />)}
      </div>
    </>
  );
};

export default Images;
