'use client'  
import Image from "next/image"  
import { FaMoon } from "react-icons/fa";  
import { MdEmail } from "react-icons/md";  
import { AiOutlineExclamationCircle } from "react-icons/ai";  
import { useState } from "react";  
import { motion } from 'framer-motion';   

const taskList = [  
    { invite: 3, count: 2000 },  
    { invite: 5, count: 5000 },  
    { invite: 10, count: 15000 },  
    { invite: 20, count: 25000 }  
];  

export default function Friends() {  
    const count = 0;
    const [isCopied, setIsCopied] = useState(false);  
    const [movingPage, setMovingPage] = useState(true);  
    const [visible, setVisible] = useState(false);  

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
        setTimeout(() => {setIsCopied(false)}, 2000);  
    }  

    const refs = (  
        <div className="w-full px-4 flex-col flex gap-5 py-4">  
            <div style={{ fontFamily: "'Brush Script MT', cursive" }} className="text-lg font-extrabold text-white text-center">You don&apos;t have referrals 😭</div>  
            <div className="bg-stone-500 rounded-full w-full h-2 hover:bg-slate-400" />  
        </div>  
    );  

    const earns = (  
        <div className="w-full px-4 flex-col flex gap-5 py-4 h-[53.5%] sm:h-auto overflow-scroll sm:overflow-auto">  
            <div className="flex flex-row gap-3">  
                <div className="flex flex-1 ring-1 gap-3 justify-center ring-yellow-500 ring-opacity-40 rounded-2xl py-1 bg-yellow-500 bg-opacity-10">  
                    <div className="flex items-center gap-2">  
                        <div style={{ fontFamily: "'Brush Script MT', cursive" }} className="text-2xl font-extrabold text-yellow-400 text-opacity-80 flex">+</div>  
                        <FaMoon size={20} style={{ opacity: '70%' }} color="yellow"/>  
                        <div style={{ fontFamily: "'Brush Script MT', cursive" }} className="text-xl font-extrabold text-yellow-400 text-opacity-80 flex">{count}</div>  
                    </div>  
                </div>  
                <div className="flex flex-1 justify-center gap-3 border border-solid border-stone-500 rounded-2xl py-1 bg-gray-400 bg-opacity-20">  
                    <div className="flex items-center gap-2">  
                        <div style={{ fontFamily: "'Brush Script MT', cursive" }} className="text-2xl font-extrabold text-white flex">+</div>  
                        <Image src="/images/spinicon.png" width={20} height={20} alt="Spin Icon" />  
                        <div style={{ fontFamily: "'Brush Script MT', cursive" }} className="text-xl font-extrabold text-white flex items-start">{count}</div>  
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
                            <button className="py-1 px-3 rounded-full cursor-not-allowed bg-gradient-to-r from-cyan-500 to-blue-500 text-sm font-extrabold flex justify-center items-end text-white" >Claim</button>
                        </div>
                        <div className="bg-stone-500 rounded-full w-full h-2" />
                    </div>
                ))}
            </div>
    </div>
    )

    const products = (
        <div className="flex flex-col">
            <div style={{ fontFamily: "'Brush Script MT', cursive"}} className="text-center text-xl font-extrabold text-yellow-300 text-opacity-90 mb-5">
                You will receive
            </div>
            <div className="flex flex-col gap-4">
                <div className="w-full rounded-xl py-2 px-3 flex gap-3 font-extrabold text-white justify-center items-center bg-green-300 bg-opacity-20" style={{ fontFamily: "'Brush Script MT', cursive", transform: "rotate(1deg)"}}>
                    <div className="flex gap-1">15% of 🌙 <p className="text-yellow-300">points</p> earned by those <br></br> you invite</div>
                </div>
                <div className="w-full rounded-xl py-2 text-lg flex gap-3 font-extrabold text-white justify-center items-center bg-green-300 bg-opacity-20" style={{ fontFamily: "'Brush Script MT', cursive", transform: "rotate(-1deg)"}}>
                    <div className="flex gap-3 justify-center">
                        <div className="flex flex-row gap-1 items-center">
                            <MdEmail color="yellow" style={{opacity: '70%'}} size={25}/>
                            <div style={{ fontFamily: "'Brush Script MT', cursive"}} className="text-base font-bold text-white flex items-start">
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
                            <div style={{ fontFamily: "'Brush Script MT', cursive"}} className="text-base font-bold text-white flex items-start">
                                1 Spin
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full rounded-xl py-2 text-lg flex gap-3 font-extrabold text-white justify-center items-center bg-green-300 bg-opacity-20" style={{ fontFamily: "'Brush Script MT', cursive", transform: "rotate(1deg)"}}>
                    <div className="flex items-center gap-1">
                        🌙 <p className="text-yellow-300">Points</p>
                    </div>
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
            <div className="max-w-sm mx-auto h-screen relative">
                <div className="w-full flex flex-col gap-5 border-b border-stone-700 py-5 justify-between px-4 bg-[#1B1B1B] h-1/3 sm:h-auto">
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
                                    className="cursor-pointer"
                                    onClick={() => setVisible(true)}
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
                        <button style={{ fontFamily: "'Brush Script MT', cursive"}} className={`flex-1 rounded-lg p-3 font-extrabold ${movingPage ? 'bg-yellow-300 bg-opacity-90' : 'bg-yellow-500 bg-opacity-20 text-white'}`} onClick={() => setMovingPage(true)}>Earned</button>
                        <button style={{ fontFamily: "'Brush Script MT', cursive"}} className={`flex-1 rounded-lg p-3 font-extrabold ${movingPage ? 'bg-yellow-500 bg-opacity-20 text-white' : 'bg-yellow-300 bg-opacity-90'}`} onClick={() => setMovingPage(false)}>Refs</button>
                    </div>
                </div>

                {movingPage ? earns : refs}

                <div className={`${visible ? 'flex' : 'hidden'} absolute top-0 left-0 w-full h-screen bg-gray-700 bg-opacity-45 justify-center items-center px-5`}>
                    <div className="w-full flex flex-col rounded-lg bg-[#1B1B1B] p-5 border border-solid border-gray-400 border-opacity-20">
                        <div className="flex justify-end cursor-pointer">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="10" height="10" overflow="visible" stroke="white" strokeWidth="10" strokeLinecap="round" onClick={() => setVisible(false)}>
                                <line x1="0" y1="0" x2="50" y2="50" />
                                <line x1="50" y1="0" x2="0" y2="50" />
                            </svg>
                        </div>
                        { products }
                    </div>
                </div>
            </div>
        </motion.div>
    )
}