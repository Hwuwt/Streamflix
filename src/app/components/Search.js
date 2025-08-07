import Image from "next/image"
import SearchSvg from "./svg/searchSvg"

export default function Search({ searchTerm, setSearchTerm}) {
    return (
        <div className="w-[60%] h-14 bg-teal-500 mx-auto flex p-2 justify-start text-center rounded-lg">
            <div>
                <SearchSvg className="h-10 w-10 text-teal-700"/>
            </div>
            <input 
            placeholder="Search for a movie" 
            type="text" 
            onChange={(e) => setSearchTerm(e.value)}
            className="text-2xl text-mint-100 p-2 h-10 w-full outline-none">
            {searchTerm}</input>
        </div>
    )
}