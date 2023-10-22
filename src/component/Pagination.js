import React, { useContext } from "react";

import { useReducer } from "react";
import { ImageContext } from "../page/Home";

const Pagination = () => {
    const { page, currPage, setCurrPage } = useContext(ImageContext);

    const reduceFn = (currentState, action) => {
       
        switch (action.type) {
            case "INCREMENT":
                if(currentState ==`${page.total_pages}`){
                    return 1;
                }else{
                    return currentState+1 ;
                }
               
            case "DECREMENT":
                if(currentState === 1){
                    return 1;
                }else{
                    return currentState-1 ;
                }
            default:
                return currentState;
        }
    };

    const [pageAt, dispatch] = useReducer(reduceFn, currPage);
    const onIncrement = () => {
        dispatch({ type: "INCREMENT" });
    };
    const onDecrement = () => {
        dispatch({ type: "DECREMENT" });
    };
   

    return (
       
        <div className="pagination-wrap">
            <button className="btn-page" type="button" onClick={onDecrement}>
                PREV
               { setCurrPage(pageAt)} 
            </button>
            <p className="pagination-text">
                {currPage} of {page.total_pages}{" "}
            </p>
            <button className="btn-page" type="button" onClick={onIncrement}>
                { setCurrPage(pageAt)}
                NEXT
            </button>
        </div>
    );
};

export default Pagination;
