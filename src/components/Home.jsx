import React, { useEffect, useState } from 'react'

const Home = () => {

    const [input, setInput] = useState('')

    const [meals, setMeals] = useState([])

    useEffect(() => {
        input && fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${input}`)
            .then((data) => data.json())
            .then(({meals}) => {
                setMeals(meals)
                console.log(meals)
            })
            .catch((err) => console.log(err))
    }, [input])

    useEffect(() => {
        meals && fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${meals.idMeal}`)
            .then((data) => data.json())
            .then(({ meals }) => {
                console.log(meals)
            })
            .catch((err) => console.log(err))
    }, [input])



    return (
        <section
            className='min-h-screen w-screen bgImage bg-no-repeat bg-cover bg-[70%_40%] md:bg-[0_0]'>
            <div className='max-w-xl min-h-64 relative left-1/2 -translate-x-1/2 translate-y-1/2 flex items-center flex-col'>
                <h1>Find Your Receipe</h1>
                <input
                    type="text"
                    value={input}
                    onInput={(e)=>setInput(e.target.value)}
                />
            </div>
        </section>
    )
}

export default Home