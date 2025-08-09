export default function VideoPlayer({ src, setVideoPlayerActive }) {
    return (
        <>
            <button onClick={() => setVideoPlayerActive(false)} className='absolute top-4 right-4 text-mint-100 z-10 font-medium rounded-md text-3xl cursor-pointer'>✕</button>
            <iframe
                key={src}
                src={src}
                title="Player"
                allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
                allowFullScreen
                frameBorder="0"
                className="absolute inset-0 h-full w-full"
            />
        </>   
    )
}