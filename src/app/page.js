"use client"
import Search from "./components/Search";
import { useState, useEffect } from "react"
import fetchMovies from "./utils/fetchMovies";

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState();
  const [errorMessage, setErrorMessage] = useState("");
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    console.log("movies recieved");
  }, [movies])

  useEffect(() => {
    if (!searchTerm.trim()) return

    const handler = setTimeout(() => {
      fetchMovies(searchTerm, setErrorMessage, setMovies);
    }, 500)


    return () => clearTimeout(handler)
  }, [searchTerm])


  return (
    <div className="bg flex flex-col text-center">
      <h1 className="text-9xl my-40 bg-clip-text text-main">Streamflix</h1>
      <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
      {errorMessage !== "" ? <h2>{errorMessage}</h2> : 
      <h2></h2>
      }
    </div>
  )
}