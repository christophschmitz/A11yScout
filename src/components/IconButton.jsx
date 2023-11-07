import React from 'react';
import styles from './IconButton.module.css';
import MoreIcon from '../assets/images/more.svg'

function IconButton({ link }) {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer" className={styles.iconButton}>
      <img src={MoreIcon} alt="zum Prüfschritt" />
    </a>
  );
}

export default IconButton;
