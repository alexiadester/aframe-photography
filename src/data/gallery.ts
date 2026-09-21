import img01 from '../assets/gallery/gallery-01.jpg'
import img02 from '../assets/gallery/gallery-02.jpg'
import img03 from '../assets/gallery/gallery-03.jpg'
import img04 from '../assets/gallery/gallery-04.jpg'
import img05 from '../assets/gallery/gallery-05.jpg'
import img06 from '../assets/gallery/gallery-06.jpg'
import img07 from '../assets/gallery/gallery-07.jpg'
import img08 from '../assets/gallery/gallery-08.jpg'
import img09 from '../assets/gallery/gallery-09.jpg'
import img10 from '../assets/gallery/gallery-10.jpg'
import img11 from '../assets/gallery/gallery-11.jpg'
import img12 from '../assets/gallery/gallery-12.jpg'
import img13 from '../assets/gallery/gallery-13.jpg'
import img14 from '../assets/gallery/gallery-14.jpg'
import img15 from '../assets/gallery/gallery-15.jpg'
import img16 from '../assets/gallery/gallery-16.jpg'
import img17 from '../assets/gallery/gallery-17.jpg'
import img18 from '../assets/gallery/gallery-18.jpg'
import img19 from '../assets/gallery/gallery-19.jpg'

export type GalleryImage = {
  src: string
  alt: string
  /** Crop to the top half of the frame (used for images with busy bottoms). */
  cropTop?: boolean
}

export const galleryImages: GalleryImage[] = [
  { src: img01, alt: 'A-Frame Photography — couples portrait' },
  { src: img02, alt: 'A-Frame Photography — couples portrait' },
  { src: img03, alt: 'A-Frame Photography — couples portrait' },
  { src: img04, alt: 'A-Frame Photography — couples portrait' },
  { src: img05, alt: 'A-Frame Photography — couples portrait' },
  { src: img06, alt: 'A-Frame Photography — couples portrait', cropTop: true },
  { src: img07, alt: 'A-Frame Photography — couples portrait' },
  { src: img18, alt: 'A-Frame Photography — couples portrait' },
  { src: img09, alt: 'A-Frame Photography — couples portrait' },
  { src: img10, alt: 'A-Frame Photography — couples portrait' },
  { src: img11, alt: 'A-Frame Photography — couples portrait' },
  { src: img12, alt: 'A-Frame Photography — couples portrait' },
  { src: img13, alt: 'A-Frame Photography — couples portrait' },
  { src: img14, alt: 'A-Frame Photography — couples portrait' },
  { src: img15, alt: 'A-Frame Photography — couples portrait' },
  { src: img16, alt: 'A-Frame Photography — couples portrait' },
  { src: img17, alt: 'A-Frame Photography — couples portrait' },
  { src: img08, alt: 'A-Frame Photography — couples portrait' },
  { src: img19, alt: 'A-Frame Photography — couples portrait' },
]
