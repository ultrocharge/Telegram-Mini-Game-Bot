import { FaCheck } from "react-icons/fa";
import Image from "next/image";
import { FaMoon } from "react-icons/fa";
export default function Prize(props:any) {
    return (
        <div className="max-w-sm mx-auto absolute px-5 top-5 left-1 bg-gray-500 bg-opacity-90 rounded-lg text-white font-extrabold py-2 w-full flex gap-2 text-2xl items-center" style={{ fontFamily: "'Brush Script MT', cursive"}}>
            <FaCheck size={30} color="green"/>
            {props.state === 'star'? <FaMoon size={20} color="yellow"/> : null}
            {props.state === 'coin'? <Image
                src="/images/avatar.png"
                width={25}
                height={25}
                alt="Moon"
            /> : null}
            {props.state === 'spin'? <Image
                src="/images/spinicon.png"
                width={23}
                height={23}
                alt="SpinIcon"
            /> : null}
            <div>{props.count}</div>
        </div>
    )
}