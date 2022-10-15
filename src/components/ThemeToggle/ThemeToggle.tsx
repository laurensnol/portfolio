import './ThemeToggle.scss';

import { useState, useEffect } from 'react';
import { SunIcon, MoonIcon } from "@heroicons/react/24/solid";

function ThemeToggle() {
  var root = document.getElementsByTagName('html')[0];
  const [isDarkMode, setDarkMode] = useState(root.classList.contains("dark"));

  useEffect(() => {
    // Add some CSS to make later transitions between dark and light mode more smooth
    var sheet = document.createElement('style');
    sheet.innerText = "html { transition: 0.2s; }";
    document.head.appendChild(sheet);
  }, []);

  useEffect(() => {
    console.log("Ran isDarkMode");

    if (isDarkMode) {
      root.setAttribute('class', 'dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.removeAttribute('class');
      localStorage.setItem('theme', 'light');
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