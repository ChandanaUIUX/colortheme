import React, { useState, createContext, useContext } from 'react';
import Header from '../src/Component/Header/Header';
import Footer from '../src/Component/Footer/Footer';
import './App.css'; // Add specific styles for the App


// Create ThemeContext
const ThemeContext = createContext();

// Custom hook for ThemeContext
const useTheme = () => useContext(ThemeContext);

const App = () => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={theme}>
      <div className={`app ${theme}`}>
        <Header />
        <main>
          <button onClick={toggleTheme}>
            Switch to {theme === 'light' ? 'Dark' : 'Light'} Theme
          </button>
        </main>
        <Footer />
      </div>
    </ThemeContext.Provider>
  );
};

export default App;
export { useTheme };
