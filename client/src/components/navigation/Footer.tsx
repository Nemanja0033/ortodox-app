import { LINKEDIN_URL } from "../../constants/links";
import { useTheme } from "../../context/ThemeContext"

const Footer = () => {
    const { theme } = useTheme();

  return (
   <main className="flex justify-center">
     <footer className={`w-full md:w-[85%] h-[50px] mt-3 mb-3 ${theme === 'light' ? 'bg-amber-100/40' : 'bg-black text-white'} flex gap-2 justify-center text-center items-center gap-4 rounded-3xl`}>
        <a className="curosr-pointer hover:underline" href={LINKEDIN_URL}>Nemanja Antonijevic</a>
        <i>Pravoslavnik ® 2025</i>
    </footer>
   </main>
  )
}

export default Footer