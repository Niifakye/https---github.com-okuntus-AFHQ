import { ChevronDown } from 'lucide-react'
import { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import Navbar from './Navbar'
import NewsCarousel from './NewsCarousel'
import heroImg from '../assets/falcon.jpg'

export default function HomePage() {
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    // Check router state first, then URL hash
    const targetId = location.state?.scrollTo || (window.location.hash ? window.location.hash.replace('#', '') : null)
    if (targetId) {
      // Slight delay to allow navigation/mount to finish
      setTimeout(() => {
        const targetEl = document.getElementById(targetId)
        if (targetEl) targetEl.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }, 50)
    }
  }, [location])

  return (
    <div className="bg-slate-950 text-white overflow-x-hidden">
      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <section
        id="home"
        className="relative min-h-screen bg-cover bg-center bg-no-repeat flex items-center pt-20"
        style={{ backgroundImage: `url(${heroImg})` }}
      >
        {/* Dark overlay to ensure text readability */}
        <div className="absolute inset-0 bg-black/55"></div>

        {/* Decorative soft linears */}
        {/* <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-72 h-72 bg-blue-500/8 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-cyan-500/8 rounded-full blur-3xl"></div>
        </div> */}

        {/* Content centered */}
        <div className="relative z-10 w-full">
          <div className="max-w-4xl mx-auto px-6 text-center py-28">
            <span className="inline-block bg-linear-to-r from-blue-400 to-cyan-400 text-slate-950 px-4 py-1 rounded-full text-sm font-semibold mb-6">
              PROTECTING THE AIRSPACE
            </span>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mt-6 leading-tight">
              <span className="bg-linear-to-r from-blue-300 via-cyan-300 to-blue-500 bg-clip-text text-transparent">Ghana Air Force</span>
              <br />
              <span className="text-white">Command Center</span>
            </h1>

            <p className="mt-6 text-base sm:text-lg text-slate-200 max-w-3xl mx-auto">
              Excellence in aviation. Dedication in service. Defending our national airspace with cutting-edge aircraft and world-class pilots.
            </p>

            <div className="mt-8 flex justify-center gap-4">
              <button className="bg-linear-to-r from-blue-500 to-blue-700 px-6 py-3 rounded-lg font-semibold text-base hover:scale-105 transition-transform">
                About Us
              </button>
              {/* <button className="border-2 border-blue-300 text-blue-200 px-6 py-3 rounded-lg font-semibold hover:bg-white/5 transition-colors">
                Watch 
              </button> */}
            </div>

            <div className="mt-12 flex justify-center">
              <div className="animate-bounce">
                <ChevronDown size={32} className="text-blue-200" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* news section */}
      <NewsCarousel/>

      {/* Mission Section */}
      <section id="mission" className="py-20 px-4 sm:px-6 lg:px-8 bg-linear-to-b from-slate-950 to-slate-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-4">
            <span className="bg-linear-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Our Mission
            </span>
          </h2>
          <p className="text-center text-slate-400 mb-16 max-w-2xl mx-auto text-lg">
            Delivering excellence through innovation and dedication
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Mission Card 1 */}
            <div className="group bg-linear-to-br from-slate-800 to-slate-900 p-8 rounded-xl border border-slate-700 hover:border-blue-500 transition-all hover:shadow-xl hover:shadow-blue-500/20">
              <div className="text-4xl mb-4">🛡️</div>
              <h3 className="text-2xl font-bold mb-4">Protect</h3>
              <p className="text-slate-400 leading-relaxed">
                Safeguarding our airspace and national sovereignty with advanced defense systems and trained personnel.
              </p>
            </div>

            {/* Mission Card 2 */}
            <div className="group bg-linear-to-br from-slate-800 to-slate-900 p-8 rounded-xl border border-slate-700 hover:border-blue-500 transition-all hover:shadow-xl hover:shadow-blue-500/20">
              <div className="text-4xl mb-4">✈️</div>
              <h3 className="text-2xl font-bold mb-4">Defend</h3>
              <p className="text-slate-400 leading-relaxed">
                Operating state-of-the-art aircraft with unmatched precision and capability in any operational environment.
              </p>
            </div>

            {/* Mission Card 3 */}
            <div className="group bg-linear-to-br from-slate-800 to-slate-900 p-8 rounded-xl border border-slate-700 hover:border-blue-500 transition-all hover:shadow-xl hover:shadow-blue-500/20">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-2xl font-bold mb-4">Lead</h3>
              <p className="text-slate-400 leading-relaxed">
                Setting global standards in air operations and aerial superiority through innovation and excellence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Aircraft Section */}
      <section id="aircraft" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-4">
            <span className="bg-linear-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Aircraft Fleet
            </span>
          </h2>
          <p className="text-center text-slate-400 mb-16 max-w-2xl mx-auto text-lg">
            Advanced platforms for modern air superiority
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Aircraft Card 1 */}
            <div className="bg-linear-to-br from-blue-900/30 to-slate-900 border border-blue-500/30 rounded-lg overflow-hidden hover:border-blue-400 transition-all group">
              <div className="bg-linear-to-b from-blue-900/40 to-transparent h-48 flex items-center justify-center text-6xl group-hover:scale-110 transition-transform">
                🛩️
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">K-8P</h3>
                <p className="text-sm text-slate-400 mb-4"> Multi-Role Fighter-Trainer</p>
                <div className="flex gap-2 flex-wrap">
                  <span className="text-xs bg-blue-500/20 text-blue-300 px-2 py-1 rounded">Max: 1190 mph</span>
                  <span className="text-xs bg-blue-500/20 text-blue-300 px-2 py-1 rounded">Range: 1300 mi</span>
                </div>
              </div>
            </div>

            {/* Aircraft Card 2 */}
            <div className="bg-linear-to-br from-blue-900/30 to-slate-900 border border-blue-500/30 rounded-lg overflow-hidden hover:border-blue-400 transition-all group">
              <div className="bg-linear-to-b from-blue-900/40 to-transparent h-48 flex items-center justify-center text-6xl group-hover:scale-110 transition-transform">
                ✈️
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Casa C-295m</h3>
                <p className="text-sm text-slate-400 mb-4">Tactical Transport Aircraft</p>
                <div className="flex gap-2 flex-wrap">
                  <span className="text-xs bg-blue-500/20 text-blue-300 px-2 py-1 rounded">Max: 540 mph</span>
                  <span className="text-xs bg-blue-500/20 text-blue-300 px-2 py-1 rounded">Capacity: 42K lbs</span>
                </div>
              </div>
            </div>

            {/* Aircraft Card 3 */}
            <div className="bg-linear-to-br from-blue-900/30 to-slate-900 border border-blue-500/30 rounded-lg overflow-hidden hover:border-blue-400 transition-all group">
              <div className="bg-linear-to-b from-blue-900/40 to-transparent h-48 flex items-center justify-center text-6xl group-hover:scale-110 transition-transform">
                🚁
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">MI-171SH</h3>
                <p className="text-sm text-slate-400 mb-4">Medium-Lift Utility Helicopter</p>
                <div className="flex gap-2 flex-wrap">
                  <span className="text-xs bg-blue-500/20 text-blue-300 px-2 py-1 rounded">Max: 483 mph</span>
                  <span className="text-xs bg-blue-500/20 text-blue-300 px-2 py-1 rounded">Range: 8260 mi</span>
                </div>
              </div>
            </div>

            {/* Aircraft Card 4 */}
            <div className="bg-linear-to-br from-blue-900/30 to-slate-900 border border-blue-500/30 rounded-lg overflow-hidden hover:border-blue-400 transition-all group">
              <div className="bg-linear-to-b from-blue-900/40 to-transparent h-48 flex items-center justify-center text-6xl group-hover:scale-110 transition-transform">
                🚁
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Z-9EH</h3>
                <p className="text-sm text-slate-400 mb-4">Light Weight Helicopter</p>
                <div className="flex gap-2 flex-wrap">
                  <span className="text-xs bg-blue-500/20 text-blue-300 px-2 py-1 rounded">Max: 460 mph</span>
                  <span className="text-xs bg-blue-500/20 text-blue-300 px-2 py-1 rounded">Range: 8000 mi</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section id="capabilities" className="py-20 px-4 sm:px-6 lg:px-8 bg-linear-to-b from-slate-950 to-slate-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-4">
            <span className="bg-linear-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Core Capabilities
            </span>
          </h2>
          <p className="text-center text-slate-400 mb-16 max-w-2xl mx-auto text-lg">
            Cutting-edge technology and training
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              { icon: '🛰️', title: 'Satellite Reconnaissance', desc: 'Real-time global surveillance and intelligence gathering' },
              { icon: '🔍', title: 'Advanced Radar Systems', desc: 'Multi-target tracking and threat detection' },
              { icon: '📡', title: 'Command & Control', desc: 'Integrated network-centric operations platform' },
              { icon: '🎖️', title: 'Pilot Training', desc: 'World-class flight operations and combat training' },
              { icon: '⚡', title: 'Rapid Response', desc: '24/7 operational readiness and deployment' },
              { icon: '🔐', title: 'Cybersecurity', desc: 'Advanced protection against emerging threats' },
            ].map((item, idx) => (
              <div key={idx} className="flex gap-6 p-6 bg-slate-800/50 border border-slate-700 rounded-lg hover:border-blue-500 transition-all hover:bg-slate-800/80">
                <div className="text-4xl shrink-0">{item.icon}</div>
                <div>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-slate-400">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="p-8 bg-linear-to-br from-blue-900/30 to-slate-900 border border-blue-500/30 rounded-lg">
              <div className="text-5xl font-bold text-blue-400 mb-2">20+</div>
              <p className="text-slate-400">Active Aircraft</p>
            </div>
            <div className="p-8 bg-linear-to-br from-blue-900/30 to-slate-900 border border-blue-500/30 rounded-lg">
              <div className="text-5xl font-bold text-cyan-400 mb-2">5000K+</div>
              <p className="text-slate-400">Active Personnel</p>
            </div>
            <div className="p-8 bg-linear-to-br from-blue-900/30 to-slate-900 border border-blue-500/30 rounded-lg">
              <div className="text-5xl font-bold text-blue-400 mb-2">7+</div>
              <p className="text-slate-400">Operating Bases</p>
            </div>
            <div className="p-8 bg-linear-to-br from-blue-900/30 to-slate-900 border border-blue-500/30 rounded-lg">
              <div className="text-5xl font-bold text-cyan-400 mb-2">24/7</div>
              <p className="text-slate-400">Active Duty</p>
            </div>
          </div>
        </div>
      </section>


      {/* Footer */}
      <footer className="bg-slate-950 border-t border-slate-800 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="font-bold text-lg mb-4">About</h4>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li><a href="#" className="hover:text-blue-400 transition-colors">History</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Organization</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Leadership</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4">Operations</h4>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li><a href="#" className="hover:text-blue-400 transition-colors">Commands</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Bases</a></li>
                <li>
                  <button
                    onClick={(e) => {
                      e.preventDefault()
                      // If already on home, scroll; otherwise navigate with state
                      if (location.pathname === '/') {
                        const el = document.getElementById('news')
                        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
                      } else {
                        navigate('/', { state: { scrollTo: 'news' } })
                      }
                    }}
                    className="hover:text-blue-400 transition-colors"
                  >
                    News
                  </button>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4">Resources</h4>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li><a href="#" className="hover:text-blue-400 transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Benefits</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">FAQ</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4">Legal</h4>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li><a href="#" className="hover:text-blue-400 transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Contact</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-slate-800 pt-8 text-center text-slate-500 text-sm">
            <p>&copy; 1957 Ghana Air Force. All rights reserved.</p>
            <p className="mt-2">Protecting the airspace. Securing the future.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}