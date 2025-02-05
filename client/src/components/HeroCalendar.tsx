import { useEffect, useState } from "react";
import { currentDate } from "../constants/currentDate";
import { useCurrentMonth } from "../context/CurrentMonthContext";
import { useLanguage } from "../context/LanguageContext";
import { useTheme } from "../context/ThemeContext";
import axios from "axios";
import { RefreshCcw } from "lucide-react";

const HeroCalendar = () => {
  const [data, setData] = useState<any>()
  const [calendarData, setCalendarData] = useState<any>();
  const [loading, setLoading] = useState(true);
  const {month} = useCurrentMonth();
  const { theme } = useTheme();
  const { language } = useLanguage();

  useEffect(() => {
    axios.get('http://localhost:3000/calendar')
      .then((response) => {
        setData(response.data.dani.filter((d:any) => d.mesec === month));
        setCalendarData(response.data.dani.filter((d: any) => d.mesec === month)); // storing data for hero calendar component
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, [month]);

  const showHolidays = () => {
    let holidays = data.filter((d: any) => d.crveno_slovo === 'Да');
    setCalendarData(holidays);
  };

  const showFastingDays = () => {
    let fastingDays = data.filter((d: any) => d.post === 'Уље' || d.post === 'Вода');
    setCalendarData(fastingDays);
    console.log(fastingDays)
  }

  const resetFilters = () => {
    setCalendarData(data);
  }

  if(loading || calendarData.length == 0){
    return(
      <p className="animate-bounce text-2xl text-center">Учитавање података. . . Молимо вас освежите страницу</p>
    )
  }
  
  return (
    <div className={`flex-row w-full h-auto rounded-3xl ${theme === 'light' ? ' bg-amber-100/40' : 'bg-black/40'}`}>
        <nav className={`w-full h-12 items-center ${theme === 'light' ? 'bg-amber-100' : 'bg-black text-white'} rounded-full shadow-md flex justify-between mb-2`}>
            <span className="font-bold text-xl ml-10">{month}</span>
            <div className="flex md:gap-2 gap-0 mr-10">
              <button onClick={showHolidays} className="bg-amber-200 rounded-full text-black w-auto shadow-md md:scale-100 scale-90 p-1 cursor-pointer hover:opacity-65 transition-all">{language === 'СР' ? 'Црвено Слово/Празник' : 'Crveno Slovo/Praznik'}</button>
              <button onClick={showFastingDays} className="bg-amber-200 rounded-full text-black w-auto shadow-md p-1 md:scale-90 scale-75 cursor-pointer hover:opacity-65 transition-all">{language === 'СР' ? 'Дани Поста' : 'Dani Posta'}</button>
              <button onClick={resetFilters} className="bg-amber-200 rounded-full text-black w-auto shadow-md p-1 md:scale-90 scale-75 cursor-pointer hover:opacity-65 transition-all"><RefreshCcw /></button>
            </div>
        </nav>

        <div className="flex-row w-full overflow-auto md:h-80 h-screen mt-3 bg-transparent rounded-xl">
          {calendarData?.map((d:any, index: number) => (
            <div key={index} className={`flex justify-between h-18 ${d.datum === currentDate ? 'bg-amber-200' : ''} ${theme === 'light' ? 'bg-amber-100/40 hover:bg-amber-100' : 'bg-black/70 hover:bg-black text-white'} transition-all cursor-pointer mt-1 shadow-md rounded-full items-center w-full`}>
              <div className="flex-row ml-3">
                <span className="md:text-xl text-md">{d.datum.replace('2025-', '')}</span>
                <br />
                <span className="text-xl">{d.post}</span>
              </div>
              <h1 className={`${d.crveno_slovo === 'Да' ? 'text-red-500' : ''} md:text-xl font-bold mr-3 text-end`}>{d.praznik}</h1>
          </div>
          ))}
        </div>
    </div>
  )
}

export default HeroCalendar