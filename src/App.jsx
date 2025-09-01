import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import CTAFloat from './components/CTAFloat.jsx'
import HomePage from './pages/HomePage.jsx'
import ServicesPage from './pages/ServicesPage.jsx'
import AboutPage from './pages/AboutPage.jsx'
import PartnershipsPage from './pages/PartnershipsPage.jsx'
import ContactPage from './pages/ContactPage.jsx'

export default function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/partnerships" element={<PartnershipsPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
        <Footer />
        <CTAFloat />
      </div>
    </Router>
  )
}