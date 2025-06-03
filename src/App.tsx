import { memo } from 'react'
import { Route, Routes } from "react-router"
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Contact from './pages/contact/Contact'
import User_detail from './pages/UserDetail/User_detail'

const App = () => {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/user/:id' element={<User_detail />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </>
  )
}

export default memo(App)
