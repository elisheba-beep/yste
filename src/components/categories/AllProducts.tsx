import image from "../../assets/images/image.jpeg";
import image2 from "../../assets/images/image2.jpg";
import ProductCard from "../../components/cards/ProductCard";

export default function AllProducts() {
  return (
    <div className="flex flex-wrap justify-center">
    <ProductCard productName="Pink crystals Strawberry Quartz hair jewelry" image={image} price={5250} shopName="MiladyMd"/>
    <ProductCard productName="Pink crystals Strawberry Quartz hair jewelry" image={image2} price={5250} shopName="MiladyMd"/>
    <ProductCard productName="Pink crystals Strawberry Quartz hair jewelry" image={image} price={5250} shopName="MiladyMd"/>
    <ProductCard productName="Pink crystals Strawberry Quartz hair jewelry" image={image2} price={5250} shopName="MiladyMd"/>
    <ProductCard productName="Pink crystals Strawberry Quartz hair jewelry" image={image} price={5250} shopName="MiladyMd"/>
    <ProductCard productName="Pink crystals Strawberry Quartz hair jewelry" image={image2} price={5250} shopName="MiladyMd"/>
    <ProductCard productName="Pink crystals Strawberry Quartz hair jewelry" image={image} price={5250} shopName="MiladyMd"/>
    <ProductCard productName="Pink crystals Strawberry Quartz hair jewelry" image={image2} price={5250} shopName="MiladyMd"/>
    <ProductCard productName="Pink crystals Strawberry Quartz hair jewelry" image={image} price={5250} shopName="MiladyMd"/>
    <ProductCard productName="Pink crystals Strawberry Quartz hair jewelry" image={image2} price={5250} shopName="MiladyMd"/>
   </div>
  )
}
