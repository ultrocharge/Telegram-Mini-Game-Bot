"use client"
import Image from "next/image";
import { motion } from 'framer-motion'; 
import { useEffect, useState } from "react";
import axios from 'axios'

export default function Ranking() {
    const username = 'full_stack_dev_010'
    const [dataSource, setDataSource] = useState<User[]>([])
    const [currentUser, setCurrentUser] = useState<User | null>(null)
    const [ranking, setRanking] = useState(0)
    useEffect(() => {
        axios.get('http://localhost:5000/moverz/show')
            .then(res => setDataSource(res.data))
            .catch(err => console.log(err))

        dataSource.map((item, index) => {
            if (item.username === username) {
                setCurrentUser({
                    username: item.username,
                    star: item.star,
                    coin: item.coin,
                    spin: item.spin,
                    spinDate: item.spinDate,
                    claimDate: item.claimDate,
                    week: item.week,
                    day: item.day,
                    date: item.date
                })
                setRanking(index + 1)
            }
        })
    },[dataSource])

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
            <div className="w-full max-w-sm mx-auto relative">
                <div className="w-full flex flex-col gap-3 border-b border-stone-700 p-4 justify-between sticky top-0 bg-[#1B1B1B]">
                    <div className="flex flex-row gap-2 items-center justify-center">
                        <div>
                            <Image
                                src="/images/moon.png"
                                width={25}
                                height={25}
                                alt="Moon"
                            />
                        </div>
                        <div style={{ fontFamily: "'Brush Script MT', cursive", textShadow: "1px 1px 60px yellow"}} className="text-xl font-extrabold text-yellow-300 text-opacity-90">
                            Leaderboard
                        </div>
                    </div>

                    <div className="flex flex-row gap-3 w-full justify-start items-center gradient-border text-white font-extrabold p-3" style={{ fontFamily: "'Brush Script MT', cursive"}}>
                        <div className="w-8 h-8 rounded-full bg-yellow-300 text-[#222] text-sm font-extrabold flex justify-center items-center">
                            {currentUser?.username.slice(0,2)}
                        </div>
                        <div className="flex flex-col gap-1">
                            <div className="text-base font-extrabold">
                                {currentUser?.username}
                            </div>
                            <div className="flex flex-row gap-2">
                                <div className="flex flex-row gap-1">
                                    <div className="flex items-center">
                                        <Image
                                            src="/images/avatar.png"
                                            width={16}
                                            height={16}
                                            alt="Avatar"
                                        />
                                    </div>
                                    <div style={{ fontFamily: "'Brush Script MT', cursive"}} className="text-sm font-extrabold flex items-start text-yellow-300 text-opacity-90">
                                        {currentUser?.coin}
                                    </div>
                                </div>
                                <div className="text-xs">|</div>
                                <div className="text-sm font-extrabold flex items-start text-gray-300 text-opacity-90">Rank {ranking}</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="w-full p-4">
                    <h1 className="text-base font-extrabold text-white mb-4" style={{ fontFamily: "'Brush Script MT', cursive"}}>
                        Holder :
                    </h1>

                    <div className="flex flex-col gap-3">
                            
                        {dataSource.map((item, index) => (
                            <div key={index} className="flex flex-row gap-3 w-full justify-start items-center text-white font-extrabold p-3 bg-yellow-500 bg-opacity-20 rounded-lg  " style={{ fontFamily: "'Brush Script MT', cursive"}}>
                                {index === 0 ? <Image
                                    src="/images/gold.png"
                                    width={18}
                                    height={18}
                                    alt="GoldMedal"
                                /> 
                                : 
                                null 
                                }
                                {index === 1 ? <Image
                                    src="/images/silver.png"
                                    width={18}
                                    height={18}
                                    alt="Silver Medal"
                                /> 
                                : 
                                null 
                                }
                                {index === 2 ? <Image
                                    src="/images/brozen.png"
                                    width={18}
                                    height={18}
                                    alt="Brozen Medal"
                                /> 
                                : 
                                null 
                                }
                                {index && index > 3 ? <Image
                                    src="/images/platinum.png"
                                    width={18}
                                    height={18}
                                    alt="Platinum Medal"
                                /> 
                                : 
                                null 
                                }
                                <div className="w-8 h-8 rounded-full bg-yellow-300 text-[#222] text-sm font-extrabold flex justify-center items-center">
                                    {item.username.slice(0,2)}
                                </div>
                                <div className="flex flex-col gap-1">
                                    <div className="text-base font-extrabold">
                                        {item.username}
                                    </div>
                                    <div className="flex flex-row gap-2">
                                        <div className="flex flex-row gap-1">
                                            <div className="flex items-center">
                                                <Image
                                                    src="/images/avatar.png"
                                                    width={16}
                                                    height={16}
                                                    alt="Avatar"
                                                />
                                            </div>
                                            <div style={{ fontFamily: "'Brush Script MT', cursive"}} className="text-sm font-extrabold flex items-start text-yellow-300 text-opacity-90">
                                                {item.coin}
                                            </div>
                                        </div>
                                        <div className="text-xs">|</div>
                                        <div className="text-sm font-extrabold flex items-start text-gray-300 text-opacity-90">Rank {index + 1}</div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>  
        </motion.div>
    )
}