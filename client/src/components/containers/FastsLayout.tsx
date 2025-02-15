import { useEffect, useState } from "react";
import { useTheme } from "../../context/ThemeContext";
import axios from "axios";
import FastsView from "../views/FastsView";

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
    <main className={`w-full rounded-2xl mt-10 h-full  grid grid-cols-1 ${theme === 'light' ? 'bg-amber-100/40' : 'bg-black text-white'}`}>
      <section className="flex-row text-center px-3 w-full m-3">
        <h1 className="text-2xl font-bold">{data?.uvod[0].naslov}</h1>
        <p className="text-xl mt-5 p-3">``{data?.uvod[0].tekst} ,,</p>
      </section>

      <section className="grid grid-cols-1 mb-5 place-items-center">
        {data?.postovi.map((p: any, i: any) => (
          <FastsView key={i} post={p.post} />
        ))}
      </section>
    </main>
  )
}

export default FastsLayout