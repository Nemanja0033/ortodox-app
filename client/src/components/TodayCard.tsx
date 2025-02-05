import { useTheme } from "../context/ThemeContext"
import { TodayCardComponnetType } from "../types/TodayCardComponentType"


const TodayCard = ({praznik, post, crveno_slovo, slika}: TodayCardComponnetType) => {

  const {theme} = useTheme();
  
  return (
    <div className={`w-full rounded-full h-32 cursor-pointer transition-all flex-row shadow-md items-center ${theme === 'light' ? 'bg-amber-100' : 'bg-black text-white'}`}>
      <div className="flex justify-around items-center m-3">
        <img className="md:w-30 z-0 relative w-30 md:h-fit h-fit rounded-full" src={slika ?? ''} alt="" />
      <div className="flex-row m-4">
        <b className={`${crveno_slovo === 'Да' ? 'text-red-600' : 'text-black'} ${theme === 'light' ? 'text-black' : 'text-white'} md:text-3xl text-xl`}>{praznik}</b>
        <br />
        <span className="md:text-2xl text-md">{post}</span>
      </div>
      </div>
    </div>
  )
}

export default TodayCard