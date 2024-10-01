import { NextApiRequest, NextApiResponse } from 'next';
import bodyParser from 'body-parser';
import axios from 'axios';

export const config = {
  api: {
    bodyParser: false,
  },
};  

const getTelegramID = (req, res) => {
  let body = '';

  req.on('data', chunk => {
    body += chunk.toString(); // Convert Buffer to string
  });

  req.on('end', () => {
    const update = JSON.parse(body);
    
    if (update.message && update.message.from) {
      const userId = update.message.from.id; // Get Telegram user ID
      console.log('User ID:', userId);
      
      // Send a message back to the user
      const chatId = update.message.chat.id;
      const message = `Your Telegram ID is ${userId}`;
      
      sendMessage(chatId, message);
      
      res.status(200).send('OK');
    } else {
      res.status(400).send('Invalid update');
    }
  });
};

const sendMessage = async (chatId:Number, message:String) => {
  const botToken = process.env.TELEGRAM_BOT_TOKEN; // Store your bot token in an environment variable
  const url = `https://api.telegram.org/bot7679497504:AAHUn4Kq5kjY1rqiw7M_PzxH9D8JipElEwQ/sendMessage`;

  await axios.post(url, {
    chat_id: chatId,
    text: message,
  });
};

export default getTelegramID;