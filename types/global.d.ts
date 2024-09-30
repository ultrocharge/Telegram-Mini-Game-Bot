export {};  

declare global {  
  interface User {
    username: string,
    star: number,
    coin: number,
    spin: number,
    spinDate: Date,
    claimDate: Date,
    week: number,
    day: number,
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