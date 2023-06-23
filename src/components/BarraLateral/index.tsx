import Imagem from '../../assets/image.jpg';
import style from "./BarraLateral.module.scss";
import Progressbar from '../Bars/ProgressBar';
import { useEffect, useState } from 'react';

function BarraLateral() {
    const [progress, setProgress] = useState(0);
    useEffect(() => {
        const id = setInterval(() => {
            setProgress(Math.random()*(100 - 90)+ 90);
        },3000);
        return () => {
            clearInterval(id);
        }
    }, []);

    const [progress1, setProgress1] = useState(0);
    useEffect(() => {
        const id = setInterval(() => {
            setProgress1(Math.random()*(100 - 85)+ 85);
        },3000);
        return () => {
            clearInterval(id);
        }
    }, []);

    const [progress2, setProgress2] = useState(0);
    useEffect(() => {
        const id = setInterval(() => {
            setProgress2(Math.random()*(100 - 80)+ 80);
        },3000);
        return () => {
            clearInterval(id);
        }
    }, []);

    const [progress3, setProgress3] = useState(0);
    useEffect(() => {
        const id = setInterval(() => {
            setProgress3(Math.random()*(75 - 70)+ 70);
        },3000);
        return () => {
            clearInterval(id);
        }
    }, []);
    return(
    <>
    
    <div className={style.Attributes}>
        <div className={style.imgBlock}>
        <img width={300}  src={Imagem} alt="Flávio Foto"/>
        </div>

        <h1 className={style.title}> Desenvolvedor Full Stack </h1>

        <h1 className={style.Abilities}> Abilities </h1>
            
            <h3 className={style.rangeA}>HTML</h3>
                <Progressbar value={progress} />

            <h3 className={style.rangeA}>Css</h3>
                <Progressbar value={progress1} />

            <h3 className={style.rangeA}>Javascript</h3>
                <Progressbar value={progress2} />

            <h3 className={style.rangeA}>React</h3>
                <Progressbar value={progress3} />

                
            
            
            
    </div>

    
    
    </>
)}


export default BarraLateral;