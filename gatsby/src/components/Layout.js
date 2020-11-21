import React from 'react'
import Nav from './Nav'
import GlobalStyles from '../styles/GlobalStyles'

const Layout = ({ children }) => (
  <div>
    <GlobalStyles />
    <Nav />
    {children}
  </div>
)

export default Layout
