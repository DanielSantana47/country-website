import { SiAlienware } from "react-icons/si";
import { MdOutlineDarkMode } from "react-icons/md";
import { useContext, useState, useEffect } from "react";
import { DarkMode } from "@/contexts/DarkMode";
import { BsSun } from "react-icons/bs";
import { Search } from "@/contexts/SearchContext";
import { AiOutlineSearch } from "react-icons/ai";

type Props = {
    searchCountry: (n: string | undefined)=> void
    backHome: ()=> void
}

export const Menu = ({ searchCountry, backHome }: Props)=> {

    

    const inputCtx = useContext(Search)
    const [input, setInput] = useState('')
    const darkModeCtx = useContext(DarkMode)
    inputCtx?.setInput(input.trim())


    return(
        <nav className={`fixed top-0 left-0 right-0 py-4  shadow-lg z-50 transition-all  duration-300 ${darkModeCtx?.darkMode === true ? 'bg-sky-900 text-white': 'bg-white'}`}>
            <div className="container mx-auto flex justify-between items-center px-2 md:px-0">
                <div onClick={backHome} className="cursor-pointer hover:scale-110 transition-all duration-300">
                    <SiAlienware className="text-4xl"/>
                </div>
                <div
                    className={`bg-zinc-200 flex items-center justify-center rounded-md px-2 py-1 border-2 ${darkModeCtx?.darkMode === false ? 'hover:border-emerald-500' : 'hover:border-blue-500'} transition-all duration-300 text-black`}
                >
                    <input 
                    type="text" 
                    onChange={(e)=>setInput(e.target.value)}
                    value={input}
                    placeholder="search place"
                    className="bg-transparent outline-none w-40 sm:w-52 md:w-80 lg:w-96"
                    />
                    <div onClick={()=>searchCountry(input.trim())} className={`p-1 rounded-full ${darkModeCtx?.darkMode === true ? 'bg-blue-500' : 'bg-emerald-500'} hover:scale-110 transition-all duration-300`}>
                        <AiOutlineSearch className="text-xl cursor-pointer text-white transition-all font-semibold duration-300"/>
                    </div>
                </div>
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