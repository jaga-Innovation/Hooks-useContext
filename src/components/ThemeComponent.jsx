// src/components/ThemeComponent.jsx
import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

const ThemeComponent = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div
      style={{
        background: theme === 'light' ? '#ffffff' : '#333333',
        color: theme === 'light' ? '#000000' : '#ffffff',
        padding: '20px',
        textAlign: 'center',
      }}
    >
      <h1>Current Theme: {theme}</h1>
      <button
        onClick={toggleTheme}
        style={{
          marginTop: '20px',
          padding: '10px 20px',
          cursor: 'pointer',
          background: theme === 'light' ? '#333' : '#fff',
          color: theme === 'light' ? '#fff' : '#333',
          border: 'none',
          borderRadius: '5px',
        }}
      >
        Toggle Theme
      </button>
    </div>
  );
};

export default ThemeComponent;
