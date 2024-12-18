import React, { useEffect, useState } from 'react'
import MealSuggestion from './MealSuggestion'

const Home = () => {

    const [input, setInput] = useState('')

    const [meals, setMeals] = useState([])

    useEffect(() => {
        input && fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${input}`)
            .then((data) => data.json())
            .then(({ meals }) => {
                setMeals(meals)
            })
            .catch((err) => console.log(err))
    }, [input])


    return (
        <section
            className='min-h-screen w-screen bgImage bg-no-repeat bg-cover bg-[70%_40%] md:bg-[0_0]'>
            <div className='max-w-xl min-h-64 relative left-1/2 -translate-x-1/2 translate-y-1/2 flex items-center flex-col'>
                <h1>Find Your Receipe</h1>
                <input
                    className='max-w-80 w-full h-10 m-2 border-b-2 border-black bg-transparent outline-none'
                    type="text"
                    value={input}
                    onInput={(e) => setInput(e.target.value)}
                />
            </div>
            {meals && <div className='grid grid-cols-2 md:grid-cols-4 mx-auto max-w-5xl overflow-y-scroll gap-3 h-80'>
                {meals.length === 0 && input === '' ? 'Search Something' : meals.map((meal) => (
                    <MealSuggestion key={meal.idMeal} meal={meal} />
                ))}
            </div>}
        </section>
    )
}

export default Home