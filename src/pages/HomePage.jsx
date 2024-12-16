import React from 'react'
import Home from '../components/Home'
import Catagories from './Catagories'

const HomePage = () => {
  
  // fetch('https://api.spoonacular.com/recipes/complexSearch?query=pasta&apiKey=854fd19eaf9640fbbcbfb03da6eb82e4')
  // .then((data) => data.json())
  // .then((receipe)=>console.log([receipe]))

  return (
    <>
       <Home />
       <Catagories/>
    </>
  )
}

export default HomePage