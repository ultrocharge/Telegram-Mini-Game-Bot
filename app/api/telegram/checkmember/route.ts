import { NextResponse } from 'next/server';

// Telegram Bot token from environment variable
const BOT_TOKEN = '7679497504:AAHUn4Kq5kjY1rqiw7M_PzxH9D8JipElEwQ';

// The channel or group ID

// Telegram API URL to check if a user is a member of the channel
const TELEGRAM_API_URL = `https://api.telegram.org/bot${BOT_TOKEN}/getChatMember`;

export async function POST(req: Request) {
  try {
    const { userId, member } = await req.json();
    // Fetch the chat member status from Telegram
    const response = await fetch(`${TELEGRAM_API_URL}?chat_id=${member}&user_id=${userId}`);
    const data = await response.json();

    // If the status is 'member' or 'administrator', the user is part of the channel
    if (data.ok && ['member', 'administrator', 'creator'].includes(data.result.status)) {
      return NextResponse.json({ isMember: true });
    } else {
      return NextResponse.json({ isMember: false });
    }
  } catch (error) {
    console.error('Error checking Telegram membership:', error);
    return NextResponse.json({ error: 'Failed to check membership' }, { status: 500 });
  }
}
