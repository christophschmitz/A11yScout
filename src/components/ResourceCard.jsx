import React from 'react';
import IconButton from './IconButton'; // Pfad zu Ihrem IconButton-Component
import ResultTag from './ResultTag'; // Pfad zu Ihrem ResultTag-Component
import styles from './ResourceCard.module.css';

function ResourceCard({ resource }) {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.textContainer}>
          <div className={styles.title}>{resource.title}</div>
          <div className={styles.description}>{resource.description}</div>
        </div>
        <IconButton link={resource.link} />
      </div>
      <div className={styles.tagContainer}>
        {resource.tags.map(tag => (
          <ResultTag key={tag} label={tag} />
        ))}
      </div>
    </div>
  );
}

export default ResourceCard;
