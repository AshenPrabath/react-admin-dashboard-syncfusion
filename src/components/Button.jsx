import React from 'react'

const Button = ({color, bgColor, text, borderRadius, size, width}) => {
  return (
    <div>
      <button
        type='Button'
        style={{ backgroundColor: bgColor, color, borderRadius }}
        className={`text-${size} p-3 hover:drop-shadow-xl block w-${width}`}
      >
        {text}
      </button>
      
    </div>
  )
}

export default Button