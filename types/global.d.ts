export {};  

declare global {  
  interface Window {  
    Telegram: {  
      WebApp: {  
        expand: () => void;  
        BackButton: {  
          show: () => void;  
        };  
        // Add any other Telegram WebApp APIs you might be using  
      };  
    };  
  }  
}  