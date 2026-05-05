const { Telegraf } = require('telegraf');
const bot = new Telegraf(process.env.BOT_TOKEN);

const GAME_SHORT_NAME = 'monkeyrest'; // From Step 2
const GAME_URL = 'https://github.com/lhdg14/monkey-restaurant'; // From Step 1

bot.command('start', (ctx) => ctx.replyWithGame(GAME_SHORT_NAME));

bot.on('callback_query', (ctx) => {
    if (ctx.callbackQuery.game_short_name === GAME_SHORT_NAME) {
        return ctx.answerCbQuery(null, { url: GAME_URL });
    }
});

bot.launch();
