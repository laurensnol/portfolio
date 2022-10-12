import './ThemeToggle.scss';

import { useState, useEffect } from 'react';
import { SunIcon, MoonIcon } from "@heroicons/react/24/solid";

function ThemeToggle() {
  const [isDarkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setDarkMode(true);
    }
  }, [])

  useEffect(() => {
    var root = document.getElementsByTagName('html')[0];

    if (isDarkMode) {
      root.setAttribute('class', 'dark');
    } else {
      root.removeAttribute('class');
    }
  }, [isDarkMode])

  return (
    <button className="toggle-btn" onClick={() => { setDarkMode(!isDarkMode) }}>
      {
        isDarkMode
          ? <SunIcon width={18} />
          : <MoonIcon width={18} />
      }
    </button>
  );
}

export default ThemeToggle;