import React from 'react';
import style from './Home.module.scss';
import BarraLateral from '../BarraLateral';
import Teste from '../Teste';



function Home() {
    return (
        <aside className={style.columns}>
            <div>
                <BarraLateral />
            </div>
            <div>
                <Teste />
            </div>
            
                
        </aside>
    )
}

export default Home;