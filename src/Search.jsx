import React, { useEffect, useState } from "react";
import "./Movies.css";
import SearchIcon from "@mui/icons-material/Search";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "@mui/material";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Search() {
  const [movies, setMovies] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  function onSearch() {
    fetchMovies(Search);
  }

  async function fetchMovies() {
    setLoading(true)
    const { data } =  await axios.get( `https://www.omdbapi.com/?apikey=7566c271&s=${input}`);
    const firstSix = data.Search ? data.Search.slice(0, 8) : [];
    setMovies(firstSix);
    setLoading(false)
  }

  useEffect(() => {
    fetchMovies();  
    
  }, []);



  return (
    <>
      <div className="search__container">
        <div className="body__search">
          <Button className="search__btn" onClick={() => onSearch()}>
            <SearchIcon type="submit" className="search__input--icon" />
          </Button>

          <input
            value={input}
            onChange={(event) => setInput(event.target.value)}
            onKeyPress={(event) => {
              if (event.key === "Enter") {
                onSearch();
              }
            }}
            placeholder="Search movie here"
            type="text"
          />
        </div>
      </div>
      <div className="movie__container">
        <h2 className="result">Search results for: {input}</h2>
        <div className="movie__wrapper">
        {loading
        ? new Array(1).fill(0).map((element, index) => (
            <div className="load" key={index}>
              <div className="load__icon">
              <FontAwesomeIcon className="font__icon" icon="fa-solid fa-spinner" />
              </div>
            </div>
          ))
          : movies.map((movie) => (
            <div
              onClick={() => navigate(`/${movie.imdbID}`)}
              className="movie"
              key={movie.imdbID}
            >
              <div className="movie__img">
                <figure>
                  <img className="movie__img"src={movie.Poster} alt="" />
                </figure>
              <div className="movie__title">
                <h2>{movie.Title}</h2>
              </div>
              <div className="movie__year">
                <h4>{movie.Year}</h4>
              </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Search;
