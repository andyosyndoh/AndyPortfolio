'use client'

import { useEffect, useState } from 'react'
import Header from '../components/Header'
import About from '../components/About'
import Services from '../components/Services'
import Portfolio from '../components/Portfolio'
import Blog from '../components/Blog'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

export default function Home() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    
    // Smooth scroll functionality
    const handleNavClick = (e) => {
      const target = e.target
      if (target.hash && target.hash !== '') {
        e.preventDefault()
        const hash = target.hash
        const element = document.querySelector(hash)
        if (element) {
          element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          })
          // Update URL
          window.history.pushState(null, null, hash)
        }
      }
    }

    // Add event listeners to navigation links
    const navLinks = document.querySelectorAll('a[href^="#"]')
    navLinks.forEach(link => {
      link.addEventListener('click', handleNavClick)
    })

    return () => {
      navLinks.forEach(link => {
        link.removeEventListener('click', handleNavClick)
      })
    }
  }, [])

  if (!mounted) {
    return null // Prevent hydration mismatch
  }

  return (
    <main>
      <Header />
      <About />
      <Services />
      <Portfolio />
      <Blog />
      <Contact />
      <Footer />
    </main>
  )
}