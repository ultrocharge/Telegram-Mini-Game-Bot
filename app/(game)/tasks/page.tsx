import Image from "next/image"
import { FaMoon } from "react-icons/fa";
import { RiTwitterXLine } from "react-icons/ri";
const taskList = [
    {
        title: 'Join Mooncoin group',
        count : 10000
    },
    {
        title: 'Join Mooncoin channel',
        count : 10000
    },
    {
        title: 'Follow Moocoin',
        count : 5000
    },
    {
        title: 'Retweet post',
        count : 5000
    },
    {
        title: 'Follow Eclipse',
        count : 5000
    },
    {
        title: 'Follow Mooncoin Dev',
        count : 5000
    },
    {
        title: 'Retweet Big News',
        count : 5000
    },
    {
        title: 'Comment Mooncoin',
        count : 5000
    }
]

export default function Tasks() {
    const count = 0
    return (
        <div className="max-w-sm mx-auto">
            <div className="w-full flex flex-col gap-5 border-b border-stone-700 py-5 justify-between px-4 bg-[#1B1B1B] sticky top-0 left-0">
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
                    <div className="flex flex-1 justify-center gap-3 ring-1 ring-stone-700 rounded-2xl py-1 bg-gray-600 bg-opacity-20" style={{boxShadow:'-50px 1px 200px yellow'}}>
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
                <div style={{ fontFamily: "'Brush Script MT', cursive"}} className="text-xs font-extrabold text-white text-center">The verification process may take up to 15-30 minutes</div>
            </div>
            <div className="w-full p-4">
                <h1 className="text-lg font-extrabold mb-4 text-yellow-300" style={{ fontFamily: "'Brush Script MT', cursive"}}>
                    New Tasks :
                </h1>

                <div className="flex flex-col gap-3">
                        
                    {taskList.map((item, index) => (
                        <div key={index} className="flex flex-row w-full justify-between items-center text-white font-extrabold p-3 bg-yellow-500 bg-opacity-20 rounded-lg" style={{ fontFamily: "'Brush Script MT', cursive"}}>
                            <div className="flex flex-row gap-3 items-center" >
                                <div className={`${index !== 0 && index !==1 ? 'flex' : 'hidden'} w-8 h-8 rounded-full bg-white text-black justify-center items-center`}>
                                    <RiTwitterXLine />
                                </div>
                                <Image
                                    src="/images/telegram.png"
                                    width={32}
                                    height={32}
                                    alt="Spin Icon"
                                    className={`${index === 0 || index ===1 ? 'flex' : 'hidden'}`}
                                />
                                <div className="flex flex-col gap-1">
                                    <div className="text-base font-extrabold">
                                        {item.title} {index === 0 || index === 1 || index === 2 ? <span className="text-yellow-300 font-extrabold">(A)</span> : null}
                                    </div>
                                    <div className="flex flex-row gap-2">
                                        <div className="flex flex-row gap-1 items-center">
                                            <FaMoon size={15} color="yellow"/>
                                            <div className="text-sm font-extrabold flex text-white text-opacity-90">{item.count}</div>
                                        </div>
                                        <div className={`${index === 6 ? 'flex' : 'hidden'} items-center gap-1`}>
                                            <div style={{ fontFamily: "'Brush Script MT', cursive"}} className="font-extrabold text-white flex">
                                                +
                                            </div>
                                            <Image
                                                src="/images/spinicon.png"
                                                width={15}
                                                height={15}
                                                alt="Spin Icon"
                                            />
                                            <div style={{ fontFamily: "'Brush Script MT', cursive"}} className="text-sm font-extrabold text-white flex items-start">
                                                1
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <button className="py-1 px-3 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 text-sm font-extrabold flex justify-center items-end text-white">Start</button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}