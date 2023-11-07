import React, { useState } from 'react';
import TagCloud from '../components/TagCloud';
import styles from './TagPage.module.css';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Button from '../components/Button';

function TagPage() {
    const [selectedTags, setSelectedTags] = useState([]);

    // Übergeben Sie setSelectedTags an jede TagCloud-Komponente, falls die Komponente dies benötigt.
    return (
        <div className={styles.container}>
            <Header />
            <div className={styles.header}>
                <h1>Wähle Tags aus</h1>
                <p>Klick die Elemente an, die du in deinem Projekt verwendest</p>
            </div>

            <section>
                <TagCloud header="Immer anwendbare Prüfschritte" category="Mandatory" />
                <TagCloud header="UI Elemente" category="UI_Elements" />
                <TagCloud header="Funktionen" category="Funktionen" />
            </section>
                <div className={styles.section}>
                    <Button to="/results">Prüfliste erzeugen</Button>
                </div>
            
            <Footer />
        </div>
    );
}

export default TagPage;
