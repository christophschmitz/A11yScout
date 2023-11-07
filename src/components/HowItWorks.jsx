// HowItWorks.js
import React from 'react';
import Cards from './Cards';
import Button from './Button';
import styles from './HowItWorks.module.css'

function HowItWorks() {
  return (
    <div className={styles['how-it-works-section']}>
      <h2>So funktioniert es</h2>
      <Cards />
      <Button to="/tag">Lass uns loslegen!</Button>
    </div>
  );
}

export default HowItWorks;
