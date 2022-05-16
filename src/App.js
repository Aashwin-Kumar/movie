import "./App.css";
import { Header } from "./components/Header";
import SimpleBottomNavigation from "./components/Footer";
import { BrowserRouter } from "react-router-dom";
import { Container } from "@mui/material";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import { Trending } from "./Pages/Trending";
import { Movies } from "./Pages/Movies";
import { Series } from "./Pages/Series";
import { Search } from "./Pages/Search";
import ScrollToTop from "react-scroll-to-top";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Container>
          <Routes>
            <Route path="/" element={<Trending />} exact />
            <Route path="/movies" element={<Movies />} exact />
            <Route path="/series" element={<Series />} exact />
            <Route path="/search" element={<Search />} exact />
          </Routes>
        </Container>
        <ScrollToTop smooth top={400} width='19' ></ScrollToTop>
        <SimpleBottomNavigation />
      </BrowserRouter>
    </>
  );
}

export default App;
