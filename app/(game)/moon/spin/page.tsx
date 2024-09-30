"use client"
import { MdEmail } from "react-icons/md";
import Image from "next/image";
import { motion } from 'framer-motion'; 
import { useState, useEffect, useCallback } from "react";
import axios from "axios";
import Prize from "@/components/Prize";

export default function Spin() {
    const username = "full_stack_dev_010"
    const [rotation, setRotation] = useState(0);  
    const [star, setStar] = useState(false)
    const [coin, setCoin] = useState(false)
    const [spin, setSpin] = useState(false)
    const [visible, setVisible] = useState(false)
    const [value, setValue] = useState(0)
    const [currentUser, setCurrentUser] = useState<User | null>(null)
    useEffect(() => {  
        axios.get(`http://localhost:5000/moverz/currentuser/${username}`)
            .then(res => setCurrentUser(res.data))
            .catch(err => console.log(err))
    }, [currentUser]);

    useEffect(() => {  
        if (currentUser) {  
            const firstLoginDate = new Date(currentUser.spinDate);  
            const currentDate = new Date();
            const firstLoginTimestamp = firstLoginDate.getTime();  
            const currentTimestamp = currentDate.getTime();  
            
            const differenceInMilliseconds = currentTimestamp - firstLoginTimestamp;
            const totalSeconds = Math.floor(differenceInMilliseconds / 1000);  
            const restSec  = Math.floor(totalSeconds / 3600)
            if(restSec === 1 || restSec > 1) {
                addSpin()
            }
        }  
    }, [currentUser]);

    const addSpin = useCallback(async () => {  
        if (currentUser) {  
            const data = {  
                username: currentUser.username,  
                spin: currentUser.spin + 1,  
                star: currentUser.star,  
                coin: currentUser.coin,  
                spinDate: new Date().toUTCString()  
            };   
            await axios.post('http://localhost:5000/moverz/add/spin', data)  
                .then(res => console.log(res.data))  
                .catch(err => console.error(err));  
        }  
    }, [currentUser]);

    const spinWheel = () => {
        if(currentUser?.spin !== 0) {    
            const randomRotation = Math.floor(Math.random() * 360);  
            setRotation((prevRotation) => {  
              const newRotation = prevRotation + randomRotation + 3600;  
              const rotateCnt = newRotation / 360;  
              const rotateCount = Math.floor(rotateCnt); // Using Math.floor instead of parseInt  
              const restCnt = newRotation - 360 * rotateCount + 18;  
              const moreCount = Math.floor(restCnt / 36); // Now this will log the correct value based on the newly calculated rotation  
    
              let star = 0
              let coin = 0
              let spin = 0
    
              switch(moreCount) {
                case 0:
                    star = 1000
                    break
                case 1:
                    coin = 5400
                    break
                case 2:
                    star = 7000
                    break
                case 3:
                    star = 6000
                    break
                case 4:
                    coin = 3240
                    break
                case 5:
                    star = 5000
                    break
                case 6:
                    star = 4000
                    break
                case 7:
                    coin = 1080
                    break
                case 8:
                    spin = 1
                    break
                case 9:
                    star = 2000
                    break
                case 10:
                    star = 1000
                    break
              }
              setTimeout(async () => {
                  if(star !== 0 && currentUser) {
                    const data = {  
                        username: currentUser.username,  
                        spin: currentUser.spin - 1,
                        star: currentUser.star + star,
                        coin: currentUser.coin,
                        spinDate: new Date().toUTCString()
                    }; 
                    await axios.post('http://localhost:5000/moverz/add/spin', data)  
                    .then(() => {
                        setStar(true)
                        setValue(star)
                        setTimeout(() => {setStar(false)}, 3000)
                    })  
                    .catch(err => console.error(err)); 
                  }
                  if(coin !== 0 && currentUser) {
                    const data = {  
                        username: currentUser.username,  
                        spin: currentUser.spin - 1,
                        star: currentUser.star,
                        coin: currentUser.coin + coin,
                        spinDate: new Date().toUTCString()
                    }; 
                    axios.post('http://localhost:5000/moverz/add/spin', data)  
                    .then(() => {
                        setCoin(true)
                        setValue(coin)
                        setTimeout(() => {setCoin(false)}, 3000)
                    })  
                    .catch(err => console.error(err)); 
                  }
                  if(spin !== 0 && currentUser) {
                    const data = {  
                        username: currentUser.username,  
                        spin: currentUser.spin,
                        star: currentUser.star,
                        coin: currentUser.coin,
                        spinDate: new Date().toUTCString()
                    }; 
                    axios.post('http://localhost:5000/moverz/add/spin', data)  
                    .then(() => {
                        setSpin(true)
                        setValue(spin)
                        setTimeout(() => {setSpin(false)}, 3000)
                    })  
                    .catch(err => console.error(err)); 
                  }
              }, 5000)
    
              return newRotation; // Return the updated rotation value  
            });  
        } else {
            setVisible(true)
        }
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
            <div className="flex flex-col">
                <div className="w-full max-w-sm mx-auto flex flex-row justify-between py-8 px-4">
                    <div className="flex ring-1 gap-3 justify-center ring-yellow-500 ring-opacity-40 rounded-full py-2 bg-yellow-500 bg-opacity-20 px-4">
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
                    <div className="flex ring-1 gap-3 justify-center ring-yellow-500 ring-opacity-40 rounded-full py-2 px-4 bg-yellow-500 bg-opacity-20">
                        <div className="flex flex-row gap-2 items-center">
                            <div style={{ fontFamily: "'Brush Script MT', cursive"}} className="text-base font-bold flex items-start text-yellow-300 text-opacity-90">
                                {currentUser?.spin} Spin
                            </div>
                            <Image
                                src="/images/spinicon.png"
                                width={22}
                                height={22}
                                alt="Spin Icon"
                            />
                        </div>
                    </div>
                </div>
                <div className="w-full flex items-center justify-center h-[70vh]">
                    <div className="relative">
                        <div style={{ backgroundImage: "url('/images/spinner.png')", backgroundSize: "100%", backgroundRepeat: "no-repeat", transform: `rotate(${rotation}deg)`, transition: '5s'}} className="rounded-full w-72  h-72 xs:w-80 xs:h-80 flex justify-center items-center">
                        </div>
                        <div className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-2/3 absolute" onClick={spinWheel}>
                            <Image
                                src="/images/needle.png"
                                width={75}
                                height={75}
                                alt="Spin Needle"
                            />                     
                        </div>
                    </div>
                </div>

                {star ? <Prize count={value} state = "star"/> : null}
                {coin ? <Prize count={value} state = "coin"/> : null}
                {spin ? <Prize count={value} state = "spin"/> : null}


                <div className={`${visible ? 'flex' : 'hidden'} absolute top-0 left-0 w-full h-screen bg-gray-700 bg-opacity-45 justify-center items-center px-5`}>
                    <div className="w-full flex flex-col rounded-lg bg-[#1B1B1B] p-5 border border-solid border-gray-400 border-opacity-20">
                        <div className="flex justify-end">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="10" height="10" overflow="visible" stroke="white" strokeWidth="10" strokeLinecap="round" onClick={() => setVisible(false)}>
                                <line x1="0" y1="0" x2="50" y2="50" />
                                <line x1="50" y1="0" x2="0" y2="50" />
                            </svg>
                        </div>
                        <div className="flex flex-col justify-center gap-2 items-center">
                            <Image 
                                src="/images/spinicon.png"
                                width={100}
                                height={100}
                                alt="Coin"
                            />
                            <div style={{ fontFamily: "'Brush Script MT', cursive"}} className="font-bold text-lg text-center text-white mt-3">
                                You can get spin 1 after an hour
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        </motion.div>
    )
}