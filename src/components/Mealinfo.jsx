import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

const MealInfo = () => {
    const { state } = useLocation()
    const [mealInfo, setMealInfo] = useState('')
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        getMealsInfo(state)
    }, [state])

    const getMealsInfo = (state) => {
        setLoading(true)
        state && fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${state}`)
            .then((data) => data.json())
            .then(({ meals }) => {
                setMealInfo(meals[0])
                setLoading(false)
            })
            .catch((err) => {
                console.log(err)
                setLoading(false)
            })
    }

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-yellow-400"></div>
            </div>
        )
    }

    return (
        <div className='mx-auto min-h-screen w-full bgImage bg-no-repeat bg-cover bg-[70%_40%] md:bg-[0_0] pt-16 px-4 md:px-9 flex flex-col md:flex-row gap-9'>
            <div className='w-full md:w-1/3 bg-black/20 p-6 rounded-lg backdrop-blur-sm'>
                <img 
                    className='w-full max-w-md h-auto rounded-lg shadow-lg mx-auto transition-transform hover:scale-105 duration-300' 
                    src={mealInfo.strMealThumb} 
                    alt={mealInfo.strMeal}
                />
                <h1 className='text-2xl md:text-3xl font-bold text-white text-center mt-4 mb-2'>
                    {mealInfo.strMeal}
                </h1>
                <div className='bg-yellow-400/90 p-2 rounded-md mt-4'>
                    <marquee behavior="smooth" direction="left" className='font-medium'>
                        There are more data to add but i think this is enough as this is a practice website.
                    </marquee>
                </div>
            </div>
            <div className='w-full md:w-2/3'>
                <div className='bg-yellow-300/90 p-6 rounded-lg shadow-lg backdrop-blur-sm'>
                    <h2 className='text-xl font-bold mb-4'>Instructions</h2>
                    <p className='text-gray-800 leading-relaxed whitespace-pre-line'>
                        {mealInfo.strInstructions}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default MealInfo