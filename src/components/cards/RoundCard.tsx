interface RoundCardProps {
  image: string;
  text: string;
  alt: string;
  onClick: VoidFunction;
}

export default function RoundCard({
  image,
  text,
  alt,
  onClick,
}: RoundCardProps) {
  return (
    <div className="group w-28 h-28 hover:cursor-pointer m-7">
      <div
        className="w-28 h-28 rounded-full mb-3 flex justify-center align-middle overflow-hidden group-hover:transition transform  
            group-hover:scale-110 ease-in-out group-hover:shadow-2xl shadow-gray-600"
        onClick={onClick}
      >
        <img src={image} alt={alt} className="w-full h-full" />
      </div>
      <p className="text-center font-primaryBold group-hover:text-gray-600 ">
        {text}
      </p>
      <hr className=" invisible group-hover:visible bg-gray-700 h-0.5 border-0 mt-1" />
    </div>
  );
}
