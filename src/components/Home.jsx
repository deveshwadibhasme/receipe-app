import MealSuggestion from './MealSuggestion'

const Home = ({ handleInput, input, meals, placeHolder }) => {
    return (
        <section className='min-h-screen w-screen bgImage bg-no-repeat bg-cover bg-[70%_40%] md:bg-[0_0] bg-fixed'>
            <div className='max-w-xl min-h-64 relative left-1/2 -translate-x-1/2 translate-y-1/2 flex items-center flex-col p-4'>
                <h1 className='text-4xl md:text-5xl lg:text-6xl mb-4 font-bold text-white text-border text-center 
                    transition-all duration-300 hover:scale-105'>
                    Find Your Recipe
                </h1>
                <div className='w-full max-w-md relative'>
                    <input
                        type="text"
                        className='w-full h-12 px-4 m-2 border-b-2 border-orange-300 bg-transparent 
                        outline-none text-xl text-black placeholder-black/40 transition-all duration-300
                        focus:border-orange-500 hover:border-orange-400'
                        value={(input || localStorage.getItem('input')) || input}
                        onChange={handleInput}
                        placeholder={placeHolder}
                    />
                    <div className='absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-orange-300 to-red-400 
                        opacity-50 transform scale-x-0 transition-transform duration-300 origin-left
                        group-focus-within:scale-x-100'></div>
                </div>
            </div>

            {meals && (
                <div className='max-w-6xl mx-auto px-4 mt-8'>
                    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 
                        max-h-[32rem] overflow-y-auto custom-scrollbar p-4 bg-black/30 rounded-lg backdrop-blur-sm'>
                        {meals.length === 0 || input === '' ? (
                            <h1 className='col-span-full text-center text-xl font-bold text-orange-300 py-8'>
                                No Recipes Found
                            </h1>
                        ) : (
                            meals.map((meal) => (
                                <MealSuggestion key={meal.idMeal} meal={meal} />
                            ))
                        )}
                    </div>
                </div>
            )}
        </section>
    )
}

export default Home