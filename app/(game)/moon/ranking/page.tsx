import Image from "next/image";

const rankingList = [
    {
        username: 'Rokibul',
        ranking: 1,
        count : 10
    },
    {
        username: 'Sunni Danjuma Ali',
        ranking: 2,
        count : 30
    },
    {
        username: 'Recehana',
        ranking: 3,
        count : 12
    },
    {
        username: 'Daniel Albes',
        ranking: 4,
        count : 10
    },
    {
        username: 'Daniel Albes',
        ranking: 4,
        count : 10
    },
    {
        username: 'Daniel Albes',
        ranking: 4,
        count : 10
    },
    {
        username: 'Daniel Albes',
        ranking: 4,
        count : 10
    },
]
export default function Ranking() {
    const username = 'full_stack_dev'
    const count = 0
    const ranking = '99+'
    return (
        <div className="w-full max-w-sm mx-auto">
            <div className="w-full flex flex-col gap-3 border-b border-stone-700 p-4 justify-between">
                <div className="flex flex-row gap-2 items-center justify-center">
                    <div>
                        <Image
                            src="/images/moon.png"
                            width={25}
                            height={25}
                            alt="this is bot app avatar"
                        />
                    </div>
                    <div style={{ fontFamily: "'Brush Script MT', cursive", textShadow: "1px 1px 60px yellow"}} className="text-xl font-extrabold text-yellow-300 text-opacity-90">
                        Leaderboard
                    </div>
                </div>

                <div className="flex flex-row gap-3 w-full justify-start items-center gradient-border text-white font-extrabold p-3" style={{ fontFamily: "'Brush Script MT', cursive"}}>
                    <div className="w-8 h-8 rounded-full bg-yellow-300 text-[#222] flex justify-center items-center">
                        {username.slice(0,2)}
                    </div>
                    <div className="flex flex-col gap-1">
                        <div className="text-lg font-extrabold">
                            {username}
                        </div>
                        <div className="flex flex-row gap-2">
                            <div className="flex flex-row gap-1">
                                <div className="flex items-center">
                                    <Image
                                        src="/images/avatar.png"
                                        width={16}
                                        height={16}
                                        alt="this is bot app avatar"
                                    />
                                </div>
                                <div style={{ fontFamily: "'Brush Script MT', cursive"}} className="text-sm font-extrabold flex items-start text-yellow-300 text-opacity-90">
                                    {count}
                                </div>
                            </div>
                            <div className="text-xs">|</div>
                            <div className="text-sm font-extrabold flex items-start text-gray-300 text-opacity-90">Rank {ranking}</div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="w-full p-4">
                <h1 className="text-lg font-extrabold text-white mb-4" style={{ fontFamily: "'Brush Script MT', cursive"}}>
                    Holder :
                </h1>

                <div className="flex flex-col gap-3">
                        
                    {rankingList.map((item, index) => (
                        <div key={index} className="flex flex-row gap-3 w-full justify-start items-center text-white font-extrabold p-3 bg-yellow-500 bg-opacity-20 rounded-lg  " style={{ fontFamily: "'Brush Script MT', cursive"}}>
                            {item.ranking === 1 ? <Image
                                src="/images/gold.png"
                                width={18}
                                height={18}
                                alt="GoldMedal"
                            /> 
                            : 
                            null 
                            }
                            {item.ranking === 2 ? <Image
                                src="/images/silver.png"
                                width={18}
                                height={18}
                                alt="Silver Medal"
                            /> 
                            : 
                            null 
                            }
                            {item.ranking === 3 ? <Image
                                src="/images/brozen.png"
                                width={18}
                                height={18}
                                alt="Brozen Medal"
                            /> 
                            : 
                            null 
                            }
                            {item.ranking > 3 ? <Image
                                src="/images/platinum.png"
                                width={18}
                                height={18}
                                alt="Platinum Medal"
                            /> 
                            : 
                            null 
                            }
                            <div className="w-8 h-8 rounded-full bg-yellow-300 text-[#222] flex justify-center items-center">
                                {item.username.slice(0,2)}
                            </div>
                            <div className="flex flex-col gap-1">
                                <div className="text-lg font-extrabold">
                                    {item.username}
                                </div>
                                <div className="flex flex-row gap-2">
                                    <div className="flex flex-row gap-1">
                                        <div className="flex items-center">
                                            <Image
                                                src="/images/avatar.png"
                                                width={16}
                                                height={16}
                                                alt="this is bot app avatar"
                                            />
                                        </div>
                                        <div style={{ fontFamily: "'Brush Script MT', cursive"}} className="text-sm font-extrabold flex items-start text-yellow-300 text-opacity-90">
                                            {item.count}
                                        </div>
                                    </div>
                                    <div className="text-xs">|</div>
                                    <div className="text-sm font-extrabold flex items-start text-gray-300 text-opacity-90">Rank {item.ranking}</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}