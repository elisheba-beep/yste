/* eslint-disable @typescript-eslint/no-explicit-any */
import { useLocation } from "react-router-dom";
import ProductCard from "../../components/cards/ProductCard";
import { useFetch } from "../../hooks/FetchHook";
import { Key } from "react";
import Wrapper from "../../components/Wrapper";

export default function Product() {
  const [isLoading, pictures] = useFetch();
  const location = useLocation();
  const path = location.pathname;
  const lastItem = parseInt(path.substring(path.lastIndexOf("/") + 1));

  // loading state
  if (isLoading) {
    return (
      <Wrapper>
        <h1>Loading...</h1>
      </Wrapper>
    );
  }
  return (
    <Wrapper>
      {pictures.map(
        (picture: {
          id: Key | null | undefined;
          title: string;
          image: string;
          description: string;
          price: any;
        }) => {
          if (picture.id === lastItem) {
            return (
              <div className="flex justify-center items-center gap-24">
                <ProductCard
                  key={picture.id}
                  productName={picture.title}
                  image={picture.image}
                  price={picture.price}
                  shopName="MiladyMd"
                />
                {/* product details and buy button */}
                <div className="font-primaryRegular flex flex-col gap-2 items-center w-1/3">
                  <h1 className="font-primaryBold">{picture.title}</h1>
                  <p className="font-primaryBoldItalic text-2xl">
                    ${picture.price}
                  </p>
                  <hr className="bg-gray-200 h-1 w-full" />
                  <p className="text-gray-500">{picture.description}</p>
                  <a
                    href="https://wa.me/08025805701"
                    target="_blank"
                    className=" w-24 h-12 pt-2 border-2 border-gray-600 rounded-xl hover:bg-black hover:text-white my-4 flex justify-center text-center"
                  >
                    BUY NOW
                  </a>
                </div>
              </div>
            );
          }
        }
      )}
    </Wrapper>
  );
}
