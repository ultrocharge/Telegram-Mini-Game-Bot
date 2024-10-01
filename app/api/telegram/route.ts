import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const update = await req.json();
  
  // Get the message and user id
  const chatId = update.message.chat.id; // Telegram user ID
  const userId = update.message.from.id;
  console.log('call api/telegram')
  console.log('userID', userId)

  // Optional: send a message back to the user
  await fetch(`https://api.telegram.org/bot7679497504:AAHUn4Kq5kjY1rqiw7M_PzxH9D8JipElEwQ/sendMessage`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      chat_id: chatId,
      text: 'Click below to open the app!',
      reply_markup: {
        inline_keyboard: [
          [
            {
              text: 'Open App',
              url: `https://moon-moverz.netlify.app/moon?userId=${userId}`
            },
          ],
        ],
      },
    }),
  });
  
  return NextResponse.json({ received: true });
}