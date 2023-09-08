import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './Navbar'
import Explore from './Explore'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
     <Explore/>
    </div>
  )
}

export default App
