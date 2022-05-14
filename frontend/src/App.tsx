import React from 'react';
import { Route, Routes } from 'react-router'

function App() {
  return (
    <div className='App'>
      <h1>Welcome to React Router!</h1>
      <Routes>
        <Route path='/' element={<div />} />
        <Route path='about' element={<div />} />
      </Routes>
    </div>
  )
}

export default App;
