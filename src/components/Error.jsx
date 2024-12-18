import React from 'react'

const ErrorElement = ({error}) => {
    return (
        <div
            className='min-h-screen w-screen bgImage bg-no-repeat bg-cover bg-[70%_40%] md:bg-[0_0] text-white'>
            Something Went Wrong...... : {error}
        </div>
    )
}

export default ErrorElement