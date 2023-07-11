const Header = ({menu, setMenu}) => {
  return(
    <div>
      <h1 className="text-white font-semibold text-lg lg:text-center font-face-gm">Welcome to RISU Cafe</h1>
      <p className="text-primary font-semibold text-sm mt-5 lg:text-center font-face-gm">Game. Coffee. Repeat.</p>
      <div className="menu mx-auto flex justify-between border w-52 rounded-lg bg-[#FCF2D9] mt-5">
        <button 
          className={`font-face-gm text-[11px] py-2 px-2 rounded-lg font-bold ${menu == 'Minuman' ? 'active' : '' }`}
          onClick={() => setMenu('Minuman')}
        >
          Minuman
        </button>
        <button 
          className={`font-face-gm text-[11px] py-2 px-2 rounded-lg font-bold ${menu == 'Cemilan' ? 'active' : '' }`}
          onClick={() => setMenu('Cemilan')}
        >
          Cemilan
        </button>
      </div>
    </div>
  );
}

export default Header;