import React from 'react'

const Home = () => {
    return (
        <section
            className='min-h-screen w-screen bgImage bg-no-repeat bg-cover bg-[70%_40%] md:bg-[0_0]'>
            <div className='max-w-xl min-h-64 relative left-1/2 -translate-x-1/2 translate-y-1/2 flex items-center flex-col'>
                <h1>Find Your Receipe</h1>
                <input type="text" />
            </div>
        </section>
    )
}

export default Home