import React from 'react';

import { Header, About, Work, Skills, Testimonial, Footer } from './containers';
import { Navbar } from './components';

const App = () => {
  return (
    <div className='bg-primary'>
      <Navbar />
      <Header />
      <About />
      <Work />
      <Skills />
      <Testimonial />
      <Footer />
    </div>
  )
}

export default App
