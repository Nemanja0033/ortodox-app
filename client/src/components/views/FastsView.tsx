import { useTheme } from "../../context/ThemeContext"

const FastsView = ({post}: {post: string}) => {

    const {theme} = useTheme();

  return (
    <div className={`w-1/2 h-20 flex justify-center items-center rounded-2xl ${theme === 'light' ? 'bg-amber-100/40' : 'bg-black text-white'}`}>
        <h1 className="font-bold text-xl">{post}</h1>
    </div>
  )
}

export default FastsView