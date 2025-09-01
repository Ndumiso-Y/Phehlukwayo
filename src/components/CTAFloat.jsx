import { Phone } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function CTAFloat() {
  return (
    <Link
      to="/contact"
      className="group fixed bottom-5 right-5 md:bottom-8 md:right-8 inline-flex items-center gap-3 px-6 py-4 rounded-2xl bg-gradient-to-r from-accent-600 to-accent-700 text-white shadow-accent hover:from-accent-700 hover:to-accent-800 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 z-50"
      aria-label="Request a consultation"
    >
      <div className="p-2 rounded-xl bg-white/20 group-hover:bg-white/30 transition-all duration-300">
        <Phone size={18} />
      </div>
      <span className="hidden sm:inline font-semibold">Request consultation</span>
      <div className="absolute inset-0 rounded-2xl bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    </Link>
  )
}