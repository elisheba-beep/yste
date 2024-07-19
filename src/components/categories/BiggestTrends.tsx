import image from "../../assets/images/image.jpeg";
import image2 from "../../assets/images/image2.jpg";
import RoundCard from "../cards/RoundCard";

export default function BiggestTrends() {
  return (
    <div className="px-4 py-6">
      <div>
        <h3 className="text-3xl font-primaryRegular text-center">
          Check out this season's biggest trends
        </h3>
        <div className="flex justify-center py-6">
          <RoundCard
            image={image}
            text="Chef's kiss"
            alt="picture of chef's kiss category"
          />
          <RoundCard
            image={image2}
            text="Colorful Vintage Glassware"
            alt="picture of chef's kiss category"
          />
          <RoundCard
            image={image}
            text="Chef's kiss"
            alt="picture of chef's kiss category"
          />
          <RoundCard
            image={image2}
            text="Colorful Vintage Glassware"
            alt="picture of chef's kiss category"
          />
          <RoundCard
            image={image}
            text="Chef's kiss"
            alt="picture of chef's kiss category"
          />
          <RoundCard
            image={image2}
            text="Colorful Vintage Glassware"
            alt="picture of chef's kiss category"
          />
        </div>
      </div>
    </div>
  );
}
