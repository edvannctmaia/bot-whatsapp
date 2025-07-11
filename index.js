const { Client, LocalAuth } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');

const client = new Client({
    authStrategy: new LocalAuth(),
    puppeteer: {
        args: ['--no-sandbox'],
        headless: true
    }
});

client.on('qr', qr => {
    qrcode.generate(qr, { small: true });
});

client.on('ready', () => {
    console.log('✅ Bot está pronto!');
});

client.on('message', message => {
    if (message.body.toLowerCase() === 'oi') {
        message.reply('Olá! Eu sou o bot Entech. Como posso ajudar?');
    }
});

client.initialize();
