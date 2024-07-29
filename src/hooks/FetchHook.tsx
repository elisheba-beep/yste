/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect } from "react";

export const useFetch = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [pictures, setPictures] = useState<any>([]);
  const [categories, setCategories] = useState<any>([]);

  useEffect(() => {
    const fetchPictures = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(
          "https://fakestoreapi.com/products"
        );
        const response2 = await fetch(
          "https://fakestoreapi.com/products/categories"
        );
        const data = await response.json();
        const data2 = await response2.json();
        setPictures(data);
        setCategories(data2);
        setIsLoading(false);
        console.log(pictures);
      } catch (error) {
        console.log(error);
      }
    };
    fetchPictures();
  }, []);

  return [isLoading, pictures, categories];
};
