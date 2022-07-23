import React from 'react'

import './button.css'

const Button = ({ children, type, outline }) => {
  return (
    <button 
      className={`button relative ${outline ? 'outline' : ''}`} 
      type={type || 'button'}
    >
      {children}
    </button>
  )
}

export default Button