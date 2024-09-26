'use client'

import { useEffect } from "react";
import { useRouter } from 'next/navigation';

export default function Home() { 

  const router = useRouter();
  useEffect(() => {
    const timer = setTimeout(() => {  
      router.push('/game');  
    }, 6000);  

    // Cleanup timer on component unmount  
    return () => clearTimeout(timer);  
  },[router])

  return (  
    <div className="relative h-screen flex flex-col items-center justify-center">
      <div className="flex flex-col items-center justify-center mb-20 bg-center text-white px-5">  
        <img src="/images/avatar.png" alt="MoonCoin Logo" className="mb-12 w-52 h-52 image-with-shadow"/>  
        <h1 className="text-5xl font-bold text-transparent" style={{translate: "none", rotate: "none", scale: "none", transform: "translate(0px, 0%)", opacity: "1", backgroundImage: "linear-gradient(to top, #FFFFFF 25%, rgb(255, 255, 130) 73%)", fontFamily: "SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace", backgroundClip: "text", fontWeight:"700", lineHeight: "100%"}}>Moon Moverz</h1>  
        <p className="text-lg sm:text-xl mt-2 shadow-lg text-yellow-200 text-center" style={{fontFamily: "SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace"}}>The First Memecoin Built With  Classic NFT  on Movement Network</p>  
      </div>  
      <div className="absolute bottom-5">
        <p className="text-base sm:text-lg text-yellow-200" style={{fontFamily: "SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace"}}>Moonmoverz.co - v1.0</p>  
      </div>
    </div>
  );    
}