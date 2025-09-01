export default function Footer() {
  return (
    <footer className="mt-auto border-t bg-white">
      <div className="container-narrow py-10 text-sm flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex items-center gap-2">
          <img src={`${import.meta.env.BASE_URL}logo-light.png`} alt="Phehlukwayo Logo" className="h-8 w-auto" />
          <span className="font-semibold text-gray-900">Phehlukwayo Chartered Accountants (SA)</span>
        </div>
        <div>© {new Date().getFullYear()} All rights reserved.</div>
      </div>
    </footer>
  )
}