import { currentDate } from "../constants/currentDate";
import { useTheme } from "../context/ThemeContext"
import { SingleDateProps } from "../types/SingleDateComponentType"

const SingleDate = ({datum, praznik, post, crveno_slovo, key}: SingleDateProps) => {

    const { theme } = useTheme();

  return (
    <div key={key} className={`w-auto h-32 overflow-auto flex-row rounded-xl ${datum === currentDate.replace('2025-', '') ? 'bg-amber-200' : ''} ${theme === 'light' ? 'bg-amber-100' : 'bg-black text-white'} text-center`}>
         <div className="flex justify-between px-4 mb-3">
            <span className="font-bold">{datum}</span>
            <span className="font-bold">{post}</span>
        </div>
        <h3 className={`${crveno_slovo === 'Да' ? 'text-red-500 font-bold' : ''}`}>{praznik}</h3>
    </div>
  )
}

export default SingleDate