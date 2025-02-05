import axios from "axios";
import { useState, useEffect, useRef } from "react";
import TodayCard from "./TodayCard";
import HeroCalendar from "./HeroCalendar";
import { useLanguage } from "../context/LanguageContext";
import { currentDate } from "../constants/currentDate";
import { useTheme } from "../context/ThemeContext";
import { useAnim } from "../hooks/useAnim";

const Hero = () => {
  const [data, setData] = useState<any[]| null>(null);
  const { language } = useLanguage();
  const { theme } = useTheme();

  let currentMonthName = new Intl.DateTimeFormat("sr-RS", { month: "long" }).format(new Date());
  let today = new Date();
  let dayOfMonth = today.toLocaleDateString("sr-RS", { day: "numeric" });

  const todayCardRef = useRef<HTMLDivElement | null>(null);
  useAnim(todayCardRef, 50);

  useEffect(() => {
    axios.get('http://localhost:3000/calendar')
      .then((response) => {
        setData(response.data.dani.filter((d: any) => d.datum === currentDate));  // storing data for TodayCard component
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="flex justify-center">
      <div ref={todayCardRef} className="md:w-[700px] h-96 w-full md:mt-20 mt-12 flex-row place-self-center">
      <h1 className={`text-2xl md:text-start text-center font-bold ${theme === 'light' ? 'text-black' : 'text-white'}`}>{language === 'СР' ? 'Данас је' : 'Danas je'} {dayOfMonth}. {currentMonthName}</h1>
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

          <div className="md:mt-24 mt-12 mb-12">
            <h1 className={`${theme === 'light' ? 'text-black' : 'text-white'} font-bold md:text-start text-center text-2xl mb-3`}>{language === 'СР' ? 'Календар ѕа месец дана' : 'Kalendar za mesec dana' }</h1>
            <HeroCalendar/>
          </div>
    </div>
    </div>
  )
}

export default Hero