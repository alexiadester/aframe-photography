import { useEffect, useState } from 'react'
import { galleryImages } from '../data/gallery'
import './Gallery.css'

export default function Gallery() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (activeIndex === null) return
      if (e.key === 'Escape') setActiveIndex(null)
      if (e.key === 'ArrowRight') {
        setActiveIndex((i) => (i === null ? null : (i + 1) % galleryImages.length))
      }
      if (e.key === 'ArrowLeft') {
        setActiveIndex((i) =>
          i === null ? null : (i - 1 + galleryImages.length) % galleryImages.length,
        )
      }
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [activeIndex])

  return (
    <>
      <section className="section--tight page-header">
        <div className="container text-center">
          <span className="eyebrow">Portfolio</span>
          <h1>Gallery</h1>
          <p className="page-header__sub">
            A collection of couples, engagements, families and weddings I've had the
            privilege of photographing.
          </p>
        </div>
      </section>

      <section className="section section--tight">
        <div className="container">
          <div className="gallery-grid">
            {galleryImages.map((img, index) => (
              <button
                key={img.src}
                className="gallery-grid__item"
                onClick={() => setActiveIndex(index)}
                aria-label={`Open image ${index + 1}`}
              >
                <img src={img.src} alt={img.alt} loading="lazy" />
              </button>
            ))}
          </div>
        </div>
      </section>

      {activeIndex !== null && (
        <div className="lightbox" onClick={() => setActiveIndex(null)}>
          <button
            className="lightbox__close"
            onClick={() => setActiveIndex(null)}
            aria-label="Close"
          >
            &times;
          </button>
          <button
            className="lightbox__nav lightbox__nav--prev"
            onClick={(e) => {
              e.stopPropagation()
              setActiveIndex((i) =>
                i === null ? null : (i - 1 + galleryImages.length) % galleryImages.length,
              )
            }}
            aria-label="Previous image"
          >
            &#8249;
          </button>
          <img
            src={galleryImages[activeIndex].src}
            alt={galleryImages[activeIndex].alt}
            className="lightbox__img"
            onClick={(e) => e.stopPropagation()}
          />
          <button
            className="lightbox__nav lightbox__nav--next"
            onClick={(e) => {
              e.stopPropagation()
              setActiveIndex((i) => (i === null ? null : (i + 1) % galleryImages.length))
            }}
            aria-label="Next image"
          >
            &#8250;
          </button>
        </div>
      )}
    </>
  )
}
