import ServicesPillars from '../components/ServicesPillars.jsx'
import { ArrowLeft, Phone, Mail, MapPin } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-white to-accent/5">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary to-primary-dark text-white">
        <div className="container-narrow py-12">
          <Link to="/" className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 transition">
            <ArrowLeft size={20} />
            Back to Home
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h1>
          <p className="text-xl text-white/90 max-w-2xl">
            Four integrated service pillars designed to keep your business compliant, informed, and ready for sustained growth.
          </p>
        </div>
      </div>

      {/* Services Content */}
      <ServicesPillars />

      {/* Enhanced CTA Section */}
      <section className="py-20 bg-gradient-to-r from-teal to-teal-dark">
        <div className="container-narrow text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl text-teal-100 mb-8 max-w-2xl mx-auto">
            Let's discuss how our services can help your business thrive. Book a consultation today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link 
              to="/contact" 
              className="px-8 py-4 bg-accent hover:bg-accent-dark text-white rounded-xl font-semibold transition transform hover:scale-105 shadow-lg"
            >
              Book Consultation
            </Link>
            <div className="flex items-center gap-6 text-teal-100">
              <a href="tel:+27123456789" className="flex items-center gap-2 hover:text-white transition">
                <Phone size={18} />
                <span>+27 123 456 789</span>
              </a>
              <a href="mailto:info@phehlukwayo.co.za" className="flex items-center gap-2 hover:text-white transition">
                <Mail size={18} />
                <span>info@phehlukwayo.co.za</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}