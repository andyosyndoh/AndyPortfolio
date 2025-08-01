'use client'

import { useState } from 'react'

export default function ComponentsPage() {
  const [activeTab, setActiveTab] = useState('buttons')

  const components = {
    buttons: {
      title: 'Buttons',
      content: (
        <div className="space-y-8">
          <div>
            <h6 className="text-lg font-semibold mb-4">Styles:</h6>
            <div className="flex flex-wrap gap-4">
              <button className="btn btn-primary">Default</button>
              <button className="btn btn-outline-primary">Outline</button>
              <button className="btn btn-primary btn-rounded">Rounded</button>
              <button className="btn btn-primary btn-rounded">
                <i className="ti-thumb-up mr-2"></i> With Icon
              </button>
              <button className="btn btn-primary rounded-full w-12 h-12 flex items-center justify-center p-0">
                <i className="ti-heart"></i>
              </button>
            </div>
          </div>
          
          <div>
            <h6 className="text-lg font-semibold mb-4">Sizes:</h6>
            <div className="flex flex-wrap gap-4 items-center">
              <button className="btn btn-primary text-lg px-6 py-3">Large</button>
              <button className="btn btn-primary">Regular</button>
              <button className="btn btn-primary text-sm px-3 py-2">Small</button>
            </div>
          </div>
          
          <div>
            <h6 className="text-lg font-semibold mb-4">Colors:</h6>
            <div className="flex flex-wrap gap-4">
              <button className="btn bg-blue-600 text-white border-blue-600 hover:bg-blue-700">Primary</button>
              <button className="btn bg-gray-600 text-white border-gray-600 hover:bg-gray-700">Secondary</button>
              <button className="btn bg-green-600 text-white border-green-600 hover:bg-green-700">Success</button>
              <button className="btn bg-red-600 text-white border-red-600 hover:bg-red-700">Danger</button>
              <button className="btn bg-yellow-500 text-white border-yellow-500 hover:bg-yellow-600">Warning</button>
              <button className="btn bg-cyan-500 text-white border-cyan-500 hover:bg-cyan-600">Info</button>
            </div>
          </div>
        </div>
      )
    },
    forms: {
      title: 'Forms',
      content: (
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h6 className="text-lg font-semibold mb-4">Form Controls:</h6>
            <div className="space-y-4">
              <input type="email" className="form-control" placeholder="Email address" />
              <input type="date" className="form-control" />
              <input className="form-control" type="text" placeholder="Readonly input here…" readOnly />
              <input className="form-control opacity-50" type="text" placeholder="Disabled input here..." disabled />
              <select className="form-control">
                <option>Example select</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
              </select>
              <textarea className="form-control h-24" placeholder="Example textarea"></textarea>
            </div>
          </div>
          
          <div>
            <h6 className="text-lg font-semibold mb-4">Sizes:</h6>
            <div className="space-y-4">
              <input className="form-control text-lg px-4 py-3" type="text" placeholder="Large input" />
              <input className="form-control" type="text" placeholder="Default input" />
              <input className="form-control text-sm px-3 py-2" type="text" placeholder="Small input" />
            </div>
          </div>
        </div>
      )
    },
    cards: {
      title: 'Cards',
      content: (
        <div className="grid md:grid-cols-3 gap-6">
          <div className="card">
            <div className="card-header">
              <h5 className="font-semibold">Card Title</h5>
            </div>
            <div className="card-body">
              <p className="text-sm">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" className="btn btn-primary btn-sm">Go somewhere</a>
            </div>
          </div>
          
          <div className="card">
            <div className="card-header has-icon text-center relative pb-8">
              <i className="ti-heart text-danger icon-lg"></i>
            </div>
            <div className="card-body text-center">
              <h5 className="font-semibold mb-3">Icon Card</h5>
              <p className="text-sm">Card with icon in header</p>
            </div>
          </div>
          
          <div className="card">
            <img src="/assets/imgs/blog1.jpg" alt="Card" className="w-full h-48 object-cover" />
            <div className="card-body">
              <h5 className="font-semibold mb-3">Image Card</h5>
              <p className="text-sm">Card with image on top</p>
            </div>
          </div>
        </div>
      )
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-primary text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">UI Components</h1>
          <nav className="text-sm">
            <a href="/" className="hover:underline">Home</a>
            <span className="mx-2">/</span>
            <span>Components</span>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        {/* Navigation Tabs */}
        <div className="flex flex-wrap gap-4 mb-8 border-b">
          {Object.entries(components).map(([key, component]) => (
            <button
              key={key}
              onClick={() => setActiveTab(key)}
              className={`px-4 py-2 font-medium border-b-2 transition-colors ${
                activeTab === key
                  ? 'border-primary text-primary'
                  : 'border-transparent text-gray-600 hover:text-gray-900'
              }`}
            >
              {component.title}
            </button>
          ))}
        </div>

        {/* Component Content */}
        <div className="bg-white rounded-lg shadow-sm p-8">
          <h3 className="text-2xl font-bold mb-6">{components[activeTab].title}</h3>
          {components[activeTab].content}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-dark text-white py-8 mt-12">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Andy Osindo. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}