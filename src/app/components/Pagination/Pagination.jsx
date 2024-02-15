



const Pagination = ({pageSize, videos, currentPage, pagination}) => {
  
    const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(videos.length / pageSize); i++) {
    pageNumbers.push(i);
  }

//   console.log("Estos son los números de página: ", pageNumbers);
//   console.log("Esta es la página actual: ", currentPage);

  return (
    <nav className="flex flex-row items-center -space-x-px h-10 mb-8 mt-6">
      <ul className="flex items-center -space-x-px h-10 text-base">
        <li>
          <button
            className="relative block rounded bg-transparent px-3 py-1.5 text-base text-neutral-600 transition-all duration-300 hover:bg-neutral-200 dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white"
            onClick={() => pagination(currentPage - 1)}
            disabled={currentPage === 1}
          >
            Previous
          </button>
        </li>

        {pageNumbers?.map((number) => (
          <li key={number}>
            <button
              className={`relative block rounded bg-transparent px-3 py-1.5 text-base text-neutral-600 transition-all duration-300 hover:bg-neutral-200  dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white ${
                currentPage === number
                  ? " text-gray-100 bg-gray-400 focus:bg-gray-300 focus-within:bg-gray-300 dark:focus:bg-gray-100 dark:focus-within:bg-gray-100"
                  : ""
              }`}
              key={number}
              onClick={() => pagination(number)}
            >
              {number}
            </button>
          </li>
        ))}
        <li>
          <button
            className="relative block rounded bg-transparent px-3 py-1.5 text-base text-neutral-600 transition-all duration-300 hover:bg-neutral-200 dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white"
            onClick={() => pagination(currentPage + 1)}
            disabled={currentPage === pageNumbers.length}
          >
            Next
          </button>
        </li>
      </ul>
    </nav>
  )
};

export default Pagination;
