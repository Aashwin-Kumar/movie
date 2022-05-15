import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import { MovieContent } from "../components/movieComponent/MovieContent";
import { Pagination } from "../Helper/Pagination";
export const Trending = () => {
  const [pages, setPages] = useState(1);
  const [moviesDB, setMoviesDB] = useState([]);

  const trendigMovies = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.REACT_APP_MOVIE_DB_KEY}&page=${pages}`
    );
    setMoviesDB(data.results);
  };
  useEffect(() => {
    trendigMovies();
  });

  return (
    <div className="pb-20">
      <h1 className="text-2xl m-4 flex justify-center font-thin tracking-wide">Trending Now!</h1>
      <div className="flex flex-wrap justify-around ">
        {moviesDB &&
          moviesDB.map((cb) => (
            <MovieContent
              key={cb.id}
              id={cb.id}
              poster={cb.poster_path}
              title={cb.title || cb.name}
              date={cb.release_date}
              vote={cb.vote_average}
              media={cb.media_type}
            />
          ))}
      </div>
      <Pagination setPages={setPages} />
    </div>
  );
};
