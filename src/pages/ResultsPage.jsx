import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import ResourceCard from '../components/ResourceCard';
import Footer from '../components/Footer';

function ResultsPage() {
  const [resources, setResources] = useState([]);

  useEffect(() => {
    // Tags aus localStorage abrufen
    const storedTags = JSON.parse(localStorage.getItem('selectedTags')) || [];

    // API Aufruf, um die Ressourcen zu holen
    fetch('/api/resources') 
      .then(response => response.json())
      .then(data => {
        if (storedTags.length > 0) {
          // Ressourcen basierend auf den gespeicherten Tags filtern
          const filteredResources = data.filter(resource => 
            resource.tags.some(tag => storedTags.includes(tag))
          );
          setResources(filteredResources);
        } else {
          setResources(data);  // Alle Ressourcen anzeigen, wenn keine Tags ausgewählt wurden
        }
      })
      .catch(error => {
        console.error("Es gab einen Fehler beim Abrufen der Ressourcen:", error);
      });
  }, []);

  return (
    <div>
      <Header />
      
      <div className="results-container">
        {resources.map(resource => (
          <ResourceCard key={resource._id} resource={resource} />
        ))}
      </div>
      
      <Footer />
    </div>
  );
}

export default ResultsPage;
