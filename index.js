const TelegramBot = require( `node-telegram-bot-api` );

const TOKEN = `831684431:AAHrJaV-JKHH4sxfii8EJK357QDJ7bRFP7g`
const bot = new TelegramBot( TOKEN, { polling: true } );

bot.on(`message`, (msg) => {

    console.log(msg);
    const Photo = `AgACAgEAAxkBAAIF92CBqwwYHzAw_zPjWuawCjWNoYwqAAJ2qTEbVSURRJmNN_HFGzFO1v_JShcAAwEAAwIAA20AA3JYAgABHwQ`
    bot.sendPhoto(msg.chat.id, Photo);
    //console.log(msg);
    //console.log(Photo)

});



