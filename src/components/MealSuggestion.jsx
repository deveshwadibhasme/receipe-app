import React from 'react'
import { Link } from 'react-router-dom'

const MealSuggestion = ({ meal }) => {
    return (
        <>
            {meal === null ? 'Enter Someting' : 
            <Link to={`/${meal.strMeal}`} state= {meal.idMeal} className='mx-auto h-44 md:h-52 w-40 md:w-52 text-white'>
                {
                    <img src={meal.strMealThumb} alt="" />
                }
            </Link>}

        </>
    )
}

export default MealSuggestion