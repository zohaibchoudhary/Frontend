import React from 'react'
import {Container, Logo, LogoutBtn} from '../index'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

function Header() {
  const authStatus = useSelector((state) => state.auth.status)
  const navigate = useNavigate()
  let navItems  = [
    {
      name : 'Home',
      slug : '/',
      active : true,
    },
    {
      name : 'Login',
      slug : '/login',
      active : !authStatus, // !authStatus = !false = true
    },
    {
      name : 'SignUp',
      slug : '/signup',
      active : !authStatus, // !authStatus = !false = true
    },
    {
      name : 'All Posts',
      slug : '/all-post',
      active : authStatus,
    },
    {
      name : 'Add Post',
      slug : '/add-post',
      active : authStatus,
    },
  ]
  return (
   <header className='py-3 shadow bg-slate-200'>
    <Container>
      <nav className='flex'>
        <div className='mr-4'>
        <Link to = '/'>
        <Logo width='70px' />
        </Link>
        </div>
        
        <ul className='flex ml-auto'>
          {
            navItems.map((item) => item.active ? (
              <li key={item.name}>
                <button
                onClick={() => navigate(item.slug)} 
                className='inline-block px-6 py-2 duration-200 hover:bg-blue-400 rounded-full'
                >
                  {item.name}
                </button>
              </li>
            ) : null)
          }
          {
            authStatus && (
            <li>
              <LogoutBtn />
            </li>
            )
          }
        </ul>
      </nav>
    </Container>
   </header>
  )
}

export default Header
