import { Link } from 'react-router-dom'
import heroImg from '../assets/hero.jpg'
import aboutImg from '../assets/about.jpg'
import { galleryImages } from '../data/gallery'
import './Home.css'

const featured = galleryImages.slice(0, 6)

export default function Home() {
  return (
    <>
      <section className="hero">
        <img src={heroImg} alt="Couple laughing and running through a field" className="hero__img" />
        <div className="hero__overlay" />
        <div className="hero__content container">
          <span className="eyebrow eyebrow--light">A-Frame Photography</span>
          <h1>Life's moments, paused within a photograph, and kept for eternity.</h1>
          <div className="hero__actions">
            <Link to="/gallery" className="btn">
              View Gallery
            </Link>
            <Link to="/contact" className="btn btn--outline btn--outline-light">
              Enquire Now
            </Link>
          </div>
        </div>
      </section>

      <section className="section intro">
        <div className="container intro__grid">
          <img src={aboutImg} alt="Alexia, A-Frame Photography" className="intro__img" />
          <div>
            <span className="eyebrow">Hi, I'm Alexia</span>
            <h2>The photographer behind A-Frame</h2>
            <p>
              My passion for photography began in my early teenage years, capturing the
              intricate details of the natural world. That same eye for detail now shapes
              how I photograph people &mdash; noticing the small, intimate moments between
              couples and families, and holding onto them in a single frame.
            </p>
            <Link to="/about" className="btn btn--outline">
              More About Me
            </Link>
          </div>
        </div>
      </section>

      <section className="section section--tight gallery-teaser">
        <div className="container">
          <div className="text-center">
            <span className="eyebrow">Recent Work</span>
            <h2>A Few Favourites</h2>
          </div>
          <div className="gallery-teaser__grid">
            {featured.map((img) => (
              <img
                key={img.src}
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className={img.cropTop ? 'crop-top' : undefined}
              />
            ))}
          </div>
          <div className="text-center">
            <Link to="/gallery" className="btn">
              View Full Gallery
            </Link>
          </div>
        </div>
      </section>

      <section className="section cta">
        <div className="container text-center">
          <span className="eyebrow">Ready when you are</span>
          <h2>Let's create something to keep for eternity.</h2>
          <Link to="/contact" className="btn">
            Get In Touch
          </Link>
        </div>
      </section>
    </>
  )
}
