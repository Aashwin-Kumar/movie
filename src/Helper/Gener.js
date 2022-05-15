import axios from "axios";
import React, { useEffect } from "react";
import { Chip } from "@mui/material";

export const Gener = ({
  geners,
  setGeners,
  selectedGener,
  setSelectedGener,
  setPages,
}) => {
  const handleAdd = (gener) => {
    setSelectedGener([...selectedGener, gener]);
    setGeners(geners.filter((g) => g.id !== gener.id));
    setPages(1);
  };

  const handleRemove = (gener) => {
    setSelectedGener(selectedGener.filter((sel) => sel.id !== gener.id));
    setGeners([...geners, gener]);
    setPages(1);
  };

  const getGeners = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.REACT_APP_MOVIE_DB_KEY}&language=en-US`
    );
    setGeners(data.genres);
  };
  useEffect(() => {
    getGeners();
    //it cancle the api call
    return () => {
      setGeners({});
    };
    // eslint-disable-next-line
  }, []);

  return (
    <div className="p-5">
      {Object.assign(selectedGener).map((gen) => (
        <Chip
          key={gen.id}
          label={gen.name}
          clickable
          size="small"
          color="primary"
          variant="outlined"
          style={{ margin: 3 }}
          onDelete={() => handleRemove(gen)}
        />
      ))}
      {Object.assign(geners).map((gens) => (
        <Chip
          key={gens.id}
          label={gens.name}
          clickable
          size="small"
          variant="outlined"
          style={{ margin: 3 }}
          onClick={() => handleAdd(gens)}
        />
      ))}
    </div>
  );
};
