import { createContext, ReactNode, useContext, useEffect, useState } from "react";

interface LanguageContextProps {
    language: string | null,
    toggleLanguage: any
} 

const LanguageContext = createContext<LanguageContextProps | null>(null);

export const LanguageContextProvider = ({children}: {children: ReactNode}) => {
    const [language, setLanguage] = useState<string | null>('SR');
    const toggleLanguage = () => {
        setLanguage(language === 'SR' ? "СР" : "SR");
        localStorage.setItem("lang", language?? '');
    }

    useEffect(() => {
        let lang = localStorage.getItem("lang");
        setLanguage(lang)
    }, [])

    return(
        <LanguageContext.Provider value={{language, toggleLanguage}}>
            {children}
        </LanguageContext.Provider>
    )
}

export const useLanguage = () => {
    const context = useContext(LanguageContext);
        if (!context) {
            throw new Error("useLanguageContext must be used within a CurrentMonthProvider");
          }
        else{
            return context;
        }
}