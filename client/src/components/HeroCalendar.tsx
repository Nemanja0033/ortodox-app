import { useCurrentMonth } from "../context/CurrentMonthContext";

const HeroCalendar = ({data}: any) => {

  const {month} = useCurrentMonth();

  
  return (
    <div className="flex-row w-full h-auto rounded-2xl bg-transparent">
        <nav className="w-full h-12 items-center bg-amber-100 rounded-full shadow-md flex justify-center mb-2">
            <span className="font-bold text-xl">{month}</span>
        </nav>

        <div className="flex-row w-full mt-3 bg-amber-100 rounded-xl">
          {data?.map((d:any, index: number) => (
            <div key={index} className="flex justify-between items-center w-full">
              <div className="flex-row">
                <span className="text-xl">{d.datum.replace('2025-', '')}</span>
                <br />
                <span className="text-xl">{d.post}</span>
              </div>
              <h1 className={`${d.crveno_slovo === 'Да' ? 'text-red-400' : 'text-black'} md:text-xl`}>{d.praznik}</h1>
          </div>
          ))}
        </div>
    </div>
  )
}

export default HeroCalendar