import React from 'react'
import Contact from './components/contact-us/Contact'
import Header from './components/header/Header'
import Hero from './components/hero/Hero'
import Plans from './components/plans/Plans'
import Programs from './components/programs/Programs'
import Reasons from './components/reasons/Reasons'
import Testimonials from './components/testimonials/Testimonials'

const App = () => {
  return (
    <>
      <Header />
      <Hero />
      <Programs />
      <Reasons />
      <Plans />
      <Testimonials />
      <Contact />
    </>
  )
}

export default App
