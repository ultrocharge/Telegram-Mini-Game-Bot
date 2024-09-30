import { FaCheck } from "react-icons/fa";
import Image from "next/image";
import { FaMoon } from "react-icons/fa";
export default function Alert(props:any) {
    return (
        <div className="max-w-sm mx-auto absolute px-5 top-5 left-0 bg-yellow-500 rounded-lg text-white font-extrabold py-2 w-full flex gap-2 text-2xl items-center" style={{ fontFamily: "'Brush Script MT', cursive"}}>
            <FaCheck size={30} color="green"/>
            <FaMoon size={20} style={{opacity: '70%'}} color="yellow"/>
            <div>{props.count}</div>
            {props.day === 7 ? (
                <div className="flex flex-row gap-1 items-center">
                    <div>
                        <Image
                            src="/images/spinicon.png"
                            width={25}
                            height={25}
                            alt="SpinIcon"
                        />
                    </div>
                    <div>1</div>
                </div>
            ) : null}
        </div>
    )
}