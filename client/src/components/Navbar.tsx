import { Menu, X } from "lucide-react";
import { useState } from "react"

const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false);

    if(isOpen){
        return(
            <div className="w-full absolute top-0 h-screen flex justify-center items-start text-2xl bg-amber-100">
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

  return (
    <nav className='w-full h-[50px] bg-amber-100 shadow-md items-center flex justify-between'>
        <div className="flex justify-center md:ml-20 ml-5">
            <b className="text-xl flex items-center">Православни Календар ☦️</b >
        </div>
        <div className="md:flex hidden justify-around gap-4 items-center mr-20">
            <a href="#">Календар за целу годину</a>
            <a href="#">Постови</a>
            <a href="#">О апликацији</a>
        </div>

        <button onClick={() => setIsOpen(!isOpen)} className="mr-5 md:hidden  cursor-pointer"><Menu /></button>
    </nav>
  )
}

export default Navbar