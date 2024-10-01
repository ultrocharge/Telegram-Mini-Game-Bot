'use client'

import { useEffect, useState } from "react";

import Image from "next/image";
import { FaMoon } from "react-icons/fa";
import Link from "next/link";
import { motion } from 'framer-motion';  
import axios from 'axios'
const moon = [
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
    const username = "full_stack_dev_010"
    const [visible, setVisible] = useState(false)
    const [currentTitle, setCurrentTitle] = useState('')
    const [currentUser, setCurrentUser] = useState<User | null>(null)

    useEffect(() => {
        const setWebhook = async () => {
          try {

            const axiosInstance = axios.create({
                baseURL: process.env.BACKEND_URL_PORT,
                headers: {
                    'Content-Type': 'application/json'
                },
            });

            await axiosInstance.get(`https://api.telegram.org/bot7679497504:AAHUn4Kq5kjY1rqiw7M_PzxH9D8JipElEwQ/setWebhook?url=https://moon-moverz.netlify.app/api/telegram`)
                .then(res => console.log(res))
                .catch(err => err.response)

          } catch (error) {
            console.error('Error setting webhook:', error);
          }
        };
        setWebhook();
      }, []);

    useEffect(() => {  
        const fetchData = async () => {
            axios.get(`http://localhost:5000/moverz/currentuser/${username}`)
                .then(res => setCurrentUser(res.data))
                .catch(err => console.log(err))
        }
        fetchData()
    }, [currentUser]);

    const open = (title: string) => {
        setVisible(true);
        setCurrentTitle(title);
    }


    const points = (
        <div className="flex flex-col justify-center gap-2 items-center">
            <FaMoon size={60} color="yellow" className="mb-2" />
            <div style={{ fontFamily: "'Brush Script MT', cursive", textShadow: "1px -20px 60px yellow"}} className="text-xl font-extrabold text-yellow-300 text-opacity-90 mb-3">
                Points
            </div>
            <div style={{ fontFamily: "'Brush Script MT', cursive"}} className="font-bold text-white mb-1">
                Represent your proportional share of 
            </div>

            <div className="flex flex-row justify-center items-center gap-2">
                <div style={{ fontFamily: "'Brush Script MT', cursive"}} className="font-bold text-white mb-1">
                    of 
                </div>
                <div>
                    <Image
                        src="/images/avatar.png"
                        width={20}
                        height={20}
                        alt="Avatar"
                    />
                </div>
                <div style={{ fontFamily: "'Brush Script MT', cursive"}} className="font-extrabold text-yellow-300 text-opacity-90 mb-1">
                    $Moon AirDrop
                </div>
            </div>
        </div>
    )

    const products = (
        <div className="flex flex-col">
            <div style={{ fontFamily: "'Brush Script MT', cursive"}} className="text-center text-xl font-extrabold text-yellow-300 text-opacity-90 mb-5">
                Our Products
            </div>
            <div className="flex flex-col gap-4">
                <div className="w-full rounded-xl py-2 text-sm flex gap-3 font-extrabold text-white justify-center items-center bg-green-300 bg-opacity-20" style={{ fontFamily: "'Brush Script MT', cursive", transform: "rotate(1deg)"}}>
                    <div>
                        <Image
                            src="/images/moon.png"
                            width={32}
                            height={32}
                            alt="Moon"
                        />
                    </div>
                    <div>Meme on Eclispe</div>
                </div>
                <div className="w-full rounded-xl py-2 text-sm flex gap-3 font-extrabold text-white justify-center items-center bg-green-300 bg-opacity-20" style={{ fontFamily: "'Brush Script MT', cursive", transform: "rotate(-1deg)"}}>
                    <div>
                        <Image
                            src="/images/avatar.png"
                            width={32}
                            height={32}
                            alt="Avatar"
                        />
                    </div>
                    <div>Mini Apps</div>
                </div>
                <div className="w-full rounded-xl py-2 text-sm flex gap-3 font-extrabold text-white justify-center items-center bg-green-300 bg-opacity-20" style={{ fontFamily: "'Brush Script MT', cursive", transform: "rotate(1deg)"}}>
                    <div>
                        <Image
                            src="/images/avatar.png"
                            width={32}
                            height={32}
                            alt="Avatar"
                        />
                    </div>
                    <div>Meme on Eclispe</div>
                </div>
            </div>
        </div>
    )

    return (
        <motion.div
            initial={{ opacity: 0, scale: 1 }}
            whileInView={{
                opacity: 1,
                y: 0,
            }}
            transition={{
                delay: 0.15,
            }}
            viewport={{
                once: true,
            }}
        >
            <div className="max-w-sm mx-auto flex flex-col gap-5 relative">
                <div className="w-full flex flex-row gap-3 border-b border-stone-700 py-3 justify-between px-4">
                    <div className="flex flex-1 ring-1 gap-3 justify-center ring-yellow-500 ring-opacity-40 rounded-2xl py-2 bg-yellow-300 bg-opacity-20">
                        <div className="flex items-center">
                            <FaMoon size={25} style={{opacity: '70%'}} color="yellow"/>
                        </div>
                        <div style={{ fontFamily: "'Brush Script MT', cursive"}} className="text-xl font-extrabold text-yellow-400 text-opacity-80 flex items-start">
                            {currentUser?.star}
                    </div>
                    </div>
                    <div className="flex flex-1 justify-center gap-3 ring-1 ring-stone-700 rounded-2xl py-2 bg-gray-400 bg-opacity-20">
                        <div className="flex items-center">
                            <Image
                                src="/images/avatar.png"
                                width={25}
                                height={25}
                                alt="Avatar"
                            />
                        </div>
                        <div style={{ fontFamily: "'Brush Script MT', cursive"}} className="text-xl font-extrabold text-white flex items-start">
                            {currentUser?.coin}
                    </div>
                    </div>
                </div>

                <div className="w-full flex flex-col gap-5 px-4">
                    <div className="flex flex-row justify-between items-center">
                        <div className="flex gap-3 items-center ring-[3px] ring-stone-500 ring-opacity-70 py-1 px-3 bg-gray-600 bg-opacity-50 rounded-full w-60 overflow-hidden">
                            <div className="flex flex-row gap-2 items-center justify-center">
                                <div>
                                    <Image
                                        src="/images/moon.png"
                                        width={25}
                                        height={25}
                                        alt="Moon"
                                    />
                                </div>
                                <div style={{ fontFamily: "'Brush Script MT', cursive", textShadow: "1px 1px 60px yellow"}} className="text-xl font-extrabold text-yellow-300 text-opacity-90 mb-1">
                                    mooner
                                </div>
                            </div>
                            <div className="text-white">|</div>
                            <div style={{ fontFamily: "'Brush Script MT', cursive"}} className="text-base font-semibold text-white flex items-start">
                                {currentUser?.username}
                            </div>
                        </div>
                        <div className="w-8 h-8 cursor-pointer flex items-center justify-center rounded-full bg-black image-with-shadow-icon" onClick={() => open('points')}>
                            <FaMoon size={20} style={{opacity: '70%'}} color="yellow"/>
                        </div>
                    </div>

                    <div className="grid grid-cols-3 w-full gap-2 px-4">
                        {moon.map((item, index) => (
                            <Link key={index} href={item.path}>
                                <div className="ring-1 flex-shrink-0  col-span-1 ring-yellow-400 border-t-2 border-t-yellow-400 text-xs font-extrabold flex-col p-1 rounded-lg flex justify-center items-center bg-gray-600 bg-opacity-30" style={{ fontFamily: "'Brush Script MT', cursive"}}>
                                    {item.Icon}
                                    <div className={`text-white text-nowrap text-base font-extrabold shadow-lg ${item.Title === 'Moon Spin' ? 'mt-2' : ''}`} style={{ textShadow: "1px 1px 60px yellow"}}>
                                        {item.Title}
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>

                    <div className="box py-1 px-8 ring-2 ring-yellow-500 ring-opacity-90 font-extrabold flex items-center" onClick={() => open('products')} style={{ fontFamily: "'Brush Script MT', cursive"}}>Our products</div>

                    <div className={`${visible ? 'flex' : 'hidden'} absolute top-0 left-0 w-full h-screen bg-gray-700 bg-opacity-45 justify-center items-center px-5`}>
                        <div className="w-full flex flex-col rounded-lg bg-[#1B1B1B] p-5 border border-solid border-gray-400 border-opacity-20">
                            <div className="flex justify-end cursor-pointer">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="10" height="10" overflow="visible" stroke="white" strokeWidth="10" strokeLinecap="round" onClick={() => setVisible(false)}>
                                    <line x1="0" y1="0" x2="50" y2="50" />
                                    <line x1="50" y1="0" x2="0" y2="50" />
                                </svg>
                            </div>

                            { currentTitle === 'points' ? points : null}
                            { currentTitle === 'products' ? products : null}
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}