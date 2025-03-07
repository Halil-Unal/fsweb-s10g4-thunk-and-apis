import React from "react";
import { removeFav } from "../actions";
import { useSelector, useDispatch } from "react-redux";

function FavItem(props) {
const dispatch = useDispatch();
const {data} =props;
console.log(data);
  const cardclickdel = () => {
    
   
    dispatch(removeFav(data.Year));
   
  };
  return (
    <div className="bg-white shadow hover:shadow-lg p-3 pl-5 flex items-center group transition-all">
      <div className="flex-1 pr-4">{data.Year}</div>
      <button
       onClick={cardclickdel}
        className="transition-all px-3 py-2 block text-sm rounded bg-rose-700 text-white opacity-30 group-hover:opacity-100"
      >
        Çıkar
      </button>
    </div>
  );
}

export default FavItem;
