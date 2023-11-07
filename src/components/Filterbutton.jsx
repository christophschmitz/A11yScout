// FilterButton.jsx

import React from 'react';
import { useNavigate } from 'react-router-dom';  // Vorausgesetzt, Sie verwenden `react-router-dom` für das Routing
import { saveSelectedTagsToLocalStorage } from '../utils/localStorageHelpers';
import styles from './Filterbutton.module.css';

function FilterButton({ selectedTags }) {
    const navigate = useNavigate();

    const handleClick = () => {
        // Speichern Sie die ausgewählten Tags im LocalStorage
        saveSelectedTagsToLocalStorage(selectedTags);

        // Weiterleitung zur Ergebnisseite
        navigate('/ergebnisseite');
    };

    return (
        <button className={styles.button} onClick={handleClick}>
            Prüfschritte Filtern
        </button>
    );
}

export default FilterButton;
