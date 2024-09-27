import { MdEmail } from "react-icons/md";
export default function Spin() {
    const count = 0
    return (
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
                        <img src="/images/spinicon.png"/>
                        <div style={{ fontFamily: "'Brush Script MT', cursive"}} className="text-base font-bold text-white flex items-start">
                            1 Spin
                        </div>
                    </div>
                </div>
                <div className="flex ring-1 gap-3 justify-center ring-yellow-500 ring-opacity-40 rounded-full py-2 px-4 bg-yellow-500 bg-opacity-20">
                    <div className="flex flex-row gap-2 items-center">
                        <div style={{ fontFamily: "'Brush Script MT', cursive"}} className="text-base font-bold flex items-start text-yellow-300 text-opacity-90">
                            {count} Spin
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full flex items-center justify-center h-[70vh]">
                <div className="relative">
                    <div style={{ backgroundImage: "url('/images/spinner.png')", backgroundSize: "100%", backgroundRepeat: "no-repeat"}} className="spinner rounded-full w-72  h-72 xs:w-80 xs:h-80 flex justify-center items-center">
                    </div>
                    <img src="/images/needle.png" className="w-20 h-20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-2/3 absolute"/>                        
                </div>
            </div>
        </div>
    )
}