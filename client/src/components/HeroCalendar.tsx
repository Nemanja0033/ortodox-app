import { useCurrentMonth } from "../context/CurrentMonthContext";
import { DataType } from "../types/DataType";

const HeroCalendar = ({praznik, datum, crveno_slovo, post}: DataType) => {

  const {month} = useCurrentMonth();
  
  return (
    <div className="flex-row w-full h-auto rounded-full bg-[#D2665A]">
        <nav className="w-full h-12 items-center flex justify-center mb-2">
            <span className="font-bold text-xl">{month}</span>
        </nav>
    </div>
  )
}

export default HeroCalendar