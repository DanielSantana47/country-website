import { Country } from "@/types/contry"
import axios from "axios"
import { ReactNode } from "react"

export const getCountries = async (): Promise<Country[]>=> {
    const result = await axios.get("https://restcountries.com/v3.1/all")
    const data = result.data
    return data
}