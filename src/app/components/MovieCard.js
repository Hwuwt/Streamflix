import Image from 'next/image'

export default function MovieCard({ movie: { title, release_date, poster_path, vote_average, original_language }}) {
    return (
        <div className='flex flex-col w-70 h-120 p-5 bg-teal-500 rounded-2xl'>
            <div>
                <Image className='rounded-xl' width={240} height={360} src={poster_path ? `https://image.tmdb.org/t/p/w500${poster_path}` : '/BackupPoster.webp'} alt='poster'/>
            </div>
            <div className='flex flex-col'>
                <div className='flex h-15 items-center'>
                    <h3 className='text-mint-100 font-bold text-lg whitespace-nowrap overflow-hidden text-ellipsis'>{title}</h3>
                </div>
                <div className='flex justify-around'>
                    <p className='text-mint-100'>{vote_average.toFixed(1)}</p>
                    <p className='text-mint-100'>{original_language || "N/A"}</p>
                    <p className='text-mint-100'>{release_date.slice(0, 4) || "N/A"}</p>
                </div>
            </div>
        </div>
    )
}