import React from 'react';
import style from './Home.module.scss';
import Resume from '../Resume';
import Image from '../Image';




function Home() {
    return (
        <aside className={style.columns}>
             <div>
                <Image />
            </div>
            <div>
                <Resume />
            </div>
            
                
        </aside>
    )
}

export default Home;