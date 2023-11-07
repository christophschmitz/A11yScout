import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Button.module.css';

function Button({ to, children }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(to);
  };

  return <button className={styles.button} onClick={handleClick}>{children}</button>;
}

export default Button;
