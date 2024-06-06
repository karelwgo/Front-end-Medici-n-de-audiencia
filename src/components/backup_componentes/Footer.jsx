import React from 'react';

function Footer() {
  return (
    <footer className="footer bg-dark text-white py-3">
      <div className="container">
        <div className="social-media">
          <a href="#" className="text-white">
            <img src="ruta/a/facebook-logo.png" alt="Facebook" />
            Facebook
          </a>
          <a href="#" className="text-white">
            <img src="ruta/a/twitter-logo.png" alt="Twitter" />
            Twitter
          </a>
          <a href="#" className="text-white">
            <img src="ruta/a/instagram-logo.png" alt="Instagram" />
            Instagram
          </a>
        </div>
        <div className="copyright">
          &copy; {new Date().getFullYear()} Web en desarrollo :3
        </div>
      </div>
    </footer>
  );
}

export default Footer;
