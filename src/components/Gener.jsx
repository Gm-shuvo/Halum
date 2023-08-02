import { useState } from "react";
import { useGenericData } from "../utils/RequestData";

const Gener = ({genres}) => {
  
  return (
    <div className="flex mt-2">
      {genres?.map((item) => (
        <span className="mr-4 text-sm  ring-1 ring-green-400 px-2 py-1 rounded" key={item.id}>{item.name}</span>
      ))}
    </div>
  );
}

export default Gener;