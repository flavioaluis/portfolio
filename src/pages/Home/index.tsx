import React from 'react';
import style from './Home.module.scss';
import NavBar from '../../components/NavBar';
import Image from '../../components/Image';
import Resume from '../../components/Resume';
import AboutMe from '../../components/AboutMe';
import Card from '../../components/Grid/Cards';
import CardData from '../../components/Grid/CardData'
import Footer from '../../components/Footer';



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
                <div className={style.Section}>
                    <Card details={CardData}/>
                </div>
                <Footer />
                
               
                
               
        </>
    )
}

export default Home;