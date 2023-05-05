import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Rotas from './routes'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Rotas/>
    </>
  )
}

export default App
