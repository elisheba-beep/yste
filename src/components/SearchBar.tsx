/* eslint-disable @typescript-eslint/no-explicit-any */
import { Key, useState } from "react";
import { useFetch } from "../hooks/FetchHook";
import { useNavigate } from "react-router-dom";
import { GrClose } from "react-icons/gr";

interface SearchBarProps {
  text: string;
  placeholder: string;
  width: string;
  emailBar: boolean;
}

export default function SearchBar({
  text,
  placeholder,
  width,
  emailBar,
}: SearchBarProps) {
  // all products
  const [isLoading, pictures] = useFetch();
  // navigate
  const navigate = useNavigate();
  // filtered data
  const [filteredData, setFilteredData] = useState<any>([]);
  // word entered
  const [wordEntered, setWordEntered] = useState("");
  // email entered
  const [emailEntered, setEmailEntered] = useState("");

  // handle filter
  const handleFilter = (e: { target: { value: any } }) => {
    const searchValue = e.target.value;
    setWordEntered(searchValue);
    const newFilter = pictures.filter((value: { title: string }) => {
      return value.title.toLowerCase().includes(wordEntered.toLowerCase());
    });
    if (searchValue == "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };
  // handle email
  const handleEmail = (e: { target: { value: any } }) => {
    const emailValue = e.target.value;
    setEmailEntered(emailValue);
  };

  // clear email
  const clearEmail = () => {
    setEmailEntered("");
  };

  // clear input
  const clearInput = () => {
    setFilteredData([]);
    setWordEntered("");
  };
  return (
    <div className="w-full flex flex-col items-center">
      {/* text field */}
      <div
        className="flex justify-between  bg-white w-1/3 h-1/3 rounded-xl overflow-hidden border-gray-900 border-2 relative"
        style={{ width: width }}
      >
        <input
          value={emailBar ? emailEntered : wordEntered}
          onChange={emailBar ? handleEmail : handleFilter}
          placeholder={placeholder}
          className="px-2 h-10 border-0 outline-none text-gray-800"
        />
        {filteredData.length === 0 || emailBar ? (
          <button
            className="hover:text-white p-2 hover:bg-black"
            onClick={emailBar ? clearEmail : () => {}}
          >
            {text}
          </button>
        ) : (
          <GrClose
            size={24}
            onClick={clearInput}
            className="mt-2 mr-2 cursor-pointer"
          />
        )}
      </div>

      {/* search results */}
      {filteredData.length != 0 && !emailBar && (
        <div className="mt-1 w-1/3 h-52 overflow-hidden overflow-y-auto bg-white shadow-gray-600 absolute top-20 z-50 shadow-xl">
          {!isLoading &&
            filteredData.slice(0, 15).map(
              (
                picture: {
                  id: any;
                  title: string;
                },

                index: Key | null | undefined
              ) => {
                return (
                  <p
                    className="w-full h-12 items-center text-black font-primaryRegular cursor-pointer hover:bg-gray-200 p-4"
                    key={index}
                    onClick={() => {
                      navigate(`/shop/${picture.id}`);
                      clearInput();
                    }}
                  >
                    {picture.title}
                  </p>
                );
              }
            )}
        </div>
      )}
    </div>
  );
}
