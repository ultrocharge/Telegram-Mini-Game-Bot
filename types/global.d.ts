export {};  

declare global {  
  interface Window {  
    Telegram: {  
      WebApp: {  
        expand: () => void;  
        BackButton: {  
          show: () => void;  
          onClick: (callback: () => void) => void;  
        };  
        // Add any other Telegram WebApp APIs you might be using  
      };  
    };  
  }  
}  