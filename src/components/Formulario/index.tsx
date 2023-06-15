import React from "react";
import Botao from "../Botao";

class Formulario extends React.Component {
   render() {
     return (
         <form>
           <div>
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
           <div>
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
           <Botao />
         </form>
        )
    }
}

export default Formulario;