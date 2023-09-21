// import { useState } from 'react'
import Movie from './Movie.jsx'
// import './App.css'
import Navbar from './Navbar.jsx'
import data from './data.js'

function App() {
  const mo = data.map(x =>{
    return <Movie
        img = {x.img}
        {...x}
    />
  })

  return (
    <>
      <Navbar/>
      <div className="card-tot">
        <div className="cards-cont">
          {mo}
        </div>
      </div>
      
      
    </>
  )
}

export default App
