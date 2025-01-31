
const Navbar = () => {
  return (
    <nav className='w-full h-[50px] bg-amber-100 shadow-md items-center flex justify-between'>
        <div className="flex justify-center ml-20">
            <b className="text-xl flex items-center">Православни Календар ☦️</b >
        </div>
        <div className="flex justify-around gap-4 items-center mr-20">
            <a href="#">Календар за целу годину</a>
            <a href="#">Постови</a>
            <a href="#">О апликацији</a>
        </div>
    </nav>
  )
}

export default Navbar