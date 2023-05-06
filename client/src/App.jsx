import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Books from './components/books'
import CreateBooks from './components/createBooks'
import UpdateBooks from './components/UpdateBooks'


const App = () => {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Books />} />
        <Route path="/create-books" element={<CreateBooks />} />
        <Route path="/update-books" element={<UpdateBooks />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App