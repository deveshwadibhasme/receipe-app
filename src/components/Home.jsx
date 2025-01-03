import MealSuggestion from './MealSuggestion'

const Home = ({ handleInput, input, meals, placeHolder }) => {

    return (
        <section
            className='min-h-screen w-screen bgImage bg-no-repeat bg-cover bg-[70%_40%] md:bg-[0_0]'>
            <div className='max-w-xl min-h-64 relative left-1/2 -translate-x-1/2 translate-y-1/2 flex items-center flex-col'>
                <h1 className='text-4xl mb-2 font-bold text-yellow-200 text-border'>Find Your Receipe</h1>
                <input
                    type="text"
                    className='max-w-80 w-full h-10 m-2 border-b-2 border-black bg-transparent outline-none text-xl'
                    value={(input || localStorage.getItem('input')) || input}
                    onChange={handleInput}
                    placeholder={placeHolder}
                />
            </div>
            {meals && <div key={crypto.randomUUID()} className='grid grid-cols-2 md:grid-cols-4 mx-auto max-w-5xl overflow-y-scroll suggestion gap-3 md:gap-6 h-96 md:h-80'>
                {meals.length === 0 || input === '' ? <h1 className='mx-auto font-bold'>Nothing Here</h1> : meals.map((meal) => (
                    <MealSuggestion key={meal.idMeal} meal={meal} />
                ))}
            </div>}
        </section>
    )
}

export default Home