import React from "react";
import Movies from "./Movies";
import Search from "./Search";
import SearchNav from "./SearchNav";
import "./SearchPage.css";

function SearchPage() {
  return (
    <>
      <div className="search__page--container">
        <div className="search__page--nav">
          <SearchNav />
        </div>
        <div className="search__page--description">
          <h1>
            Welcome to <br />
            <span className="red">Search</span>
          </h1>
        </div>
      </div>
        <Search />
      <div id="Movies">
        <Movies />
      </div>
    </>
  );
}

export default SearchPage;
