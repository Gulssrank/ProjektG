import React from 'react';
import styles from './index.module.css';

const IndexPage = () => {
  return (
    <div className={styles.home}>

      <div className={styles.page}>
       
        <h2>Международные направления работы BOSPHORUS OPERATOR</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
      </div>
      <div className={styles.page}>
        
        <h2>Page 2</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
      </div>
      <div className={styles.page}>
        
        <h2>Page 3</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
      </div>
      <div className={styles.page}>
        
        <h2>Page 4</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
      </div>
    </div>
  );
};

export default IndexPage;

