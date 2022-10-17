import './Footer.scss';

import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer>
      <p className='footer-copyright'>© Laurens Nolting 2022</p>
      <div className='footer-links'>
        <Link to={'legal'}>
          Legal Notice
        </Link>
        <p>&nbsp;•&nbsp;</p>
        <Link to={'impressum'}>
          Impressum
        </Link>
      </div>
    </footer>
  );
}

export default Footer;