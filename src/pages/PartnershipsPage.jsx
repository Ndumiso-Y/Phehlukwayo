import { ArrowLeft, Handshake, Network, Globe, Target, CheckCircle, Users } from 'lucide-react'
import { Link } from 'react-router-dom'

const partners = [
  'NgwenyaXimum Inc',
  'Njapa Inc',
  'Malina Investments',
  'M22Z Consulting',
  'Ngcingwana Inc. Attorneys',
  'Gwala Inc. Attorneys',
  'African Origin Actuarial Solutions',
]

const partnershipTypes = [
  {
    icon: Users,
    title: 'Accounting Firms',
    description: 'Collaborative relationships with fellow chartered accountants to expand service capabilities and geographic reach.',
    benefits: ['Shared expertise', 'Resource pooling', 'Knowledge exchange', 'Extended service offerings']
  },
  {
    icon: Handshake,
    title: 'Legal Partners',
    description: 'Strategic alliances with law firms to provide comprehensive business solutions combining legal and financial expertise.',
    benefits: ['Legal compliance', 'Corporate structuring', 'Dispute resolution', 'Contract advisory']
  },
  {
    icon: Target,
    title: 'Specialized Consultants',
    description: 'Partnerships with actuaries, IT specialists, and management consultants for complete business solutions.',
    benefits: ['Technical expertise', 'Risk assessment', 'Digital transformation', 'Strategic planning']
  },
  {
    icon: Globe,
    title: 'Industry Networks',
    description: 'Active participation in professional bodies and industry associations to stay current with best practices.',
    benefits: ['Industry insights', 'Regulatory updates', 'Professional development', 'Quality standards']
  }
]

export default function PartnershipsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-teal/5 via-white to-primary/5">
      {/* Header */}
      <div className="bg-gradient-to-r from-teal to-teal-dark text-white">
        <div className="container-narrow py-12">
          <Link to="/" className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 transition">
            <ArrowLeft size={20} />
            Back to Home
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Strategic Partnerships</h1>
          <p className="text-xl text-white/90 max-w-3xl">
            Expanding our capabilities through strategic networks with accountants, attorneys, actuaries, and specialized consultants.
          </p>
        </div>
      </div>

      {/* Partnership Types */}
      <section className="py-20">
        <div className="container-narrow">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">How We Partner</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our collaborative approach ensures clients receive comprehensive solutions from a network of trusted professionals.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {partnershipTypes.map(({ icon: Icon, title, description, benefits }) => (
              <div key={title} className="group p-8 rounded-2xl bg-white border border-gray-200 shadow-soft hover:-translate-y-1 hover:shadow-xl transition duration-300">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-accent/10 text-accent group-hover:bg-accent group-hover:text-white transition duration-300 mb-6">
                  <Icon size={28} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
                <p className="text-gray-600 mb-6">{description}</p>
                <ul className="space-y-2">
                  {benefits.map((benefit) => (
                    <li key={benefit} className="flex items-center gap-2 text-sm text-gray-700">
                      <CheckCircle size={16} className="text-teal" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Current Partners */}
      <section className="py-20 bg-gray-50">
        <div className="container-narrow">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Current Partners</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We're proud to work alongside these exceptional organizations to deliver comprehensive solutions.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {partners.map((partner) => (
              <div key={partner} className="group p-6 rounded-2xl border border-gray-200 bg-white shadow-soft hover:-translate-y-0.5 hover:shadow-lg transition duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition">
                    <Handshake size={20} />
                  </div>
                  <div className="w-2 h-2 rounded-full bg-teal"></div>
                </div>
                <h3 className="font-semibold text-gray-900 text-lg">{partner}</h3>
                <p className="text-sm text-gray-600 mt-2">Strategic Partner</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Benefits */}
      <section className="py-20 bg-gradient-to-r from-primary/10 to-accent/10">
        <div className="container-narrow">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Partner With Us?</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 rounded-2xl bg-primary text-white flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Network size={24} />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Extended Reach</h3>
              <p className="text-gray-600">Access to diverse markets and client bases across South Africa.</p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 rounded-2xl bg-teal text-white flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Target size={24} />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Specialized Expertise</h3>
              <p className="text-gray-600">Combined knowledge in accounting, legal, and specialized consulting areas.</p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 rounded-2xl bg-accent text-white flex items-center justify-center mx-auto mb-4 shadow-lg">
                <CheckCircle size={24} />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Quality Assurance</h3>
              <p className="text-gray-600">Shared commitment to excellence and professional standards.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-accent to-accent-dark">
        <div className="container-narrow text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Interested in Partnership?</h2>
          <p className="text-xl text-accent-light mb-8 max-w-2xl mx-auto">
            We're always looking to expand our network with quality professionals who share our commitment to excellence.
          </p>
          <Link 
            to="/contact" 
            className="inline-block px-8 py-4 bg-white text-accent hover:bg-gray-100 rounded-xl font-semibold transition transform hover:scale-105 shadow-lg"
          >
            Contact Us About Partnerships
          </Link>
        </div>
      </section>
    </div>
  )
}