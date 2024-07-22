import { useState } from "react";
import { IoMdHeartEmpty, IoMdHeart } from "react-icons/io";

interface ProductCardProps {
  image: string;
  productName: string;
  price: number;
  shopName: string;
}

export default function ProductCard({
  image,
  productName,
  price,
  shopName,
}: ProductCardProps) {
  const [favorite, setFavorite] = useState(false);

  const handleFavorite = () => {
    setFavorite(!favorite);
  }
  return (
    <div className="group relative w-1/5 h-64 rounded-2xl border-gray-300 border-2 my-12 mx-3 hover:cursor-pointer hover:shadow-2xl shadow-gray-800 overflow-hidden flex-none">
      <div className="w-full h-2/3 ">
        <div className="bg-white rounded-full w-8 h-8 absolute right-0 m-2 items-center flex justify-center group-hover:visible invisible transition ease-in-out delay-250 group-hover:translate-y-1 hover:shadow-sm hover:shadow-black" onClick={handleFavorite} >
          {favorite ? (
            <IoMdHeart color="black" size={24} />
          ) : (
            <IoMdHeartEmpty color="black" size={24} />
          )}
        </div>
        <img src={image} alt="product image" className="w-full h-full" />
      </div>
      <p className="font-primaryRegular px-2 text-sm">{productName}</p>
      <p className="font-primaryBold text-sm px-2 ">NGN {price}</p>
      <p className="font-primaryRegular text-sm px-2 ">{shopName}</p>
    </div>
  );
}
