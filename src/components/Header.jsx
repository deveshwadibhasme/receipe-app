import { faBowlRice } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  
  const [nav,setNav]  = useState('nav-lg')
  useEffect(() =>{
  if(window.innerWidth < 700){
    setNav('nav-sm')
  }},[])

  return (
    <header className='flex max-w-screen-xl w-full items-center justify-around min-h-14 fixed z-10 left-1/2 -translate-x-1/2'>
      <div className="flex max-w-52 gap-2 items-center h-full">
        <FontAwesomeIcon className='text-3xl' icon={faBowlRice} />
        <span className='font-bold text-xl'>Lets Cooked this!</span>
      </div>
      <nav className={nav}>
        <Link to={'/'} className='hover:text-lime-500' >Home</Link>
        <Link to={'/catagory'} className='hover:text-lime-500' >Catagories</Link>
        <Link  to={'/ingredient'} className='hover:text-lime-500'>Ingredients</Link>
        <Link to={'/favourite'} className='hover:text-lime-500'>Favourites</Link>
      </nav>
    </header>
  )
}

export default Header

