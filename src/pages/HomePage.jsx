import React, { useEffect, useState } from 'react'
import Home from '../components/Home'
// import Catagories from './Catagories'

const HomePage = () => {
  const [input, setInput] = useState('')

  const [meals, setMeals] = useState([])

  const handleInput = (e) => {
    (setInput(e.target.value), localStorage.setItem('input', e.target.value))
  }

  useEffect(() => {
    input && fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${input}`)
      .then((data) => data.json())
      .then(({ meals }) => {
        setMeals(meals)
      })
      .catch((err) => console.log(err))
  }, [input])

  return (
    <Home input={input} handleInput={handleInput} meals={meals}  placeHolder={'Cake,Dal Fry...'} />

  )
}

export default HomePage