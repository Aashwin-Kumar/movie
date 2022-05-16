import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import YouTubeIcon from "@mui/icons-material/YouTube";
// import Carousel from "../Carousel/Carousel";
import Modal from "@mui/material/Modal";
import axios from "axios";
import { useState, useEffect } from "react";
import Fade from "@material-ui/core/Fade";
import { img_300, img_500, unavailable } from "../config/config";

// const style = {
//   position: "absolute",
//   top: "50%",
//   left: "50%",
//   transform: "translate(-50%, -50%)",
//   width: 400,
//   bgcolor: "background.paper",
//   border: "2px solid #000",
//   boxShadow: 24,
//   p: 4,
// };
//recied all the data fromMovieModal as children
export default function MovieModal({ children, media, id, date }) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [content, setContent] = useState();
  const [youtubevideo, setYoutubevideo] = useState();

  const getData = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/${media}/${id}?api_key=${process.env.REACT_APP_MOVIE_DB_KEY}&language=en-US`
    );
    setContent(data);
  };
  const getYoutubeData = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/${media}/${id}/videos?api_key=${process.env.REACT_APP_MOVIE_DB_KEY}&language=en-US`
    );
    setYoutubevideo(data.results[0]?.key);
    // console.log(data.results[0]?.key);
  };
  useEffect(() => {
    getData();
    getYoutubeData();
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      <div
        className="flex flex-col justify-center w-48 p-2 m-2 bg-cyan-200 rounded-lg relative  hover:bg-cyan-500 max-w-lg"
        onClick={handleOpen}
      >
        {children}
      </div>
      <Modal
        className="flex justify-center"
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className="flex flex-col justify-center w-4/5 h-3/4 text-white shadow-sm border rounded m-10 bg-gradient-to-r from-cyan-500 to-blue-500">
          <Fade in={open}>
            {content && (
              <div className="flex flex-row justify-between h-full w-full overflow-y-scroll min ">
                <div>
                  <img
                    className="sm:hidden mt-1 ml-1 mr-2"
                    alt={content.name || content.title}
                    src={
                      content.poster_path
                        ? `${img_300}/${content.poster_path}`
                        : unavailable
                    }
                  />
                  <img
                    className="mt-2 lg:ml-60 rounded-md shadow-lg shadow-blue-500/50 "
                    alt={content.name || content.title}
                    src={
                      content.backdrop_path
                        ? `${img_500}/${content.backdrop_path}`
                        : unavailable
                    }
                  />
                  <div className="flex flex-col justify-around m-1">
                    <span className="flex justify-center text-lg font-semibold lg:text-xl">
                      {content.title || content.name}(
                      {(
                        content.first_air_date ||
                        content.release_date ||
                        "...."
                      ).substring(0, 10)}
                      )
                    </span>

                    <span className="flex justify-center text-md ">
                      {content.tagline && <i>{content.tagline}</i>}
                    </span>
                    <span className="flex justify-center text-md m-3 ">
                      {content.overview}
                    </span>
                    <div className="flex justify-center m-3">
                      <Button
                        variant="filled"
                        startIcon={<YouTubeIcon />}
                        color="secondary"
                        target="_blank"
                        href={`https://www.youtube.com/watch?v=${youtubevideo}`}
                      >
                        Official Trailer
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </Fade>
        </Box>
      </Modal>
    </div>
  );
}
