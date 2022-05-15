import axios from "axios";
import React, { useState, useEffect } from "react";
import { MovieContent } from "../components/movieComponent/MovieContent";
import { Pagination } from "../Helper/Pagination";
import { Gener } from "../Helper/Gener";
import useGener from "../hook/useGener";

export const Series = () => {
  const [pages, setPages] = useState(1);
  const [moviesDB, setmoviesDB] = useState([]);
  const [pageCount, setPageCount] = useState();
  const [geners, setGeners] = useState([]);
  const [selectedGener, setSelectedGener] = useState([]);
  const generURL = useGener(selectedGener);

  const allMovies = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/discover/tv?api_key=${process.env.REACT_APP_MOVIE_DB_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${pages}&with_genres=${generURL}`
    );

    setmoviesDB(data.results);
    setPageCount(data.total_pages);
  };
  useEffect(() => {
    allMovies();
    // eslint-disable-next-line
  }, [generURL]);

  return (
    <div className="pb-20">
      <Gener
        type="tv"
        geners={geners}
        setGeners={setGeners}
        selectedGener={selectedGener}
        setSelectedGener={setSelectedGener}
        setPages={setPages}
      />
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
              media="tv"
            />
          ))}
      </div>
      <Pagination setPages={setPages} pageCount={pageCount} />
    </div>
  );
};

//&with_watch_genres=${MovieGenres}
