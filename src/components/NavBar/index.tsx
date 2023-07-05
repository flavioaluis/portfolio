import style from './NavBar.module.scss';


function NavBar() {
    return (
    <nav>
        <ul className={style.Menu}>
            <li><a href="#section1">Sobre Mim</a></li>
            <li><a href="#section2">Portfólio</a></li> 
        </ul>
    </nav>

)}

export default NavBar;