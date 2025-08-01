'use client'

import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
    // You can integrate with your preferred form handling service
  }

  return (
    <section className="section" id="contact">
      <div className="container mx-auto px-4">
        <h2 className="mb-5 pb-4 text-center text-4xl font-bold">
          <span className="text-danger">Contact</span> Me
        </h2>
        
        <div className="contact">
          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Contact Info */}
            <div className="contact-info-card">
              <h4 className="contact-title text-xl font-semibold">Get In Touch</h4>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <i className="ti-location-pin text-danger text-xl mt-1"></i>
                  <div>
                    <h6 className="font-semibold mb-1">Address</h6>
                    <p className="text-sm opacity-80">Kisumu, Kenya</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <i className="ti-mobile text-danger text-xl mt-1"></i>
                  <div>
                    <h6 className="font-semibold mb-1">Phone</h6>
                    <p className="text-sm opacity-80">+254 7922 71656</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <i className="ti-email text-danger text-xl mt-1"></i>
                  <div>
                    <h6 className="font-semibold mb-1">Email</h6>
                    <p className="text-sm opacity-80">andyovvo8@gmail.com</p>
                  </div>
                </div>
              </div>
              
              {/* Social Links */}
              <div className="mt-8">
                <h6 className="font-semibold mb-4">Follow Me</h6>
                <div className="flex space-x-4">
                  <a href="https://twitter.com/andyosyndoh" target="_blank" rel="noopener noreferrer" className="text-danger hover:text-red-600">
                    <i className="ti-twitter-alt text-xl"></i>
                  </a>
                  <a href="https://linkedin.com/in/andrew-osindo" target="_blank" rel="noopener noreferrer" className="text-danger hover:text-red-600">
                    <i className="ti-linkedin text-xl"></i>
                  </a>
                  <a href="https://github.com/andyosyndoh" target="_blank" rel="noopener noreferrer" className="text-danger hover:text-red-600">
                    <i className="ti-github text-xl"></i>
                  </a>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="contact-form-card">
              <h4 className="contact-title text-xl font-semibold">Send Message</h4>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="form-group">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="form-control w-full"
                    placeholder="Your Name"
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="form-control w-full"
                    placeholder="Your Email"
                    required
                  />
                </div>
                <div className="form-group">
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="form-control w-full h-32 resize-none"
                    placeholder="Your Message"
                    required
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-primary btn-rounded w-full">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}