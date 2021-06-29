const TG = require('telegram-bot-api')


let tok1 = "1891534074:AAH-_Dl0lYy5YX";
let tok2 = "MxZdxynNFTAp2cZ4huqIk";

let token = tok1 + tok2;

const api = new TG({
    token: token
});

api.setMessageProvider(new TG.GetUpdateMessageProvider())

api.start()
    .then(() => {
        console.log('API is started')
    })
    .catch(console.err)

api.getMe()
    .then(console.log)
    .catch(console.err);


api.on('update', (update) => {
    const chat_id = update.message.chat.id

    let msg = update.message.text

    switch (msg) {
        case "/start":

            api.sendMessage({
                chat_id: chat_id,
                text: 'Дорогие абитуриенты, предлагаем Вам ознакомиться со списком часто задаваемых вопросов при поступлении в МГТУ им. Баумана на кафедру "Цифровая криминалистика": \n 1) Какие проходные баллы на бюджет были в прошлых годах? /min \n' +
                    '2) Какая стоимость на платном обучении? /cost \n' +
                    '3) Какие предметы необходимы для поступлени? /subs \n' +
                    '4) Нужны ли вступительные испытания? /entry \n' +
                    '5) За что даются дополнительные баллы при поступлении? /add_scores \n' +
                    '6) Какие олимпиады принимают в МГТУ им. Баумана? /olimp \n' +
                    '7) Какие даты приёма общего конкурса в 2021 году? /ok_2021 \n' +
                    '8) Как можно подать документы в МГТУ им. Баумана? /docs \n9) Какие документы необходимы для поступления?/ /how \n' +
                    'Наш inst /inst \n' +
                    'Наш паблик в VK /vk',
                parse_mode: 'Markdown'

            })
            break;

        case "/help":
            api.sendMessage({
                chat_id: chat_id,
                text: 'HELP',
                parse_mode: 'Markdown',

            })
            break;


        case "/min":
            api.sendMessage({
                chat_id: chat_id,
                text: ' HELP',
                parse_mode: 'Markdown',

            })
            break;

        case "/cost":
            api.sendMessage({
                chat_id: chat_id,
                text: ' HELP',
                parse_mode: 'Markdown',

            })
            break;

        case "/subs":
            api.sendMessage({
                chat_id: chat_id,
                text: ' HELP',
                parse_mode: 'Markdown',

            })
            break;

        case "/entry":
            api.sendMessage({
                chat_id: chat_id,
                text: ' HELP',
                parse_mode: 'Markdown',

            })
            break;

        case "/add_scores":
            api.sendMessage({
                chat_id: chat_id,
                text: ' HELP',
                parse_mode: 'Markdown',

            })
            break;

        case "/olimp":
            api.sendMessage({
                chat_id: chat_id,
                text: ' HELP',
                parse_mode: 'Markdown',

            })
            break;
        case "/ok_2021":
            api.sendMessage({
                chat_id: chat_id,
                text: ' HELP',
                parse_mode: 'Markdown',

            })
            break;
        case "/docs":
            api.sendMessage({
                chat_id: chat_id,
                text: ' HELP',
                parse_mode: 'Markdown',

            })
            break;
        case "/how":
            api.sendMessage({
                chat_id: chat_id,
                text: ' HELP',
                parse_mode: 'Markdown',

            })
            break;
        case "/inst":
            api.sendMessage({
                chat_id: chat_id,
                text: 'Подписывайтесь на наш аккаунт в Instagram!',
                parse_mode: 'Markdown',
                reply_markup: {
                    inline_keyboard: [
                        [{
                            text: 'Наш аккаунт в Instagram',
                            url: 'https://github.com/mast/telegram-bot-api'
                        }]
                    ]
                }

            })
            break;
        case "/vk":
            api.sendMessage({
                chat_id: chat_id,
                text: 'Подписывайтесь на паблик в VK. Там мы выкладываем актуальные новости кафедры ЮР2 как для абитуриентов, так и для студентов!',
                parse_mode: 'Markdown',
                reply_markup: {
                    inline_keyboard: [
                        [{
                            text: 'Наш паблик в VK',
                            url: 'https://vk.com/forensic.bmstu'
                        }]
                    ]
                }

            })
            break;
        default:
            break;
    }
    // Send text message



})