import { SiAlienware } from "react-icons/si";
import { MdOutlineDarkMode } from "react-icons/md";
import { useContext, useState, useEffect } from "react";
import { DarkMode } from "@/contexts/DarkMode";
import { BsSun } from "react-icons/bs";
import { Search } from "@/contexts/SearchContext";


export const Menu = ()=> {

    const inputCtx = useContext(Search)
    const [input, setInput] = useState('')
    const darkModeCtx = useContext(DarkMode)
    inputCtx?.setInput(input)


    return(
        <nav className={`fixed top-0 left-0 right-0 py-4  shadow-lg z-50 transition-all  duration-300 ${darkModeCtx?.darkMode === true ? 'bg-sky-900 text-white': 'bg-white'}`}>
            <div className="container mx-auto flex justify-between items-center px-2 md:px-0">
                <SiAlienware className="text-4xl"/>
                <input 
                type="text" 
                onChange={(e)=>setInput(e.target.value)}
                value={input}
                placeholder="search place"
                className="bg-zinc-200 outline-none rounded-md px-3 py-1 border-2 focus:border-emerald-500 transition-all duration-300 text-black"
                />
                <button onClick={()=>darkModeCtx?.setDarkMode(!darkModeCtx.darkMode)}>
                    {darkModeCtx?.darkMode === false &&
                        <MdOutlineDarkMode  className="text-3xl cursor-pointer hover:scale-125 hover:-rotate-180 transition-all duration-300"/>
                    }
                    {darkModeCtx?.darkMode === true &&
                        <BsSun  className="text-3xl cursor-pointer hover:scale-125 hover:-rotate-180 transition-all duration-300"/>
                    }
                </button>
            </div>
        </nav>
    )
}