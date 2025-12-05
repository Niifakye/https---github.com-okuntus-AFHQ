import React from 'react'
import Navbar from './Navbar'
import heroImg from '../assets/falcon.jpg'

export default function AboutUs() {
  return (
    <div className="bg-slate-950 text-white overflow-x-hidden">
      <Navbar />

      {/* Hero Section */}
      <section
        id="about-hero"
        className="relative min-h-screen bg-cover bg-center bg-no-repeat flex items-center pt-20"
        style={{ backgroundImage: `url(${heroImg})` }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/55"></div>

        {/* Content */}
        <div className="relative z-10 w-full">
          <div className="max-w-4xl mx-auto px-6 text-center py-28">
            <span className="inline-block bg-linear-to-r from-blue-400 to-cyan-400 text-slate-950 px-4 py-1 rounded-full text-sm font-semibold mb-6">
              OUR STORY
            </span>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mt-6 leading-tight">
              <span className="bg-linear-to-r from-blue-300 via-cyan-300 to-blue-500 bg-clip-text text-transparent">About Ghana Air Force</span>
              <br />
              <span className="text-white">Excellence in Service</span>
            </h1>

            <p className="mt-6 text-base sm:text-lg text-slate-200 max-w-3xl mx-auto">
              Dedicated to protecting our skies and serving our nation with honor, integrity, and uncompromising dedication to excellence.
            </p>
          </div>
        </div>
      </section>

      {/* History Section */}
      <section id="history" className="py-20 px-4 sm:px-6 lg:px-8 bg-linear-to-b from-slate-950 to-slate-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-4">
            <span className="bg-linear-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Our History
            </span>
          </h2>
          <p className="text-center text-slate-400 mb-16 max-w-2xl mx-auto text-lg">
            Decades of commitment to aerial defense and national security
          </p>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-6 text-blue-300">Established with Purpose</h3>
              <p className="text-slate-300 leading-relaxed mb-4">
                The Ghana Air Force has been a cornerstone of our nation's defense for over six decades. Founded on principles of excellence, integrity, and unwavering dedication, we have evolved from a modest beginning into a modern, technologically advanced military force.
              </p>
              <p className="text-slate-300 leading-relaxed mb-4">
                Our rich heritage is built on the sacrifices and achievements of countless dedicated personnel who have served with distinction. We honor their legacy while continuously advancing our capabilities to meet the challenges of the modern world.
              </p>
              <p className="text-slate-300 leading-relaxed">
                Today, we stand as a symbol of national pride and security, protecting our airspace with cutting-edge technology and highly trained personnel.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-linear-to-br from-blue-900/30 to-slate-900 border border-blue-500/30 rounded-lg p-6">
                <div className="text-4xl font-bold text-blue-400 mb-2">60+</div>
                <p className="text-slate-400">Years of Service</p>
              </div>
              <div className="bg-linear-to-br from-blue-900/30 to-slate-900 border border-blue-500/30 rounded-lg p-6">
                <div className="text-4xl font-bold text-cyan-400 mb-2">330K+</div>
                <p className="text-slate-400">Active Personnel</p>
              </div>
              <div className="bg-linear-to-br from-blue-900/30 to-slate-900 border border-blue-500/30 rounded-lg p-6">
                <div className="text-4xl font-bold text-blue-400 mb-2">50+</div>
                <p className="text-slate-400">Aircraft Fleet</p>
              </div>
              <div className="bg-linear-to-br from-blue-900/30 to-slate-900 border border-blue-500/30 rounded-lg p-6">
                <div className="text-4xl font-bold text-cyan-400 mb-2">10+</div>
                <p className="text-slate-400">Operating Bases</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section id="values" className="py-20 px-4 sm:px-6 lg:px-8 bg-linear-to-b from-slate-900 to-slate-950">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-4">
            <span className="bg-linear-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Our Core Values
            </span>
          </h2>
          <p className="text-center text-slate-400 mb-16 max-w-2xl mx-auto text-lg">
            Principles that guide our mission and define who we are
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: '🛡️', title: 'Integrity', desc: 'Honest and transparent in all our actions and decisions' },
              { icon: '⚡', title: 'Excellence', desc: 'Commitment to highest standards in everything we do' },
              { icon: '🤝', title: 'Dedication', desc: 'Unwavering commitment to our mission and nation' },
              { icon: '🌍', title: 'Professionalism', desc: 'World-class standards in training and operations' }
            ].map((value, idx) => (
              <div key={idx} className="bg-linear-to-br from-slate-800 to-slate-900 p-8 rounded-xl border border-slate-700 hover:border-blue-500 transition-all hover:shadow-xl hover:shadow-blue-500/20 text-center">
                <div className="text-5xl mb-4">{value.icon}</div>
                <h3 className="text-2xl font-bold mb-3 text-blue-300">{value.title}</h3>
                <p className="text-slate-400 leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section id="leadership" className="py-20 px-4 sm:px-6 lg:px-8 bg-linear-to-b from-slate-950 to-slate-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-4">
            <span className="bg-linear-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Leadership
            </span>
          </h2>
          <p className="text-center text-slate-400 mb-16 max-w-2xl mx-auto text-lg">
            Experienced officers leading our force with vision and expertise
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: 'Air Marshal John Mensah', role: 'Commander-in-Chief', dept: 'Executive Command' },
              { name: 'Air Vice Marshal Sarah Osei', role: 'Deputy Commander', dept: 'Operations' },
              { name: 'Air Commodore David Kwakye', role: 'Chief of Staff', dept: 'Administration' },
              { name: 'Group Captain Rebecca Ansah', role: 'Director of Training', dept: 'Personnel Development' },
              { name: 'Group Captain Michael Boateng', role: 'Director of Engineering', dept: 'Technical Services' },
              { name: 'Wing Commander Ama Asiamah', role: 'Director of Communications', dept: 'Public Relations' }
            ].map((leader, idx) => (
              <div key={idx} className="bg-linear-to-br from-slate-800 to-slate-900 border border-slate-700 rounded-lg p-8 hover:border-blue-500 transition-all hover:shadow-lg hover:shadow-blue-500/20">
                <div className="w-16 h-16 bg-blue-500/20 rounded-full mb-4 flex items-center justify-center text-3xl">👨‍✈️</div>
                <h3 className="text-xl font-bold text-white mb-1">{leader.name}</h3>
                <p className="text-blue-300 font-semibold mb-2">{leader.role}</p>
                <p className="text-slate-400 text-sm">{leader.dept}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section id="cta" className="py-20 px-4 sm:px-6 lg:px-8 bg-linear-to-r from-slate-900 via-blue-900/20 to-slate-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            <span className="bg-linear-to-r from-blue-300 to-cyan-300 bg-clip-text text-transparent">
              Join Our Mission
            </span>
          </h2>
          <p className="text-slate-300 text-lg mb-8 max-w-2xl mx-auto">
            Are you ready to serve your nation and be part of something greater? Explore career opportunities in the Ghana Air Force.
          </p>
          <button className="bg-linear-to-r from-blue-500 to-blue-700 px-8 py-4 rounded-lg font-bold text-lg hover:shadow-lg hover:shadow-blue-500/50 transition-all hover:scale-105">
            Explore Careers
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 border-t border-slate-800 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="font-bold text-lg mb-4">About</h4>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li><a href="#history" className="hover:text-blue-400 transition-colors">History</a></li>
                <li><a href="#values" className="hover:text-blue-400 transition-colors">Our Values</a></li>
                <li><a href="#leadership" className="hover:text-blue-400 transition-colors">Leadership</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4">Operations</h4>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li><a href="#" className="hover:text-blue-400 transition-colors">Commands</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Bases</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">News</a></li>
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
            <p>&copy; 2024 Ghana Air Force. All rights reserved.</p>
            <p className="mt-2">Protecting the skies. Securing the future.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
