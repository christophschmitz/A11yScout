// localStorageHelpers.js

/**
 * Speichert die ausgewählten Tags im LocalStorage.
 * @param {Array} selectedTags - Die Liste der ausgewählten Tags.
 */
const saveSelectedTagsToLocalStorage = (selectedTags) => {
  try {
    const serializedTags = JSON.stringify(selectedTags);
    localStorage.setItem('selectedTags', serializedTags);
  } catch (error) {
    console.error('Fehler beim Speichern der Tags im LocalStorage:', error);
  }
};

/**
 * Ruft die ausgewählten Tags aus dem LocalStorage ab.
 * @return {Array} - Die Liste der ausgewählten Tags.
 */
const getSelectedTagsFromLocalStorage = () => {
  try {
    const serializedTags = localStorage.getItem('selectedTags');
    if (serializedTags === null) return [];
    return JSON.parse(serializedTags);
  } catch (error) {
    console.error('Fehler beim Abrufen der Tags aus dem LocalStorage:', error);
    return [];
  }
};

/**
 * Löscht die ausgewählten Tags aus dem LocalStorage.
 */
const clearSelectedTagsInLocalStorage = () => {
  try {
    localStorage.removeItem('selectedTags');
  } catch (error) {
    console.error('Fehler beim Löschen der Tags aus dem LocalStorage:', error);
  }
};

export {
  saveSelectedTagsToLocalStorage,
  getSelectedTagsFromLocalStorage,
  clearSelectedTagsInLocalStorage
};
