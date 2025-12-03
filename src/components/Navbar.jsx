import React, { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import logo from '../assets/logo-long.png'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  const handleNav = (id) => {
    setIsMenuOpen(false)
    // If we're already on the home page, just scroll to the section
    if (location.pathname === '/') {
      const el = document.getElementById(id)
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      return
    }

    // Otherwise navigate to home and pass desired scroll target in state
    navigate('/', { state: { scrollTo: id } })
  }

  return (
    <nav className="fixed w-full z-50 bg-linear-to-b from-slate-950/95 via-slate-950/80 to-transparent backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center gap-3">
            {/* navbar logo */}
            <img src={logo} alt="GHAF Logo" className="w-20 h-20"></img>
            <span className="text-4xl font-bold tracking-wider hidden sm:inline">Ghana Air Force</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8 items-center">
            <button onClick={() => handleNav('home')} className="hover:text-blue-400 transition-colors">Home</button>
            <button onClick={() => handleNav('news')} className="hover:text-blue-400 transition-colors">News</button>
            <button onClick={() => handleNav('mission')} className="hover:text-blue-400 transition-colors">Mission</button>
            <button onClick={() => handleNav('aircraft')} className="hover:text-blue-400 transition-colors">Aircraft</button>
            <button onClick={() => handleNav('capabilities')} className="hover:text-blue-400 transition-colors">Capabilities</button>
            <Link to="/contact" className="hover:text-blue-400 transition-colors">Contact</Link>
            <button className="bg-linear-to-r from-blue-500 to-blue-700 px-6 py-2 rounded-lg font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition-all">
              Enlist
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button onClick={toggleMenu} className="md:hidden">
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-slate-900/95 backdrop-blur-sm rounded-lg mt-2 p-4 space-y-3 mb-4">
            <button onClick={() => handleNav('home')} className="block py-2 hover:text-blue-400 transition-colors">Home</button>
            <button onClick={() => handleNav('news')} className="hover:text-blue-400 transition-colors">News</button>
            <button onClick={() => handleNav('mission')} className="block py-2 hover:text-blue-400 transition-colors">Mission</button>
            <button onClick={() => handleNav('aircraft')} className="block py-2 hover:text-blue-400 transition-colors">Aircraft</button>
            <button onClick={() => handleNav('capabilities')} className="block py-2 hover:text-blue-400 transition-colors">Capabilities</button>
            <Link to="/contact" className="block py-2 hover:text-blue-400 transition-colors">Contact</Link>
            <button className="w-full bg-linear-to-r from-blue-500 to-blue-700 px-6 py-2 rounded-lg font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition-all mt-4">
              Enlist
            </button>
          </div>
        )}
      </div>
    </nav>
  )
}
