import { useState, useEffect } from "react";
import { useTheme } from "../../context/ThemeContext";
import axios from "axios";

const AboutLayout = () => {
	const [data, setData] = useState();
	const { theme } = useTheme();

	useEffect(() => {
		axios.get('http://localhost:3000/about')
      .then((response) => {
        setData(response.data);
      })
      .catch((err) => {
      	console.log(err);
      });
	}, []);	
	
	return(
		<main className={`h-screen flex justify-center text-center`}>
			<section className={`w-[80%] mt-5 ${theme === 'light' ? 'bg-amber-100/40' : 'bg-black text-white'} flex-ro`}>
				<h1 className="text-2xl font-bold">O Aplikaciji</h1>
				<br />
				<p className="font-bold text-xl">{data?.aboutRS}</p>						
			</section>
		</main>
	)
}

export default AboutLayout