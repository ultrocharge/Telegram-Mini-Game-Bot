"use client"

import Image from "next/image"
import { FaMoon } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { SiConvertio } from "react-icons/si";
import { LuWarehouse } from "react-icons/lu";
import { motion } from 'framer-motion'; 
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

    const username = 'moonmoverz'
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
            <div className="max-w-sm mx-auto">
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
                                <div style={{ fontFamily: "'Brush Script MT', cursive"}} className="text-xl font-extrabold text-yellow-400 mb-1 text-opacity-80 flex">
                                    {username}
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-center gap-3 rounded-2xl py-1 px-3 bg-yellow-500 bg-opacity-20">
                            <div className="flex items-center gap-2">
                                <Image
                                    src="/images/spinicon.png"
                                    width={20}
                                    height={20}
                                    alt="Spin Icon"
                                />
                                <div style={{ fontFamily: "'Brush Script MT', cursive"}} className="text-lg font-extrabold text-yellow-400 text-opacity-80 flex items-start">
                                    Connect
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-yellow-800 bg-opacity-20 flex flex-col gap-5 rounded-lg justify-center items-center py-3">
                        <div style={{ fontFamily: "'Brush Script MT', cursive", textShadow: "1px -40px 70px yellow"}} className="text-xl font-extrabold text-yellow-300 text-opacity-90">
                            Leaderboard
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
                        <div key={index} className="ring-1 col-span-1 ring-yellow-400 border-t-2 bg-[#1B1B1B] border-t-yellow-400 text-xs font-extrabold flex-col gap-1 py-3 px-2 rounded-lg flex items-center" style={{ fontFamily: "'Brush Script MT', cursive"}}>
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
            </div>
        </motion.div>
    )
} 