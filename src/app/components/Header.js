"use client"
import SearchSvg from "./svg/SearchSvg"
import AcountSvg from "./svg/AcountSvg"
import { useRouter } from 'next/navigation'

export default function Header() {
    const router = useRouter()
    return (
        <header className="bg-transparent w-full absolute top-0 inset-x-0 z-[9999] h-20">
            <div className="flex justify-between w-[1044px] items-center mx-auto h-20">
                <button className="cursor-pointer bg-mint-200 w-12 h-12 flex items-center justify-center rounded-4xl hover:bg-mint-100 transition"><AcountSvg className="w-10 h-10 text-teal-700" /></button>
                <button onClick={() => router.push("/")} className="text-main bg-clip-text text-2xl cursor-pointer">Streamflix</button>
                <button onClick={() => router.push("/search")} className="cursor-pointer bg-mint-200 w-12 h-12 flex items-center justify-center rounded-4xl hover:bg-mint-100 transition"><SearchSvg className="h-8 w-8 text-teal-700" /></button>
            </div>
        </header>
    )
}