"https://www.omdbapi.com/?apikey=7566c271&i=tt1013752";
import "./MovieInfo.css";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MovieInfoNav from "./MovieInfoNav";

const MovieInfo = () => {
  const { imdbID } = useParams();
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchMovies() {
      const { data } = await axios.get(
        `https://www.omdbapi.com/?apikey=7566c271&i=${imdbID}`
      );
      setMovies(data);
      console.log(data);
    }
    fetchMovies();
  }, []);

  return (
    <>
     <div className="nav"><MovieInfoNav /></div> 
    <div className="movie__info--container">
      <div className="movie__info--wrapper">
        <div className="movie__poster">
          <figure>
            <img className="movie--info__img" src={movies.Poster} alt="" />
          </figure>
        </div>
        <div className="movie__info--description">
          <div className="movie__info--title">
            <h2>{movies.Title}</h2>
          </div>
          <div className="movie__info--year">
            <h4>({movies.Year})</h4>
          </div>
          <div className="movie__info--rated">
            <h4>Rated: {movies.Rated}</h4>
          </div>
          <div className="movie__type">
            <h4>Movie Type: {movies.Type}</h4>
          </div>
          <div className="movie__plot">
            <p> {movies.Plot}</p>
          </div>
          <div className="movie__runtime">
            <h4>Movie Runtime: {movies.Runtime}</h4>
          </div>
          <div className="movie__genre">
            <h4>Genre: {movies.Genre}</h4>
          </div>
          <div className="movie__release">
            <h4>Release Date: {movies.Released}</h4>
          </div>
          <div className="movie__actors">
            <h4>Starring: {movies.Actors}</h4>
          </div>
          <div className="movie__ratings">
            <h2>Movie Rating: {movies.imdbRating} / 10.0</h2>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default MovieInfo;
