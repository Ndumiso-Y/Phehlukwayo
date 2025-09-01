export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container-narrow">
        <div className="grid lg:grid-cols-2 gap-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900">Get in Touch</h2>
            <p className="mt-3 text-gray-600">We usually respond within one business day.</p>

            <form name="contact" method="POST" data-netlify="true" className="mt-8 space-y-4">
              <input type="hidden" name="form-name" value="contact" />
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Name</label>
                  <input name="name" required className="mt-1 w-full rounded-xl border-gray-300 focus:border-primary focus:ring-primary" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Email</label>
                  <input type="email" name="email" required className="mt-1 w-full rounded-xl border-gray-300 focus:border-primary focus:ring-primary" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Company</label>
                  <input name="company" className="mt-1 w-full rounded-xl border-gray-300 focus:border-primary focus:ring-primary" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Phone</label>
                  <input name="phone" className="mt-1 w-full rounded-xl border-gray-300 focus:border-primary focus:ring-primary" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Message</label>
                <textarea name="message" rows="5" className="mt-1 w-full rounded-xl border-gray-300 focus:border-primary focus:ring-primary"></textarea>
              </div>
              <button className="px-5 py-3 rounded-xl bg-primary text-white hover:bg-primary-dark transition">Send Message</button>
            </form>
          </div>

          <div className="space-y-4">
            <div className="rounded-2xl overflow-hidden border border-gray-200 bg-white shadow-soft">
              <iframe
                title="Map: 25 Owl Street, Milpark"
                width="100%"
                height="320"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps?q=25%20Owl%20Street%2C%20Milpark%2C%20Johannesburg&output=embed">
              </iframe>
            </div>
            <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-soft">
              <h3 className="font-semibold">Contact Details</h3>
              <ul className="mt-3 text-sm text-gray-700 space-y-1">
                <li>Email: <a className="text-primary hover:underline" href="mailto:info@phehlukwayo.co.za">info@phehlukwayo.co.za</a></li>
                <li>Tel: <a className="text-primary hover:underline" href="tel:+27114822055">+27 11 482 2055</a></li>
                <li>Mobile: <a className="text-primary hover:underline" href="tel:+27832299823">+27 83 229 9823</a></li>
                <li>Address: 12th Floor, 25 Owl Street Building, 25 Owl Street, Milpark, Johannesburg, South Africa</li>
                <li>Areas of operation: All provinces of South Africa</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}