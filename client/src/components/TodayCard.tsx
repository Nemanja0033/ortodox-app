import { TodayCardComponnetType } from "../types/TodayCardComponentType"

const TodayCard = ({praznik, post, crveno_slovo, slika}: TodayCardComponnetType) => {
  console.log(slika)
  return (
    <div className="w-full rounded-full h-auto cursor-pointer hover:opacity-85 transition-all hover:scale-105 flex-row md:rounded-lg shadow-md items-center bg-[#D2665A]">
      <div className="flex justify-around items-center m-3">
        <img src={slika} className="w-24" alt="" />
      <div className="flex-row">
        <b className={`${crveno_slovo === 'Да' ? 'text-red-600' : 'text-white'} text-xl`}>{praznik}</b>
        <br />
        <span>{post}</span>
      </div>
      </div>
    </div>
  )
}

export default TodayCard