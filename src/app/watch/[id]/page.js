'use client'
import { useRouter, useParams } from "next/navigation";

export default function WatchPage() {
    const { id } = useParams();
    const router = useRouter();

    return (
        <>
            <h1>Error</h1> : 
            <div className="fixed z-[100] inset-0 bg-black">
            <button onClick={() => router.push(`/movies/${id}`)} className='absolute top-4 right-4 z-10 text-mint-100 font-medium rounded-md text-3xl cursor-pointer'>✕</button>
            <iframe
                key={`https://multiembed.mov/directstream.php?video_id=${id}&tmdb=1`}
                src={`https://multiembed.mov/directstream.php?video_id=${id}&tmdb=1`}
                title="Player"
                allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 z-0 h-[100dvh] w-[100vw] border-0"
                referrerPolicy="no-referrer"
            />
            </div>
        </>
    )
}