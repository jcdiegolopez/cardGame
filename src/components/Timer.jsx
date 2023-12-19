import { useEffect, useState } from "react";


export default function Timer({time}){
  
    return(
        <div className="items-stretch flex justify-between gap-5">
          <div className="text-white text-2xl font-semibold capitalize">
            Time: {time} seconds
          </div>
          <div className="text-white text-2xl font-semibold capitalize"></div>
        </div>
    );
}