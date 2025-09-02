import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  
  return (
      <div>
  <nav className="bg-white shadow-lg">
    <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
      <div className="relative flex items-center justify-between h-16">
        <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
          <div className="flex-shrink-0 flex items-center">
            <img className="block h-8 w-auto" src="https://tailwindflex.com/images/logo.svg" alt="Logo" />
            <span className="ml-2 text-xl font-bold text-gray-800">BOOK LIBRARY </span>
          </div>
          <div className="hidden sm:block sm:ml-6">
            <div className="flex space-x-4">
              <div className="relative group">
                <div className="absolute left-0 mt-2 w-screen max-w-6xl bg-white border border-gray-200 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 transform -translate-x-1/4">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-6">
                    <div>
                    </div>
                    <div>
                    </div>
                    <div>
                      <div className="bg-gray-100 p-4 rounded-lg">
                       </div>
                    </div>
                  </div>
                </div>
              </div>
              </div>
          </div>
        </div>
        <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <div className="hidden sm:flex sm:items-center">
               <Link to="/addBook" className="ml-4 bg-indigo-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-indigo-700">
                  ADD BOOK
               </Link>
          </div>
          <div className="sm:hidden">
            <button type="button" className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500" aria-expanded="false" id="mobile-menu-button">
              <span className="sr-only">Open main menu</span>
              <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
    <div className="sm:hidden hidden" id="mobile-menu">
      <div className="px-2 pt-2 pb-3 space-y-1">
         <div className="pt-4 pb-3 border-t border-gray-200">
          <div className="flex items-center px-3 space-y-2 flex-col">
            <Link to="/addBook" className="block w-full text-center bg-indigo-600 text-white px-3 py-2 rounded-md text-base font-medium">
              ADD BOOK
            </Link>
          </div>
        </div>
      </div>
    </div>
  </nav>
</div>

  )
}

export default Navbar
