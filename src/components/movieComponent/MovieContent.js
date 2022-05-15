import React from "react";
import { img_300, unavailable } from "../../config/config";
import Badge from "@mui/material/Badge";
import MovieModal from "../../model/MovieModel";

export const MovieContent = ({ poster, title, date, vote, media,id,certificate }) => {
  //we are appsing all the below data as children to MovieModal
  return (
    <MovieModal media={media} id={id}>
      <Badge
        badgeContent={vote}
        color={vote > 7 ? "primary" : "secondary"}
        className="z-0"
      ></Badge>

      <img
        className="rounded-lg"
        src={poster ? `${img_300}/${poster}` : unavailable}
        alt={title}
      />
      <b className="text-semibold text-center p-1">{title}</b>
      <div className="flex justify-between p-1 m-1">
        <span>{media === "movie" ? "movie" : "tv"}</span>
        <span>{date}</span>
      </div>
    </MovieModal>
  );
};
