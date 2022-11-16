import React from "react";
import { Link } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import "./Nav.css";
import { Button } from "@mui/material";

function Nav() {
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
          <Link to="/search" className="nav__link">
            <Button className="btn">
            <SearchIcon />
            </Button>
          </Link>
          <div className="nav__link">Contact</div>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
