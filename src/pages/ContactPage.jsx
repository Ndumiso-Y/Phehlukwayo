import { ArrowLeft, Mail, Phone, MapPin, Clock, MessageSquare, Send } from 'lucide-react'
import { Link } from 'react-router-dom'

const contactMethods = [
  {
    icon: Phone,
    title: 'Phone',
    details: [
      { label: 'Office', value: '+27 11 482 2055', href: 'tel:+27114822055' },
      { label: 'Mobile', value: '+27 83 229 9823', href: 'tel:+27832299823' }
    ]
  },
  {
    icon: Mail,
    title: 'Email',
    details: [
      { label: 'General Inquiries', value: 'info@phehlukwayo.co.za', href: 'mailto:info@phehlukwayo.co.za' },
      { label: 'New Business', value: 'business@phehlukwayo.co.za', href: 'mailto:business@phehlukwayo.co.za' }
    ]
  },
  {
    icon: MapPin,
    title: 'Location',
    details: [
      { label: 'Address', value: '12th Floor, 25 Owl Street Building, 25 Owl Street, Milpark, Johannesburg, South Africa' },
      { label: 'Service Area', value: 'All provinces of South Africa' }
    ]
  },
  {
    icon: Clock,
    title: 'Business Hours',
    details: [
      { label: 'Monday - Friday', value: '08:00 - 17:00' },
      { label: 'Response Time', value: 'Within 24 hours' }
    ]
  }
]

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-white to-teal/5">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary to-primary-dark text-white">
        <div className="container-narrow py-12">
          <Link to="/" className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 transition">
            <ArrowLeft size={20} />
            Back to Home
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Get in Touch</h1>
          <p className="text-xl text-white/90 max-w-3xl">
            Ready to discuss your business needs? We'd love to hear from you. Reach out using any of the methods below.
          </p>
        </div>
      </div>

      {/* Contact Methods */}
      <section className="py-20">
        <div className="container-narrow">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactMethods.map(({ icon: Icon, title, details }) => (
              <div key={title} className="group p-6 rounded-2xl bg-white border border-gray-200 shadow-soft hover:-translate-y-1 hover:shadow-xl transition duration-300">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-teal/10 text-teal group-hover:bg-teal group-hover:text-white transition duration-300 mb-4">
                  <Icon size={24} />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{title}</h3>
                <div className="space-y-2">
                  {details.map(({ label, value, href }) => (
                    <div key={label} className="text-sm">
                      <div className="font-medium text-gray-700">{label}:</div>
                      {href ? (
                        <a href={href} className="text-primary hover:text-primary-dark hover:underline transition">
                          {value}
                        </a>
                      ) : (
                        <div className="text-gray-600">{value}</div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-20 bg-gray-50">
        <div className="container-narrow">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white p-8 rounded-2xl shadow-xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-primary text-white flex items-center justify-center">
                  <MessageSquare size={20} />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">Send us a Message</h2>
                  <p className="text-gray-600">We usually respond within one business day</p>
                </div>
              </div>

              <form name="contact" method="POST" data-netlify="true" className="space-y-6">
                <input type="hidden" name="form-name" value="contact" />
                
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Name *</label>
                    <input 
                      name="name" 
                      required 
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-primary focus:ring-0 transition" 
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Email *</label>
                    <input 
                      type="email" 
                      name="email" 
                      required 
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-primary focus:ring-0 transition" 
                      placeholder="your.email@company.com"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Company</label>
                    <input 
                      name="company" 
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-primary focus:ring-0 transition" 
                      placeholder="Your company name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Phone</label>
                    <input 
                      name="phone" 
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-primary focus:ring-0 transition" 
                      placeholder="+27 XX XXX XXXX"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Service Interest</label>
                  <select name="service" className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-primary focus:ring-0 transition">
                    <option value="">Select a service (optional)</option>
                    <option value="audit-assurance">Audit & Assurance</option>
                    <option value="advisory-support">Advisory & Support Services</option>
                    <option value="resourcing-training">Resourcing & Training</option>
                    <option value="shared-services">Shared Services Centre</option>
                    <option value="partnership">Partnership Opportunity</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Message *</label>
                  <textarea 
                    name="message" 
                    rows="6" 
                    required
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-primary focus:ring-0 transition resize-none" 
                    placeholder="Tell us about your needs or ask us a question..."
                  ></textarea>
                </div>

                <button 
                  type="submit"
                  className="w-full sm:w-auto px-8 py-4 bg-primary hover:bg-primary-dark text-white rounded-xl font-semibold transition transform hover:scale-105 shadow-lg inline-flex items-center justify-center gap-2"
                >
                  <Send size={18} />
                  Send Message
                </button>
              </form>
            </div>

            {/* Map and Address */}
            <div className="space-y-6">
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <iframe
                  title="Map: 25 Owl Street, Milpark"
                  width="100%"
                  height="400"
                  style={{ border: 0 }}
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                  src="https://www.google.com/maps?q=25%20Owl%20Street%2C%20Milpark%2C%20Johannesburg&output=embed">
                </iframe>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-xl">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Visit Our Office</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="text-primary mt-1" size={20} />
                    <div>
                      <div className="font-semibold text-gray-900">Address</div>
                      <div className="text-gray-600">
                        12th Floor, 25 Owl Street Building<br />
                        25 Owl Street, Milpark<br />
                        Johannesburg, South Africa
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <Clock className="text-primary mt-1" size={20} />
                    <div>
                      <div className="font-semibold text-gray-900">Operating Hours</div>
                      <div className="text-gray-600">
                        Monday - Friday: 08:00 - 17:00<br />
                        Saturday & Sunday: Closed
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-gray-200">
                    <p className="text-sm text-gray-600">
                      <strong>Service Coverage:</strong> We provide services across all provinces of South Africa, 
                      with the flexibility to work on-site or remotely as needed.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}