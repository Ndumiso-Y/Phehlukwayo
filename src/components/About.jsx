export default function About() {
  return (
    <section id="about" className="py-20">
      <div className="container-narrow grid md:grid-cols-2 gap-10 items-start">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">About Phehlukwayo</h2>
          <p className="mt-4 text-gray-600">
            Founded in 2001 by Boysie Phehlukwayo, C.A. (SA), Phehlukwayo Chartered Accountants (SA) provides auditing, accounting and tax services to businesses across South Africa.
            Our philosophy is simple: long-term, mutually beneficial partnerships with clients and stakeholders, enabled by innovation and deep knowledge of each client’s context.
          </p>
          <ul className="mt-6 space-y-3 text-gray-700">
            <li>• Client-first, relationship-driven service</li>
            <li>• Best-of-breed solutions grounded in industry standards</li>
            <li>• Enduring partnerships with staff and business partners</li>
          </ul>
        </div>
        <div className="rounded-2xl border p-6 bg-white shadow-soft">
          <img src={`${import.meta.env.BASE_URL}Boysie.jpg`} alt="Boysie Phehlukwayo" className="rounded-xl w-full object-cover" />
          <p className="mt-3 text-center text-sm font-medium text-gray-700">Boysie Phehlukwayo, C.A. (SA) – CEO & Founder</p>
        </div>
      </div>
    </section>
  )
}