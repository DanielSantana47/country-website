"use client"

import { Menu } from "@/components/Menu"
import { CountryList } from "@/components/countryList"
import { DarkMode } from "@/contexts/DarkMode"
import { useContext } from "react"

const Page = ()=> {
  
  const darkModeCtx = useContext(DarkMode)
  return(
    <main className={`${darkModeCtx?.darkMode === true ? 'bg-sky-950' : 'bg-white'} transition-all duration-300 min-h-screen`}>
      <CountryList/>
    </main>
  )
}

export default Page