import React from 'react';
import { useTheme } from '../../App';

const Footer = () => {
  const theme = useTheme();
  return (
    <footer className={`footer ${theme}`}>
      <p>Theme is currently {theme === 'light' ? 'Light' : 'Dark'}</p>
    </footer>
  );
};

export default Footer;
