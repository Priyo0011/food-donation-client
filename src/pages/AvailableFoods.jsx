
import FoodCard from "../components/FoodCard";
import { useEffect, useState } from "react";
import axios from "axios";

const AvailableFoods = () => {
  const [itemsPerPage, setItemsPerPage] = useState(6);
  const [count, setCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [sort, setSort] = useState('');
  const [search, setSearch] = useState('')
  const [searchText, setSearchText] = useState('')
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const { data } = await axios(`https://food-donation-servers.vercel.app/all-foods?page=${currentPage}&size=${itemsPerPage}&sort=${sort}&search=${search}`)
      setFoods(data)
    }
    getData()
  }, [currentPage,itemsPerPage,sort,search])
  useEffect(() => {
    const getCount = async () => {
      const { data } = await axios(`https://food-donation-servers.vercel.app/foods-count?filter=&search=${search}`)

      setCount(data.count)
    }
    getCount()
  }, [search])
  const numberOfPages = Math.ceil(count / itemsPerPage)
  const pages = [...Array(numberOfPages).keys()].map(element => element + 1)

  const handlePaginationButton = value => {
    console.log(value)
    setCurrentPage(value)
  }

  const handleSearch = e => {
    e.preventDefault()

    setSearch(searchText)
  }
  return (
    <div onSubmit={handleSearch}>
      <div className="flex flex-col md:flex-row justify-center items-center gap-5 my-10">
        <form>
          <div className="flex p-1 overflow-hidden border rounded-lg    focus-within:ring focus-within:ring-opacity-40 focus-within:border-[#db4437] focus-within:ring-[#db4437]">
            <input
              className="px-6 py-2 text-gray-700 placeholder-gray-500 bg-white outline-none focus:placeholder-transparent"
              type="text"
              onChange={e => setSearchText(e.target.value)}
              value={searchText}
              name="search"
              placeholder="Enter Food Name"
              aria-label="Enter Food Name"
            />

            <button className="px-1 md:px-4 py-3 text-sm font-medium tracking-wider text-gray-100 uppercase transition-colors duration-300 transform bg-[#db4437] rounded-md hover:bg-[#db4437] focus:bg-[#db4437] focus:outline-none">
              Search
            </button>
          </div>
        </form>
        <div>
          <select
              onChange={e => {
                setSort(e.target.value)
                setCurrentPage(1)
              }}
              value={sort}
            name="sort"
            id="sort"
            className="border p-4 rounded-md"
          >
            <option value="">Food Expire Date</option>
            <option value="dsc">Descending Order</option>
            <option value="asc">Ascending Order</option>
          </select>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {foods.map((food) => (
          <FoodCard key={food._id} food={food}></FoodCard>
        ))}
      </div>
      <div className="flex justify-center mt-12">

        <button
            disabled={currentPage === 1}
            onClick={() => handlePaginationButton(currentPage - 1)}
          className="px-4 py-2 mx-1 text-gray-700 disabled:text-gray-500 capitalize bg-gray-200 rounded-md disabled:cursor-not-allowed disabled:hover:bg-gray-200 disabled:hover:text-gray-500 hover:bg-[#db4437]  hover:text-white"
        >
          <div className="flex items-center -mx-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 mx-1 rtl:-scale-x-100"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M7 16l-4-4m0 0l4-4m-4 4h18"
              />
            </svg>

            <span className="mx-1">previous</span>
          </div>
        </button>

        {pages.map(btnNum => (
          <button
            onClick={() => handlePaginationButton(btnNum)}
            key={btnNum}
            className={`hidden ${
              currentPage === btnNum ?
               'bg-[#db4437] text-white' : ''
            } px-4 py-2 mx-1 transition-colors duration-300 transform border rounded-md sm:inline hover:bg-[#db4437]  hover:text-white`}
          >
            {btnNum}
          </button>
        ))}

        <button
            disabled={currentPage === numberOfPages}
            onClick={() => handlePaginationButton(currentPage + 1)}
          className="px-4 py-2 mx-1 text-gray-700 transition-colors duration-300 transform bg-gray-200 rounded-md hover:bg-[#db4437] disabled:hover:bg-gray-200 disabled:hover:text-gray-500 hover:text-white disabled:cursor-not-allowed disabled:text-gray-500"
        >
          <div className="flex items-center -mx-1">
            <span className="mx-1">Next</span>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 mx-1 rtl:-scale-x-100"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </div>
        </button>
      </div>
    </div>
  );
};

export default AvailableFoods;
