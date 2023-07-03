import React from 'react';
import style from './Home.module.scss';
import NavBar from '../../components/NavBar';
import Image from '../../components/Image';
import Resume from '../../components/Resume';
import AboutMe from '../../components/AboutMe';
import AnimatedCardSection from '../../components/AnimatedCardSection';



function Home() {

    return (
        <>
            <aside className={style.columns}>
                <div>
                    <NavBar />
                </div>
                
                <div>
                    <Image />
                </div>
                <div>
                    <Resume />
                </div>  
            </aside>
                <div>
                    <AboutMe/>
                </div>
                <div>
                    <AnimatedCardSection />
                    
                </div>
                
               
                
               
        </>
    )
}

export default Home;