import { Menu } from "lucide-react";
import { useState } from "react"

const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false);

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

        <button className="mr-5 cursor-pointer"><Menu /></button>
    </nav>
  )
}

export default Navbar