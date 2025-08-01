export default function About() {
  return (
    <section className="section pt-0" id="about">
      <div className="container mx-auto px-4">
        <div className="about-section border-b border-gray-300">
          <div className="grid md:grid-cols-3 gap-0">
            <div className="about-card p-16 border-r border-gray-300 md:border-r-0 md:border-b border-b">
              <h6 className="title text-danger mb-4">I AM</h6>
              <p className="subtitle">A Full Stack Developer</p>
              <hr className="w-6 h-0.5 bg-primary border-0 my-4" />
              <p className="text-sm opacity-80">
                Passionate about creating innovative web solutions with modern technologies. 
                I specialize in both frontend and backend development, bringing ideas to life 
                through clean, efficient code.
              </p>
            </div>
            <div className="about-card p-16 border-r border-gray-300 md:border-r-0 md:border-b border-b">
              <h6 className="title text-danger mb-4">DETAILS</h6>
              <p className="subtitle">Name</p>
              <hr className="w-6 h-0.5 bg-primary border-0 my-4" />
              <p className="text-sm opacity-80 mb-4">Andy Osindo</p>
              <p className="subtitle">Email</p>
              <hr className="w-6 h-0.5 bg-primary border-0 my-4" />
              <p className="text-sm opacity-80">andyovvo8@gmail.com</p>
            </div>
            <div className="about-card p-16">
              <h6 className="title text-danger mb-4">MY SKILLS</h6>
              <p className="subtitle">Technologies I Work With</p>
              <hr className="w-6 h-0.5 bg-primary border-0 my-4" />
              <p className="text-sm opacity-80">
                React, Next.js, Node.js, Python, JavaScript, TypeScript, 
                MongoDB, PostgreSQL, AWS, Docker, Git, and more.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}