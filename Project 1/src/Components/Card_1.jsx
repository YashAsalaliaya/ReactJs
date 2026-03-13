
// import {GalleryVerticalEnd, Plus, UserRound} from "lucide-react";
import React from "react";
import { ArrowDownRight, GalleryVerticalEnd, Plus } from "lucide-react";

const Card_1 = ({ data }) => {

  return (
    <div className="card w-full h-auto max-w-[20rem] bg-gray-600 rounded-3xl p-3 shadow-2xl">

      {/* Product Image */}
      <img
        src={data.photo}
        alt={data.name}
        className="w-full h-60 object-contain rounded-3xl bg-white"
      />

      {/* Content */}
      <div className="content px-4 py-2">
        <h2 className="text-2xl font-bold my-2">{data.name}</h2>
        <p className="text-md mb-1">{data.tagline}</p>
        <p className="text-sm mb-2">{data.description}</p>
      </div>

      {/* Price + Button */}
      <div className="numbers py-4 px-2 flex justify-between items-center">

        <p className="font-medium flex items-center gap-2">
          <GalleryVerticalEnd className="inline-block font-bold"/>
          ${data.price}
        </p>

        <button className="rounded-full px-5 py-2 bg-white text-black flex items-center gap-2">
          Buy Now
         <ArrowDownRight className="inline-block font-bold" />
        </button>

      </div>

    </div>
  );
};

export default Card_1;