import React, { useContext } from 'react';
import { MODE_LIGHT, ThemeContext } from '../app/ThemeContext';


function ThemeToggle() {
  const { mode, toggleTheme } = useContext(ThemeContext);

  return (
    <button onClick={toggleTheme}>
      {mode === MODE_LIGHT ? 'Switch to dark mode' : 'Switch to light mode'}
    </button>
  );
}

export default ThemeToggle;
