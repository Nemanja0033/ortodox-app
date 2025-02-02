import { useCurrentMonth } from "../context/CurrentMonthContext";
import { useTheme } from "../context/ThemeContext";

const HeroCalendar = ({data, loading}: any) => {

  const {month} = useCurrentMonth();
  const { theme } = useTheme();

  if(loading || !data){
    return(
      <p className="animate-bounce text-2xl text-center">Учитавање података. . .</p>
    )
  }
  
  return (
    <div className="flex-row w-full h-auto rounded-2xl bg-transparent">
        <nav className={`w-full h-12 items-center ${theme === 'light' ? 'bg-amber-100' : 'bg-black text-white'} rounded-full shadow-md flex justify-center mb-2`}>
            <span className="font-bold text-xl">{month}</span>
        </nav>

        <div className="flex-row w-full overflow-auto h-64 mt-3 bg-transparent rounded-xl">
          {data?.map((d:any, index: number) => (
            <div key={index} className={`flex justify-between ${theme === 'light' ? 'bg-amber-100' : 'bg-black text-white'} mt-1 shadow-md rounded-full items-center w-full`}>
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