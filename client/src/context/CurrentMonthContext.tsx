import { createContext, ReactNode, useContext, useEffect, useState } from "react";

type CurrentMonthProps = {
    month: string
}

const CurrentMonth = createContext<CurrentMonthProps | null>(null);

export const CurrentMonthProvider = ({children}: {children: ReactNode}) => {
        const [month, setMonth] = useState('');
        const currentMonth = new Date().getMonth();
    
        useEffect(() => {
            const setCurrentMonth = () => {
                switch(currentMonth){
                    case 1:
                        setMonth('Јануар');
                    break;
                    case 2:
                        setMonth('Фебруар');
                    break;
                    case 3:
                        setMonth('Март');
                    break;
                    case 4:
                        setMonth('Април');
                    break;
                    case 5:
                        setMonth('Мај');
                    break;
                    case 6:
                        setMonth('Јун');
                    break;
                    case 7:
                        setMonth('Јул');
                    break;
                    case 8:
                        setMonth('Август');
                    break;
                    case 9:
                        setMonth('Септембар');
                    break;
                    case 10:
                        setMonth('Октобар');
                    break;
                    case 11:
                        setMonth('Новембар');
                    break;
                    case 12:
                        setMonth('Децембар');
                    break;
                }
            };
    
            setCurrentMonth();
        }, [currentMonth]);

        return(
            <CurrentMonth.Provider value={{month}}>
                {children}
            </CurrentMonth.Provider>
        )
}

export const useCurrentMonth = () => {
    const context = useContext(CurrentMonth);
    return context;
}