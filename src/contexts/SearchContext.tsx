'use client'

import { ReactNode, createContext, useState } from "react";

export type Props = {
    input: string,
    setInput: (n: string)=> void
}

export const Search = createContext<Props | null>(null)

export const SearchProvider = ({children}: {children: ReactNode})=> {
    const [input, setInput] = useState('')

    
    return (
        <Search.Provider value={{input, setInput}}>
            {children}
        </Search.Provider>
    )
}