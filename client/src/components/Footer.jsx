import React from 'react'
import Logo from "../img/Logo_White.png"



function footer() {
  return (
    <footer>
      <div className="logo">
                <img src={Logo} alt="Logo" />
      </div>
      <span>
        © 2023 TechJournal.in
      </span>


    </footer>
  )
}

export default footer