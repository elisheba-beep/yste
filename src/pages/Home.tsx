import BiggestTrends from "../components/categories/BiggestTrends";
import PopularGifts from "../components/categories/PopularGifts";
import Wrapper from "../components/Wrapper";

export default function Home() {
  return (
    <Wrapper>
      <BiggestTrends />
      <PopularGifts />
    </Wrapper>
  );
}
