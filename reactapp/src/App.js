import React from 'react'
import Form from './components/Form'
import { Routes, Route } from 'react-router-dom'
import Posts from './components/Posts'

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="" element={<Form />} />
        <Route path="/posts" element={<Posts />} />
      </Routes>
    </div>
  )
}

export default App
