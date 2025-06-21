import React from 'react';
import './App.css'
import ToDo from './Component/ToDo/ToDo'
import Navbar from './Component/Navbar/Navbar'

function App() {
  
  return (
    <div className='App flex-col'>
      <Navbar />
      <ToDo />
    </div>
  )
}

export default App
