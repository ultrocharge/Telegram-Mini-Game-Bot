'use client'
import Image from "next/image"
import { FaMoon } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { AiOutlineExclamationCircle } from "react-icons/ai";
import { useState } from "react";
import { motion } from 'framer-motion'; 
const taskList = [
    {
        invite: 3,
        count : 2000
    },
    {
        invite: 5,
        count : 5000
    },
    {
        invite: 10,
        count : 15000
    },
    {
        invite: 20,
        count : 25000
    }
]
export default function Friends() {
    const count = 0
    const [isCopied, setIsCopied] = useState(false);
    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText('https://t.me/moverzdegen_bot');
            setIsCopied(true);
            unCopied();
        } catch (err) {
            console.error('Failed to copy: ', err);
        }
    };

    const unCopied = () => {
        setTimeout(() => {setIsCopied(false)},2000)
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
            <div className="max-w-sm mx-auto">
                <div className="w-full flex flex-col gap-5 border-b border-stone-700 py-5 justify-between px-4 bg-[#1B1B1B] sticky top-0 left-0 z-50">
                    <div className="flex flex-row justify-between">
                        <div>
                            <h1 style={{ fontFamily: "'Brush Script MT', cursive", textShadow: "100px 1px 50px yellow"}} className="xs:text-lg font-extrabold text-yellow-300 text-opacity-90">
                                {count} frineds
                            </h1>
                            <p style={{ fontFamily: "'Brush Script MT', cursive", textShadow: "1px 1px 60px yellow"}} className="flex items-center gap-1 text-xs xs:text-sm font-extrabold text-[#eee]">
                                {count} refs inactive <AiOutlineExclamationCircle />
                            </p>
                        </div>
                        <div className="flex ring-1 gap-2 justify-center ring-yellow-500 ring-opacity-40 rounded-full py-1 bg-yellow-500 bg-opacity-20 px-2">
                            <div className="flex flex-row gap-1 items-center">
                                <div style={{ fontFamily: "'Brush Script MT', cursive"}} className="text-sm xs:text-base font-bold text-white flex items-start">
                                    2 ref =
                                </div>
                            </div>
                            <div className="flex flex-row gap-1 items-center">
                                <Image
                                    src="/images/spinicon.png"
                                    width={22}
                                    height={22}
                                    alt="Spin Icon"
                                />
                                <div style={{ fontFamily: "'Brush Script MT', cursive"}} className="text-sm xs:text-base font-bold text-white flex items-start">
                                    1 Spin
                                </div>
                                <Image
                                    src="/images/gift.gif"
                                    width={35}
                                    height={35}
                                    unoptimized={true}
                                    alt="CheckIn"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-2 w-full p-3 bg-yellow-500 bg-opacity-20 rounded-lg" style={{ fontFamily: "'Brush Script MT', cursive"}}>
                        <div className="flex flex-row w-full justify-between items-center text-white font-extrabold">
                            <div className="flex flex-row gap-3 text-sm xs:text-base items-center" >
                                Link: <p className="text-yellow-300 text-opacity-90">t.me/moverzdegen_bot</p> 
                            </div>
                            <button onClick={handleCopy} className="py-1 px-3 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 text-sm font-extrabold flex justify-center items-end text-white">{isCopied ? 'Copied!' : 'Copy'}</button>
                        </div>
                    </div>

                    <div className="flex flex-row gap-3">
                        <button style={{ fontFamily: "'Brush Script MT', cursive"}} className="flex-1 rounded-lg p-3 font-extrabold bg-yellow-300 bg-opacity-90">Earned</button>
                        <button style={{ fontFamily: "'Brush Script MT', cursive"}} className="flex-1 rounded-lg p-3 font-extrabold bg-yellow-500 bg-opacity-20 text-white">Refs</button>
                    </div>
                </div>

                <div className="w-full px-4 flex-col flex gap-5 py-4">
                    <div className="flex flex-row gap-3">
                        <div className="flex flex-1 ring-1 gap-3 justify-center ring-yellow-500 ring-opacity-40 rounded-2xl py-1 bg-yellow-500 bg-opacity-10">
                            <div className="flex items-center gap-2">
                                <div style={{ fontFamily: "'Brush Script MT', cursive"}} className="text-2xl font-extrabold text-yellow-400 text-opacity-80 flex">
                                    +
                                </div>
                                <FaMoon size={20} style={{opacity: '70%'}} color="yellow"/>
                                <div style={{ fontFamily: "'Brush Script MT', cursive"}} className="text-xl font-extrabold text-yellow-400 text-opacity-80 flex">
                                    {count}
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-1 justify-center gap-3 border border-solid border-stone-500 rounded-2xl py-1 bg-gray-400 bg-opacity-20">
                            <div className="flex items-center gap-2">
                                <div style={{ fontFamily: "'Brush Script MT', cursive"}} className="text-2xl font-extrabold text-white flex">
                                    +
                                </div>
                                <Image
                                    src="/images/spinicon.png"
                                    width={20}
                                    height={20}
                                    alt="Spin Icon"
                                />
                                <div style={{ fontFamily: "'Brush Script MT', cursive"}} className="text-xl font-extrabold text-white flex items-start">
                                    {count}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-3">
                        {taskList.map((item, index) => (
                            <div key={index} className="flex flex-col gap-2 w-full p-3 bg-yellow-500 bg-opacity-20 rounded-lg" style={{ fontFamily: "'Brush Script MT', cursive"}}>
                                <div className="flex flex-row w-full justify-between items-center text-white font-extrabold">
                                    <div className="flex flex-row gap-3 items-center" >
                                        <MdEmail color="yellow" style={{opacity: '70%'}} size={30}/>
                                        <div className="flex flex-col gap-1">
                                            <div className="text-base font-extrabold">
                                                Invite {item.invite} friends
                                            </div>
                                            <div className="flex flex-row gap-2">
                                                <div className="flex flex-row gap-1 items-center">
                                                    <FaMoon size={15} color="yellow"/>
                                                    <div className="text-sm font-extrabold flex text-white text-opacity-90">{item.count}</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <button className="py-1 px-3 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 text-sm font-extrabold flex justify-center items-end text-white">Claim</button>
                                </div>
                                <div className="bg-stone-500 rounded-full w-full h-2" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </motion.div>
    )
}