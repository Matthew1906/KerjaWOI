'use client'

import useFilters from "@/hooks/useFilters";
import { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { BsTags } from "react-icons/bs";
import { VscListFilter } from "react-icons/vsc";

const SearchFilter = ({ name, filters }) => {
  const { handleSearch, handleFilters } = useFilters();
  const [query, setQuery] = useState("");
  const changeQuery = (e) => setQuery(e.target.value);
  const submitQuery = ()=>handleSearch(query);
  const [filterDropdown, setDropdown] = useState(false);
  const changeDropdown = () => {
    setDropdown(!filterDropdown);
  };
  const [chosenFilters, setFilters] = useState([]);
  const toggleFilter = (e) => {
    let filter = e.target.innerHTML;
    let newFilters = [];
    if (chosenFilters.includes(filter)) {
      newFilters = chosenFilters.filter((f) => f !== filter);
    } else {
      newFilters = [filter, ...chosenFilters];
    }
    setFilters(newFilters);
    handleFilters(newFilters);
  };
  return (
    <div className="flex flex-col">
      <div className="flex gap-2 md:gap-4 items-start">
        <div className="py-1 md:py-3 px-3 md:px-6 bg-white drop-shadow-lg rounded text-xs md:text-lg flex items-center">
          <input
            type="text"
            placeholder={`Search ${name}...`}
            value={query}
            className="min-w-[25vw] outline-none"
            onChange={changeQuery}
          />
          <AiOutlineSearch
            className="text-sm md:text-2xl text-black/40 cursor-pointer"
            onClick={submitQuery}
          />
        </div>
        <div className="z-40 p-3 bg-white drop-shadow-lg rounded">
          <VscListFilter
            className="text-sm md:text-2xl text-black cursor-pointer"
            onClick={changeDropdown}
          />
          <div
            className={`absolute md:ml-2 z-40 bg-white border-black/40 rounded ${
              filterDropdown ? "flex flex-col" : "hidden"
            }`}
          >
            {filters.map((filter, key) => {
              return (
                <p
                  key={key}
                  className="relative text-xs md:text-base px-2 py-4 cursor-pointer min-w-[10vw] font-light hover:bg-light-purple"
                  onClick={toggleFilter}
                >
                  {filter}
                </p>
              );
            })}
          </div>
        </div>
      </div>
      <div className="mt-3 md:mt-6 flex gap-1 items-center">
        {chosenFilters.length !== 0 && (
          <BsTags className="text-sm md:text-3xl text-black" />
        )}
        {chosenFilters.map((filter, key) => {
          return (
            <p key={key} className="px-2 py-1 bg-Purple text-white rounded-xl">
              Sort By: {filter}
            </p>
          );
        })}
      </div>
    </div>
  );
};

export default SearchFilter;
