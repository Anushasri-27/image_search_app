import React from "react";
import '../App.css';

const Header = ({children}) => {
  return (
    <div className="header-wrap bg-gray-500 flex items-center ">
      <div className="blurs text-center py-20">
         <h1 className="text-white text-2xl font-bold mb-5   ">Search Image Here</h1>
         {children}
      </div>
    </div>
  );
};

export default Header;
