import { useState, type FormEvent } from 'react'
import contactImg from '../assets/contact.jpg'
import './Contact.css'

// Get a free access key at https://web3forms.com (sign up with the site's
// contact email) and paste it here. This key is safe to expose publicly —
// that's how Web3Forms is designed to work.
const WEB3FORMS_ACCESS_KEY = 'YOUR_WEB3FORMS_ACCESS_KEY'

type Status = 'idle' | 'sending' | 'success' | 'error'

export default function Contact() {
  const [status, setStatus] = useState<Status>('idle')

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('sending')

    const form = e.currentTarget
    const formData = new FormData(form)
    formData.append('access_key', WEB3FORMS_ACCESS_KEY)

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: formData,
      })
      const result = await response.json()

      if (result.success) {
        setStatus('success')
        form.reset()
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <section className="contact">
      <div className="contact__grid">
        <img src={contactImg} alt="" className="contact__img" />

        <div className="contact__panel">
          <div className="container contact__inner">
            <span className="eyebrow">Get in Touch</span>
            <h1>Let's Chat</h1>
            <p>
              You're welcome to pop me an email at{' '}
              <a href="mailto:aframephotographyy@gmail.com">
                aframephotographyy@gmail.com
              </a>
              , or fill out the form below and I'll be in touch!
            </p>

            {status === 'success' ? (
              <p className="contact__success">
                Thanks for reaching out! I'll get back to you as soon as I can.
              </p>
            ) : (
              <form className="contact__form" onSubmit={handleSubmit}>
                <input type="checkbox" name="botcheck" className="hidden-field" tabIndex={-1} autoComplete="off" />

                <div className="contact__row">
                  <label>
                    First Name
                    <input type="text" name="first_name" required />
                  </label>
                  <label>
                    Last Name
                    <input type="text" name="last_name" required />
                  </label>
                </div>

                <label>
                  Email
                  <input type="email" name="email" required />
                </label>

                <label>
                  Subject
                  <input type="text" name="subject" />
                </label>

                <label>
                  Message
                  <textarea name="message" rows={5} />
                </label>

                <button type="submit" className="btn" disabled={status === 'sending'}>
                  {status === 'sending' ? 'Sending…' : 'Send'}
                </button>

                {status === 'error' && (
                  <p className="contact__error">
                    Something went wrong sending your message — please try emailing
                    directly instead.
                  </p>
                )}
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
