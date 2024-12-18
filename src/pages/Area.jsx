import React, { useEffect, useState } from 'react'
import Home from '../components/Home'

const Area = () => {
  const [input, setInput] = useState('')

  const [meals, setMeals] = useState([])

  const handleInput = (e) => {
    (setInput(e.target.value), localStorage.setItem('input', e.target.value))
  }

  useEffect(() => {
    input && fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${input}`)
      .then((data) => data.json())
      .then(( mealId ) => {
        mealId.meals.map((meal) => {
          fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${meal.idMeal}`)
            .then((data) => data.json())
            .then(( mealInfo ) => {
              setMeals((pre) => [...pre,mealInfo.meals[0]])
            })
            .catch((err) => console.log(err))
        })
      })
      .catch((err) => console.log(err))
  }, [input])


  return (
    <Home input={input} handleInput={handleInput} meals={meals} placeHolder={'Indians,Italy...'} />
  )
}

export default Area