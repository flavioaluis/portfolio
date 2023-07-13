import React from 'react';
import style from './Home.module.scss';
import NavBar from '../../components/NavBar';
import Image from '../../components/Image';
import Resume from '../../components/Resume';
import AboutMe from '../../components/AboutMe';
import Menu from '../../components/Grid/Menu';
import Projects from '../../components/Grid/Projects';
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
                <section id="section1">
                    <Resume />
                </section>  
            </aside>
                <section >
                    <AboutMe/>
                </section>
                <section id="section2" className={style.Section}>
                        <Menu />
                    
                </section>
                <Footer />
                
               
                
               
        </>
    )
}

export default Home;