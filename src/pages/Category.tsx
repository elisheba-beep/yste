/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Key, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import ProductCard from "../components/cards/ProductCard";
import Pagination from "../components/categories/Pagination";
import { useFetch } from "../hooks/FetchHook";
import Wrapper from "../components/Wrapper";

export default function Category() {
  // navigation
  const navigate = useNavigate();

  // states
  const [currentPage, setCurrentPage] = useState(1);
  const [picturesPerPage] = useState(12);

  // fetch pictures from jsonplaceholder
  const [isLoading, pictures] = useFetch();

  // get path
  const location = useLocation();
  const path = location.pathname;
  const segments = path.split("/").filter(Boolean);
  const lastPart = segments[segments.length - 1];

  // loading state
  if (isLoading) {
    return <Wrapper>Loading...</Wrapper>;
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
    <Wrapper>
      <div>
        <div className="flex flex-wrap justify-center">
          {currentPictures.map(
            (picture: {
              id: Key | null | undefined;
              title: string;
              image: string;
              price: any;
              category: string;
            }) =>
              decodeURIComponent(lastPart) == picture.category && (
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
    </Wrapper>
  );
}
