


import { useState } from 'react'
import './App.css'

function App() {
  const title = `welcome to new blog`
  const likes = 50
  const link = `http://paletton.com/#uid=13w0u0kllllaFw0g0qFqFg0w0aF`
  return (
    <div className='App' >
     <div className="content">
      <h1>{title}</h1>
      <h2>{likes} times</h2>
      <p>{ 70 }</p>
      <p>{ Math.random() * 5}</p>
      <p>{[1,2,3,4,5,6]}</p>
      <a href={link}>palleton site</a>
     </div>
    </div>
  )
}

export default App
