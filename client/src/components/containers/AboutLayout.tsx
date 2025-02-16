import { useState, useEffect } from "react";
import { useTheme } from "../../context/ThemeContext";
import axios from "axios";
import { useLanguage } from "../../context/LanguageContext";
import { Link } from "react-router";

type DataProps = {
	aboutRS: string,
	aboutRS_cyr: string
}

const AboutLayout = () => {
	const [data, setData] = useState<DataProps>();
	const { theme } = useTheme();
	const { language } = useLanguage();

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
			<section className={`md:w-[80%] w-full mt-5 ${theme === 'light' ? 'bg-amber-100/40' : 'bg-black text-white'} flex-ro`}>
				<h1 className="text-2xl font-bold">{language === 'SR' ? "O Aplikaciji" : "О Апликацији"}</h1>
				<br />
				<p className="font-bold text-xl">{language === 'SR' ? data?.aboutRS : data?.aboutRS_cyr}</p>						
				<div className="flex justify-center items-center mt-5">
					<Link to={'https://buymeacoffee.com/nemanja0033'}>
						<img className="md:h-46 h-60" src="/donations.png" alt="" />
					</Link>
				</div>
			</section>
		</main>
	)
}

export default AboutLayout