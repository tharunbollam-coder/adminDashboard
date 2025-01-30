import React from 'react';

const ProductCard = () => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg p-4 bg-white mt-5 mr-5 col-span-12 md:col-span-4 lg:col-span-3">
      <img className="w-full h-56" src="https://images-cdn.ubuy.co.in/64fe7f530772ad00be5c190d-apple-watch-se-1st-gen-gps-cellular.jpg" alt="Apple Watch Series 4" />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">Apple Watch Series 4</div>
        <p className="text-gray-700 text-base">$120.00</p>
        <div className="flex items-center justify-between">
          <div className="text-yellow-500">
            <svg className="w-4 h-4 inline-block" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 15l-5.878 3.09 1.122-6.545L.488 6.91l6.564-.955L10 0l2.948 5.955 6.564.955-4.756 4.635 1.122 6.545z" />
            </svg>
            <svg className="w-4 h-4 inline-block" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 15l-5.878 3.09 1.122-6.545L.488 6.91l6.564-.955L10 0l2.948 5.955 6.564.955-4.756 4.635 1.122 6.545z" />
            </svg>
            <svg className="w-4 h-4 inline-block" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 15l-5.878 3.09 1.122-6.545L.488 6.91l6.564-.955L10 0l2.948 5.955 6.564.955-4.756 4.635 1.122 6.545z" />
            </svg>
            <svg className="w-4 h-4 inline-block" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 15l-5.878 3.09 1.122-6.545L.488 6.91l6.564-.955L10 0l2.948 5.955 6.564.955-4.756 4.635 1.122 6.545z" />
            </svg>
            <svg className="w-4 h-4 inline-block text-gray-300" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 15l-5.878 3.09 1.122-6.545L.488 6.91l6.564-.955L10 0l2.948 5.955 6.564.955-4.756 4.635 1.122 6.545z" />
            </svg>
          </div>
          <span className="ml-2 text-gray-600">(131)</span>
        </div>
      </div>
      <div className="px-6 pt-4 pb-2 flex justify-between">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Edit Product
        </button>
        <button className="text-red-500 hover:text-red-700">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
            <path d="M3.172 3.172a4 4 0 015.656 0L10 4.343l1.172-1.171a4 4 0 115.656 5.656L10 15.656l-6.828-6.828a4 4 0 010-5.656z" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
