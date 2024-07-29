/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Key, useState } from "react";
import ProductCard from "../../components/cards/ProductCard";
import Pagination from "./Pagination";
import { useFetch } from "../../hooks/FetchHook";
import { useNavigate } from "react-router-dom";

export default function AllProducts() {
  // navigation
  const navigate = useNavigate();

  // states
  const [currentPage, setCurrentPage] = useState(1);
  const [picturesPerPage] = useState(12);

  // fetch pictures from jsonplaceholder
  const [isLoading, pictures] = useFetch();

  // loading state
  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  // get current pictures
  const indexOfLastPicture = currentPage * picturesPerPage;
  const indexOfFirstPicture = indexOfLastPicture - picturesPerPage;
  const currentPictures = pictures.slice(
    indexOfFirstPicture,
    indexOfLastPicture
  );

  // paginate
  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div>
      <div className="flex flex-wrap justify-center">
        {currentPictures.map(
          (picture: {
            id: Key | null | undefined;
            title: string;
            image: string;
            price:any;
          }) => (
            <ProductCard
              key={picture.id}
              productName={picture.title}
              image={picture.image}
              price={picture.price}
              shopName="MiladyMd"
              onClick={() => {
                navigate(`/shop/${picture.id}`);
              }}
            />
          )
        )}
      </div>
      <Pagination
        picturesPerPage={picturesPerPage}
        totalPictures={pictures.length}
        paginate={paginate}
        currentPage={currentPage}
      />
    </div>
  );
}
