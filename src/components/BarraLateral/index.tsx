import React from 'react';
import Imagem from '../../assets/image.jpg';
import style from "./BarraLateral.module.scss";
import Slider from 'react-slider';



function BarraLateral() {
    return(
    <>
    
    <div className={style.Attributes}>
        <div className={style.imgBlock}>
        <img width={300}  src={Imagem} alt="Flávio Foto"/>
        </div>

        <h1 className={style.title}> Desenvolvedor Full Stack </h1>

        <h1 className={style.Abilities}> Abilities </h1>
            
            <h3 className={style.rangeA}>HTML</h3>
            <span className={"values"}>0%</span><span className={"valores"}>100%</span>
            <small>Current Range: 100</small>
            <Slider className={"slider"}/>

            <h3 className={style.rangeA}>Css</h3>
            <span className={"values"}>0%</span><span className={"valores"}>100%</span>
            <small>Current Range: 100</small>
            <Slider className={"slider"}/>

            <h3 className={style.rangeA}>Javascript</h3>
            <span className={"values"}>0%</span><span className={"valores"}>100%</span>
            <small>Current Range: 100</small>
            <Slider className={"slider"}/>

            <h3 className={style.rangeA}>React</h3>
            <span className={"values"}>0%</span><span className={"valores"}>100%</span>
            <small>Current Range: 100</small>
            <Slider className={"slider"}/>

                
            
            
            
    </div>

    
    
    </>
)}


export default BarraLateral;