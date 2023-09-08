import { motion } from "framer-motion"
import { useRef } from "react";
import { useInView } from "framer-motion";

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
    
    return(
        <div 
            ref={ref} 
            key={id} 
            onClick={()=>getCountry(oficialName)} 
            style={{
                transform: isInView ? "none" : "translateY(200px)",
                opacity: isInView ? 1 : 0,
            transition: "all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0s"
        }}
        >
            <div className="max-w-96 relative h-[500px] flex flex-col border-2 rounded-lg overflow-hidden shadow-lg cursor-pointer lg:hover:scale-105 transition-all duration-300 ">
                <img src={src} className={`w-full h-56 object-cover object-center`}/>
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
        </div>
    )
}