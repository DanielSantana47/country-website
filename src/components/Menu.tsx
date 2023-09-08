import { SiAlienware } from "react-icons/si";
import { MdOutlineDarkMode } from "react-icons/md";


export const Menu = ()=> {
    return(
        <nav className="fixed top-0 left-0 right-0 py-4  shadow-md z-50 bg-white">
            <div className="container mx-auto flex justify-between items-center">
                <SiAlienware className="text-4xl"/>
                <MdOutlineDarkMode className="text-3xl cursor-pointer hover:scale-125 transition-all duration-300"/>
            </div>
        </nav>
    )
}