import React, { useEffect, useRef } from "react";
import style from "./ProgressBar.module.scss";
import {motion,animate} from 'framer-motion';

function ProgressBar({value}:{value:number}) {
     const progressRef = useRef<HTMLInputElement>(null);
    useEffect(() => {
        const progressText = progressRef.current?.textContent;
        if(progressText != null) {
            animate(parseInt(progressText),value, {
                duration: 2,
                onUpdate : (cv) => {
                    progressRef.current!.textContent = cv.toFixed(0)
                }
            });
        }
    }, [value]);
    return (
        <div className={style.progressbarContainer}>
            <div className={style.progressbar}>
                <motion.div 
                className={style.bar}
                animate={{width: `${value}%` }}
                transition={{duration:3}}/>

            </div>
            < div className={style.progressbarText}>
                <p ref={progressRef}>0</p>
                <p>%</p>
            </div>
        </div>
        
    )
}

export default ProgressBar;