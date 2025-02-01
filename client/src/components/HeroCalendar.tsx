import { useCurrentMonth } from "../context/CurrentMonthContext";

const HeroCalendar = ({data}: any) => {

  const {month} = useCurrentMonth();

  
  return (
    <div className="flex-row w-full h-auto rounded-2xl bg-amber-100 shadow-lg">
        <nav className="w-full h-12 items-center flex justify-center mb-2">
            <span className="font-bold text-xl">{month}</span>
        </nav>

        <div className="flex-row w-full">
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