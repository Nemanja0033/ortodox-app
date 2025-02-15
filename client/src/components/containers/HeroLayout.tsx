import axios from "axios";
import { useState, useEffect, useRef } from "react";
import TodayCard from "../views/TodayCardView";
import HeroCalendar from "./HeroCalendar";
import { useLanguage } from "../../context/LanguageContext";
import { currentDate } from "../../constants/currentDate";
import { useTheme } from "../../context/ThemeContext";
import { useAnim } from "../../hooks/useAnim";
import Quote from "../views/QuoteView";

const Hero = () => {
  const [data, setData] = useState<any[]| null>(null);
  const [quote, setQuote] = useState<any>(null);
  const [currentQuote, setCurrentQoute] = useState<any>();
  const { language } = useLanguage();
  const { theme } = useTheme();

  let currentMonthName = new Intl.DateTimeFormat("sr-RS", { month: "long" }).format(new Date());
  let today = new Date();
  let dayOfMonth = today.toLocaleDateString("sr-RS", { day: "numeric" });
  let randomNumber = Math.floor(Math.random() * 24);

  const heroSectionRef = useRef<HTMLDivElement | null>(null);
  useAnim(heroSectionRef, 50);

  useEffect(() => {
    axios.get('http://localhost:3000/calendar')
      .then((response) => {
        setData(response.data.dani.filter((d: any) => d.datum === currentDate));  // storing data for TodayCard component
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    axios.get('http://localhost:3000/quotes')
    .then((response) => {
      setQuote(response.data.quotes);
      setCurrentQoute(response.data.quotes[randomNumber]);
      console.log(currentQuote);
    },).catch((err) => {
      console.log(err);
    });
  }, []);

  const refreshQuote = () => {
    setCurrentQoute(quote?.[randomNumber]);
  }

  return (
    <main ref={heroSectionRef} className="md:flex gap-5 flex-row justify-center items-center">
      <section className="mt-12 md:ml-10 md:w-1/2">
        <h1 className={`text-2xl md:text-start text-center font-bold ${theme === 'light' ? 'text-black' : 'text-white'}`}>{language === 'СР' ? 'Данас је' : 'Danas je'} {dayOfMonth}. {currentMonthName}</h1>
              {data?.map((d,index) => (
                <TodayCard key={index}
                          praznik={d.praznik} 
                          post={d.post} 
                          crveno_slovo={d.crveno_slovo} 
                          dan={d.dan}
                          />
              ))}

          <h1 className={`mb-3 font-bold text-xl ${theme === 'light' ? 'text-black' : 'text-white'}`}>{language === 'SR' ? 'Pouke Dana' : 'Поуке Дана  '}</h1>
            <Quote author={currentQuote?.author} 
                  quote={language === 'SR' ? currentQuote?.text_lat : currentQuote?.text_cyr} 
                  onclick={refreshQuote}
                  />
      </section>

      <section className="flex-row mt-12 md:mr-5 mb-5 justify-center md:w-1/2">
        <h1 className={`${theme === 'light' ? 'text-black' : 'text-white'} font-bold md:text-start text-center text-2xl mb-3`}>{language === 'СР' ? 'Календар ѕа месец дана' : 'Kalendar za mesec dana' }</h1>
        <HeroCalendar/>
      </section>
    </main>
  )
}

export default Hero