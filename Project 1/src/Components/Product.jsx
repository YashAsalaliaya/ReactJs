import React from "react";

function Product(data) {
    console.log(data)
  return (
    <div className="flex justify-center items-center min-h-screen gap-10">
      
      <div className="w-80 h-130 bg-white rounded-3xl shadow-xl overflow-hidden">
        
       
        <div className="w-full h-56">
          <img
            src={data.icecream.photo}
            alt="icecream"
            className="w-full h-full object-cover"
          />
        </div>

    
        <div className="p-5 space-y-3">

          
          <h2 className="text-xl font-bold text-gray-800">
            {data.icecream.title}
          </h2>

       
          <div className="flex gap-2 text-xs text-gray-500">
            <span className="bg-gray-100 px-2 py-1 rounded">{data.icecream.tags}</span>
            <span className="bg-gray-100 px-2 py-1 rounded">{data.icecream.tags}</span>
            <span className="bg-gray-100 px-2 py-1 rounded">{data.icecream.tags}</span>
          </div>

      
          <p className="text-gray-500 text-sm">
            {data.icecream.description}
          </p>

         
          <div className="flex gap-2 text-xs">
            <span className="bg-gray-100 px-3 py-1 rounded-full">
              {data.icecream.toppings}
            </span>
            <span className="bg-gray-100 px-3 py-1 rounded-full">
            {data.icecream.toppings}
            </span>
          </div>

       
          <div className="flex items-center justify-between pt-3">
            <div>
              <h3 className="text-lg font-bold text-yellow-500">{data.icecream.price}</h3>
              <p className="text-xs text-gray-400">{data.icecream.delivery}</p>
            </div>

            <button className="bg-yellow-400 hover:bg-yellow-500 text-white px-5 py-2 rounded-full font-semibold">
              Add to cart
            </button>
          </div>

        </div>
      </div>

    </div>
  );
}

export default Product;