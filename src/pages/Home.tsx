import BiggestTrends from "../components/categories/PopularGifts";
import PopularGifts from "../components/categories/BiggestTrends";
import Wrapper from "../components/Wrapper";

export default function Home() {
  return (
    <Wrapper>
      <BiggestTrends />
      <PopularGifts />
    </Wrapper>
  );
}
