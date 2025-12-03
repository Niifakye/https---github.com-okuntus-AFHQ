import React from 'react'
import Navbar from './Navbar'

export default function Contact() {
  return (
    <div className="bg-slate-950 text-white overflow-x-hidden">
      <Navbar />
      
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-linear-to-b from-slate-950 to-slate-900 pt-32">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-4">
            <span className="bg-linear-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Join Our Team
            </span>
          </h2>
          <p className="text-center text-slate-400 mb-12 text-lg">
            Be part of something greater. Defend your nation.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-8 hover:border-blue-500 transition-all">
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">📞 Recruitment</h3>
              <p className="text-slate-400 mb-4">Start your career with us today</p>
              <button className="w-full bg-linear-to-r from-blue-500 to-blue-700 py-3 rounded-lg font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition-all">Apply Now</button>
            </div>

            <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-8 hover:border-blue-500 transition-all">
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">✉️ Contact Us</h3>
              <p className="text-slate-400 mb-4">
                <strong>Email:</strong> info@aircommand.mil<br />
                <strong>Phone:</strong> 1-800-AIR-FORCE
              </p>
              <button className="w-full border-2 border-blue-400 text-blue-400 py-3 rounded-lg font-semibold hover:bg-blue-400/10 transition-all">Send Message</button>
            </div>
          </div>

          <div className="bg-linear-to-br from-slate-800 to-slate-900 border border-blue-500/30 rounded-lg p-10">
            <h3 className="text-2xl font-bold mb-6">Quick Enrollment</h3>
            <form className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <input type="text" placeholder="First Name" className="bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white placeholder-slate-400 focus:outline-none focus:border-blue-500 transition-colors" />
                <input type="text" placeholder="Last Name" className="bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white placeholder-slate-400 focus:outline-none focus:border-blue-500 transition-colors" />
              </div>
              <input type="email" placeholder="Email Address" className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white placeholder-slate-400 focus:outline-none focus:border-blue-500 transition-colors" />
              <input type="tel" placeholder="Phone Number" className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white placeholder-slate-400 focus:outline-none focus:border-blue-500 transition-colors" />
              <select className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors">
                <option>Select Your Interest</option>
                <option>Pilot Program</option>
                <option>Engineering</option>
                <option>Operations</option>
                <option>Support Services</option>
              </select>
              <button type="submit" className="w-full bg-linear-to-r from-blue-500 to-blue-700 py-3 rounded-lg font-bold text-lg hover:shadow-lg hover:shadow-blue-500/50 transition-all mt-6">Submit Application</button>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}
