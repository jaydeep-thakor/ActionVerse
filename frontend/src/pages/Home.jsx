import React from 'react'
import Hero from '../components/home/Hero'
import Movies from '../components/home/Movies'

const Home = () => {
  return (

    <div className='flex flex-col gap-8'>

      <Hero />
      <div className='container'>
        <Movies />
      </div>
      
    </div>

  )
}

export default Home