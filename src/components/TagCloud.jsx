import React, { useState, useEffect } from 'react';
import Tag from '../components/Tag';
import axios from 'axios';
import styles from './TagCloud.module.css'; 
import { saveSelectedTagsToLocalStorage, getSelectedTagsFromLocalStorage } from '../utils/localStorageHelpers'; 

function TagCloud({ header, category }) {
    const [tags, setTags] = useState([]);
    const [selectedTags, setSelectedTags] = useState(getSelectedTagsFromLocalStorage() || []);  // Initialer Wert aus dem LocalStorage
  
    useEffect(() => {
      axios.get(`${process.env.REACT_APP_API_URL}/api/tags`)
        .then(response => {
          console.log("Daten von der API:", response.data);
          setTags(response.data);
        })
        .catch(error => {
          console.error("Fehler beim Abrufen der Daten:", error);
        });
    }, []);
  
    // Update LocalStorage, wenn sich selectedTags ändert
    useEffect(() => {
        saveSelectedTagsToLocalStorage(selectedTags);
    }, [selectedTags]);

    // Filtern Sie die Tags basierend auf der Kategorie
    const filteredTags = tags.filter(tag => tag.category === category);

    const handleTagClick = (tagName) => {
        if (selectedTags.includes(tagName)) {
            setSelectedTags(prevTags => prevTags.filter(tag => tag !== tagName));
        } else {
            setSelectedTags(prevTags => [...prevTags, tagName]);
        }
    };
  
    return (
        <div className={styles.outerContainer}>
            <h2 className={styles.heading}>{header}</h2>
            <div className={`${styles.container} ${styles.tagCloudContainer}`}>
                {filteredTags.map(tag => (
                    <Tag 
                        key={tag._id} 
                        name={tag.name} 
                        onClick={() => handleTagClick(tag.name)} 
                        selected={selectedTags.includes(tag.name)} // Dies wird verwendet, um den Tag-Stil basierend auf der Auswahl zu ändern
                    />
                ))}
            </div>
        </div>
    );
}
  
export default TagCloud;
