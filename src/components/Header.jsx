import logo from '../assets/Aquí tienes el diseño del logo para _Mezcal Records_, creado con un estilo underground y elementos relacionados con discos de vinilo. Espero que te guste y se ajuste a lo que tenías en mente. Si necesitas alguna modificación o un nuevo.jpeg';

function Header (){
    return (

        <>
        <header>
            <img src={logo} alt="Mezcal Records" className="header-logo" />
        </header>
        </>
    );
}

export default Header;