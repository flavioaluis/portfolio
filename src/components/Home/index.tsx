import React from 'react';
import style from './Home.module.scss';
import BarraLateral from '../BarraLateral';
import Principal from '../Principal';



function Home() {
    return (
        <aside className={style.columns}>
            <div>
                <BarraLateral />
            </div>
            <div>
                <Principal />
            </div>
            
                
        </aside>
    )
}

export default Home;