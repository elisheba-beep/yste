import SquareCard from "../cards/SquareCard";
import { useFetch } from "../../hooks/FetchHook";
import { Key } from "react";
import { useNavigate } from "react-router-dom";

export default function BiggestTrends() {
  // get pictures
  const [isLoading, pictures] = useFetch();
  // navigate
  const navigate = useNavigate();

  return (
    <div className="py-8">
      <h2 className="text-3xl font-primaryBold">
        Check out this season's biggest trends
      </h2>
      {isLoading ? (
        <div>
          <h1>Loading...</h1>
        </div>
      ) : (
        <div className="flex md:overflow-x-scroll flex-wrap items-center justify-center md:flex-nowrap">
          {pictures
            .slice(2, 7)
            .map(
              (
                picture: { id: number; title: string; image: string },
                index: Key | null | undefined
              ) => {
                return (
                  <SquareCard
                    onClick={() => {
                      navigate(`/shop/${picture.id}`);
                    }}
                    key={index}
                    text={picture.title}
                    image={picture.image}
                    alt={picture.title}
                  />
                );
              }
            )}
        </div>
      )}
    </div>
  );
}
