import './NavBar.scss';

import { CodeBracketIcon } from "@heroicons/react/20/solid";
import ThemeToggle from '../ThemeToggle/ThemeToggle';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <nav>
      <Link to={"/"} className='nav-title'>Laurens Nolting</Link>
      <span className='nav-actions'>
        <a href="https://github.com/laurensnol/portfolio" target={"_blank"} rel={"noopener noreferrer"}>
          <CodeBracketIcon width={18} />
        </a>
        <ThemeToggle />
      </span>
    </nav>
  );
}

export default NavBar;