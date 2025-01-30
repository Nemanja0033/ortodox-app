import { CardComponentType } from "../types/CardComponentType"

const Card = ({datum, crveno_slovo, praznik, post}: CardComponentType) => {
  return (
    <div className="border rounded-lg shadow-lg bg-amber-100 mt-3 mb-3 flex-row p-2">
            <p>{datum}</p>
            <p className={`${crveno_slovo === 'Да' ? 'text-red-600' : 'text-black'}`}>{praznik}</p>
            <p>{post}</p>
          </div>
  )
}

export default Card