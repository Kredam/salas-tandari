/* eslint-disable react/prop-types */
import React from 'react'
import Navigation from '../navigation'
import { LayoutProvider } from '../../hooks/layout-context'
import PropTypes from 'prop-types'
import Footer from '../footer'
import styled from '@emotion/styled/macro'

const Main = styled.div`
  margin-bottom: 101px;
  height: 100%;
`

const Layout = ({ children, data, ...props }) => {
  return (
    <LayoutProvider>
      <Navigation data={data} {...props} />
      <Main>{children}</Main>
      <Footer />
    </LayoutProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
