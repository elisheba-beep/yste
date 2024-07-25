import { useLocation } from "react-router-dom";
import ProductCard from "../../components/cards/ProductCard";
import { useFetch } from "../../context/FetchContext";
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
          url: string;
        }) => {
          if (picture.id === lastItem) {
            return (
              <ProductCard
                key={picture.id}
                productName={picture.title}
                image={picture.url}
                price={5259}
                shopName="MiladyMd"
              />
            );
          }
        }
      )}
    </Wrapper>
  );
}
