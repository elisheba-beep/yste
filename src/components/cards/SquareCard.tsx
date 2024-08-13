interface SquareCardProps {
  image: string;
  text: string;
  alt: string;
  onClick: VoidFunction
}

export default function SquareCard({ image, text, alt, onClick }: SquareCardProps) {
  return (
    <div className="w-1/2 md:w-1/5 h-64 rounded-2xl border-gray-300 border-2 my-12 mx-3 hover:cursor-pointer hover:shadow-2xl shadow-gray-800 overflow-hidden flex-none" onClick={onClick}>
      <div className="w-full h-3/4 ">
        <img src={image} alt={alt} className="w-full h-full" />
      </div>
      <p className="text-center font-primaryRegular p-4">{text}</p>
    </div>
  );
}
