import React from 'react'
import style from './Header.module.css'

export const Header = () => {
  return (
    <div
      className={`fixed top-0 left-0 flex justify-between w-full p-4 bg-black ${style.shadow}`}
    >
      <p>Menu</p>
      <p>I'm angelo and I do stuff</p>
    </div>
  )
}
