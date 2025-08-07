"use client"
import Search from "./components/Search";
import { useState } from "react"

export default function Home() {
  const [searchTerm, setSearchTerm] = useState();

  return (
    <div className="bg flex flex-col text-center">
      <h1 className="text-9xl my-40 bg-clip-text text-main">Streamflix</h1>
      <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
    </div>
  )
}