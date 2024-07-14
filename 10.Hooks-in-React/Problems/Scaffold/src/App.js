import "./styles.css";
import useFetch from "./useFetch";
import { useState, useEffect } from "react";

export default function App() {
  const url = "https://v2.jokeapi.dev/joke/Programming?type=single";
  const { data, loading, error, getJoke } = useFetch(url);

  if (loading) {
    return <p>Loading</p>
  }
  if (error) {
    return <p>Something went wrong</p>
  }

  return (
    <div className="App">
      <h1>Joke Generator</h1>
      {/* {error && <p>Something went wrong: {error}</p>} */}
      <h2>{data && data?.joke}</h2>
      <button onClick={getJoke} className="btn">New Joke</button>
    </div>
  );
}