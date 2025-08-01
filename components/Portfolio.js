'use client'

import { useEffect, useState } from 'react'

export default function Portfolio() {
  const [filter, setFilter] = useState('all')
  const [mounted, setMounted] = useState(false)

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      category: 'web',
      image: '/assets/imgs/web-1.jpg',
      description: 'Full-stack e-commerce solution with React and Node.js'
    },
    {
      id: 2,
      title: 'Task Management App',
      category: 'web',
      image: '/assets/imgs/web-2.jpg',
      description: 'React-based task management application'
    },
    {
      id: 3,
      title: 'Brand Identity Design',
      category: 'branding',
      image: '/assets/imgs/branding-1.jpg',
      description: 'Complete brand identity and logo design'
    },
    {
      id: 4,
      title: 'Mobile App UI',
      category: 'branding',
      image: '/assets/imgs/branding-2.jpg',
      description: 'Modern mobile application user interface'
    },
    {
      id: 5,
      title: 'Portfolio Website',
      category: 'web',
      image: '/assets/imgs/web-3.jpg',
      description: 'Responsive portfolio website with Next.js'
    },
    {
      id: 6,
      title: 'Marketing Campaign',
      category: 'advertising',
      image: '/assets/imgs/advertising-1.jpg',
      description: 'Digital marketing campaign design'
    }
  ]

  useEffect(() => {
    setMounted(true)
  }, [])

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter)

  if (!mounted) {
    return null
  }

  return (
    <section className="section bg-custom-gray" id="portfolio">
      <div className="container mx-auto px-4">
        <h2 className="mb-5 pb-4 text-center text-4xl font-bold">
          <span className="text-danger">My</span> Portfolio
        </h2>
        
        {/* Portfolio Filters */}
        <div className="portfolio">
          <div className="filters mb-8">
            <a 
              href="#" 
              className={filter === 'all' ? 'active' : ''}
              onClick={(e) => {
                e.preventDefault()
                setFilter('all')
              }}
            >
              All
            </a>
            <a 
              href="#" 
              className={filter === 'web' ? 'active' : ''}
              onClick={(e) => {
                e.preventDefault()
                setFilter('web')
              }}
            >
              Web
            </a>
            <a 
              href="#" 
              className={filter === 'branding' ? 'active' : ''}
              onClick={(e) => {
                e.preventDefault()
                setFilter('branding')
              }}
            >
              Branding
            </a>
            <a 
              href="#" 
              className={filter === 'advertising' ? 'active' : ''}
              onClick={(e) => {
                e.preventDefault()
                setFilter('advertising')
              }}
            >
              Advertising
            </a>
          </div>
          
          {/* Portfolio Items */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <div key={project.id} className="portfolio-item">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-64 object-cover"
                />
                <div className="content-holder">
                  <div>
                    <h6 className="title mb-2">{project.title}</h6>
                    <p className="subtitle">{project.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}