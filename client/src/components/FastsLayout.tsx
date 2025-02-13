import { useEffect, useState } from "react";
import { useTheme } from "../context/ThemeContext";
import axios from "axios";

const FastsLayout = () => {
    const { theme } = useTheme();
    const [data, setData] = useState<any>();

    useEffect(() => {
      axios.get('http://localhost:3000/fasts')
      .then((response) => {
        setData(response.data);
      })
    }, []);

  return (
    <main className={`w-full rounded-2xl mt-10 h-full grid grid-cols-1 ${theme === 'light' ? 'bg-amber-100/40' : 'bg-black text-white'}`}>
      <section className="flex-row text-center w-full m-3">
        <h1 className="text-2xl font-bold">{data?.uvod[0].naslov}</h1>
      </section>
    </main>
  )
}

export default FastsLayout