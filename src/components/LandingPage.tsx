import Link from 'next/link'
import React from 'react'

const LandingPage = () => {
  return (
    <div className='bg-stone-100 flex flex-col w-3/4 sm:5/6 justify-center items-center py-10 mx-auto'>
      <h1 className='text-3xl sm:text-5xl py-5 text-center'>Welcome to the Jokes App</h1>
      <p className='text-xl sm:text-3xl py-5 text-center'>Click on the button below to be redirected to the Joke Page</p>
      <Link href='/jokes'>
        <button className='bg-gray-200 border-2 rounded-lg cursor-pointer p-4 uppercase font-semibold'>
          Go to Jokes Page
        </button>
      </Link>
    </div>
  )
}

export default LandingPage