import React from 'react'
import { Navbar, Header, Brand, Blog, Dproduct, Footer, Block, Client, Slider } from './components'


function App() {
  return (
      <div className='App'>
        <div className='gradient__bg'>
        <Navbar />
        <Header />
        <Brand />
        <Blog />
        <Dproduct />
        <Client />
        <Slider />
        <Block />
        <Footer />
              {/* <Footer /> */}
        </div>
    </div>
  )
}

export default App