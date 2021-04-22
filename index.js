const TelegramBot = require(`node-telegram-bot-api` );

const TOKEN = `831684431:AAHrJaV-JKHH4sxfii8EJK357QDJ7bRFP7g`;
const bot = new TelegramBot( TOKEN, { polling: true } );

bot.on(`message`, (msg) => {
    data = msg;
    console.log(msg);

    //caso seja uma foto
    if(msg.photo){
        const Photo = msg.photo[0].file_id;
        bot.sendPhoto(msg.chat.id, Photo);
    
        if(msg.caption){
            const legenda = msg.caption;
            bot.sendMessage(msg.chat.id, legenda);
        }
    }

    //caso seja mensagem de texto
    if(data.text){ 
        bot.sendMessage(msg.chat.id, msg.text);
    }

});

bot.getChat(1111169549).then(function(chat){
    console.log(chat.id);
});

//não é membro
bot.getChat(-1001244772335).then(function(chat){
    console.log(chat.id);
});



