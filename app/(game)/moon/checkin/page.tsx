"use client"
import { FaMoon } from "react-icons/fa";
import Image from "next/image";
import { useEffect, useState } from "react";
import { motion } from 'framer-motion'; 
import axios from 'axios'
import { FaCheck } from "react-icons/fa";
import Alert from "@/components/Alert";

export default function CheckIn() {
    const username = "full_stack_dev_010"
    const [currentUser, setCurrentUser] = useState<User | null>(null)
    const [restDays, setRestDays] = useState(0)
    const [alert, setAlert] = useState(false)
    useEffect(() => {  
        const fetchData = async() => {
            await axios.get(`https://telegram-mini-game-backend-kf6b.vercel.app//moverz/currentuser/${username}`)
                .then(res => setCurrentUser(res.data))
                .catch(err => console.log(err))
        }

        fetchData()
    }, [currentUser]);

    useEffect(() => {  
        if (currentUser) {  
            const firstLoginDate = new Date(currentUser.claimDate);  
            const currentDate = new Date();
            const firstLoginTimestamp = firstLoginDate.getTime();  
            const currentTimestamp = currentDate.getTime();  
            
            const differenceInMilliseconds = currentTimestamp - firstLoginTimestamp;
            const totalSeconds = Math.floor(differenceInMilliseconds / 1000);  
            const restSec  = Math.floor(totalSeconds / 3600)
            setRestDays(restSec)
        }  
    }, [currentUser]);
    
    const getPrize = async () => {
        if (currentUser) {
            const data = {  
                username: currentUser.username,  
                week: currentUser.week,
                day: currentUser.day,
                spin: currentUser.spin,
                claimDate: new Date().toUTCString(),
                star: 1000
            };  
            await axios.post('https://telegram-mini-game-backend-kf6b.vercel.app//moverz/add/claim', data)  
                .then(res => console.log(res.data))  
                .catch(err => console.error(err));  
        }
        showAlert()
    }

    const showAlert = () => {
        setAlert(true)
        setTimeout(() => {
            setAlert(false  )
        }, 2000)
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
            <div className="flex flex-col justify-between h-screen max-w-sm mx-auto">
                <div>
                    <div className="w-full flex flex-col gap-2 border-b border-stone-700 p-4 justify-between items-center">
                        <Image
                            src="/images/checkin.png"
                            width={35}
                            height={35}
                            alt="CheckIn"
                        />
                        <div style={{ fontFamily: "'Brush Script MT', cursive", textShadow: "1px 10px 50px yellow"}} className="text-xl font-extrabold text-yellow-300 text-opacity-90">
                            Daily Check-In
                        </div>
                        <div style={{ fontFamily: "'Brush Script MT', cursive", textShadow: "1px 1px 50px yellow"}} className="text-[15px] font-bold text-white text-center">
                            Check-in every day <span style={{ fontFamily: "'Brush Script MT', cursive", textShadow: "-50px 100px 50px yellow"}} className="text-base font-bold text-yellow-300 text-opacity-90">(00:00 AM UTC)</span> to get
                        </div>

                        <div className="flex gap-1 justify-center">
                            <div className="flex flex-row gap-1 items-center">
                                <FaMoon size={25} style={{opacity: '70%'}} color="yellow"/>
                                <div style={{ fontFamily: "'Brush Script MT', cursive"}} className="text-base font-bold text-white flex items-start">
                                    Point &
                                </div>
                            </div>
                            <div className="flex flex-row gap-1 items-center">
                                <Image
                                    src="/images/spinicon.png"
                                    width={23}
                                    height={23}
                                    alt="SpinIcon"
                                />
                                <div style={{ fontFamily: "'Brush Script MT', cursive"}} className="text-base font-bold text-white flex items-start">
                                    Spins
                                </div>
                            </div>
                        </div>
                        <div className="grid grid-cols-4 gap-3 w-full">
                            {
                              currentUser &&  Array.from({ length: 8 }, (_, i) => (
                                    <div key={i+1} style={{ fontFamily: "'Brush Script MT', cursive"}} className={`${ i + 1 === currentUser?.week ? 'ring-2 ring-yellow-500' : null} text-sm font-extrabold text-yellow-300 text-opacity-8 text-center 0 flex items-start rounded-xl p-3 ${i + 1 < currentUser?.week ? 'bg-yellow-500 bg-opacity-20' : 'bg-yellow-500 bg-opacity-30'}`}>
                                        Week {i+1}
                                    </div>
                                ))
                            }
                        </div>
                    </div>

                    <div className="w-full p-4">
                        <div className="grid grid-cols-4 gap-3">
                            {
                              currentUser &&  Array.from({ length: 7}, (_, i) => (
                                    <div key={i + 1} style={{ fontFamily: "'Brush Script MT', cursive"}} className={`${i + 1 === 7 ? 'col-span-2' : null} text-sm font-extrabold text-white flex flex-col gap-2 items-center justify-center ${ i + 1 === currentUser?.day ? 'ring-1 ring-yellow-500' : null} rounded-xl p-2 ${i + 1 < currentUser?.day ? 'bg-yellow-500 bg-opacity-20' : 'bg-yellow-500 bg-opacity-30'}`}>
                                        <div>Day {i + 1}</div>
                                        <div className="flex flex-row gap-2">
                                            <div className="flex flex-col justify-center items-center gap-2">
                                                <div className="flex items-center">
                                                    <FaMoon size={20} style={{opacity: '70%'}} color="yellow"/>
                                                </div>
                                                {i + 1 < currentUser?.day ? <FaCheck size={15} color="green"/> : <div>1,000</div>}
                                            </div>
                                            { i + 1 === 7 ? (
                                                <>
                                                    <div>+</div>
                                                    <div className="flex flex-col gap-2 items-center justify-center">
                                                        <Image
                                                            src="/images/spinicon.png"
                                                            width={20}
                                                            height={20}
                                                            alt="SpinIcon"
                                                        />
                                                        <div>1 Spin</div>
                                                    </div>
                                                </>
                                            ): null}
                                        </div>
                                        
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
                <div className="w-full flex justify-center py-5">
                    <div className={`text-lg rounded-xl font-extrabold flex items-center justify-center py-1 w-52 ${restDays < 24 ? 'cursor-not-allowed bg-yellow-500 bg-opacity-40' : 'bg-yellow-500 bg-opacity-90 cursor-pointer'}`} style={{ fontFamily: "'Brush Script MT', cursive"}} onClick={restDays === 24 || restDays > 24 ? getPrize : () => {return}}>Claim</div>
                </div>
                {alert ? <Alert count={1000} day={currentUser?.day}/> : null}
            </div>
        </motion.div>
    )
}