import axios from "axios"
import { useEffect, useState } from "react"

const App = () => {

  const [data, setData] = useState<any>();

  console.log(data);

  useEffect(() => {
    axios.get('http://localhost:3000/calendar').then((response) => {
      setData(response.data);
    }).catch((error) => {
      console.log(error);
    });
  }, []);

  return (
    <div className="w-full flex justify-center  font-bold">
      <div className="flex-row">
        <h1 className="mt-10">
          Pravoslavni Kalendar 2025
        </h1>

        <div className="grid grid-col-7 w-full">
        {data?.dani?.map((dan: any, index: number) => (
          <div key={index} className="border rounded-lg shadow-lg bg-amber-100 mt-3 mb-3 flex-row p-2">
            <p>{dan.datum}</p>
            <p className={`${dan.crveno_slovo === 'Да' ? 'text-red-600' : 'text-black'}`}>{dan.praznik}</p>
            <p>{dan.post}</p>
          </div>
        ))}
        </div>
      </div>
    </div>
  )
}

export default App