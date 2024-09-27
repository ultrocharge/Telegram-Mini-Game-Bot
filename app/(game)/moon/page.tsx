'use client'

import { useEffect } from "react";

import Image from "next/image";
import { FaMoon } from "react-icons/fa";
import Link from "next/link";
const footer = [
    {
        Icon:<Image
                src="/images/spin.gif"
                width={44}
                height={44}
                alt="Spinner"
                unoptimized={true}
                style={{marginTop:'10px'}}
            />,
        Title: "Moon Spin",
        path: "/moon/spin"
    },
    {
        Icon: <Image
                src="/images/gift.gif"
                width={62}
                height={62}
                unoptimized={true}
                alt="CheckIn"
            />,
        Title: "Check-in",
        path: "/moon/checkin"
    },
    {
        Icon: <Image
                src="/images/ranking.gif"
                width={62}
                height={62}
                unoptimized={true}
                alt="Ranking"
            />,
        Title: "Ranking",
        path: "/moon/ranking"
    }   
]



export default function Moon() {
    const count = 0;
    const username = "MoverzBot"

    useEffect(() => {  
        const tg = window.Telegram.WebApp;  

        // Show the back button  
        tg.BackButton.show();  

        // Set the onClick event handler  
        tg.BackButton.onClick(() => {  
            window.history.back(); // Go back to the previous page  
        });
    }, []);

    return (
        <div className="max-w-sm mx-auto flex flex-col gap-5">
            <div className="w-full flex flex-row gap-3 border-b border-stone-700 py-3 justify-between px-4">
                <div className="flex flex-1 ring-1 gap-3 justify-center ring-yellow-500 ring-opacity-40 rounded-2xl py-2 bg-yellow-500 bg-opacity-20">
                    <div className="flex items-center">
                        <FaMoon size={25} style={{opacity: '70%'}} color="yellow"/>
                    </div>
                    <div style={{ fontFamily: "'Brush Script MT', cursive"}} className="text-xl font-extrabold text-yellow-400 text-opacity-80 flex items-start">
                        {count}
                   </div>
                </div>
                <div className="flex flex-1 justify-center gap-3 ring-1 ring-stone-700 rounded-2xl py-2 bg-gray-600 bg-opacity-50">
                    <div className="flex items-center">
                        <Image
                            src="/images/avatar.png"
                            width={25}
                            height={25}
                            alt="this is bot app avatar"
                        />
                    </div>
                    <div style={{ fontFamily: "'Brush Script MT', cursive"}} className="text-xl font-extrabold text-white flex items-start">
                        {count}
                   </div>
                </div>
            </div>

            <div className="w-full flex flex-col gap-5 px-4">
                <div className="flex flex-row justify-between items-center">
                    <div className="flex gap-3 items-center ring-4 ring-stone-500 ring-opacity-70 py-1 px-3 bg-gray-600 bg-opacity-50 rounded-full w-60 overflow-hidden">
                        <div className="flex flex-row gap-2 items-center justify-center">
                            <div>
                                <Image
                                    src="/images/moon.png"
                                    width={25}
                                    height={25}
                                    alt="this is bot app avatar"
                                />
                            </div>
                            <div style={{ fontFamily: "'Brush Script MT', cursive"}} className="text-xl font-extrabold text-yellow-300 text-opacity-90">
                                mooner
                            </div>
                        </div>
                        <div className="text-white">|</div>
                        <div style={{ fontFamily: "'Brush Script MT', cursive"}} className="text-base font-semibold text-white flex items-start">
                            {username}
                        </div>
                    </div>
                    <div className="w-12 h-12 flex items-center justify-center rounded-full bg-black image-with-shadow">
                        <FaMoon size={25} style={{opacity: '70%'}} color="yellow"/>
                    </div>
                </div>

                <div className="flex flex-row justify-between">
                    {footer.map((item, index) => (
                        <Link key={index} href={item.path}>
                            <div className="ring-1 ring-yellow-400 border-t-2 border-t-yellow-400 w-28 h-28 text-xs font-extrabold gap-2 flex-col p-1 rounded-lg flex justify-center items-center bg-gray-600 bg-opacity-30" style={{ fontFamily: "'Brush Script MT', cursive"}}>
                                {item.Icon}
                                <div className={`text-white text-lg font-extrabold shadow-lg ${item.Title === 'Moon Spin' ? 'mt-2' : ''}`} style={{ textShadow: "1px 1px 60px yellow"}}>
                                    {item.Title}
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>

                <div className="box py-1 px-8 ring-2 ring-yellow-500 ring-opacity-90 font-extrabold flex items-center" style={{ fontFamily: "'Brush Script MT', cursive"}}>Our products</div>
            </div>
        </div>
    )
}