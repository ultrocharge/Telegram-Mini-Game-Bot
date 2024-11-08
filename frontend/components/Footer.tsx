"use client"

import { IoGameController } from "react-icons/io5";
import { BsMoonStarsFill } from "react-icons/bs";
import { PiCalendarDotFill } from "react-icons/pi";
import { MdEmail } from "react-icons/md";
import { BsWalletFill } from "react-icons/bs";
import Link from "next/link";
import { usePathname } from 'next/navigation';
const footer = [
    {
        Icon: <BsMoonStarsFill color="yellow" style={{opacity: '70%'}} size={22}/>,
        Title: "Moon",
        path: "/moon"
    },
    {
        Icon: <PiCalendarDotFill color="yellow" style={{opacity: '70%'}} size={25}/>,
        Title: "Tasks",
        path: "/tasks"
    },
    {
        Icon: <IoGameController color="yellow" style={{opacity: '70%'}} size={25}/>,
        Title: "Game",
        path: "/game"
    },
    {
        Icon: <MdEmail color="yellow" style={{opacity: '70%'}} size={25}/>,
        Title: "Friends",
        path: "/friends"
    },
    {
        Icon: <BsWalletFill color="yellow" style={{opacity: '70%'}} size={22}/>,
        Title: "Airdrop",
        path: "/airdrop"
    },
]
export default function Footer() {
    const pathname = usePathname();
    return (
        <div className={`${pathname === '/moon/spin' || pathname === '/moon/checkin' || pathname === '/moon/ranking' ? 'hidden' : ''} flex flex-row gap-3 justify-center bg-[#1B1B1B] rounded-t-lg text-white p-3 max-w-sm mx-auto fixed bottom-0 left-1/2 -translate-x-1/2`}>
            {footer.map((item, index) => (
                <Link key={index} href={item.path}>
                    <div className={`${pathname === item.path ? "ring-1 ring-yellow-400 border-b-2 border-b-yellow-400 bg-gray-600 bg-opacity-30" : ''} w-16 h-16 text-xs font-extrabold gap-2 flex-col p-1 border-b-yellow-400 rounded-lg flex justify-center items-center`} style={{ fontFamily: "'Brush Script MT', cursive"}}>
                        {item.Icon}
                        <div>
                            {item.Title}
                        </div>
                    </div>
                </Link>
            ))}
        </div>
    )
}