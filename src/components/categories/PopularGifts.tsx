import image2 from "../../assets/images/image2.jpg";
import image from "../../assets/images/image.jpeg";
import SquareCard from "../cards/SquareCard";

export default function PopularGifts() {
  return (
    <div className="py-8">
      <h2 className="text-3xl font-primaryBold">
        Shop our popular gift categories
      </h2>
      <div className="flex overflow-x-scroll">
        <SquareCard
          text="anniversary gifts"
          image={image2}
          alt="Image for anniversary gifts"
        />
        <SquareCard
          text="gifts for him"
          image={image}
          alt="Image for anniversary gifts"
        />
        <SquareCard
          text="anniversary gifts"
          image={image2}
          alt="Image for anniversary gifts"
        />
        <SquareCard
          text="gifts for him"
          image={image}
          alt="Image for anniversary gifts"
        />
        <SquareCard
          text="anniversary gifts"
          image={image2}
          alt="Image for anniversary gifts"
        />
        <SquareCard
          text="gifts for him"
          image={image}
          alt="Image for anniversary gifts"
        />
        <SquareCard
          text="anniversary gifts"
          image={image2}
          alt="Image for anniversary gifts"
        />
        <SquareCard
          text="gifts for him"
          image={image}
          alt="Image for anniversary gifts"
        />
      </div>
    </div>
  );
}
