import axios from "axios";
import { useState, useEffect } from "react";
import TodayCard from "./TodayCard";

const Hero = () => {

  const [data, setData] = useState<any[]>([]);
  
  const currentDate = new Date().toISOString().split("T")[0];

  useEffect(() => {
    axios.get('http://localhost:3000/calendar')
      .then((response) => {
        setData(response.data.dani.filter((d: any) => d.datum === currentDate)); 
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="md:w-96 w-full mt-12 flex-row place-self-center">
      <h1 className="text-2xl">Danas</h1>
          {data.map((d,index) => (
            <TodayCard key={index} datum={d.datum.replace('2025-', '')} 
            slika={d.slika}
            praznik={d.praznik} 
            post={d.post} 
            crveno_slovo={d.crveno_slovo} 
           />
          ))}
    </div>
  )
}

export default Hero