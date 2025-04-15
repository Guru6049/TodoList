import React, { useState } from 'react'
import Navbar from './component/Navbar'
import TodoMain from './component/TaskMain'
import { TodoContext } from './context/TodoContext'


function App() {
  const [dark, setDark] = useState(false)
  return (
    <>
      <TodoContext>
        <Navbar dark={dark} setDark={setDark} />
        <TodoMain dark={dark} />
      </TodoContext>
    </>
  )
}

export default App