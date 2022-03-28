import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header/";
import Home from "./components/Home/";
import Movie from "./components/Movie/";
import Section from "./components/Section/";
import Sucess from "./components/Sucess/";

export default function App() {
  const [movies, setMovies] = React.useState([]);
  const [movie, setMovie] = React.useState({});
  const [choosedSeats, setChoosedSeats] = React.useState([]);
  const [nameSeats, setNameSeats] = React.useState([]);
  const [movieInfo, setMovieInfo] = React.useState([]);
  const [sectionTime, setSectionTime] = React.useState([]);
  const [section, setSection] = React.useState([]);
  const [inputCPF, setInputCPF] = React.useState("");
  const [inputName, setInputName] = React.useState("");
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route
          path="/"
          element={<Home movies={movies} setMovies={setMovies} />}
        />
        <Route
          path="/Movie/:idMovie"
          element={
            <Movie
              movie={movie}
              setMovie={setMovie}
              choosedSeats={choosedSeats}
              setChoosedSeats={setChoosedSeats}
            />
          }
        />

        <Route
          path="/Section/:idSection"
          element={
            <Section
              movie={movie}
              section={section}
              setSection={setSection}
              choosedSeats={choosedSeats}
              setChoosedSeats={setChoosedSeats}
              movieInfo={movieInfo}
              setMovieInfo={setMovieInfo}
              setSectionTime={setSectionTime}
              sectionTime={sectionTime}
              nameSeats={nameSeats}
              setNameSeats={setNameSeats}
              inputCPF={inputCPF}
              setInputCPF={setInputCPF}
              inputName={inputName}
              setInputName={setInputName}
            />
          }
        />

        <Route
          path="/Sucess"
          element={
            <Sucess
              movie={movie}
              choosedSeats={choosedSeats}
              setChoosedSeats={setChoosedSeats}
              movieInfo={movieInfo}
              setSectionTime={setSectionTime}
              sectionTime={sectionTime}
              nameSeats={nameSeats}
              setNameSeats={setNameSeats}
              inputCPF={inputCPF}
              setInputCPF={setInputCPF}
              inputName={inputName}
              setInputName={setInputName}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
