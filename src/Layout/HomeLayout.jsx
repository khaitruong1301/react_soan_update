import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../pages/Header'

const HomeLayout = () => {
  return (
    <>
      <Header />
      <div className='content' style={{minHeight:800}}>
        <Outlet />
      </div>
    </>
  )
}

export default HomeLayout

