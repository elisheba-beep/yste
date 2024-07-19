interface SearchBarProps {
  text: string;
  placeholder: string;
  width: string;
}

export default function SearchBar({
  text,
  placeholder,
  width,
}: SearchBarProps) {
  return (
    <div
      className="flex justify-between  bg-white w-1/3 h-1/3 rounded-xl overflow-hidden border-gray-600 border-2"
      style={{ width: width }}
    >
      <input
        placeholder={placeholder}
        className="w-3/4 px-2 border-0 outline-none text-gray-800"
      />
      <button className="hover:text-white p-2 hover:bg-black">{text}</button>
    </div>
  );
}
