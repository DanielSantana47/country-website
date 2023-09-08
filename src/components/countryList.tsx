import { BiSolidLeftArrowSquare } from "react-icons/bi";
import { useEffect, useRef, useState } from "react"
import { CountryBlock } from "./CountryBlock"
import { Menu } from "./Menu";
import { motion, useInView } from "framer-motion";

export const CountryList = ()=> {

    const [url, setUrl] = useState<string>('https://restcountries.com/v3.1/all')
    const [countries, setCountries] = useState<any[]>([])
    const [openModal, setOpenModal] = useState<boolean>(false)

    const ref = useRef(null);
    const isInView = useInView(ref, { once: false });

    const getAllCountries = async ()=> {
        const res = await fetch(`${url}`)
        const data = await res.json()

        setCountries(data)
    }

    

    const getCountry = (name: string)=> {
        setUrl(`https://restcountries.com/v3.1/name/${name}`)
        
        setOpenModal(true)
        console.log(url)
    }

    const handleCloseModal = ()=> {
        setOpenModal(false)
        setUrl("https://restcountries.com/v3.1/all")
    }

    useEffect(()=> {

        getAllCountries()
    },[])
    getAllCountries()
        

    return(
        <section className={`${openModal === false ? 'py-24 px-4' : 'px-4 py-4'}`}>
            {openModal === false &&
                <Menu/>
            }
            {countries.length > 1 &&
                <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-6">
                    {
                        countries.map((country, key) => (
                            <CountryBlock 
                                key={key}
                                id={key} 
                                name={country.name.common} 
                                capital={country.capital} 
                                oficialName={country.name.official} 
                                region={country.region} 
                                src={country.flags.svg} 
                                getCountry={()=>getCountry(country.name.common)}
                            />
                            ))
                        }
                </div>
            }
            {openModal === true && countries.length === 1 && 
                <div className="h-auto w-auto">
                    {countries.map((country, key)=> (

                        <div key={key}>
                            <div className="container mx-auto w-full relative h-full bg-white py-8 flex flex-col items-center justify-center  ">
                                <BiSolidLeftArrowSquare className="text-8xl cursor-pointer text-emerald-500 hover:scale-110 lg:hover:-translate-y-2 hover:text-red-500 transition-all duration-300" onClick={handleCloseModal}/>
                                <div className="shadow-lg rounded-lg pb-12 w-[900px]">
                                    <img src={country.flags.svg} alt="" className={`w-full h-[500px] object-contain ${country.name.common === 'Nepal' ? 'object-fill' : 'object-cover'}`}/>
                                    <div className="px-6 mt-6 grid grid-cols-2 gap-y-6 text-lg font-semibold">
                                        <p>Official name: {country.name.official}</p>
                                        <p>Popular name: {country.name.common}</p>
                                        <p>Capital: {country.capital}</p>
                                        <p>Continent: {country.continents.join(', ')}</p>
                                        <p>Sub-region: {country.subregion}</p>
                                        {country.borders && 
                                            <p>Borders: {country.borders.join(', ')}</p>
                                        }
                                        {!country.borders && 
                                            <p>Borders: N/A</p>
                                        }
                                        <p>Population: {country.population}</p>
                                        <p>Status: {country.status}</p>
                                        <p>State: {country.independent === true ? 'independent' : 'not independent'}</p>
                                        <p>Maps: <a className="text-blue-500 hover:text-emerald-500 transition-all duration-300" href={country.maps.googleMaps} target="_blank">{country.maps.googleMaps}</a></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            }
        </section>
    )
}