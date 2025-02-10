import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router"
import SingleDate from "./SingleDate";
import { DataType } from "../types/DataType";
import { useTheme } from "../context/ThemeContext";

const Calendar = () => {
    const month = useParams().id;
    const [calndarData, setCalendarData] = useState<any[]>([]);
    const { theme } = useTheme();

    useEffect(() => {
        axios.get("http://localhost:3000/calendar")
        .then((response) => {
            setCalendarData(response.data.dani.filter((d: any) => d.mesec === month)); //filtering data to get for specific month
        })
        .catch((err) => {
            console.log('Error while fetching data', err);
        })
    })
  return (
    <section className={`grid md:grid-cols-7 p-2 m-3 rounded-xl ${theme === 'light' ? 'bg-amber-100/60' : 'bg-black/80'} grid-cols-1 gap-2`}>
        {calndarData.map((d: DataType, index) => (
            <SingleDate key={index}
                        crveno_slovo={d.crveno_slovo}
                        praznik={d.praznik} 
                        datum={d.datum.replace('2025-', '')} 
                        post={d.post} 
                        />
        ))}
    </section>
  )
}

export default Calendar