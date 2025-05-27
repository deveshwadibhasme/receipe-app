import { faBowlRice, faBars, faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

const Header = () => {
  const [nav, setNav] = useState('nav-lg')
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()
  
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 700) {
        setNav('nav-sm')
      } else {
        setNav('nav-lg')
        setIsMenuOpen(false)
      }
    }
    
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false)
  }, [location])

  return (
    <header className='flex w-full items-center justify-around min-h-16 fixed z-10 left-1/2 -translate-x-1/2 backdrop-blur-md bg-black/30 shadow-lg px-4'>
      <div className="flex max-w-52 gap-3 items-center h-full">
        <FontAwesomeIcon 
          className='text-3xl text-lime-500 hover:scale-125 transition-all duration-300 cursor-pointer' 
          icon={faBowlRice} 
        />
        <span className='font-bold text-xl bg-gradient-to-r from-lime-500 to-lime-300 bg-clip-text text-transparent hover:from-lime-400 hover:to-lime-200 transition-all duration-300'>
          Let's Cook This!
        </span>
      </div>

      <div className='md:hidden'>
        <FontAwesomeIcon 
          icon={isMenuOpen ? faTimes : faBars} 
          className='text-2xl cursor-pointer text-lime-500 hover:text-lime-400 transition-colors duration-300'
          onClick={toggleMenu}
        />
      </div>

      <nav className={`${nav} ${isMenuOpen ? 'flex' : 'hidden md:flex'} 
        md:relative absolute top-20 md:top-0 left-1/2 -translate-x-1/2 md:left-auto
        w-full md:w-auto bg-black/90 md:bg-transparent
        flex-col md:flex-row items-center gap-6 md:gap-8 
        p-6 md:p-0 shadow-lg md:shadow-none text-white
        backdrop-blur-md md:backdrop-blur-none
        transition-all duration-300 ease-in-out`}>
        {[
          { path: '/', label: 'Home' },
          { path: '/catagory', label: 'Categories' },
          { path: '/area', label: 'Area' },
          { path: '/favourite', label: 'Favourites' }
        ].map((link) => (
          <Link 
            key={link.path}
            to={link.path} 
            className={`relative font-medium transition-all duration-300
              hover:text-lime-400 
              ${location.pathname === link.path ? 'text-lime-500' : 'text-white'}
              after:content-[''] after:absolute after:w-0 after:h-0.5 
              after:bg-lime-500 after:left-0 after:-bottom-1
              after:transition-all after:duration-300
              hover:after:w-full`}
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </header>
  )
}

export default Header
