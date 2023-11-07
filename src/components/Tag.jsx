import React from 'react';
import styles from './Tag.module.css';

function Tag({ name, onClick, selected }) {
    return (
        <span className={`${styles.tag} ${selected ? styles.active : ''}`} onClick={onClick}>
            {name}
        </span>
    );
}

export default Tag;