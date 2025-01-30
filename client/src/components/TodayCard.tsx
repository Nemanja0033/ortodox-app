import { TodayCardComponnetType } from "../types/TodayCardComponentType"

const TodayCard = ({datum, praznik, post, crveno_slovo}: TodayCardComponnetType) => {
  return (
    <div className="w-full h-auto flex justify-around rounded-lg shadow-md bg-amber-100">
        <span className="">{datum}</span>
        <b className={`${crveno_slovo === 'Да' ? 'text-red-600' : 'text-black'}`}>{praznik}</b>
        <span>{post}</span>
    </div>
  )
}

export default TodayCard