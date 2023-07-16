import React from 'react';
import style from './Projects.module.scss';
import { FaGithub } from "@react-icons/all-files/fa/FaGithub" ;
import { FaBoxOpen} from "@react-icons/all-files/fa/FaBoxOpen" ;


const Projects: React.FC<{ title: string, description: string, imgUrl: string, link: string, link2: string }>= ({ title, description, imgUrl, link, link2 }) => {
    return (
		
		<div>
			<div className={style.projCard}>
				<img src={imgUrl}  alt="Trabalho1"/>
				<div className={style.cardTxt}>
				<h4 >{title}</h4>
				<span>{description}</span>
				<div >
				<a href={link}><FaBoxOpen size={25}/>&nbsp;&nbsp;Demo</a> <a href={link2}><FaGithub size={25}/>&nbsp;&nbsp;Git</a>
				</div>
				</div>
			</div>
		</div>
	
)}
 export default Projects;
