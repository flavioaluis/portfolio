import React from "react";
import style from "./Botao.module.scss";

class Botao extends React.Component {
    render() {
        
        return (
            <button className={style.botao} > Button </button>
        )
    }   
}

export default Botao;