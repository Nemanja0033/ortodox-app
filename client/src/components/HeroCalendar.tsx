import { useRef } from "react";
import { currentDate } from "../constants/currentDate";
import { useCurrentMonth } from "../context/CurrentMonthContext";
import { useTheme } from "../context/ThemeContext";
import { useAnim } from "../hooks/useAnim";

const HeroCalendar = ({data, loading}: any) => {

  const {month} = useCurrentMonth();
  const { theme } = useTheme();
  const heroCalendarRef = useRef<HTMLDivElement | null>(null);
  useAnim(heroCalendarRef);

  if(loading || data.length == 0){
    return(
      <p className="animate-bounce text-2xl text-center">Учитавање података. . . Молимо вас освежите страницу</p>
    )
  }
  
  return (
    <div ref={heroCalendarRef} className="flex-row w-full h-auto rounded-2xl bg-transparent">
        <nav className={`w-full h-12 items-center ${theme === 'light' ? 'bg-amber-100' : 'bg-black text-white'} rounded-full shadow-md flex justify-center mb-2`}>
            <span className="font-bold text-xl">{month}</span>
        </nav>

        <div className="flex-row w-full overflow-auto h-80 mt-3 bg-transparent rounded-xl">
          {data?.map((d:any, index: number) => (
            <div key={index} className={`flex justify-between ${d.datum === currentDate ? 'bg-amber-200' : ''} ${theme === 'light' ? 'bg-amber-100/40 hover:bg-amber-100' : 'bg-black/70 hover:bg-black text-white'} transition-all cursor-pointer mt-1 shadow-md rounded-full items-center w-full`}>
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