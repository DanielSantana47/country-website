import { UseContries } from "@/utils/queries"
import { useQuery } from "@tanstack/react-query"
import axios from "axios"
import { count } from "console"
import { CountryBlock } from "./CountryBlock"

export const CountryList = ()=> {

    

    const countries = UseContries()
    console.log(countries.data)
    return(
        <section>
            {countries.data?.map((item, id)=> (
                <div className="w-80 h-[425px]  flex flex-col border-2 rounded-lg border-emerald-400 p-4">
                <div className="w-full h-2/5 bg-blue-400 pt-4"></div>
                <div className="flex flex-col gap-5  mt-4 px-4">
                    <p>name: {item.name}</p>
                    <p>capital: {item.capital}</p>
                    <p>continent: {item.continent}</p>
                    <p>Language: {item.language}</p>
                </div>
                <button className="px-4 py-2 m-4 rounded-md bg-emerald-500 hover:bg-emerald-400 transition-all duration-300">see more</button>
    
            </div>
            ))}
        </section>
    )
}