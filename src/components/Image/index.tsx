import React from 'react';
import Imagem from '../../assets/img.jpeg';
import style from './Image.module.scss'
import { useTypewriter, Cursor} from 'react-simple-typewriter';
import { FaGithub } from "@react-icons/all-files/fa/FaGithub" ;
import { FaLinkedin } from "@react-icons/all-files/fa/FaLinkedin" ;
import { FaEnvelope } from "@react-icons/all-files/fa/FaEnvelope" ;

function Image() {
    const [text] = useTypewriter ({
    words: ['Developer Full Stack', 'Front End Specialist'],
    loop : 0,
    typeSpeed:120,
    deleteSpeed:80,
    });
return(
<div className={style.Attributes}>
    <div className={style.imgBlock} >
        <div className={style.content}>
            <img src={Imagem} alt="Flávio Foto"/>
            <h2>Flávio Luis</h2><br></br><span>Developer Full Stack</span>
            <a href="mailto:flavio.aluis@gmail.com" >Hire me</a>
        </div>
    </div>
    <h1 className={style.title}> I'm a {' '}  </h1>
        <span className={style.titleAnimated}>
            {text}
        </span>
        <span style={{color:'red'}}>
            <Cursor cursorStyle='|'/>
        </span>
        
    <div className={style.iContent} >
        <a className={style.SocIcons} href="https://www.linkedin.com/in/fl%C3%A1vio-almeida-luis-09927a8b/"><FaLinkedin size={25}/></a>
        <a className={style.SocIcons}href="https://github.com/flavioaluis"> <FaGithub size={25}/></a>
        <a className={style.SocIcons} href="mailto:flavio.aluis@gmail.com"><FaEnvelope size={25}/></a>
    </div>    
    
</div>
    

)}
export default Image;