import { Link } from 'react-router-dom'
import aboutImg from '../assets/about.jpg'
import './About.css'

export default function About() {
  return (
    <section className="section about">
      <div className="container about__grid">
        <img src={aboutImg} alt="Alexia, A-Frame Photography" className="about__img" />

        <div>
          <span className="eyebrow">About Me</span>
          <h1>Hi, I'm Alexia</h1>

          <p>
            My passion for photography began in my early teenage years, when I would
            spend hours in my garden creating little &ldquo;photoshoots&rdquo; and
            capturing images of nature with merely my phone and an Olloclip macro lens.
            Being able to photograph the intricate details of the natural world sparked a
            deep appreciation for photography and ignited a passion that has stayed with
            me ever since.
          </p>

          <p>
            Fast-forward to matric, I dreamt of studying photography at a tertiary level.
            However, I ultimately decided to pursue psychology instead. After completing
            my Honours degree in Psychology, I realised that photography is where my true
            passion lies and where I want to build my future.
          </p>

          <p>
            Although my career path has led me to photography, my passion for psychology
            and helping people remains an important part of who I am. The knowledge and
            experience gained through my studies have played a significant role in
            shaping the woman I am today, providing a deeper understanding of people and
            human behaviour, which I believe enhances my work as a photographer. This
            background allows me to notice subtle details that others may overlook and to
            support people during vulnerable moments &mdash; situations that photographers
            often find themselves privileged to witness.
          </p>

          <p>
            My work is inspired by noticing the intricate moments, both within nature and
            between people, and striving to capture those moments on camera, grasping
            this intimacy within one single photo, to be kept for eternity.
          </p>

          <Link to="/contact" className="btn">
            Let's Work Together
          </Link>
        </div>
      </div>
    </section>
  )
}
