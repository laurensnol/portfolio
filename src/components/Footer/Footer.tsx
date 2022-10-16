import './Footer.scss';

function Footer() {
  return (
    <footer>
      <p className='footer-copyright'>© Laurens Nolting 2022</p>
      <div className='footer-links'>
        <a href=".">
          Legal Notice
        </a>
        <p>&nbsp;/&nbsp;</p>
        <a href=".">
          Impressum
        </a>
      </div>
    </footer>
  );
}

export default Footer;