import { MoveLeft, MoveRight } from "lucide-react";
import { useCurrentMonth } from "../context/CurrentMonthContext";

const HeroCalendar = ({data}: any) => {

  const {month} = useCurrentMonth();

  
  return (
    <div className="flex-row w-full h-auto rounded-2xl bg-transparent">
        <nav className="w-full h-12 items-center bg-amber-100 rounded-full rouden full flex justify-between mb-2">
            <button className="ml-5 rounded-full hover:bg-gray-100 cursor-pointer hover:scale-105 transition-all"><MoveLeft  size={24}/></button>
            <span className="font-bold text-xl">{month}</span>
            <button className="mr-5 cursor-pointer hover:scale-105 transition-all "><MoveRight  size={24}/></button>
        </nav>

        <div className="flex-row w-full mt-3 bg-amber-100 rounded-xl">
          {data?.map((d:any, index: number) => (
            <div key={index} className="flex justify-between items-center w-full">
              <div className="flex-row">
                <span>{d.datum.replace('2025-', '')}</span>
                <br />
                <span>{d.post}</span>
              </div>
              <h1>{d.praznik}</h1>
          </div>
          ))}
        </div>
    </div>
  )
}

export default HeroCalendar