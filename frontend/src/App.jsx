import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Doctors from './pages/Doctors'
import Appointments from './pages/Appointments'
import Contact from './pages/Contact'
import About from './pages/About'
import Login from './pages/Login'
import Profile from './pages/Profile'
import Signup from './pages/Signup'
import MyAppointments from './pages/MyAppointments'
import Navbar from './components/Navbar'
const App = () => {
  return (
    <div className='mx-4 sm:mx-[10%]'>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/doctors' element={<Doctors/>} />
        <Route path='/doctors/:speciality' element={<Doctors/>} />
        <Route path='/appointments/:docId' element={<Appointments/>} />
        <Route path='/my-appointments' element={<MyAppointments/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/profile' element={<Profile/>} />
        <Route path='/signup' element={<Signup/>} />
        
      </Routes>
    </div>
  )
}

export default App
