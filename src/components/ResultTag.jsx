import React from 'react';
import styles from './ResultTag.module.css';

function ResultTag({ label }) {
    return (
        <span className={styles.tag}>
            {label}
        </span>
    );
}

export default ResultTag;
