import ProductCard from "../ProductCard";



const Products = () => {
  const Banner = () => {
    return (
      <div className="bg-blue-500 text-white text-center p-5 rounded">
        <div>
          <div className="my-2 text-lg">September 12-22</div>
          <div className="my-2 text-2xl font-bold mb-5">
            Enjoy free home delivery in this summer
          </div>
          <div className="my-2 text-lg">
            Designer Dresses - Pick from trendy Designer Dress.
          </div>
          <button className="bg-orange-500 text-white px-4 py-2 mt-3 rounded hover:bg-orange-600">
            Get Started
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className="p-5 h-[78vh] md:h-[90vh] overflow-auto">
      <h1 className="text-black text-2xl font-bold mb-5">Products</h1>
      <div>{Banner()}</div>
      <div className="grid grid-cols-12">
      <ProductCard/>
      <ProductCard/>
      <ProductCard/>
      </div>
    </div>
  );
};

export default Products;
