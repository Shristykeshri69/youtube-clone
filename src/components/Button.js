import React from 'react'

const Button = ({name}) => {
  return (
     <div className="flex flex-wrap gap-2">
      <button className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300">{name}</button>

    </div>
    
  )
}

export default Button