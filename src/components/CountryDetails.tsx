import { DarkMode } from "@/contexts/DarkMode";
import { motion } from "framer-motion";
import Image from "next/image";
import { useContext } from "react";
import { BiSolidLeftArrowSquare } from "react-icons/bi";

type Props =  {
    flag: string,
    name: string,
    officialName: string,
    capital: string,
    continent: string[],
    subRegion: string,
    borders: string[],
    population: string,
    status: string,
    independent: boolean,
    maps: string,
    handleCloseModal: ()=> void
}

export const CountryDetails = ({flag, name, officialName, capital, continent, subRegion, borders, population, status, independent, maps, handleCloseModal}: Props) => {
  
const darkModeCtx = useContext(DarkMode)    


    return (
    <motion.div
      className={`container mx-auto w-full relative h-full py-8f flex flex-col items-start lg:items-center justify-center ${darkModeCtx?.darkMode === true ? 'bg-sky-950 text-white' : 'bg-white text-black'}`}
      initial={{ opacity: 0, translateX: "100vh" }}
      animate={{ opacity: 1, translateX: 0 }}
      exit={{ opacity: 0, translateX: -500 }}
      transition={{ duration: 0.5 }}
    >
        <BiSolidLeftArrowSquare
        className={`text-6xl md:text-7xl lg:text-8xl mb-3 md:mb-0 cursor-pointe hover:scale-110 lg:hover:-translate-y-2 hover:text-red-500 transition-all duration-300 ${darkModeCtx?.darkMode === true ? 'text-white' : 'text-emerald-500'}`}
        onClick={handleCloseModal}
        />
      <div className={`shadow-xl rounded-lg overflow-hidden pb-12 lg:m-12 w-full lg:w-auto ${darkModeCtx?.darkMode === true ? 'bg-sky-900' : 'bg-white'}`}>
        <img
          src={flag}
          alt=""
          className={`w-full h-auto lg:h-[500px] object-contain  ${
            name === "Nepal" ? "object-fill bg-white" : "object-cover"
          }`}
        />
        <div className="px-2 md:px-6 my-6 grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-y-6 text-md md:text-lg font-semibold">
          <p>Official name: {officialName}</p>
          <p>Popular name: {name}</p>
          <p>Capital: {capital}</p>
          <p>Continent: {continent.join(", ")}</p>
          <p>Sub-region: {subRegion}</p>
          {borders && <p>Borders: {borders.join(", ")}</p>}
          {!borders && <p>Borders: N/A</p>}
          <p>Population: {population}</p>
          <p>Status: {status}</p>
          <p>
            State:{" "}
            {independent === true ? "independent" : "not independent"}
          </p>
          <p>
            Maps:{" "}
            <a
              className={` transition-all break-words duration-300 ${darkModeCtx?.darkMode === true ? 'text-emerald-500 hover:text-blue-500' : 'text-blue-500 hover:text-emerald-500'}`}
              href={maps}
              target="_blank"
            >
              {maps}
            </a>
          </p>
        </div>
      </div>
    </motion.div>
  );
};
