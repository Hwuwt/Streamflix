"use client"
import { useParams } from "next/navigation";
import fetchMoviesById from '@/app/utils/fetchMovieById'
import { useEffect, useState } from "react";
import Image from "next/image";
import SpinnerSvg from "@/app/components/svg/SpinnerSvg";
import { useRouter } from 'next/navigation'
import VideoPlayer from "@/app/components/VideoPlayer";
import StartSvg from "@/app/components/svg/StartSvg";
import fetchMovieLogo from "@/app/utils/fetchMovieLogo"

export default function MoviePage() {
    const { id } = useParams();
    const [movie, setMovie] = useState();
    const [isLoading, setIsLoading] = useState(true);
    const [errorMessage, setErrorMessage] = useState();
    const [videoPlayerActive, setVideoPlayerActive] = useState(false);
    const [logoPath, setLogoPath] = useState("");
    const router = useRouter();


    useEffect(() => {
        fetchMoviesById(id, setMovie, setErrorMessage, setIsLoading);
        fetchMovieLogo(id, setLogoPath);
    }, [id]);



    return (
        <>
        {videoPlayerActive && <VideoPlayer setVideoPlayerActive={setVideoPlayerActive} src={`https://vidsrc.to/embed/movie/${id}`} />}
        {!videoPlayerActive && 
        <div className={`flex-col justify-center items-center h-screen pt-80 ${movie?.backdrop_path ? "relative bg-cover bg-center" : "bg"}`} style={movie?.backdrop_path ? { backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})` } : {}}>
            <div className="bg-black/50 absolute inset-0"></div>
            <div className="flex justify-center items-center relative">
                {isLoading ? <SpinnerSvg /> :
                    <div className="flex w-5xl">
                        <div className="w-[412] shrink-0 pr-14">
                            <Image 
                            width={412}
                            height={0}
                            src={movie.poster_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : '/BackupPoster.webp'} 
                            alt='poster' />
                        </div>
                        <div className="flex flex-col justify-between items-center w-[612]">
                            
                            <div className="w-xl">
                                <div className="flex text-center items-center justify-center w-[100%] h-[200px] relative">
                                    {logoPath ? <Image fill alt="logo" className="object-contain w-auto h-fit" src={`https://image.tmdb.org/t/p/w500${logoPath}`} /> : 
                                    <h1 className="text-7xl text-mint-100 text-shadow-lg">{movie.title} </h1>}
                                </div>
                                <div className="flex gap-2 text-center items-center justify-center">
                                    <StartSvg width={"15px"} />
                                    <p className="text-xl text-mint-100">{movie?.vote_average.toFixed(1) ? movie.vote_average.toFixed(1) : "N/A"}</p>
                                    <span className='text-mint-100'>•</span>
                                    <p className="text-xl text-mint-100">{movie?.release_date ? movie.release_date : "N/A"}</p>
                                    <span className='text-mint-100'>•</span>
                                    <p className="text-xl text-mint-100">{movie?.original_language ? movie.original_language : "N/A"}</p>
                                </div>
                            </div>
                            <div className="h-[200px] overflow-hidden">
                                <p className="text-lg text-mint-100 text-shadow-sm">{movie.overview}</p>
                            </div>
                            <div>
                                <button onClick={() => setVideoPlayerActive(true)} className="w-40 h-15 bg-mint-100 text-teal-700 font-bold text-2xl rounded-4xl cursor-pointer hover:bg-mint-200 transition-all active:bg-teal-500">Watch</button>
                            </div>
                        </div>
                    </div>}
            </div>
        </div>}
        </> 
    )
}