import React from 'react'

const Shade = () => {
  return (
    <div
      style={{
        position: 'absolute',
        zIndex: 0,
        top: 0,
        width: '100%',
        height: '100%',
        minHeight: 500,
        background: `linear-gradient(to top, rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.25)),
            linear-gradient(to bottom, rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.50))`,
      }}
    />
  )
}

export default Shade
