const { Telegraf } = require('telegraf');
const http = require('http');

// Your provided bot token
const bot = new Telegraf('8366724603:AAEH8i-CIKSF-qAI7xNnUpBf6VvqFg6BCsI');

// Your provided game short name
const GAME_SHORT_NAME = 'monkeyrest'; 

// Your actual GitHub Pages live link
const GAME_URL = 'https://lhdg14.github.io/monkey-restaurant/'; 

bot.command('start', (ctx) => {
    return ctx.replyWithGame(GAME_SHORT_NAME);
});

bot.on('callback_query', (ctx) => {
    if (ctx.callbackQuery.game_short_name === GAME_SHORT_NAME) {
        return ctx.answerCbQuery(null, { url: GAME_URL });
    }
    return ctx.answerCbQuery();
});

// Start the bot
bot.launch()
  .then(() => console.log("Monkey Restaurant Bot is running!"))
  .catch((err) => console.error("Failed to launch bot:", err));

// REQUIRED FOR RENDER: A basic web server to stay online
http.createServer((req, res) => {
  res.writeHead(200);
  res.end('Monkey Bot Server is Active');
}).listen(process.env.PORT || 3000);
