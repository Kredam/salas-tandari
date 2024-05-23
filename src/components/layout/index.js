/* eslint-disable react/prop-types */
import React from 'react'
import Navigation from '../navigation'
import { LayoutProvider } from '../../hooks/layout-context'
import PropTypes from 'prop-types'
import Footer from '../footer'

const Layout = ({ children, data }) => {
  return (
    <LayoutProvider>
      <Navigation data={data} />
      <div className="mb-[100px]">{children}</div>
      <Footer />
    </LayoutProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
