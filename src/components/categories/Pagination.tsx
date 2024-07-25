/* eslint-disable @typescript-eslint/no-explicit-any */
interface PaginationProps {
  picturesPerPage: number;
  totalPictures: number;
  paginate: any;
  currentPage: number;
}

const Pagination = ({
  picturesPerPage,
  totalPictures,
  paginate,
  currentPage,
}: PaginationProps) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalPictures / picturesPerPage); i += 12) {
    pageNumbers.push(i);
  }

  return (
    <div className="w-full">
      <ul className="flex flex-wrap justify-center">
        {pageNumbers.map((number) => (
          <li
            key={number}
            className={`w-12 h-12 bg-white border-2 border-gray-500 items-center flex justify-center font-primaryBold hover:bg-gray-300 hover:shadow-md hover:shadow-gray-800 cursor-pointer ${
              currentPage === number && "bg-gray-300"
            }`}
          >
            <a onClick={() => paginate(number)}>{number}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Pagination;
