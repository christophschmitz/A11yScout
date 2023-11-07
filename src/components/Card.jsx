import React from 'react';
import styles from './Card.module.css'; // Stelle sicher, dass der Pfad korrekt ist

function Card({ number, title, description }) {
  return (
    <div className={styles.card}>
      <div className={styles['card-number']}>{number}</div>
      <h3 className={styles['card-title']}>{title}</h3>
      <p className={styles['card-description']}>{description}</p>
    </div>
  );
}

export default Card;
