import React from 'react';
import style from './AnimatedCardSection.module.scss';
import AnimatedCard from './Cards/index';

function AnimatedCardSection()  {
  return (
    <div className={style.cardSection}>
      <h1>Portfólio</h1>
      <div className={style.cardContainer}>
        <AnimatedCard />
        <AnimatedCard />
        <AnimatedCard />
        <AnimatedCard />
        <AnimatedCard />
        <AnimatedCard />
        <AnimatedCard />
        <AnimatedCard />
      </div>
    </div>
  );
};

export default AnimatedCardSection;