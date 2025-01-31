import { TodayCardComponnetType } from "../types/TodayCardComponentType"

const TodayCard = ({praznik, post, crveno_slovo}: TodayCardComponnetType) => {
  return (
    <div className="w-full h-auto cursor-pointer hover:opacity-85 transition-all hover:scale-105 flex-row rounded-lg shadow-md items-center bg-amber-100">
      <div className="flex justify-around items-center m-3">
      <div className="flex-row">
        <b className={`${crveno_slovo === 'Да' ? 'text-red-600' : 'text-black'} text-xl`}>{praznik}</b>
        <br />
        <span>{post}</span>
      </div>
      </div>
    </div>
  )
}

export default TodayCard