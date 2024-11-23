import React from 'react';
import { useTheme } from '../../App';

const Header = () => {
  const theme = useTheme();
  return (
    <header className={`header ${theme}`}>
      <h1>{theme === 'light' ? 'Light Mode' : 'Dark Mode'}</h1>
    </header>
  );
};

export default Header;
