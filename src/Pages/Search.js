import React, { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import axios from "axios";
import { MovieContent } from "../components/movieComponent/MovieContent";
import { Pagination } from "../Helper/Pagination";
import { Button } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

export const Search = () => {
  const [type, setType] = useState(0);
  const [page, setPage] = useState(1);
  const [searchText, setSearchText] = useState("");
  const [content, setContent] = useState([]);
  const [noPages, setNoPages] = useState();

  const getSearch = async () => {
    try {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/search/${type ? "tv" : "movie"}?api_key=${
          process.env.REACT_APP_MOVIE_DB_KEY
        }&language=en-US&query=${searchText}&page=${page}&include_adult=false`
      );
      setContent(data.results);
      setNoPages(data.total_pages);
    } catch (err) {
      console.error(err);
    }
  };
  useEffect(() => {
    window.scroll({
      top: 0,
      behavior: "smooth",
    });

    // getSearch();
    // eslint-disable-next-line
  }, [type, page]);

  return (
    <div>
      <div className="flex  m-10 ">
        <TextField
          variant="filled"
          style={{ flex: 1 }}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <Button onClick={getSearch}>
          <SearchIcon />
        </Button>
      </div>
      <Tabs
        value={type}
        onChange={(event, newVal) => {
          setType(newVal);
          setPage(1);
        }}
      >
        <Tab className="w-1/2" label="Search Movies" />
        <Tab className="w-1/2" label="Search TV" />
      </Tabs>
      <div className="p-5 pb-20 flex flex-wrap justify-around ">
        {content &&
          content.map((cb) => (
            <MovieContent
              key={cb.id}
              id={cb.id}
              poster={cb.poster_path}
              title={cb.title || cb.name}
              date={cb.release_date || cb.first_air_date}
              vote={cb.vote_average}
              media={type ? "tv" : "movie"}
            />
          ))}

        {noPages > 1 && <Pagination setPage={setPage} pageCount={noPages} />}
      </div>
    </div>
  );
};
