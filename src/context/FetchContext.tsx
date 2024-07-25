/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect } from "react";

export const useFetch = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [pictures, setPictures] = useState<any>([]);

  useEffect(() => {
    const fetchPictures = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/photos"
        );
        const data = await response.json();
        setPictures(data);
        setIsLoading(false);
        console.log(pictures);
      } catch (error) {
        console.log(error);
      }
    };
    fetchPictures();
  }, []);

  return [isLoading, pictures];
};
