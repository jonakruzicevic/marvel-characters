import React, { useEffect, useState } from "react";
import axios from "axios";
//styles
import "./App.css";
//components
import MarvelHeaderLogo from "./components/MarvelHeaderLogo";
import Characters from "./components/Characters";
import SearchBar from "./components/SearchBar";

function App() {
  const [characters, setCharacters] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const fetch = async () => {
      if (query === "") {
        if (
          localStorage.getItem("favorites") === "[]" ||
          !localStorage.getItem("favorites")
        ) {
          localStorage.setItem("favorites", "[]");
          const result = await axios(
            `http://gateway.marvel.com/v1/public/characters?ts=1&apikey=79b81a7dc98c221d00e05eeefe71323e&hash=${process.env.REACT_APP_KEY}`
          );
          console.log(result.data.data.results);
          setCharacters(result.data.data.results);
          setLoading(false);
        } else {
          let favorite = JSON.parse(localStorage.getItem("favorites"));
          setCharacters(favorite);
          setLoading(false);
        }
      } else {
        const result = await axios(
          `http://gateway.marvel.com/v1/public/characters?nameStartsWith=${query}&ts=1&apikey=79b81a7dc98c221d00e05eeefe71323e&hash=${process.env.REACT_APP_KEY}`
        );
        console.log(result.data.data.results);
        setCharacters(result.data.data.results);
        setLoading(false);
      }
    };

    fetch();
  }, [query]);

  return (
    <div className="container">
      <MarvelHeaderLogo />
      <SearchBar search={(myQuery) => setQuery(myQuery)}></SearchBar>
      <Characters items={characters} isLoading={isLoading} />
      <br />
      <p>
        <b>Data provided by Marvel. © 2014 Marvel</b>
      </p>
    </div>
  );
}

export default App;
