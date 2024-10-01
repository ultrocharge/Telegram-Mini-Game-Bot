// pages/api/telegram.js
import { NextResponse } from 'next/server';

export async function POST(req: any) {
  const update = await req.json();
  
  // Get the message and user id
  const chatId = update.message.chat.id; // Telegram user ID
  const userId = update.message.from.id;
  // Optional: send a message back to the user
  await fetch(`https://api.telegram.org/bot7679497504:AAHUn4Kq5kjY1rqiw7M_PzxH9D8JipElEwQ/sendMessage`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      chat_id: chatId,
      text: userId,
    }),
  });
  return NextResponse.json({ received: true });
}