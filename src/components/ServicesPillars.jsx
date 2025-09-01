import { Briefcase, ShieldCheck, Users, Layers } from 'lucide-react'

const pillars = [
  {
    key: 'advisory',
    title: 'Advisory & Support Services',
    desc: 'Compliance with accounting standards, tax law, governance, financial management and strategic growth. Support includes staff secondments.',
    bullets: [
      'Accounting Services',
      'Payroll & Remuneration Management',
      'Financial Management',
      'Company Secretarial & Corporate Governance',
      'Tax Management',
      'Business Process Management'
    ],
    icon: Briefcase
  },
  {
    key: 'audit',
    title: 'Audit & Assurance',
    desc: 'Experienced across private and public sectors. Audits that ensure compliance and create value.',
    bullets: [
      'Statutory Audits',
      'Performance Audits',
      'Internal Audits',
      'Agreed-Upon Procedures',
      'IT Audits',
      'Forensic Audits'
    ],
    icon: ShieldCheck
  },
  {
    key: 'resourcing',
    title: 'Resourcing & Training',
    desc: 'Recruitment and placement in accounting, finance, audit and IT; plus training in Accounting, Administration and IT.',
    bullets: [
      'Accountants@PHEHLUKWAYO',
      'Independents@PHEHLUKWAYO',
      'Auditors@PHEHLUKWAYO',
      'Training in Accounting, Administration & IT'
    ],
    icon: Users
  },
  {
    key: 'shared',
    title: 'Shared Services Centre',
    desc: 'Tailored for smaller businesses to reduce cost and increase reliability and efficiency.',
    bullets: [
      'Accounting',
      'Tax Administration',
      'Payroll Administration',
      'Company Secretarial'
    ],
    icon: Layers
  }
]

import { Link } from 'react-router-dom'

export default function ServicesPillars() {
  return (
    <section id="services" className="py-24 bg-gradient-to-br from-gray-50 via-primary-50/30 to-teal-50/30 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-accent-200/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal-200/20 rounded-full blur-3xl"></div>
      
      <div className="container-narrow relative">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-teal-100 to-primary-100 text-teal-700 text-sm font-semibold mb-4">
            🏢 Comprehensive Business Solutions
          </div>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight text-gray-900 mb-6">
            What We <span className="bg-gradient-to-r from-teal-600 to-primary-600 bg-clip-text text-transparent">Excel At</span>
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Four integrated service pillars designed to keep your business compliant, informed, and ready for sustained growth.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-8">
          {pillars.map(({ key, title, desc, bullets, icon: Icon }, index) => (
            <div 
              key={key} 
              className="group relative rounded-3xl border-2 border-white bg-white/80 backdrop-blur-sm p-8 shadow-soft-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-500"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon with gradient background */}
              <div className="relative inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-teal-100 to-primary-100 text-teal-600 group-hover:from-teal-500 group-hover:to-primary-500 group-hover:text-white transition-all duration-300 mb-6 shadow-teal">
                <Icon size={28} />
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-teal-500/20 to-primary-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-primary-700 transition-colors duration-300">{title}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">{desc}</p>
              
              <ul className="space-y-3 text-gray-700 mb-8">
                {bullets.map((bullet, bulletIndex) => (
                  <li key={bullet} className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-gradient-to-r from-teal-400 to-primary-400 mt-2 flex-shrink-0"></div>
                    <span className="text-sm font-medium">{bullet}</span>
                  </li>
                ))}
              </ul>
              
              <Link 
                to="/services" 
                className="group/link inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 font-semibold transition-colors duration-300"
              >
                Learn More
                <span className="transition-transform group-hover/link:translate-x-1">→</span>
              </Link>

              {/* Hover effect overlay */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-teal-500/5 via-transparent to-primary-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <Link 
            to="/services" 
            className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-teal-600 to-primary-600 text-white font-semibold text-lg hover:from-teal-700 hover:to-primary-700 transition-all duration-300 transform hover:scale-105 shadow-teal"
          >
            View All Services
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </Link>
        </div>
      </div>
    </section>
  )
}