export default function Services() {
  const services = [
    {
      icon: 'ti-palette',
      title: 'Web Design',
      description: 'Creating beautiful, user-friendly interfaces that provide excellent user experiences across all devices.'
    },
    {
      icon: 'ti-vector',
      title: 'Frontend Development',
      description: 'Building responsive, interactive web applications using modern frameworks like React, Next.js, and Vue.js.'
    },
    {
      icon: 'ti-settings',
      title: 'Backend Development',
      description: 'Developing robust server-side applications, APIs, and database solutions using Node.js, Python, and more.'
    },
    {
      icon: 'ti-announcement',
      title: 'Full Stack Solutions',
      description: 'End-to-end web application development from concept to deployment, ensuring seamless integration.'
    },
    {
      icon: 'ti-light-bulb',
      title: 'Consulting',
      description: 'Providing technical guidance and strategic advice for your web development projects and technology stack.'
    },
    {
      icon: 'ti-headphone-alt',
      title: 'Support & Maintenance',
      description: 'Ongoing support, updates, and maintenance to keep your applications running smoothly and securely.'
    }
  ]

  return (
    <section className="section" id="service">
      <div className="container mx-auto px-4">
        <h2 className="mb-5 pb-4 text-center text-4xl font-bold">
          <span className="text-danger">My</span> Services
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div key={index} className="card">
              <div className="card-header has-icon text-center relative pb-8">
                <i className={`${service.icon} text-danger icon-lg`}></i>
              </div>
              <div className="card-body px-6 pb-6">
                <h4 className="title text-lg font-semibold mb-3">{service.title}</h4>
                <p className="subtitle text-sm opacity-80">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}