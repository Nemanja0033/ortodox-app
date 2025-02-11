import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router"
import SingleDate from "./SingleDate";
import { DataType } from "../types/DataType";
import { useTheme } from "../context/ThemeContext";
import { useLanguage } from "../context/LanguageContext";
import { RefreshCcw } from "lucide-react";

const Calendar = () => {
    const month = useParams().id;
    const [data, setData] = useState<any[]>([]);
    const [calndarData, setCalendarData] = useState<any[]>([]);
    const { theme } = useTheme();
    const { language } = useLanguage();

    useEffect(() => {
        axios.get("http://localhost:3000/calendar")
        .then((response) => {
            setData(response.data.dani.filter((d: any) => d.mesec === month));
            setCalendarData(response.data.dani.filter((d: any) => d.mesec === month)); //filtering data to get for specific month
        })
        .catch((err) => {
            console.log('Error while fetching data', err);
        });
        console.log('COMPONENT RENDEREND')
    }, [month]);

    const handleFilters = (value: string) => {
        if(value === 'Crveno Slovo/Praznik' || value === 'Црвено Слово/Празник'){
            setCalendarData(data.filter((d: any) => d.crveno_slovo === 'Да'));
          }
          else if(value === 'Dani Posta' || value === 'Дани Поста'){
            setCalendarData(data.filter((d: any) => d.post === 'Уље' || d.post === 'Вода'));
          }
          else {
            setCalendarData(data.filter((d:any) => d.dan === 'Недеља'));
          }
    }

    const resetFilters = () => {
        setCalendarData(data);
    }

  return (
    <main className="mt-12">
        <nav className={` m-3 h-12 items-center rounded-xl flex text-center justify-around ${theme === 'light' ? 'bg-amber-100/60' : 'bg-black text-white'}`}>
            <span className="font-semibold text-xl">{month} ({calndarData.length})</span>
            <div className="flex items-center gap-2">
            <select className={`${theme === 'light' ? 'bg-transparent border border-black' : 'bg-black border-amber-300 border'} rounded-md text-center`} onChange={(e) => handleFilters(e.target.value)} name="dropdown">
                    <option>{language === 'SR' ? 'Crveno Slovo/Praznik' : 'Црвено Слово/Празник'}</option>
                    <option>{language === 'SR' ? 'Dani Posta' : 'Дани Поста'}</option>
                    <option>{language === 'SR' ? 'Nedelja' : 'Недеља'}</option>
                </select>
                <button onClick={resetFilters} className="rounded-full w-auto hover:animate-spin p-1 md:scale-90 scale-75 cursor-pointer hover:opacity-65 transition-all"><RefreshCcw /></button>
            </div>
        </nav>
        <section className={`grid md:grid-cols-7 p-2 m-3 rounded-xl ${theme === 'light' ? 'bg-amber-100/60' : 'bg-black/80'} grid-cols-1 gap-2`}>
            
            {calndarData.map((d: DataType, index) => (
                <SingleDate key={index} //this need fix
                            crveno_slovo={d.crveno_slovo}
                            praznik={d.praznik} 
                            datum={d.datum.replace('2025-', '')} 
                            post={d.post} 
                            />
            ))}
        </section>
    </main>
  )
}

export default Calendar