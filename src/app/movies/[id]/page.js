"use client"
import { useParams } from "next/navigation";
import fetchMoviesById from '@/app/utils/fetchMovieById'
import { useEffect, useState } from "react";
import Image from "next/image";
import SpinnerSvg from "@/app/components/svg/SpinnerSvg";
import { useRouter } from 'next/navigation'
import VideoPlayer from "@/app/components/VideoPlayer";
import StartSvg from "@/app/components/svg/StartSvg";

export default function MoviePage() {
    const { id } = useParams();
    const [movie, setMovie] = useState();
    const [isLoading, setIsLoading] = useState(true);
    const [errorMessage, setErrorMessage] = useState();
    const [videoPlayerActive, setVideoPlayerActive] = useState(false);
    const [isTherePoster, setIsTherePoster] = useState();
    const router = useRouter();

    useEffect(() => {
        fetchMoviesById(id, setMovie, setErrorMessage, setIsLoading);
    }, [id])


    return (
        <>
        {videoPlayerActive && <VideoPlayer setVideoPlayerActive={setVideoPlayerActive} src={`https://vidsrc.to/embed/movie/${id}`} />}
        {!videoPlayerActive && 
        <div className="bg flex-col justify-center items-center">
            <div className="flex h-20 items-center justify-center mb-64">
                <h1 onClick={() => router.push("/")} className="text-main bg-clip-text text-2xl cursor-pointer">Streamflix</h1>
            </div>
            <div className="flex justify-center items-center">
                {isLoading ? <SpinnerSvg /> :
                    <div className="flex w-5xl overflow-hidden">
                        <div className="w-[500px] mr-10">
                            <Image 
                            width={500} 
                            height={0} 
                            src={movie.poster_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : '/BackupPoster.webp'} 
                            alt='poster'/>
                        </div>
                        <div className="flex flex-col justify-around w-2xl">
                            <div>
                                <div className="text-center items-center">
                                    <h1 className="text-7xl text-mint-100 text-shadow-lg">{movie.title} </h1>
                                </div>
                                <div className="flex gap-2 text-center items-center justify-center">
                                    <StartSvg width={"15px"} />
                                    <p className="text-xl text-mint-100">{movie.vote_average.toFixed(1)}</p>
                                    <span className='text-teal-700'>•</span>
                                    <p className="text-xl text-teal-700">{movie.release_date}</p>
                                    <span className='text-teal-700'>•</span>
                                    <p className="text-xl text-teal-700">{movie.original_language}</p>
                                </div>
                            </div>
                            <div className="h-[200px] overflow-hidden">
                                <p className="text-lg text-teal-700 text-shadow-sm">{movie.overview}</p>
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