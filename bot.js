const moverzbot = () => {
    const TelegramBot = require('node-telegram-bot-api');
    const axios = require('axios')
    // Replace with your bot token
    const token = '7679497504:AAHUn4Kq5kjY1rqiw7M_PzxH9D8JipElEwQ';
    // Create a new bot
    const bot = new TelegramBot(token, {polling: true});
    
    let botFirstName = '';
    
    bot.getMe().then((botInfo) => {
        console.log('Bot is connected successfully!');
        botFirstName = botInfo.first_name
    });
    
    bot.onText(/\/start/, (msg) => {
        const chatId = msg.chat.id
        const username = msg.from.username ? `@${msg.from.username}` : msg.from.first_name;

        axios.post('http://localhost:5000/moverz/add', {username})
            .then(res => res.json(res))
            .catch(err => console.log(err))

        // Message template with the dynamic username
        const message = `
    Hey, <b>${username}</b>, Welcome to <b>${botFirstName}SVM!</b> 🌚
    Lucky spin takes you to the ${botFirstName}.
    
    <b>${botFirstName}SVM Bot</b> is the official bot for ${botFirstName}, the first memecoin on the Eclipse Network. As we gear up for the upcoming mainnet, now’s the perfect time to join us and bring your friends along to earn even more rewards.
    
    Invite more friends = Get more spins = Earn more points = More ${botFirstName}!
        `;
    
        const options = {
            reply_markup: {
                inline_keyboard: [
                    [
                        { text: 'Join Channel', url: 'https://t.me/mooncoinsvm'},
                        { text: 'Join Group', url: 'https://t.me/mooncoin_svm'}
                    ]
                ]
            },
            parse_mode: 'HTML'
        };
        bot.sendMessage(chatId, message , options);
    })
}
module.exports = moverzbot;

