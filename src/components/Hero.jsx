import { Link } from 'react-router-dom'
import { Shield, Award, Users, TrendingUp } from 'lucide-react'

const features = [
  { text: 'Registered with IRBA & SAICA', icon: Shield },
  { text: 'Private & Public Sector Audits', icon: Award },
  { text: 'IFRS / IFRS for SMEs', icon: TrendingUp },
  { text: 'Shared Services for SMEs', icon: Users },
]

export default function Hero() {
  return (
    <section className="relative overflow-hidden min-h-[90vh] flex items-center">
      {/* Enhanced Background */}
      <div aria-hidden className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-100 via-white to-accent-100" />
        <div className="absolute top-10 right-10 w-72 h-72 bg-teal-200/30 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-accent-200/20 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-primary-200/20 rounded-full blur-3xl animate-pulse-soft" />
      </div>
      
      <div className="container-narrow py-20 md:py-28 relative">
        <div className="max-w-4xl">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-primary-100 to-teal-100 text-primary-700 text-sm font-semibold mb-6 shadow-soft">
            ✨ Trusted by 500+ Businesses Across South Africa
          </div>
          
          <h1 className="text-5xl md:text-7xl font-black tracking-tight leading-tight">
            <span className="bg-gradient-to-r from-primary-700 via-primary-600 to-teal-600 bg-clip-text text-transparent">
              Industry-Leading
            </span>
            <br />
            <span className="text-gray-900">
              Auditing & Accounting
            </span>
          </h1>
          
          <p className="mt-6 text-xl md:text-2xl text-gray-600 max-w-3xl leading-relaxed">
            Independent assurance, reliable accounting and client-first advisory — 
            <span className="font-semibold text-primary-700"> built on long-term partnerships.</span>
          </p>
          
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <Link 
              to="/contact" 
              className="group px-8 py-4 rounded-2xl bg-gradient-to-r from-primary-600 to-primary-700 text-white font-semibold text-lg hover:from-primary-700 hover:to-primary-800 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 shadow-brand hover:shadow-xl"
            >
              Book a Consultation
              <span className="ml-2 inline-block transition-transform group-hover:translate-x-1">→</span>
            </Link>
            <Link 
              to="/services" 
              className="group px-8 py-4 rounded-2xl border-2 border-primary-300 text-primary-700 font-semibold text-lg hover:bg-primary-50 hover:border-primary-500 transition-all duration-300 transform hover:scale-105"
            >
              View Our Services
              <span className="ml-2 inline-block transition-transform group-hover:translate-x-1">→</span>
            </Link>
          </div>
        </div>

        <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map(({ text, icon: Icon }, index) => (
            <div 
              key={text} 
              className="group relative rounded-2xl border border-white bg-white/80 backdrop-blur-sm p-6 text-sm text-gray-700 shadow-soft-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-primary-100 to-teal-100 text-primary-600 mb-4 group-hover:scale-110 transition-transform duration-300">
                <Icon size={20} />
              </div>
              <div className="font-semibold leading-snug">{text}</div>
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary-500/5 to-teal-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}