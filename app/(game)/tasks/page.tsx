'use client'

import Image from "next/image"
import { FaMoon } from "react-icons/fa";
import { RiTwitterXLine } from "react-icons/ri";
import { motion } from 'framer-motion'; 
import { useState, useEffect } from "react";
import { IoMdSettings } from "react-icons/io";
import { FaCheck } from "react-icons/fa";
import axios from "axios";
import Link from "next/link";

export default function Tasks() {
    const username = "full_stack_dev_010";
    const [currentUser, setCurrentUser] = useState<User | null>(null);
    const [status, setStatus] = useState<{[key: number]: 'start' | 'verify' | 'ok' | 'try-again'}>({});
    useEffect(() => {  
        const fetchData = async () => {
            await axios.get(`https://telegram-mini-game-backend-kf6b.vercel.app/moverz/currentuser/${username}`)
                .then(res => setCurrentUser(res.data))
                .catch(err => console.log(err));
        };
        fetchData();
    }, [currentUser]);

    const taskList = [
        {
            title: 'Join Mooncoin group',
            count: 10000,
            path: "https://t.me/mooncoin_svm",
            member: "@mooncoin_svm",
            completed: currentUser?.tasks.group
        },
        {
            title: 'Join Mooncoin channel',
            count: 10000,
            path: "https://t.me/mooncoinsvm",
            member: "@mooncoinsvm",
            completed: currentUser?.tasks.channel
        },
    ];
    
    
    const checkMembership = (member: string, index: number) => {
        const telegramUserId = '6278286234'; 
        setStatus(prev => ({ ...prev, [index]: 'verify' }));

        const intervalId = setInterval(async() => {
            try {
                const response = await fetch('/api/telegram/checkmember', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ userId: telegramUserId, member: member }),
                });
    
                const data = await response.json();
                if(data.isMember) {
                    setStatus(prev => ({ ...prev, [index]: 'ok' }));
                    const data = {  
                        username: currentUser.username,  
                        star: currentUser.star + taskList[index].count,
                        group: index === 0 ? true : false,
                        channel: index === 1 ? true : false
                    }; 

                    await axios.post('https://telegram-mini-game-backend-kf6b.vercel.app//moverz/add/task', data)  
                    .then(res => console.log(res))  
                    .catch(err => console.error(err)); 

                    clearInterval(intervalId);
                }
            } catch (error) {
                console.error('Error checking membership:', error);
            }
        }, 5000)
        
        setTimeout(() => {
            clearInterval(intervalId);
            // If not joined, change the button back to "Try Again"
            if (status[index] !== 'ok') {
                setStatus(prev => ({ ...prev, [index]: 'try-again' }));
            }
        }, 60000);
    };

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
                <div className="w-full flex flex-col gap-5 border-b border-stone-700 py-5 justify-between px-4 bg-[#1B1B1B] sticky top-0 left-0">
                    <div className="flex flex-row gap-3">
                        <div className="flex flex-1 ring-1 gap-3 justify-center ring-yellow-500 ring-opacity-40 rounded-2xl py-1 bg-yellow-500 bg-opacity-10">
                            <div className="flex items-center gap-2">
                                <div style={{ fontFamily: "'Brush Script MT', cursive" }} className="text-2xl font-extrabold text-yellow-400 text-opacity-80 flex">
                                    +
                                </div>
                                <FaMoon size={20} style={{ opacity: '70%' }} color="yellow" />
                                <div style={{ fontFamily: "'Brush Script MT', cursive" }} className="text-xl font-extrabold text-yellow-400 text-opacity-80 flex">
                                    {currentUser?.star}
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-1 justify-center gap-3 border border-solid border-stone-500 rounded-2xl py-1 bg-gray-400 bg-opacity-20" style={{ boxShadow: '-50px 1px 200px yellow' }}>
                            <div className="flex items-center gap-2">
                                <div style={{ fontFamily: "'Brush Script MT', cursive" }} className="text-2xl font-extrabold text-white flex">
                                    +
                                </div>
                                <Image
                                    src="/images/spinicon.png"
                                    width={20}
                                    height={20}
                                    alt="Spin Icon"
                                />
                                <div style={{ fontFamily: "'Brush Script MT', cursive" }} className="text-xl font-extrabold text-white flex items-start">
                                    {currentUser?.spin}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div style={{ fontFamily: "'Brush Script MT', cursive" }} className="text-xs font-extrabold text-white text-center">
                        The verification process may take up to 15-30 minutes
                    </div>
                </div>
                <div className="w-full p-4">
                    <h1 className="text-lg font-extrabold mb-4 text-yellow-300" style={{ fontFamily: "'Brush Script MT', cursive" }}>
                        New Tasks:
                    </h1>

                    <div className="flex flex-col gap-3">
                        {taskList.map((item, index) => (
                            <div key={index} className={`${item.completed ? 'hidden' : 'flex'} flex-row w-full justify-between items-center text-white font-extrabold p-3 bg-yellow-500 bg-opacity-20 rounded-lg`} style={{ fontFamily: "'Brush Script MT', cursive" }}>
                                <div className="flex flex-row gap-3 items-center">
                                    <div className={`${index !== 0 && index !== 1 ? 'flex' : 'hidden'} w-8 h-8 rounded-full bg-white text-black justify-center items-center`}>
                                        <RiTwitterXLine />
                                    </div>
                                    <Image
                                        src="/images/telegram.png"
                                        width={32}
                                        height={32}
                                        alt="Spin Icon"
                                        className={`${index === 0 || index === 1 ? 'flex' : 'hidden'}`}
                                    />
                                    <div className="flex flex-col gap-1">
                                        <div className="text-base font-extrabold">
                                            {item.title} {index <= 2 ? <span className="text-yellow-300 font-extrabold">(A)</span> : null}
                                        </div>
                                        <div className="flex flex-row gap-2">
                                            <div className="flex flex-row gap-1 items-center">
                                                <FaMoon size={15} color="yellow" />
                                                <div className="text-sm font-extrabold flex text-white text-opacity-90">
                                                    {item.count}
                                                </div>
                                            </div>
                                            <div className={`${index === 6 ? 'flex' : 'hidden'} items-center gap-1`}>
                                                <div style={{ fontFamily: "'Brush Script MT', cursive" }} className="font-extrabold text-white flex">
                                                    +
                                                </div>
                                                <Image
                                                    src="/images/spinicon.png"
                                                    width={15}
                                                    height={15}
                                                    alt="Spin Icon"
                                                />
                                                <div style={{ fontFamily: "'Brush Script MT', cursive" }} className="text-sm font-extrabold text-white flex items-start">
                                                    1
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <Link href={item.path} target="_blank" rel="noopener noreferrer" className="p-1 rounded-full items-center gap-1 bg-gradient-to-r from-cyan-500 to-blue-500 text-xs font-extrabold flex justify-center text-white" onClick={() => checkMembership(item.member, index)}>
                                    <div className={`${status[index] === 'verify' ? '' : 'hidden'} flex gap-1 items-center`}>
                                        <IoMdSettings className="animate-spin" /> Verify
                                    </div>
                                    <div className={status[index] === 'try-again' ? '' : 'hidden'}>
                                        Try Again
                                    </div>
                                    <div className={`px-2 text-sm ${status[index] === 'try-again' || status[index] === 'verify' || status[index] === 'ok' ? 'hidden' : ''}`}>
                                        Start
                                    </div>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="w-full p-4">
                    <h1 className="text-lg font-extrabold mb-4 text-yellow-300" style={{ fontFamily: "'Brush Script MT', cursive" }}>
                        Completed:
                    </h1>

                    <div className="flex flex-col gap-3">
                        {taskList.map((item, index) => (
                            <div key={index} className={`${item.completed ? 'flex' : 'hidden'} flex-row w-full justify-between items-center text-white font-extrabold p-3 bg-yellow-500 bg-opacity-20 rounded-lg`} style={{ fontFamily: "'Brush Script MT', cursive" }}>
                                <div className="flex flex-row gap-3 items-center">
                                    <div className={`${index !== 0 && index !== 1 ? 'flex' : 'hidden'} w-8 h-8 rounded-full bg-white text-black justify-center items-center`}>
                                        <RiTwitterXLine />
                                    </div>
                                    <Image
                                        src="/images/telegram.png"
                                        width={32}
                                        height={32}
                                        alt="Spin Icon"
                                        className={`${index === 0 || index === 1 ? 'flex' : 'hidden'}`}
                                    />
                                    <div className="flex flex-col gap-1">
                                        <div className="text-base font-extrabold">
                                            {item.title} {index <= 2 ? <span className="text-yellow-300 font-extrabold">(A)</span> : null}
                                        </div>
                                        <div className="flex flex-row gap-2">
                                            <div className="flex flex-row gap-1 items-center">
                                                <FaMoon size={15} color="yellow" />
                                                <div className="text-sm font-extrabold flex text-white text-opacity-90">
                                                    {item.count}
                                                </div>
                                            </div>
                                            <div className={`${index === 6 ? 'flex' : 'hidden'} items-center gap-1`}>
                                                <div style={{ fontFamily: "'Brush Script MT', cursive" }} className="font-extrabold text-white flex">
                                                    +
                                                </div>
                                                <Image
                                                    src="/images/spinicon.png"
                                                    width={15}
                                                    height={15}
                                                    alt="Spin Icon"
                                                />
                                                <div style={{ fontFamily: "'Brush Script MT', cursive" }} className="text-sm font-extrabold text-white flex items-start">
                                                    1
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <FaCheck size={25} color="green"/>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </motion.div>
    )
}