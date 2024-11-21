// src/App.jsx
import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import ThemeComponent from './components/ThemeComponent';

const App = () => {
  return (
    <ThemeProvider>
      <ThemeComponent />
    </ThemeProvider>
  );
};

export default App;
