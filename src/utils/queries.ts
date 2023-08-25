import { useQuery } from "@tanstack/react-query"
import { getCountries } from "./api"

export const UseContries =  ()=> {
    const query = useQuery({
        queryKey: ['countries'],
        queryFn: getCountries
    })
    return query
}