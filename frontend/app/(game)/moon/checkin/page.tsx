import { FaMoon } from "react-icons/fa";

export default function CheckIn() {
    const week = 1
    const day = 5
    return (
        <div className="flex flex-col justify-between h-screen max-w-sm mx-auto">
            <div>
                <div className="w-full flex flex-col gap-3 border-b border-stone-700 p-4 justify-between items-center">
                    <img src="/images/checkin.png" className="w-8 h-8"/>
                    <div style={{ fontFamily: "'Brush Script MT', cursive", textShadow: "1px 10px 50px yellow"}} className="text-xl font-extrabold text-yellow-300 text-opacity-90">
                        Daily Check-In
                    </div>
                    <div style={{ fontFamily: "'Brush Script MT', cursive", textShadow: "1px 1px 50px yellow"}} className="text-base font-bold text-white text-center">
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
                            <img src="/images/spinicon.png"/>
                            <div style={{ fontFamily: "'Brush Script MT', cursive"}} className="text-base font-bold text-white flex items-start">
                                Spins
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-4 gap-3 w-full">
                        {
                            Array.from({ length: 8 }, (_, i) => (
                                <div key={i+1} style={{ fontFamily: "'Brush Script MT', cursive"}} className={`${ i + 1 === week ? 'ring-2 ring-yellow-500' : null} text-sm font-extrabold text-yellow-300 text-opacity-8 text-center 0 flex items-start rounded-xl p-3 bg-yellow-500 bg-opacity-20`}>
                                    Week {i+1}
                                </div>
                            ))
                        }
                    </div>
                </div>

                <div className="w-full p-4">
                    <div className="grid grid-cols-4 gap-3">
                        {
                            Array.from({ length: 7}, (_, i) => (
                                <div key={i + 1} style={{ fontFamily: "'Brush Script MT', cursive"}} className={`${i + 1 === 7 ? 'col-span-2' : null} text-sm font-extrabold text-white flex flex-col gap-2 items-center justify-center ${ i + 1 === day ? 'ring-1 ring-yellow-500' : null} rounded-xl p-2 bg-yellow-500 bg-opacity-20`}>
                                    <div>Day {i + 1}</div>
                                    <div className="flex flex-row gap-2">
                                        <div className="flex flex-col justify-center items-center gap-2">
                                            <div className="flex items-center">
                                                <FaMoon size={20} style={{opacity: '70%'}} color="yellow"/>
                                            </div>
                                            <div>1,000</div>
                                        </div>
                                        { i + 1 === 7 ? (
                                            <>
                                                <div>+</div>
                                                <div className="flex flex-col gap-2 items-center justify-center">
                                                    <img src="/images/spinicon.png"/>
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
                <div className="bg-yellow-500 bg-opacity-65 text-lg rounded-xl font-extrabold flex items-center justify-center py-1 w-52" style={{ fontFamily: "'Brush Script MT', cursive"}}>Claim</div>
            </div>
        </div>
    )
}