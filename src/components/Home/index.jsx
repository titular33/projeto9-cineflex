import React, {useEffect} from 'react';
import {Link} from 'react-router-dom';
import axios from "axios";
import Stage from "../Stage"
import "./style.css";

export default function Home({movies, setMovies}) {
    useEffect(() =>{
     const promisse = axios.get ('https://mock-api.driven.com.br/api/v5/cineflex/movies');
     promisse.then((response) => {setMovies(response.data);});

    })


 return (
    <>
    < Stage text = {"Selecione o filme"}/>
      <div className="container">
          <ul className= "ranksMovies">
              {movies.map((movie) => 
              {
                  return (
                      < Link to={`/Movie/${movie.id}`}>
                          <li>
                              <div className="movie">
                                    <img src={movie.posterURL} alt={"poster of movie " + movie.title}/>
                              </div>
                          </li>
                      </Link>
                      );
          })}
        </ul>
      </div>
    </>
  );
}
        