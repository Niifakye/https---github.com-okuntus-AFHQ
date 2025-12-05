import React, { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import NewsImg1 from '../assets/VBTeam.jpg'
import NewsImg2 from '../assets/k8.jpg'
import NewsImg3 from '../assets/falcon.jpg'
import NewsImg4 from '../assets/LE-visit.jpg'
import NewsImg5 from '../assets/MI.jpg'

const newsItems = [
  {
    id: 1,
    title: 'No4 Squadron K-8P Training',
    date: 'November 24, 2025',
    description: 'The No4 squadron of K-8P fighters has achieved full operational capability, enhancing our air superiority.',
    bgImage: NewsImg1,
    category: 'Operations'
  },
  {
    id: 2,
    title: 'Advanced Training Program Launches',
    date: 'November 22, 2024',
    description: 'State-of-the-art pilot training program begins with the latest simulation technology and combat scenarios.',
    bgImage: NewsImg2,
    category: 'Training'
  },
  {
    id: 3,
    title: 'Global Surveillance Network Expanded',
    date: 'November 20, 2024',
    description: 'New satellite reconnaissance capabilities now provide real-time monitoring across all strategic regions.',
    bgImage: NewsImg3,
    category: 'Technology'
  },
  {
    id: 4,
    title: 'Joint Military Exercise Successful',
    date: 'November 18, 2024',
    description: 'Multi-national air defense exercise demonstrates enhanced coordination and rapid response capabilities.',
    bgImage: NewsImg4,
    category: 'Exercises'
  },
  {
    id: 5,
    title: 'Cyber Defense Systems Upgraded',
    date: 'November 16, 2024',
    description: 'New cybersecurity infrastructure protects against emerging threats and ensures mission continuity.',
    bgImage: NewsImg5,
    category: 'Security'
  }
]

export default function NewsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [autoPlay, setAutoPlay] = useState(true)

  useEffect(() => {
    if (!autoPlay) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % newsItems.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [autoPlay])

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + newsItems.length) % newsItems.length)
    setAutoPlay(false)
  }

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % newsItems.length)
    setAutoPlay(false)
  }

  const goToSlide = (index) => {
    setCurrentIndex(index)
    setAutoPlay(false)
  }

  const currentNews = newsItems[currentIndex]

  return (
    <section
      id="news"
      className="relative min-h-screen bg-cover bg-center bg-no-repeat flex items-center"
      style={{ backgroundImage: `url(${currentNews.bgImage})` }}
    >
      <div className="absolute inset-0 bg-black/60 pointer-events-none" />
      
      <div className="max-w-6xl mx-auto relative z-10 px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-5xl font-bold text-center mb-4">
          <span className="bg-linear-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Latest News
          </span>
        </h2>
        <p className="text-center text-slate-400 mb-12 text-lg">
          Stay updated with the latest operations and developments
        </p>

        {/* Main Carousel */}
        <div
          className="group relative overflow-hidden hover:border-blue-400 transition-all w-full"
          onMouseEnter={() => setAutoPlay(false)}
          onMouseLeave={() => setAutoPlay(true)}
        >
          {/* Content */}
          <div className="relative z-10 sm:p-12 flex flex-col justify-between w-full">
            <div>
              <div className="flex items-left gap-4 mb-4">
                <span className="inline-block bg-blue-500/20 text-blue-300 px-4 py-1 rounded-full text-sm font-semibold">
                  {currentNews.category}
                </span>
                <span className="text-sm text-slate-400">{currentNews.date}</span>
              </div>

              <h3 className="text-3xl sm:text-4xl font-bold mb-4 text-white leading-tight">
                {currentNews.title}
              </h3>

              <p className="text-lg text-slate-300 max-w-2xl leading-relaxed">
                {currentNews.description}
              </p>
            </div>

            <button className="mt-8 inline-block bg-linear-to-r from-blue-500 to-blue-700 px-6 py-3 rounded-lg font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition-all hover:scale-105 transform">
              Read More
            </button>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={goToPrevious}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-blue-500/20 hover:bg-blue-500/40 text-white p-2 rounded-lg transition-all opacity-0 group-hover:opacity-100 duration-300"
          >
            <ChevronLeft size={28} />
          </button>

          <button
            onClick={goToNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-blue-500/20 hover:bg-blue-500/40 text-white p-2 rounded-lg transition-all opacity-0 group-hover:opacity-100 duration-300"
          >
            <ChevronRight size={28} />
          </button>
        </div>

        {/* Dot Indicators */}
        <div className="flex justify-center gap-3 mt-8">
          {newsItems.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-3 rounded-full transition-all ${
                index === currentIndex
                  ? 'bg-blue-400 w-8'
                  : 'bg-slate-600 w-3 hover:bg-slate-500'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
