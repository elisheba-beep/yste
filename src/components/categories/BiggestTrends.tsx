import { Key } from "react";
import { useFetch } from "../../hooks/FetchHook";
import RoundCard from "../cards/RoundCard";
import { useNavigate } from "react-router-dom";

export default function BiggestTrends() {
  // get pictures
  const [isLoading, pictures] = useFetch();
  // navigate
  const navigate = useNavigate();

  return (
    <div className="px-4 py-6">
      <div>
        <h3 className="text-3xl font-primaryRegular text-center">
          Check out this season's biggest trends
        </h3>
        {isLoading ? (
          <div>
            <h1>Loading...</h1>
          </div>
        ) : (
          <div className="flex justify-center py-6">
            {pictures
              .slice(0, 6)
              .map(
                (
                  picture: { url: string; title: string; id: number },
                  index: Key | null | undefined
                ) => {
                  return (
                    <RoundCard
                      onClick={() => {
                        navigate(`/shop/${picture.id}`);
                      }}
                      key={index}
                      image={picture.url}
                      text={picture.title.slice(0, 24)}
                      alt="picture of chef's kiss category"
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
