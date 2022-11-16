import React from 'react'
import { Link } from 'react-router-dom'

function SearchNav() {
  return (
    <nav>
    <div className="container">
      <div>
        <figure>
          <img
          className="nav__logo"
            src="https://t3.ftcdn.net/jpg/03/44/12/18/360_F_344121884_aPcdWd5sqOUTxolQ2fw1LqyZwqTFm0pC.jpg"
            alt=""
          />
        </figure>
      </div>
      <div className="nav__links">
        <Link to="/" className="nav__link">Home</Link>
        <div className="nav__link">Contact</div>
      </div>
    </div>
  </nav>
  )
}

export default SearchNav