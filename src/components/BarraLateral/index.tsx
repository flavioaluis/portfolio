import Imagem from '../../assets/image.jpg';
import style from "./BarraLateral.module.scss";
import Progressbar from '../Bars/ProgressBar';
import Progressbar2 from '../Bars/ProgressBar2';



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
                <Progressbar />

            <h3 className={style.rangeA}>Css</h3>
                <Progressbar2 />

            <h3 className={style.rangeA}>Javascript</h3>
                <Progressbar />

            <h3 className={style.rangeA}>React</h3>
                <Progressbar />

                
            
            
            
    </div>

    
    
    </>
)}


export default BarraLateral;