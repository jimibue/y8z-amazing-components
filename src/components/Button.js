import React from 'react'

const Button = ({ children, text = '' }) => {
  return <div style={{ border: '1px solid' }}>{children ? children : text}</div>
}

export default Button
