'use client'

import { useEffect } from 'react'

export default function Header() {
  useEffect(() => {
    // Add any header-specific JavaScript here
  }, [])

  return (
    <header className="header" id="home">
      <div className="container mx-auto px-4 h-full relative">
        <div className="header-content text-center">
          <span className="header-subtitle block">Hello, I am</span>
          <h1 className="header-title">Andy Osindo</h1>
          <p className="header-mono uppercase tracking-widest">Full Stack Developer</p>
          <div className="flex justify-center space-x-4 mb-8">
            <a className="btn btn-primary btn-rounded" href="#work">Visit My Works</a>
            <a className="btn btn-outline-primary btn-rounded" href="#contact">Contact Me</a>
          </div>
        </div>
      </div>
      
      {/* Social Icons */}
      <div className="absolute bottom-8 left-8">
        <ul className="social-icons flex flex-col space-y-4">
          <li><a className="social-link" href="https://twitter.com/andyosyndoh" target="_blank" rel="noopener noreferrer"><i className="ti-twitter-alt"></i></a></li>
          <li><a className="social-link" href="https://linkedin.com/in/andrew-osindo" target="_blank" rel="noopener noreferrer"><i className="ti-linkedin"></i></a></li>
          <li><a className="social-link" href="https://github.com/andyosyndoh" target="_blank" rel="noopener noreferrer"><i className="ti-github"></i></a></li>
        </ul>
      </div>
    </header>
  )
}