import ProductCard from "../ProductCard";

const Favourites = () => {
  return (
    <div className="p-5 h-[78vh] md:h-[90vh] overflow-auto">
      <h1 className="text-black text-2xl font-bold mb-5">Favourites</h1>
      <div className="grid grid-cols-12">
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </div>
  );
};

export default Favourites;
