import { Menu, X } from "lucide-react";
import { useState } from "react"
import { months } from "../utils/moths";

const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false);
    const [isOpenMonths, setIsOpenMonths] = useState(false);
    

    if(isOpen){
        return(
            <div  className="w-full absolute top-0 h-screen flex justify-center items-start text-2xl bg-[#D2665A]">
                <div className="flex-row mt-32">
                    <button className="cursor-pointer" onClick={() => setIsOpen(!isOpen)}><X /></button>
                    <b className="mb-10 text-3xl flex items-center">Православни Календар ☦️</b >
                    <a href="#">Календар за целу годину</a>
                    <br /><br />
                    <a href="#">Постови</a>
                    <br /><br />
                    <a href="#">О апликацији</a>
                    <br /><br />
                </div>
            </div>
        )
    }

    if(isOpenMonths){
        return(
            <div className="flex justify-center">
                <div className="md:w-[80%] w-full absolute rounded-2xl top-0 h-screen flex justify-center items-start text-2xl bg-[#D2665A]">
                <div className="flex-row mt-10">
                    <button className="cursor-pointer hover:text-red-500" onClick={() => setIsOpenMonths(!isOpenMonths)}><X /></button>
                    {months.map((m, index) => (
                        <div className="grid" key={index}>
                            <a className="text-3xl md:mt-2 mt-0.5" href="#">{m} 2025</a>
                        </div>
                    ))}
                </div>
            </div>
            </div>
        )
    }

  return (
    <div className="flex justify-center items-center">
        <nav className='md:w-[80%] w-[90%] rounded-full h-[70px] mt-5 bg-[#D2665A] shadow-md items-center flex justify-between'>
            <div className="flex justify-center md:ml-20 ml-5">
                <b className="text-xl flex items-center">Православни Календар ☦️</b >
            </div>
            <div className="md:flex hidden justify-around gap-4 items-center mr-20">
                <a onClick={() => setIsOpenMonths(!isOpenMonths)} href="#">Календар за целу годину</a>
                <a href="#">Постови</a>
                <a href="#">О апликацији</a>
            </div>

            <button onClick={() => setIsOpen(!isOpen)} className="mr-5 md:hidden  cursor-pointer"><Menu /></button>
        </nav>
    </div>
  )
}

export default Navbar