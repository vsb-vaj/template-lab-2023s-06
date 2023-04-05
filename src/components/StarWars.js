import { useState } from "react";

async function fetchMovieList() {
  const response = await fetch(`https://swapi.dev/api/films/?format=json`);
  const data = await response.json();
  return data;
}

async function fetchMovieData(movieId) {
  const response = await fetch(
    `https://swapi.dev/api/films/${movieId}/?format=json`
  );
  const data = await response.json();
  return data;
}

export default function StarWars() {
  const [movieId, setMovieId] = useState("1");
  const [data, setData] = useState(null);

  // TODO: write an useEffect hook that will call the Star Wars API every time the movie ID changes
  // and updates the `data` state value with the result of the API call
  // You can use the `fetchMovieData` helper to call the API

  return (
    <div>
      <select
        value={movieId}
        onChange={(e) => {
          setMovieId(e.target.value);
        }}
      >
        <option value="1">A New Hope</option>
        <option value="2">Empire Strikes Back</option>
        <option value="3">Return of Jedi</option>
      </select>
      <div>{JSON.stringify(data, null, 2)}</div>
    </div>
  );
}
