import React from "react";

import Paginations from "@mui/material/Pagination";

export const Pagination = ({ setPages, pageCount }) => {
  const handlePageChanges = (page) => {
    setPages(page);
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="flex justify-center mt-10 ">
      <Paginations
        count={15}
        onChange={(e) => handlePageChanges(e.target.textContent)}
      />
    </div>
  );
};
