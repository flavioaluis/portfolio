import React from 'react';
import Slider from 'react-slider';


function BarraLateral() {
    return(
    <>
    <div>
        <img src="/src/assets/img.jpeg" alt="foto flávio"></img>
    </div>
    <div className="Attributes">
        <h2> Abilities </h2>
            <div>
                <h3>HTML</h3>
                <span className={"values"}>0%</span><span className={"valores"}>100%</span>
                <small>Current Range: 100</small>
                <Slider className={"slider"}/>
            </div>
            <div></div>
    </div>
    </>
)}


export default BarraLateral;