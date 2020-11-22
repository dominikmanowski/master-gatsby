import React from 'react'
import Nav from './Nav'
import GlobalStyles from '../styles/GlobalStyles'
import Typography from '../styles/Typography'

const Layout = ({ children }) => (
  <div>
    <GlobalStyles />
    <Typography />
    <Nav />
    {children}
  </div>
)

export default Layout
