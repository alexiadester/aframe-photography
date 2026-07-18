import { Link } from 'react-router-dom'
import './Packages.css'

const packages = [
  {
    name: 'Couples & Engagements',
    description:
      "A relaxed session designed around the two of you — whether it's an engagement shoot or simply celebrating your relationship.",
    inclusions: [
      'Up to 1.5 hours on location',
      'Guidance on outfits & location choice',
      'Beautifully edited digital gallery',
      'Online gallery for easy sharing & downloads',
    ],
  },
  {
    name: 'Lifestyle',
    description:
      'Natural, candid photography that captures everyday moments — at home, out and about, or wherever feels like you.',
    inclusions: [
      'Up to 1 hour session',
      'Candid, documentary-style approach',
      'Edited digital gallery',
      'Perfect for personal branding or milestone moments',
    ],
  },
  {
    name: 'Family',
    description:
      'Warm, genuine family portraits that capture connection between the people who matter most — all ages and pets welcome.',
    inclusions: [
      'Up to 1.5 hours on location',
      'Posed & candid combination',
      'Edited digital gallery',
      'Guidance on outfit coordination',
    ],
  },
  {
    name: 'Wedding',
    description:
      'Full wedding-day coverage, capturing every detail from getting ready through to the last dance.',
    inclusions: [
      'Full or half-day coverage',
      'Two photographers available on request',
      'Complete edited digital gallery',
      'Engagement shoot add-on available',
    ],
  },
]

export default function Packages() {
  return (
    <>
      <section className="section--tight page-header">
        <div className="container text-center">
          <span className="eyebrow">Packages</span>
          <h1>Sessions &amp; Packages</h1>
          <p className="page-header__sub">
            Every session is tailored to you. Below are the types of photography I offer
            &mdash; get in touch and I'll put together a package to suit your needs.
          </p>
        </div>
      </section>

      <section className="section section--tight">
        <div className="container packages-grid">
          {packages.map((pkg) => (
            <div className="package-card" key={pkg.name}>
              <h3>{pkg.name}</h3>
              <p>{pkg.description}</p>
              <ul>
                {pkg.inclusions.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <Link to="/contact" className="btn btn--outline">
                Enquire for Pricing
              </Link>
            </div>
          ))}
        </div>
      </section>

      <section className="section cta">
        <div className="container text-center">
          <span className="eyebrow">Custom Requests Welcome</span>
          <h2>Not sure which package fits? Let's chat.</h2>
          <Link to="/contact" className="btn">
            Contact Me
          </Link>
        </div>
      </section>
    </>
  )
}
