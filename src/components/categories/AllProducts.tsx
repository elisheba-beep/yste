/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Key, useEffect, useState } from "react";
import ProductCard from "../../components/cards/ProductCard";
import Pagination from "./Pagination";



export default function AllProducts() {
  const [currentPage, setCurrentPage] = useState(1);
  const [picturesPerPage] = useState(12);

  // states
  const [isLoading, setIsLoading] = useState(false);
  const [pictures, setPictures] = useState([]);

  // fetch pictures from jsonplaceholder
  useEffect(() => {
    const fetchPictures = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/photos"
        );
        const data = await response.json();
        setPictures(data);
        setIsLoading(false);
        console.log(pictures);
      } catch (error) {
        console.log(error);
      }
    };
    fetchPictures();
  }, []);


  // loading state
  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  // get current pictures
  const indexOfLastPicture = currentPage * picturesPerPage;
  const indexOfFirstPicture = indexOfLastPicture - picturesPerPage;
  const currentPictures = pictures.slice(indexOfFirstPicture, indexOfLastPicture);

  // paginate
  const paginate = (pageNumber:number) => {
setCurrentPage(pageNumber)
  }

  return (
    <div>

 
    <div className="flex flex-wrap justify-center">
                {currentPictures.map((picture: { id: Key | null | undefined; title: string; url: string; }) => (
                  <ProductCard
               key={picture.id}
               productName={picture.title}
               image={picture.url}
               price={5259}
               shopName="MiladyMd"
               />
              ))}
    </div>
    <Pagination picturesPerPage={picturesPerPage} totalPictures={pictures.length} paginate={paginate}/>
             
               </div>
  );
}
