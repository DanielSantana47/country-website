import { motion, useDragControls } from "framer-motion"
import { useRef, useContext } from "react";
import { useInView } from "framer-motion";
import { DarkMode } from "@/contexts/DarkMode";

type Props = {
    id: number
    src: string,
    name: string,
    oficialName: string
    capital: string,
    region: string,
    getCountry: (n: string)=> void
}



export const CountryBlock = ({ id, src, name, capital, region, oficialName, getCountry}: Props)=> {
    
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    const darkModeCtx = useContext(DarkMode)
    return(
        <motion.div 
            ref={ref} 
            key={id} 
            onClick={()=>getCountry(oficialName)} 
            style={{
                transform: isInView ? "none" : "translateY(200px)",
                opacity: isInView ? 1 : 0,
            transition: "all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0s"
        }}
        >
            <div className={`max-w-96 relative h-[500px] flex flex-col rounded-lg overflow-hidden shadow-lg cursor-pointer lg:hover:scale-105 lg:hover:shadow-xl transition-all duration-300 ${darkModeCtx?.darkMode === true ? 'bg-sky-900 text-white' : 'bg-zinc-200 text-black'}`}>
                <img src={src} className={`w-full h-56 object-cover object-center bg-white`}/>
                <div className="flex flex-col gap-4  mt-4 px-2">
                    <p>Oficial name: {oficialName}</p>
                    <p>popular name: {name}</p>
                    <p>capital: {capital}</p>
                    <p>continent: {region}</p>
                </div>
                <div className="px-2 absolute bottom-0 w-full mb-4">
                    <button onClick={()=> getCountry(oficialName)} className="w-full py-2 mt-4 rounded-md text-white font-semibold bg-emerald-500 hover:bg-emerald-400 transition-all duration-300">see more</button>
                </div>
            </div>
        </motion.div>
    )
}