import { Link } from "react-router"
import { useTheme } from "../../context/ThemeContext"
import { useLanguage } from "../../context/LanguageContext";
import { useState } from "react";
import { X } from "lucide-react";

const AdBanner = () => {
    const { theme } = useTheme();
    const{ language } = useLanguage();
    const [isOpen, setIsOpen] = useState(true);

    const hideAd = () => {
        setIsOpen(false);
    }

  return (
    <>
    {isOpen ? (
        <section className={`w-full ad-container flex ${theme === 'light' ? 'bg-white' : 'bg-black text-white'} justify-center items-center`}>
        <div className="m-3">
            <Link to={'https://buymeacoffee.com/nemanja0033'}>
                <img className="h-12" src="/donations.png" alt="" />
            </Link>
        </div>
        <h1 className="font-bold">{language === 'SR' ? "Podrzite rad stranice simbolicnom donacijom" : "Подржите рад странице симболичном донацијом"}</h1>
        <button onClick={hideAd} className="relative cursor-pointer bottom-5 left-3"><X /></button>
       </section>
    )
    :
    (
        ''
    )
    }
    </>
  )
}

export default AdBanner