import React, { useEffect, useState } from 'react'
import Home from '../components/Home'
import ErrorEle from '../components/Error.jsx';

const Catagories = () => {

  const [input, setInput] = useState('')

  const [meals, setMeals] = useState([])

  const handleInput = (e) => {
    (setInput(e.target.value), localStorage.setItem('input', e.target.value))
  }

  useEffect(() => {
    input && fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${input}`)
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
      .catch((err) =><ErrorEle error={err}/>)
  }, [input])


  return (
    <Home input={input} handleInput={handleInput} meals={meals} placeHolder={'Dessert,Veg...'} />
  )
}

export default Catagories