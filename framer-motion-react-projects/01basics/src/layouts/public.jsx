import React from 'react'
import Header from '@/components/header'
import Footer from '@/components/footer'
import { Outlet } from 'react-router-dom'

function PublicLayout() {
  return (
    <>
      <Header />
        <Outlet />
      <Footer />
    </>
  )
}

export default PublicLayout