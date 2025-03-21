import { useState } from 'react'
import './App.css'
import Clock from './components/Clock'
import List from './components/List'
import AlertBar from './components/AlertBar'

function App() {
  return (
    <main>
      <h1>App</h1>
      <div className='flexBox'>
        <div className='flexItem'>
          <Clock />
        </div>
        <div className='flexItem'>
          <List />
        </div>
        <div className='flexItem'>
          <AlertBar />
        </div>
      </div>
    </main>
  )
}

export default App