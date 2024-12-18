import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

const MealInfo = () => {

    // const name = useParams()
    const { state } = useLocation()
    const [mealInfo, setMealInfo] = useState('')

    useEffect(() => {
        getMealsInfo(state)
    }, [state]) // Only run effect if state changes

    const getMealsInfo = (state) => {
        state && fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${state}`)
            .then((data) => data.json())
            .then(({ meals }) => {
                setMealInfo(meals[0])
            })
            .catch((err) => console.log(err))
    }
    console.log(mealInfo)
    return (
        <div className='mx-auto min-h-screen w-screen bgImage bg-no-repeat bg-cover bg-[70%_40%] md:bg-[0_0] pt-24 px-9 flex flex-col md:flex-row gap-9'>
            <div className='mx-auto'>
                <img className='min-h-52 max-w-52 mx-auto' src={mealInfo.strMealThumb}></img>
                <h1 className='text-xl font-bold text-border text-white text-center'>{mealInfo.strMeal}</h1>
                <marquee behavior="smooth" direction="left">There are more data to add but i think this is enough as this is a practice website.</marquee>
            </div>
            <div>
                <div className='bg-yellow-300 p-2'>{mealInfo.strInstructions}</div>
            </div>

        </div>
    )
}

export default MealInfo