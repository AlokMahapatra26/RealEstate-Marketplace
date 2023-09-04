import React from 'react'
import {BrowserRouter as Router , Routes , Route } from 'react-router-dom'
import Home from './page/Home'
import SignIn from './page/SignIn'
import Header from './components/Header'

export default function App() {
  return (
    <>
      <Router>
        <Header/>
        <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path='/sign-in' element={<SignIn/>}></Route>
        </Routes>
      </Router>
    </>
  )
}
