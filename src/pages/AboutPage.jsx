import { ArrowLeft, Award, Users, TrendingUp, Shield, Clock, Star } from 'lucide-react'
import { Link } from 'react-router-dom'

const stats = [
  { icon: Users, label: 'Happy Clients', value: '500+' },
  { icon: Clock, label: 'Years of Experience', value: '20+' },
  { icon: Award, label: 'Professional Certifications', value: '15+' },
  { icon: TrendingUp, label: 'Successful Audits', value: '1000+' }
]

const values = [
  {
    icon: Shield,
    title: 'Integrity First',
    description: 'We uphold the highest ethical standards in all our professional practices and client relationships.'
  },
  {
    icon: Star,
    title: 'Excellence Always',
    description: 'Our commitment to quality drives us to deliver exceptional results that exceed client expectations.'
  },
  {
    icon: Users,
    title: 'Partnership Mindset',
    description: 'We build lasting relationships based on trust, transparency, and mutual success with our clients.'
  },
  {
    icon: TrendingUp,
    title: 'Innovation Focus',
    description: 'We leverage cutting-edge solutions and industry best practices to drive client growth and efficiency.'
  }
]

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-accent/5 via-white to-primary/5">
      {/* Header */}
      <div className="bg-gradient-to-r from-accent to-accent-dark text-white">
        <div className="container-narrow py-12">
          <Link to="/" className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 transition">
            <ArrowLeft size={20} />
            Back to Home
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Phehlukwayo</h1>
          <p className="text-xl text-white/90 max-w-3xl">
            Over 20 years of excellence in auditing, accounting, and advisory services across South Africa.
          </p>
        </div>
      </div>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container-narrow">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map(({ icon: Icon, label, value }) => (
              <div key={label} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary text-white mb-4 shadow-lg">
                  <Icon size={28} />
                </div>
                <div className="text-3xl font-bold text-primary mb-2">{value}</div>
                <div className="text-sm text-gray-600">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="container-narrow grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
            <div className="prose prose-lg text-gray-700 space-y-4">
              <p>
                Founded in 2001 by Boysie Phehlukwayo, C.A. (SA), Phehlukwayo Chartered Accountants (SA) has grown from a vision of providing exceptional financial services to becoming one of South Africa's most trusted accounting firms.
              </p>
              <p>
                Our philosophy is built on a foundation of long-term, mutually beneficial partnerships with clients and stakeholders. We believe that true success comes from understanding each client's unique context and delivering tailored solutions that drive real business outcomes.
              </p>
              <p>
                Today, we serve businesses of all sizes across both private and public sectors, maintaining our commitment to innovation, excellence, and the highest professional standards.
              </p>
            </div>
          </div>
          <div className="rounded-2xl border p-8 bg-gradient-to-br from-white to-gray-50 shadow-xl">
            <img src={`${import.meta.env.BASE_URL}Boysie.jpg`} alt="Boysie Phehlukwayo" className="rounded-xl w-full object-cover mb-6 shadow-lg" />
            <h3 className="text-xl font-bold text-gray-900 mb-2">Boysie Phehlukwayo, C.A. (SA)</h3>
            <p className="text-primary font-semibold mb-3">CEO & Founder</p>
            <p className="text-sm text-gray-600">
              "Our success is measured by the success of our clients. We're not just service providers – we're partners in your journey toward sustainable growth."
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="container-narrow">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The principles that guide every decision we make and every service we deliver.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {values.map(({ icon: Icon, title, description }) => (
              <div key={title} className="group p-8 rounded-2xl bg-white border border-gray-200 shadow-soft hover:-translate-y-1 hover:shadow-xl transition duration-300">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-teal/10 text-teal group-hover:bg-teal group-hover:text-white transition duration-300 mb-6">
                  <Icon size={24} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
                <p className="text-gray-600">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary-dark">
        <div className="container-narrow text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Partner With Us?</h2>
          <p className="text-xl text-primary-light mb-8 max-w-2xl mx-auto">
            Experience the difference that comes from working with a team that truly cares about your success.
          </p>
          <Link 
            to="/contact" 
            className="inline-block px-8 py-4 bg-accent hover:bg-accent-dark text-white rounded-xl font-semibold transition transform hover:scale-105 shadow-lg"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  )
}