export default function Footer() {
  return (
    <footer className="footer py-8">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <p className="text-sm text-gray-300 mb-0">
            &copy; {new Date().getFullYear()} Andy Osindo. All rights reserved.
          </p>
          <div className="flex justify-center space-x-6 mt-4">
            <a href="https://twitter.com/andyosyndoh" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">
              <i className="ti-twitter-alt"></i>
            </a>
            <a href="https://linkedin.com/in/andrew-osindo" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">
              <i className="ti-linkedin"></i>
            </a>
            <a href="https://github.com/andyosyndoh" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">
              <i className="ti-github"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}