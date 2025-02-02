import { Calendar, Languages, Menu, X } from "lucide-react";
import { useState } from "react"
import { months } from "../utils/moths";
import { Link } from "react-router";
import { useLanguage } from "../context/LanguageContext";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isOpenMonths, setIsOpenMonths] = useState(false);
    const {language, toggleLanguage} = useLanguage();
    
    if(isOpen){
        return(
            <div  className="w-full z-10 absolute top-0 h-screen flex justify-center items-start text-2xl bg-amber-100">
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
            <div className="flex justify-center z-10">
                <div className="md:w-[80%] w-full absolute rounded-2xl top-0 h-screen flex justify-center items-start text-2xl bg-amber-100">
                <div className="flex-row mt-10">
                    <button className="cursor-pointer hover:text-amber-100" onClick={() => setIsOpenMonths(!isOpenMonths)}><X /></button>
                    {months.map((m, index) => (
                        <div className="grid" key={index}>
                            <Link to={`/kalendar/${m}`} className="text-3xl md:mt-2 mt-0.5 hover:text-amber-100">{m} 2025</Link>
                        </div>
                    ))}
                </div>
            </div>
            </div>
        )
    }

  return (
    <div className="flex justify-center items-center">
        <nav className='md:w-[80%] w-[90%] rounded-full h-[70px] mt-5  bg-amber-100/40 hover:bg-amber-100 backdrop-blur-sms transition-all items-center flex justify-between'>
            <div className="flex justify-center md:ml-20 ml-5">
                <b className="text-xl flex items-center">{language === 'СР' ? 'Православни Календар' : 'Pravoslavni Kalendar'} ☦️</b >
            </div>
            <div className="md:flex hidden justify-around gap-4 items-center mr-20">
                <Link className="flex items-center gap-1 hover:text-amber-500" to={''} onClick={() => setIsOpenMonths(!isOpenMonths)}>{language === 'СР' ? 'Календар за целу годину' : 'Kalendar za celu godinu'} <Calendar size={16} /></Link>
                <Link className="hover:text-amber-500" to={'/post'}>{language === 'СР' ? 'Постови' : 'Postovi'}</Link>
                <Link className="border-r pr-3 hover:text-amber-500" to={'/o-aplikaciji'}>{language === 'СР' ? 'О апликацији' : 'O aplikaciji'}</Link>
                <button onClick={toggleLanguage} className="cursor-pointer hover:text-amber-500 flex gap-1 items-center"><Languages size={20} />SR/СР</button>
            </div>

            <button onClick={() => setIsOpen(!isOpen)} className="mr-5 md:hidden  cursor-pointer"><Menu /></button>
        </nav>
    </div>
  )
}

export default Navbar