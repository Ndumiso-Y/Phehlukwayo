export default function Partnerships() {
  const partners = [
    'NgwenyaXimum Inc',
    'Njapa Inc',
    'Malina Investments',
    'M22Z Consulting',
    'Ngcingwana Inc. Attorneys',
    'Gwala Inc. Attorneys',
    'African Origin Actuarial Solutions',
  ]
  return (
    <section id="partnerships" className="py-20 bg-white">
      <div className="container-narrow">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900">Partnerships</h2>
          <p className="mt-3 text-gray-600">
            Strategic networks with accountants, attorneys, actuaries and consultants expand our capabilities and reach.
          </p>
        </div>
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {partners.map(p => (
            <div key={p} className="rounded-2xl border border-gray-200 bg-white p-5 shadow-soft">{p}</div>
          ))}
        </div>
      </div>
    </section>
  )
}