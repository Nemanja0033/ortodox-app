import { TodayCardComponnetType } from "../types/TodayCardComponentType"

const TodayCard = ({praznik, post, crveno_slovo, slika}: TodayCardComponnetType) => {
  console.log(slika)
  return (
    <div className="w-full rounded-full h-32 cursor-pointer transition-all flex-row  shadow-md items-center bg-amber-100">
      <div className="flex justify-around items-center m-3">
        <img className="md:w-30 z-0 relative md:right-10 right-3 w-30 h-32 rounded-full" src={slika ?? ''} alt="" />
      <div className="flex-row m-4">
        <b className={`${crveno_slovo === 'Да' ? 'text-red-600' : 'text-black'} md:text-3xl text-2xl`}>{praznik}</b>
        <br />
        <span className="text-2xl">{post}</span>
      </div>
      </div>
    </div>
  )
}

export default TodayCard