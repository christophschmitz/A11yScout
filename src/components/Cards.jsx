import React from 'react';
import Card from './Card';
import styles from './Cards.module.css';

function Cards() {
  // Beispiel-Daten für die Karten
  const cardData = [
    { number: 1, title: 'Komponenten auswählen', description: 'Wähle die Komponenten aus, die du auf deiner Webseite verwendest.' },
    { number: 2, title: 'Prüfliste generieren', description: 'Nachdem Sie Ihre Webkomponenten ausgewählt haben, klicken Sie auf den Button "generieren".' },
    { number: 3, title: 'Testen, Testen, Testen', description: 'Jetzt haben Sie eine Liste mit den relevanten BITV Prüfschritten gruppiert nach Komponente.' },
  ];

  return (
    <div className={styles['cards-container']}>
      {cardData.map((card, index) => (
        <Card key={index} number={card.number} title={card.title} description={card.description} />
      ))}
    </div>
  );
}

export default Cards;
