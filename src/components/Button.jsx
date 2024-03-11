import React from 'react'

const Button = ({color, bgColor, text, borderRadius, size, width, border, onClick}) => {
  return (
    <div>
      <button
        type='Button'
        style={{ backgroundColor:bgColor, color, borderRadius }}
        onClick={onClick}
        className={`text-${size} p-3 hover:drop-shadow-xl block w-${width} border-${border} border-current`}
      >
        {text}
      </button>
      
    </div>
  )
}

export default Button