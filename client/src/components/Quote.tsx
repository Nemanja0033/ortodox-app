import { useLanguage } from "../context/LanguageContext";
import { useTheme } from "../context/ThemeContext"
import { QuoteComponentType } from "../types/QuoteComponentType"

const Quote = ({quote, author}: QuoteComponentType) => {
    
    const { theme } = useTheme();
    const { language } = useLanguage();

  return (
    <div className={`w-full ${theme === 'light' ? 'bg-amber-100' : 'bg-black text-white'} h-auto rounded-full text-center flex justify-center`}>
        <div className="mt-3 mb-3">
            <i className="font-semibold md:text-xl">"{quote}"</i>
            <p>-{author}</p>
        </div>
    </div>
  )
}

export default Quote