/* import logo from '../assets/Aquí tienes el diseño del logo para _Mezcal Records_, creado con un estilo underground y elementos relacionados con discos de vinilo. Espero que te guste y se ajuste a lo que tenías en mente. Si necesitas alguna modificación o un nuevo.jpeg';

function Header (){
    return (

        <>
        <header>
            <img src={logo} alt="Mezcal Records" className="header-logo" />
        </header>
        </>
    );
}

export default Header; */

import Navbar from "./Navbar";

function Header() {
  return (
    <header className="site-header">
      <div className="header-content container">
        <div className="header-item">Mezcal Records</div>
        <Navbar />
      </div>
    </header>
  );
}

export default Header;