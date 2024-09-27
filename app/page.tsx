'use client'

import { useEffect } from "react";
import { useRouter } from 'next/navigation';
import Image from "next/image";
import Script from "next/script";
export default function Home() { 

  const router = useRouter();
  useEffect(() => {
       if (typeof window !== 'undefined') {  
      if (window.Telegram && window.Telegram.WebApp) {  
        const initDataString = window.Telegram.WebApp.initData;  
        const tg = window.Telegram.WebApp;
        tg.expand();
    
        tg.BackButton.show();
        if (initDataString) {  
          const params = new URLSearchParams(initDataString);  
        }  
      } else {  
        console.error('Telegram Web App SDK is not available');  
      }  
    }  
    const timer = setTimeout(() => {  
      router.push('/moon');  
    }, 5000);  

    // Cleanup timer on component unmount  
    return () => clearTimeout(timer);  
  },[router])

  return (  
    <div className="relative h-screen flex flex-col items-center justify-center max-w-sm mx-auto">
      <Script  
        src="https://telegram.org/js/telegram-web-app.js"  
        strategy="afterInteractive"  
        onLoad={() => {  
          console.log("Telegram Web App SDK loaded");  
        }}  
      />  
      <div className="flex flex-col items-center justify-center mb-20 bg-center text-white px-5">  
        <div className="mb-12 w-52 h-52 image-with-shadow">
          <Image
              src="/images/avatar.png"
              width={200}
              height={200}
              alt="Yello Moon"
          />,
        </div>
        <h1 className="text-5xl font-bold text-transparent" style={{translate: "none", rotate: "none", scale: "none", transform: "translate(0px, 0%)", opacity: "1", backgroundImage: "linear-gradient(to top, #FFFFFF 25%, rgb(255, 255, 130) 73%)", fontFamily: "SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace", backgroundClip: "text", fontWeight:"700", lineHeight: "100%"}}>Moon Moverz</h1>  
        <p className="text-lg sm:text-xl mt-2 shadow-lg text-yellow-200 text-center" style={{fontFamily: "SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace"}}>The First Memecoin Built With  Classic NFT  on Movement Network</p>  
      </div>  
      <div className="absolute bottom-5">
        <p className="text-base sm:text-lg text-yellow-200" style={{fontFamily: "SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace"}}>Moonmoverz.co - v1.0</p>  
      </div>
    </div>
  );    
}