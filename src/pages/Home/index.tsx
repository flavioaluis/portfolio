import React from 'react';
import style from './Home.module.scss';
import Image from '../../components/Image';
import Resume from '../../components/Resume';
import AboutMe from '../../components/AboutMe';




function Home() {
    return (
        <>
            <aside className={style.columns}>
                <div>
                    <Image />
                </div>
                <div>
                    <Resume />
                </div>  
            </aside>
            
                <AboutMe/>
        </>
    )
}

export default Home;