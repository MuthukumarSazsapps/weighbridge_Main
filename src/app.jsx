import React from 'react'
import Mainlayout from './layout/mainlayout'
import { Route, Routes } from 'react-router-dom'
import Customer from './pages/customer/customer'
import Home from './pages/home'
import NotFoundPage from './pages/404'

const App = () => {
  return (
    <div>
        {/* <Mainlayout/> */}
        <Routes>
            <Route path='/' element={ <Mainlayout/>}>
                <Route index element={<Home/>}/>
                <Route path='/company/create' element={<Customer/>}/>
            </Route>
            <Route path='*' element={<NotFoundPage />}/>
            
        </Routes>
    </div>
  )
}

export default App


