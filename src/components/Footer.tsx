import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'
import './Footer.css'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <img src={logo} alt="A-Frame Photography" className="footer__logo" />

        <p className="footer__tagline">
          Life's moments, paused within a photograph, and kept for eternity.
        </p>

        <div className="footer__links">
          <Link to="/gallery">Gallery</Link>
          <Link to="/about">About</Link>
          <Link to="/packages">Packages</Link>
          <Link to="/contact">Contact</Link>
        </div>

        <div className="footer__social">
          <a href="mailto:aframephotographyy@gmail.com">Email</a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer">
            Instagram
          </a>
          <a href="https://facebook.com" target="_blank" rel="noreferrer">
            Facebook
          </a>
        </div>

        <p className="footer__copy">
          &copy; {year} A-Frame Photography. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
