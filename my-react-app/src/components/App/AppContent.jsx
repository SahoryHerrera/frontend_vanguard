import React, { useState } from 'react';
import styles from './AppContent.module.css';
import reactLogo from '../assets/react.svg';
import viteLogo from '/vite.svg';

const AppContent = ({ isOpen, onClose }) => {
  const [count, setCount] = useState(0);

  if (!isOpen) return null;

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <button className={styles.closeButton} onClick={onClose}>X</button>
        <div>
          <a href="https://vitejs.dev" target="_blank" rel="noopener noreferrer">
            <img src={viteLogo} className={styles.logo} alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank" rel="noopener noreferrer">
            <img src={reactLogo} className={`${styles.logo} ${styles.react}`} alt="React logo" />
          </a>
        </div>
        <h1>Vite + React</h1>
        <div className={styles.card}>
          <button onClick={() => setCount((count) => count + 1)}>
            boton: {count}
          </button>
          <p>
            Edit <code>src/AppContent.jsx</code> and save to test HMR
          </p>
        </div>
        <p className={styles.readTheDocs}>
          Hecho por Sahory
        </p>
      </div>
    </div>
  );
};

export default AppContent;
