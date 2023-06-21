import React from "react";
import style from "./ProgressBar.module.scss";

function ProgressBar() {
    return (
        <div className="progressbar-container">
            <div className={style.progressbar}>
                <div className={style.bar2}/>

            </div>
        </div>
        
    )
}

export default ProgressBar;