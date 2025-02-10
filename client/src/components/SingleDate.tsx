import { useTheme } from "../context/ThemeContext"
import { SingleDateProps } from "../types/SingleDateComponentType"

const SingleDate = ({datum, praznik, post, crveno_slovo, key}: SingleDateProps) => {

    const { theme } = useTheme();

  return (
    <div key={key} className={`w-auto h-32 overflow-auto flex-row rounded-xl ${theme === 'light' ? 'bg-amber-100' : 'bg-black text-white'} text-center`}>
        <h3 className={`${crveno_slovo === 'Да' ? 'text-red-500' : ''}`}>{praznik}</h3>
        <div className="flex justify-between px-4">
            <span>{datum}</span>
            <span>{post}</span>
        </div>
    </div>
  )
}

export default SingleDate