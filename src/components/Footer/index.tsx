import style from './Footer.module.scss';

function Footer() {
    return(
        <div className={style.foot}><h4> &copy; {new Date().getFullYear()} Flávio Almeida Luis |<a href="https://react.dev/">React.js</a>,<a href="https://www.typescriptlang.org/">Typescript</a>,<a href="https://getbootstrap.com/">Bootstrap</a> and <a href="https://sass-lang.com/">SCSS</a></h4></div>
)}

export default Footer;