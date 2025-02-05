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
  const [dropdownValue, setDropdownValue] = useState<string>('');
  const {month} = useCurrentMonth();
  const { theme } = useTheme();
  const { language } = useLanguage();

  console.log(dropdownValue)

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

  const handleFilter = (value: string) => {
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

  if(loading || calendarData.length == 0){
    return(
      <p className="animate-bounce text-2xl text-center">Учитавање података. . . Молимо вас освежите страницу</p>
    )
  }
  
  return (
    <div className={`flex-row w-full h-auto rounded-3xl ${theme === 'light' ? ' bg-amber-100/40' : 'bg-black/40'}`}>
        <nav className={`w-full h-12 items-center ${theme === 'light' ? 'bg-amber-100' : 'bg-black text-white'} rounded-full shadow-md flex justify-between mb-2`}>
            <span className="font-bold text-xl ml-10">{month}</span>
            <div className="flex md:gap-2 gap-0 mr-10 items-center">
              <label className={`${theme === 'light' ? 'text-black' : 'text-white'} font-bold`} htmlFor="dropdown">{language === 'SR' ? 'Sortiraj Prema:' : 'Сортирај Према:'}</label>
              <select onChange={(e) => handleFilter(e.target.value)} name="dropdown">
                <option>{language === 'SR' ? 'Crveno Slovo/Praznik' : 'Црвено Слово/Празник'}</option>
                <option>{language === 'SR' ? 'Dani Posta' : 'Дани Поста'}</option>
                <option>{language === 'SR' ? 'Nedelja' : 'Недеља'}</option>
              </select>
              <button onClick={resetFilters} className="bg-amber-200 rounded-full text-black w-auto shadow-md p-1 md:scale-90 scale-75 cursor-pointer hover:opacity-65 transition-all"><RefreshCcw /></button>
            </div>
        </nav>

        <div className="flex-row w-full overflow-auto md:h-80 h-screen mt-3 bg-transparent rounded-xl">
          {calendarData?.map((d:any, index: number) => (
            <div key={index} className={`flex justify-between md:h-22 h-18  ${d.datum === currentDate ? 'bg-amber-200' : ''} ${theme === 'light' ? 'bg-amber-100/40 hover:bg-amber-100' : 'bg-black/70 hover:bg-black text-white'} transition-all cursor-pointer mt-1 shadow-md rounded-full items-center w-full`}>
              <div className="flex-row ml-5">
                <span className="md:text-xl text-md">{d.datum.replace('2025-', '')}</span>
                <br />
                <span className="text-xl">{d.post}</span>
                <br />
                <span>{d.dan}</span>
              </div>
              <h1 className={`${d.crveno_slovo === 'Да' ? 'text-red-500' : ''} md:text-xl font-bold mr-3 text-end`}>{d.praznik}</h1>
          </div>
          ))}
        </div>
    </div>
  )
}

export default HeroCalendar