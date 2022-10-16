import './NavBar.scss';

import { CodeBracketIcon } from "@heroicons/react/20/solid";
import ThemeToggle from '../ThemeToggle/ThemeToggle';

function NavBar() {
  return (
    <nav>
      <a href="/" className='nav-title'>Laurens Nolting</a>
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