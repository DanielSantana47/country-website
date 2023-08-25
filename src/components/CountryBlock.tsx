type Props = {
    countryName: string,
    capital: string,
    continent: string,
    language: string
}

export const CountryBlock = ({countryName, capital, continent, language}: Props)=> {
    return(
        <div className="w-80 h-[425px]  flex flex-col border-2 rounded-lg border-emerald-400 p-4">
            <div className="w-full h-2/5 bg-blue-400 pt-4"></div>
            <div className="flex flex-col gap-5  mt-4 px-4">
                <p>name: {countryName}</p>
                <p>capital: {capital}</p>
                <p>continent: {continent}</p>
                <p>Language: {language}</p>
            </div>
            <button className="px-4 py-2 m-4 rounded-md bg-emerald-500 hover:bg-emerald-400 transition-all duration-300">see more</button>

        </div>
    )
}