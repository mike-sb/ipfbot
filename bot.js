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
                text: 'Дорогие абитуриенты, предлагаем Вам ознакомиться со списком часто задаваемых вопросов при поступлении в МГТУ им. Баумана на кафедру "Цифровая криминалистика": \n ' +
                    '1) Какие проходные баллы на бюджет были в прошлых годах? /min \n' +
                    '2) Какая стоимость на платном обучении? /cost \n' +
                    '3) Какие предметы необходимы для поступлени? /subs \n' +
                    '4) Нужны ли вступительные испытания? /entry \n' +
                    '5) За что даются дополнительные баллы при поступлении? /addscores \n' +
                    '6) Какие олимпиады принимают в МГТУ им. Баумана? /olimp \n' +
                    '7) Какие даты приёма общего конкурса в 2021 году? /ok2021 \n' +
                    '8) Как можно подать документы в МГТУ им. Баумана? /how \n9) Какие документы необходимы для поступления? /docs \n' +
                    'Наш inst /inst \n' +
                    'Наш паблик в VK /vk',
                parse_mode: 'Markdown'

            })
            break;

        case "/help":
            api.sendMessage({
                chat_id: chat_id,
                text: '',
                parse_mode: 'Markdown',

            })
            break;


        case "/min":
            api.sendMessage({
                chat_id: chat_id,
                text: 'Минимальный проходные баллы в прошлых годах составляли: \n' +
                    '2020: 267 баллов \n' +
                    '2019: 244 балла \n' +
                    '2018: 281 балл \n' +
                    '2017: 278 баллов \n',
                parse_mode: 'Markdown',

            })
            break;

        case "/cost":
            api.sendMessage({
                chat_id: chat_id,
                text: 'Стоимость обучения составляет 270119 руб. в год. Оплата производится посеместрово.\n' +
                    'По всем вопросам, связанным с оплатой обучения можно обратиться в отдел платных образовательных услуг 84992636605',
                parse_mode: 'Markdown',
                reply_markup: {
                    inline_keyboard: [
                        [{
                            text: 'ИСОТ',
                            url: 'www.isot.bmstu.ru'
                        }]
                    ]
                }

            })
            break;

        case "/docs":
            api.sendMessage({
                chat_id: chat_id,
                text: 'Список обязательных документов, необходимых для поступления: \n' +
                    '1) Паспорт \n 2)Снилс \n3)Аттестат о среднем (полном) общем образовании \n' +
                    'Список дополнительных документов:\n ' +
                    '1)Полис ОМС \n2)Приписное свидетельство (для мальчиков) \n3)6 фотографий 3х4 \n4)Индивидуальные достижения и документы их подтверждающие',
                parse_mode: 'Markdown',

            })
            break;

        case "/entry":
            api.sendMessage({
                chat_id: chat_id,
                text: 'Вступительные испытания необходимы тем, кто не участвовал в сдаче ЕГЭ в 2021 году: \n1)Инвалиды; \n2)Иностранные граждане;\n' +
                    'Также вступительные испытания необходимо тем, кто: \n1)Получил аттестат об общем среднем образовании и прошел \*итоговую аттестацию* по образовательной программе среднего общего образования в форме гос. экзамена; \n2)Если поступающий получил документ о среднем общем образовании в иностранной организации.',
                parse_mode: 'Markdown',

            })
            break;

        case "/addscores":
            api.sendMessage({
                chat_id: chat_id,
                text: 'Дополнительные баллы присуждаются за:\n' +
                    '1)Красный аттестат; \n2)Золотой значок ГТО; \n3)Победителям международных спортивных соревнований; \n4)Победителям всероссийских олимпиад и олимпиады "Щаг в будущее"; \n5)Владельцам книжки волонтера с суммарным временем работы не менее 100 часов.',
                parse_mode: 'Markdown',

            })
            break;

        case "/olimp":
            api.sendMessage({
                chat_id: chat_id,
                text: 'При поступлении в МГТУ им. Баумана учитываются: \n -всероссийские олимпиады;\n -олимпиада "Шаг в будущее";\n -"Технокубок";\n -"Газпром".\n Также учитываются призовые места в олимпиадах по профильным предметам.',
                parse_mode: 'Markdown',

            })
            break;
        case "/ok2021":
            api.sendMessage({
                chat_id: chat_id,
                text: 'В 2021 году  прием документов на платную и бюджетную основу заканчивается *29 июля*.\n Для бюджетной формы обучения приём согласия на зачисление заканчивается *11 августа*, для платной формы *19 августа*.\n Для квотников *4 августа* оканчивается прием согласия на зачисление и *6 августа* формируются приказы о зачислении в МГТУ им. Баумана.',
                parse_mode: 'Markdown',

            })
            break;
        case "/how":
            api.sendMessage({
                chat_id: chat_id,
                text: 'Подать документы в отборочную комиссию можно через:\n' +
                    '1)Портал Госуслуги; \n2)Сайт priem.bmstu.ru; \n3)Лично; \n4)Почтой.',
                parse_mode: 'Markdown',
                reply_markup: {
                    inline_keyboard: [
                        [{
                            text: 'priem.bmstu.ru',
                            url: 'www.priem.bmstu.ru'
                        }]
                    ]
                }

            })
            break;
        case "/subs":
            api.sendMessage({
                chat_id: chat_id,
                text: 'Список предметов, необходимых для поступления на кафедру ЮР2 "Цифровая криминалистика": \n1)Обществознание (минимальный балл: 45) \n2)История (минимальный балл: 40)\n3)Русский (минимальный балл: 40)\n4)Математика профильная (минимальный балл: 45).\n *Важно! На кафедру ЮР2 принимаю результаты всего 3 экзаменов. Вместо истории абитуриент может указать математику.*  ',
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
                            url: 'https://www.instagram.com/forensic.bmstu'
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