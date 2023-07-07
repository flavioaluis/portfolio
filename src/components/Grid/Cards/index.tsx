import React from 'react';
import style from './Card.module.scss';

type CardProps = {
	details: Array<{
		img: string;
		title: string;
		description: string;
		link:string;
		link2:string;
	  }>;
}
function Card(props:CardProps) {
    return (
	<>
	{props.details.map((value, index) => (
     <div className={style.card} key={index}>
		<h3 className={style.cardTitle}>{value.title}</h3>
			<p className={style.cardDescription}>
				{value.description}
			</p>
			<a href={value.link}>Demo</a> <a href={value.link2}>Git</a>
		
		<div>
			<div className={style.cardImage}>
				<img src={value.img}  alt="Trabalho1"/>
			</div>
		</div>
	 </div>
	 ))}
	</>
)}

export default Card;