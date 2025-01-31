import { useEffect, useState } from "react";

const HeroCalendar = () => {
    
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
        }

        setCurrentMonth();
    })


  return (
    <div className="flex-row w-full h-auto rounded-lg">
        <nav className="w-full border-b border-black flex justify-center">
            <span></span>
        </nav>
    </div>
  )
}

export default HeroCalendar