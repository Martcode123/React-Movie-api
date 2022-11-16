// https://www.omdbapi.com/?apikey=7566c271&s=fast
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import Search from "./Search";

function Movies() {
  const [movies, setMovies] = useState([]);
  const [input, setInput] = useState("")
  useEffect(() => {
    async function fetchMovies() {
      const { data } = await axios.get(
        `https://www.omdbapi.com/?apikey=7566c271&s=${input}}`
        );
        const firstSix = data.Search?.slice(0, 6)
      setMovies(firstSix);
    }
    fetchMovies();
  }, []);

  return 
}

export default Movies;
