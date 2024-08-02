import React from 'react'
import Mainlayout from './layout/mainlayout'
import { Route, Routes } from 'react-router-dom'
import Customer from './pages/customer/customer'
import Home from './pages/home'
import NotFoundPage from './pages/404'
import LoginPage from './pages/auth/login/login'
import { PrivateRoutesValidator } from './validators/validators'

const App = () => {
  return (
    <>
      {/* <Mainlayout/> */}
      <Routes>
        <Route element={<PrivateRoutesValidator />}>
          <Route path='/' element={<Mainlayout />}>
            <Route index element={<Home />} />
            <Route path='/company/create' element={<Customer />} />
          </Route>
        </Route>
        <Route path='/login' element={<LoginPage />} />
        <Route path='*' element={<NotFoundPage />} />

      </Routes>
    </>
  )
}

export default App


