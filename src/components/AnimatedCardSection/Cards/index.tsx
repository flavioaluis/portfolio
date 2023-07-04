import React from 'react';
import { motion } from 'framer-motion';
import style from './Card.module.scss';

function AnimatedCard() {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <motion.div
      className={style.card}
      variants={cardVariants}
      initial="hidden"
      animate="visible"
    > 
      <h2>Title</h2>
      <p>Content</p>
    </motion.div>
  );
};

export default AnimatedCard;