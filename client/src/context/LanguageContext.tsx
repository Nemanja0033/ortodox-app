import { createContext, ReactNode, useContext, useState } from "react";

interface LanguageContextProps {
    language: string,
    toggleLanguage: any
} 

const LanguageContext = createContext<LanguageContextProps | null>(null);

export const LanguageContextProvider = ({children}: {children: ReactNode}) => {
    const [language, setLanguage] = useState('SR');
    const toggleLanguage = () => {
        setLanguage('СР');
    }

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