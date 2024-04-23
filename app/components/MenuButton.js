"use client"

import { useEffect } from "react";

export default function MenuButton() {
    const menu = () => {
        alert('Menu');
    }
  return (
    <div>
        <button onClick={menu} className='menu-btn'>
            <span className="navbar-toggler-icon"></span>
        </button>
    </div>
  )
}
