"use client"

import Image from "next/image"
import { FaMoon } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { SiConvertio } from "react-icons/si";
import { LuWarehouse } from "react-icons/lu";
import { motion } from 'framer-motion'; 
import { useState, useEffect } from "react";
import axios from "axios";
const airdrop = [
    {
        Icon: <SiConvertio color="yellow" size={45} className="opacity-80"/>,
        Title: "Convert",
    },
    {
        Icon: <LuWarehouse color="yellow" size={45} className="opacity-40"/>,
        Title: "Withdraw",
    },
    {
        Icon: <FaTelegramPlane color="yellow" size={45} className="opacity-40"/>,
        Title: "Transfer",
    }   
]

export default function Wallet() {
    const username = "full_stack_dev_010"
    const [visible, setVisible] = useState(false)
    const [currentTitle, setCurrentTitle] = useState('')
    const [currentUser, setCurrentUser] = useState<User | null>(null)

    useEffect(() => {  
        const fetchData = async () => {
            axios.get(`https://telegram-mini-game-backend-kf6b.vercel.app//moverz/currentuser/${username}`)
                .then(res => setCurrentUser(res.data))
                .catch(err => console.log(err))
        }

        fetchData()
    }, [currentUser]);

    const convert = (
        <div className="flex flex-col justify-center gap-2 items-center">
            <Image 
                src="/images/coin.png"
                width={100}
                height={100}
                alt="Coin"
            />
            <div style={{ fontFamily: "'Brush Script MT', cursive"}} className="text-xl font-extrabold text-yellow-300 text-opacity-90 mb-3">
                Convert to $MOON token
            </div>
            <div style={{ fontFamily: "'Brush Script MT', cursive"}} className="font-bold text-white mb-1">
                Comming Soon...
            </div>
        </div>
    )
    const walletConnect = (
        <div className="flex flex-col justify-center gap-2 items-center">
            <Image 
                src="/images/eclipse.png"
                width={100}
                height={100}
                alt="Coin"
            />
            <div style={{ fontFamily: "'Brush Script MT', cursive"}} className="text-xl font-extrabold text-yellow-300 text-opacity-90 mb-3">
                Connect to Eclipse
            </div>
            <div style={{ fontFamily: "'Brush Script MT', cursive"}} className="font-bold text-white mb-1">
                Comming Soon...
            </div>
        </div>
    )

    const open = (title: string) => {
        setCurrentTitle(title)
        setVisible(true)
    }

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
            <div className="max-w-sm mx-auto relative">
                <div className="w-full flex flex-col gap-5 border-b border-stone-700 py-5 px-4 bg-[#1B1B1B] sticky top-0 left-0 mb-10">
                    <div className="flex flex-row gap-3 justify-between">
                        <div className="flex gap-3 justify-center">
                            <div className="flex items-center gap-2">
                                <Image
                                    src="/images/moon.png"
                                    width={25}
                                    height={25}
                                    alt="Moon"
                                />
                                <div style={{ fontFamily: "'Brush Script MT', cursive"}} className="text-lg font-extrabold text-yellow-400 mb-1 text-opacity-80 flex">
                                    {currentUser?.username}
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center gap-2 cursor-pointer justify-center rounded-2xl py-1 px-3 bg-yellow-500 bg-opacity-20" onClick={() => open('walletConnect')}>
                            <Image
                                src="/images/eclipse.png"
                                width={20}
                                height={20}
                                alt="Spin Icon"
                            />
                            <div style={{ fontFamily: "'Brush Script MT', cursive"}} className="text-lg font-extrabold text-yellow-400 text-opacity-80 flex items-start">
                                Connect
                            </div>
                        </div>
                    </div>

                    <div className="bg-yellow-800 bg-opacity-20 flex flex-col gap-5 rounded-lg justify-center items-center py-3">
                        <div style={{ fontFamily: "'Brush Script MT', cursive", textShadow: "1px -40px 70px yellow"}} className="text-xl font-extrabold text-yellow-300 text-opacity-90">
                            Portfolio
                        </div>
                        <div className="flex items-center gap-3">
                            <FaMoon size={20} style={{opacity: '70%'}} color="yellow"/>
                            <div style={{ fontFamily: "'Brush Script MT', cursive", textShadow: "1px 1px 70px yellow"}} className="text-3xl font-extrabold text-yellow-400 text-opacity-80 flex">
                                20,000
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <Image
                                src="/images/avatar.png"
                                width={50}
                                height={50}
                                alt="Avatar"
                            />
                            <div style={{ fontFamily: "'Brush Script MT', cursive"}} className="text-3xl font-extrabold text-white flex">
                                0
                            </div>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-3 w-full gap-2 px-4">
                    {airdrop.map((item, index) => (
                        <div key={index} onClick={() => index === 0 ? open('convert') : null} className="cursor-pointer ring-1 col-span-1 ring-yellow-400 border-t-2 bg-[#1B1B1B] border-t-yellow-400 text-xs font-extrabold flex-col gap-1 py-3 px-2 rounded-lg flex items-center" style={{ fontFamily: "'Brush Script MT', cursive"}}>
                            {item.Icon}
                            <div>
                                <div className="text-yellow-300 text-nowrap text-sm font-extrabold shadow-lg" style={{ textShadow: "1px -10px 30px yellow"}}>
                                    {item.Title}
                                </div>
                                <div className={`${index === 0 ? 'hidden' : 'block'} text-white text-nowrap text-center  text-[9px] font-extrabold shadow-lg`} style={{ textShadow: "1px -10px 30px yellow"}}>
                                    (Coming Soon)
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className={`${visible ? 'flex' : 'hidden'} absolute top-0 left-0 w-full h-screen bg-gray-700 bg-opacity-45 justify-center items-center px-5`}>
                    <div className="w-full flex flex-col rounded-lg bg-[#1B1B1B] p-5 border border-solid border-gray-400 border-opacity-20">
                        <div className="flex justify-end cursor-pointer">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="10" height="10" overflow="visible" stroke="white" strokeWidth="10" strokeLinecap="round" onClick={() => setVisible(false)}>
                                <line x1="0" y1="0" x2="50" y2="50" />
                                <line x1="50" y1="0" x2="0" y2="50" />
                            </svg>
                        </div>
                        { currentTitle === 'convert' ? convert : null}
                        { currentTitle === 'walletConnect' ? walletConnect : null}
                    </div>
                </div>
            </div>
        </motion.div>
    )
} 