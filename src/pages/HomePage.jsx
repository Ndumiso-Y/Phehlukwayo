import Hero from '../components/Hero.jsx'
import ServicesPillars from '../components/ServicesPillars.jsx'
import About from '../components/About.jsx'
import Partnerships from '../components/Partnerships.jsx'
import Contact from '../components/Contact.jsx'

export default function HomePage() {
  return (
    <div>
      <Hero />
      <ServicesPillars />
      <About />
      <Partnerships />
      <Contact />
    </div>
  )
}