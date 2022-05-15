import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import MovieIcon from "@mui/icons-material/Movie";
import TvIcon from "@mui/icons-material/Tv";
import SearchIcon from "@mui/icons-material/Search";

export default function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(0);
  const Navigate = useNavigate();
  useEffect(() => {
    if (value === 0) Navigate("/");
    else if (value === 1) Navigate("/movies");
    else if (value === 2) Navigate("/series");
    else if (value === 3) Navigate("/search");
  }, [value, Navigate]);

  return (
    <Box className="bottom-0 right-0 left-0 fixed ">
      <BottomNavigation
        showlabel="true"
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction label="Whatshot" icon={<WhatshotIcon />} />
        <BottomNavigationAction label="Movies" icon={<MovieIcon />} />
        <BottomNavigationAction label="TV Shows" icon={<TvIcon />} />
        <BottomNavigationAction label="Search" icon={<SearchIcon />} />
      </BottomNavigation>
    </Box>
  );
}
