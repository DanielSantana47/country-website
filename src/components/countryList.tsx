import { BiSolidLeftArrowSquare } from "react-icons/bi";
import { useContext, useEffect, useRef, useState } from "react";
import { CountryBlock } from "./CountryBlock";
import { Menu } from "./Menu";
import { motion, useInView } from "framer-motion";
import { CountryDetails } from "./CountryDetails";
import { DarkMode } from "@/contexts/DarkMode";
import { Search } from "@/contexts/SearchContext";

export const CountryList = () => {
  const [countries, setCountries] = useState<any[]>([]);
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [load, setLoad] = useState(false)
  const darkModeCtx = useContext(DarkMode)
  const inputCtx = useContext(Search)

  function valueFormatter(value: number) {
    return value.toLocaleString('pt-BR');
}

const getAllCountries = async (url: string) => {
    const res = await fetch(url);
    const data = await res.json();
    
    setCountries(data);
}


  const getCountry = (name: string) => {
    getAllCountries(`https://restcountries.com/v3.1/name/${name}`)
    setOpenModal(true);
  };

  const searchCountry = (value: string | undefined) => {
      if (value?.trim() !== undefined && value?.trim() !== '') {
        getAllCountries(`https://restcountries.com/v3.1/name/${value.trim()}`)
        console.log(value.trim())
      } else {
      }
  };

  
  const handleCloseModal = () => {
    setOpenModal(false);
    getAllCountries("https://restcountries.com/v3.1/all");
  };
  
  useEffect(() => {
      getAllCountries(`https://restcountries.com/v3.1/all`);
  }, []);
  
  return (
    <section className={`${openModal === false ? "py-24 px-2 md:px-4" : "px-4 py-4 overflow-x-hidden min-h-screen"} ${darkModeCtx?.darkMode === true ? 'bg-sky-950' : 'bg-white'}`}>
      {openModal === false && <Menu searchCountry={()=> searchCountry(inputCtx?.input)}  backHome={handleCloseModal}/>}

      {openModal === false && countries.length > 0 && (
        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-6">
          {countries.map((country, key) => (
            <CountryBlock
              key={key}
              id={key}
              name={country.name.common}
              capital={country.capital}
              oficialName={country.name.official}
              region={country.region}
              src={country.flags.svg}
              getCountry={() => getCountry(country.name.official)}
            />
        ))}
        </div>
      )}

      {load === true && 
        <div className="fixed top-0 left-0 right-0 bottom-0 bg-zinc-800">
          <div className="">carregando</div>
        </div>
      }

      {openModal === true && (
        <div className="h-auto w-auto">
          {countries.map((country, key) => (
            <CountryDetails
                key={key}
                flag={country.flags.svg}
                name={country.name.common}
                officialName={country.name.official}
                capital={country.capital}
                continent={country.continents}
                subRegion={country.subregion}
                population={valueFormatter(country.population)}
                borders={country.borders}
                status={country.status}
                independent={country.independent}
                maps={country.maps.googleMaps}
                handleCloseModal={handleCloseModal}
            />
          ))}
        </div>
      )}
    </section>
  );
};
