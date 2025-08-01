export default function Blog() {
  const blogPosts = [
    {
      id: 1,
      title: 'Getting Started with Next.js 14',
      excerpt: 'Learn how to build modern web applications with the latest features in Next.js 14, including the new App Router and Server Components.',
      image: '/assets/imgs/blog1.jpg',
      date: 'Dec 15, 2023',
      author: 'Andy Osindo',
      category: 'Web Development'
    },
    {
      id: 2,
      title: 'Building Scalable APIs with Node.js',
      excerpt: 'Best practices for creating robust and scalable REST APIs using Node.js, Express, and modern development patterns.',
      image: '/assets/imgs/blog2.jpg',
      date: 'Dec 10, 2023',
      author: 'Andy Osindo',
      category: 'Backend'
    },
    {
      id: 3,
      title: 'React Performance Optimization',
      excerpt: 'Techniques and strategies to optimize React applications for better performance and user experience.',
      image: '/assets/imgs/blog3.jpg',
      date: 'Dec 5, 2023',
      author: 'Andy Osindo',
      category: 'React'
    }
  ]

  return (
    <section className="section" id="blog">
      <div className="container mx-auto px-4">
        <h2 className="mb-5 pb-4 text-center text-4xl font-bold">
          <span className="text-danger">My</span> Blog
        </h2>
        
        <div className="space-y-8">
          {blogPosts.map((post) => (
            <div key={post.id} className="blog-card">
              <div className="img-holder">
                <img src={post.image} alt={post.title} />
              </div>
              <div className="content-holder">
                <h6 className="title mb-3">{post.title}</h6>
                <div className="post-details mb-4">
                  <a href="#" className="mr-4">
                    <i className="ti-user mr-2"></i>By: {post.author}
                  </a>
                  <a href="#" className="mr-4">
                    <i className="ti-calendar mr-2"></i>{post.date}
                  </a>
                  <a href="#" className="mr-4">
                    <i className="ti-folder mr-2"></i>{post.category}
                  </a>
                </div>
                <p className="text-sm opacity-80 mb-4">{post.excerpt}</p>
                <a href="#" className="read-more text-primary">
                  Read More <i className="ti-angle-double-right ml-1"></i>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}