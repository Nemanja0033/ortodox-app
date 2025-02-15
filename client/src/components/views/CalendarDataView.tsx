import { CalendarHeart } from "lucide-react";
import { useState, useEffect } from "react";
import { currentDate } from "../../constants/currentDate";
import { DataViewType } from "../../types/DateViewType";
import { useTheme } from "../../context/ThemeContext";

const CalendarDataView = ({index, datum, post, dan, crveno_slovo, praznik}: DataViewType) => { 
    const [savedDate, setSavedDate] = useState<any>();
    const { theme } = useTheme();

    useEffect(() => {
        setSavedDate(localStorage.getItem('saved'));
      }, []);

      const saveDate = (date: string) => {
        localStorage.setItem('saved', date);
        setSavedDate(date); 
      };

  return (
    <div key={index} className={`flex justify-between md:h-22 h-18 ${savedDate === datum ? 'bg-red-400' : ''}  ${datum === currentDate ? 'bg-amber-200' : ''} ${theme === 'light' ? 'bg-amber-100/40 hover:bg-amber-100' : 'bg-black/70 hover:bg-black text-white'} transition-all cursor-pointer mt-1 shadow-md rounded-full items-center w-full`}>
        <div className="flex-row ml-5">
            <span className="md:text-xl text-md">{datum.replace('2025-', '')}</span>
            <br />
            <span className="text-xl">{post}</span>
            <br />
            <span>{dan}</span>
        </div>
        <div className="flex gap-2 items-center mr-3">
            <h1 className={`${crveno_slovo === 'Да' ? 'text-red-500' : ''} md:text-xl font-bold mr-3 text-end`}>{praznik}</h1>
            <button onClick={() => saveDate(datum)} className="cursor-pointer hover:text-amber-300"><CalendarHeart size={22} /></button>
        </div>
    </div>
  )
}

export default CalendarDataView