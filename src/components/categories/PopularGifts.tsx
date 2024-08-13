/* eslint-disable @typescript-eslint/no-unused-vars */
import { Key } from "react";
import { useFetch } from "../../hooks/FetchHook";
import RoundCard from "../cards/RoundCard";
import { useNavigate } from "react-router-dom";
import electronics from "../../assets/images/electronics.jpeg";
import jewelry from "../../assets/images/jewelry.jpeg";
import mensclothing from "../../assets/images/mensclothing.jpeg";
import womensclothing from "../../assets/images/womensclothing.jpeg";

export default function PopularGifts() {
  // get pictures
  const [isLoading, pictures, categories] = useFetch();
  // just cause I don't like the yellow line that says 'unused'
  pictures;
  // navigate
  const navigate = useNavigate();

  return (
    <div className="px-4 py-6">
      <div>
        <h3 className="text-3xl font-primaryRegular text-center">
          Shop our popular gift categories
        </h3>
        {isLoading ? (
          <div>
            <h1>Loading...</h1>
          </div>
        ) : (
          <div className="flex justify-center py-6 flex-wrap">
            {categories.map(
              (category: string, index: Key | null | undefined) => {
                return (
                  <RoundCard
                    onClick={() => {
                      navigate(`/${category}`);
                    }}
                    key={index}
                    image={
                      category == "electronics"
                        ? electronics
                        : category == "jewelery"
                        ? jewelry
                        : category == "men's clothing"
                        ? mensclothing
                        : womensclothing
                    }
                    text={category}
                    alt={`picture of ${category} category`}
                  />
                );
              }
            )}
          </div>
        )}
      </div>
    </div>
  );
}
