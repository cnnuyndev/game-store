import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import styles from './Banner.module.scss';
import images from '@/assets/images/banners/banner.png'
import images1 from '@/assets/images/banners/banner1.png';
import images2 from '@/assets/images/banners/banner2.png';

interface Card {
  title: string;
  subtitle: string;
  buttonText: string;
  bgColor: string;
  image: string;
}

const Banner: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  
  const cards: Card[] = [
    {
      title: "Piggy Christmas Tap",
      subtitle: "Piggy Christmas Tap: €35,000 For Your Wins",
      buttonText: "JOIN AND WIN",
      bgColor: "#059669",
      image: images
    },
    {
      title: "Winter Bonus",
      subtitle: "Piggy Christmas Tap: €35,000 For Your Wins",
      buttonText: "CLAIM NOW",
      bgColor: "#2563eb",
      image: images1
    },
    {
      title: "Lucky Spin",
      subtitle: "Piggy Christmas Tap: €35,000 For Your Wins",
      buttonText: "SPIN NOW",
      bgColor: "#7c3aed",
      image: images2
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === cards.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  const getOrder = (index: number): number => {
    const difference = (index - currentIndex + cards.length) % cards.length;
    if (difference === 0) return 1; // Center
    if (difference === 1) return 2; // Right
    return 0; // Left
  };

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        {cards.map((card, index) => {
          const order = getOrder(index);
          
          return (
            <motion.div
              key={index}
              animate={{
                scale: order === 1 ? 1 : 0.8,
                opacity: order === 1 ? 1 : 0.5,
                x: `${(order - 1) * 100}%`,
                zIndex: order === 1 ? 10 : 0,
              }}
              transition={{ duration: 0.5 }}
              className={styles.card}
              style={{
                backgroundColor: card.bgColor,
              }}
            >
              <div className={styles.left_column}>
                <div className={styles.header}>{card.title}</div>
                <div className={styles.subheader}>{card.subtitle}</div>
                <button className={styles.button}>{card.buttonText}</button>
              </div>
              <div className={styles.right_column}>
                <img src={card.image} alt={card.image}/>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default Banner;