import { TodayCardComponnetType } from "../types/TodayCardComponentType"

const TodayCard = ({datum, praznik, post, crveno_slovo, slika}: TodayCardComponnetType) => {
  return (
    <div className="w-full h-auto cursor-pointer hover:opacity-85 transition-all hover:scale-105 flex-row rounded-lg shadow-md items-center bg-amber-100">
      <div className="flex justify-around items-center">
      <img className="h-24 w-20 rounded-lg" src={slika} alt={praznik} />
      <div className="flex-row">
        <b className={`${crveno_slovo === 'Да' ? 'text-red-600' : 'text-black'} text-xl`}>{praznik}</b>
        <br />
        <span>{datum}</span>
        <br />
        <span>{post}</span>
      </div>
      </div>
    </div>
  )
}

export default TodayCard