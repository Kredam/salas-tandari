import React, { createContext, useState } from 'react'
import PropTypes from 'prop-types'

const defaultContextValue = {
  invert: false,
}

const LayoutContext = createContext(defaultContextValue)

export const LayoutProvider = ({ children }) => {
  const [inverted, setInverted] = useState(false)
  const [showHeaderPage, setShowHeaderPage] = useState(true)

  return (
    <LayoutContext.Provider
      value={{ inverted, setInverted, setShowHeaderPage, showHeaderPage }}
    >
      {children}
    </LayoutContext.Provider>
  )
}

LayoutProvider.propTypes = {
  children: PropTypes.node.isRequired,
}

export default LayoutContext
