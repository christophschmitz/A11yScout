import React from 'react';
import largeLogo from '../assets/images/LargeLogo.svg';
import styles from './Hero.module.css';

function Hero() {
  return (
    <div className={styles['hero-section']}>
      <img src={largeLogo} alt="Großes Logo" />
      {/* Weitere Inhalte, wie z. B. ein Titel oder eine Beschreibung */}
      <h2>BITV Prüfschritte Evaluierung: Erstellen deinen Barrierefreiheitsscope!</h2>
    </div>
  );
}

export default Hero;