import React, { use, useEffect } from 'react'
import AOS from 'aos'
import Navbar from './components/Navbar';

const App=() => {

//initialize AOS

useEffect(() => {
  AOS.init({
    duration: 1000,
    once: false,
    offset: 200,
  })
}, [])
  return (
    <div className='bg-cream text-charcoal font-inter'>
      <Navbar/>
    </div>
  )
}

export default App
