export {};  

declare global {  
  interface Window {
    Telegram: {
      WebApp: {
        initDataUnsafe: {
          user?: {
            id: number;
            username?: string;
            first_name?: string;
            last_name?: string;
          };
        };
      };
    };
  }

  interface TelegramUser {
    id: number;
    username?: string; // Username can be undefined
  }

  interface User {
    username: string,
    star: number,
    coin: number,
    spin: number,
    spinDate: Date,
    claimDate: Date,
    week: number,
    day: number,
    tasks: {
        channel : boolean,
        group : boolean
    },
    date: Date
  }

  interface PrizeProps {  
    count: number | string; 
    state: string;
  }  

  interface AlertProps {  
    count: number | string;
    day?: number; 
  }  
}  