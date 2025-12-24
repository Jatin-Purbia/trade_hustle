import { useState } from 'react'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App p-8 flex justify-center align-center items-center">
      <h1 className="text-3xl font-bold underline">
        Trade Hustle
      </h1>
    </div>
  )
}

export default App