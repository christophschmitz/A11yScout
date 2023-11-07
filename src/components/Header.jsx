import React from 'react';
import styles from './Header.module.css';
import logo from '../assets/images/Logo.svg'; // Passen Sie den Pfad an Ihre Ordnerstruktur an


function Header() {
  return (
    <header className={styles.header}>
      <div>
      <img src={logo} alt="Logo" />
      </div>
    </header>
  );
}

export default Header;
