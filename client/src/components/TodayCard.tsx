import { TodayCardComponnetType } from "../types/TodayCardComponentType"

const TodayCard = ({praznik, post, crveno_slovo, slika}: TodayCardComponnetType) => {
  console.log(slika)
  return (
    <div className="w-full rounded-full h-auto cursor-pointer transition-all flex-row  shadow-md items-center bg-[#D2665A]">
      <div className="flex justify-around items-center m-3">
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