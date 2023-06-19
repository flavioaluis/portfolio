import React from "react";
import Botao from "../Botao";
import style from './Form.module.scss';

class Formulario extends React.Component {
   render() {
     return (
         <form className={style.novaTarefa}>
           <div className={style.inputContainer}>
            <label htmlFor="tarefa">
                Adicione
            </label>
            <input 
                type="text" 
                name="tarefa"
                id="tarefa"
                placeholder="!!"
                required
            />
           </div>
           <div className={style.inputContainer}>
            <label>
                Tempo
            </label>
            <input 
                type="time" 
                step="1"
                name="tempo"
                required
            />

           </div>
           <Botao >Adicionar</Botao>
            
           
         </form>
        )
    }
}

export default Formulario;