import { NextResponse } from 'next/server';

const TELEGRAM_API_URL = `https://api.telegram.org/bot${process.env.BOT_TOKEN}/getChatMember`;

export async function POST(req: Request) {
  try {
    const { userId, member } = await req.json();
    const response = await fetch(`${TELEGRAM_API_URL}?chat_id=${member}&user_id=${userId}`);
    const data = await response.json();

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
