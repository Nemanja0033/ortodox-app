import axios from "axios";
import { useState, useEffect } from "react";
import TodayCard from "./TodayCard";
import HeroCalendar from "./HeroCalendar";
import { useCurrentMonth } from "../context/CurrentMonthContext";
import { useLanguage } from "../context/LanguageContext";
import { currentDate } from "../constants/currentDate";
import { useTheme } from "../context/ThemeContext";

const Hero = () => {
  const [data, setData] = useState<any[]| null>(null);
  const [calendarData, setCalendarData] = useState<any>();
  const { month } = useCurrentMonth();
  const { language } = useLanguage();
  const { theme } = useTheme();
  const [loading, setLoading] = useState(true);
  console.log(currentDate, data)

  useEffect(() => {
    axios.get('http://localhost:3000/calendar')
      .then((response) => {
        setData(response.data.dani.filter((d: any) => d.datum === currentDate));  // storing data for TodayCard component
        setCalendarData(response.data.dani.filter((d: any) => d.mesec === month)); // storing data for hero calendar component
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, [month]);

  return (
    <div className="flex justify-center">
      <div  className="md:w-[700px] h-96 w-full mt-12 flex-row place-self-center">
      <h1 className="text-2xl md:text-start text-center text-black">{language === 'СР' ? 'Данас је' : 'Danas je'} {data?.map((d, index) => (<span key={index}>{d.datum}</span>))}</h1>
          <div>
            {data?.map((d,index) => (
              <TodayCard key={index}
                         slika={d.slika}
                         praznik={d.praznik} 
                         post={d.post} 
                         crveno_slovo={d.crveno_slovo} 
                        />
            ))}
          </div>

          <div className="mt-12 mb-12">
            <h1 className={`${theme === 'light' ? 'text-black' : 'text-white'} text-2xl mb-3`}>{language === 'СР' ? 'Календар ѕа месец дана' : 'Kalendar za mesec dana' }</h1>
            <HeroCalendar data={calendarData} loading={loading}/>
          </div>
    </div>
    </div>
  )
}

export default Hero