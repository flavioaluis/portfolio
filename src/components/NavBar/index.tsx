import {Link} from 'react-router-dom';
import style from './NavBar.module.scss';


function NavBar() {
    return (
    <nav className={style.Menu}>
        <Link to="/AboutMe">Sobre mim</Link>
        <Link to="/Portfolio">Portfólio</Link>
        <Link to="/Certificados">Certificados</Link>

    </nav>

)}

export default NavBar;