import React, { useState } from 'react'
import { useLocation, useParams } from 'react-router-dom'

const MealInfo = () => {

    // const name = useParams()
    const { state } = useLocation()
    const [mealInfo, setMealInfo] = useState()

    const getMealsInfo = (state) => {
        state && fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${state}`)
            .then((data) => data.json())
            .then(({ meals }) => {
                setMealInfo(meals[0])
            })
            .catch((err) => console.log(err))
    }
    getMealsInfo(state)

    return (
        <div className='mt-24'>{mealInfo && <img src={mealInfo.strMealThumb}></img>}</div>
    )
}

export default MealInfo