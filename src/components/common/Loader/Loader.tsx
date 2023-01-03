import React from 'react'

export const Loader = () => {
  return (
    <div className="flex items-center justify-center">
      {'please wait'.split('').map((letter, index) => (
        <div
          key={index}
          className={`mr-1 animate-pulse`}
          style={{ animationDelay: `${index * 1.5 * 100}ms` }}
        >
          {letter}
        </div>
      ))}
    </div>
  )
}
