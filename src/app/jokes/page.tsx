'use client';
import React, { ReactNode } from 'react'
import { useQuery } from '@tanstack/react-query';
import { getJokes } from '@/utils/getJokes';
import Joke from '@/components/Joke';
import { JokeObj } from '@/types/customTypes';


const JokesPage = () => {
  const { isLoading, error, data, isFetching, refetch } = useQuery({ // using the useQuery hook to fetch the jokes
    queryKey: ['jokes'],
    queryFn: () => getJokes(),
  })

  if (isLoading) return <div>Loading...</div>
  if (error) return <div>Error: {error.message}</div>

  const { jokes } = data || { jokes: [] }

  return (
    <div className='flex flex-col w-10/12 sm:w-4/6 h-screen justify-center items-center mx-auto '>
      <div className='w-full h-3/4 flex flex-col justify-center'>
        {
          jokes.map((item: JokeObj): ReactNode => {
            return <Joke key={item.id} jokeObj={item} />
          })
        } 
      </div>

      <button 
        className='border-2 border-black rounded-md uppercase p-2 mt-6 w-3/4 mx-auto'
        onClick={() => refetch()} 
        disabled={isFetching}
          >
        {isFetching ? 'Fetching...' : 'Fetch Jokes'}
      </button>
    </div>
  )
}

export default JokesPage