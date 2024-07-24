import AllProducts from "../components/categories/AllProducts";
import Wrapper from "../components/Wrapper";

export default function Shop() {
  return (
    <Wrapper>
      <div className="flex w-full">
        <AllProducts />
        <div className=""></div>
      </div>
    </Wrapper>
  );
}
