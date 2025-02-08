import { RefreshCcw } from "lucide-react";
import { useTheme } from "../context/ThemeContext"
import { QuoteComponentType } from "../types/QuoteComponentType"

const Quote = ({quote, author, onclick}: QuoteComponentType) => {
    
    const { theme } = useTheme();
  return (
    <div className={`w-full ${theme === 'light' ? 'bg-amber-100/60' : 'bg-black text-white'} h-auto rounded-3xl text-center flex justify-center`}>
        <div className="mt-3 mb-3">
            <i className="font-semibold md:text-xl mr-3 ml-3">"{quote}"</i>
            <p>-{author}</p>
            <button onClick={onclick} className="cursor-pointer mt-3 hover:animate-spin"><RefreshCcw /></button>
        </div>
    </div>
  )
}

export default Quote