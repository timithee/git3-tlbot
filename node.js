const { Client, GatewayIntentBits } = require('discord.js');
const { Guilds, GuildMessages, MessageContent } = GatewayIntentBits;
const client = new Client({ intents: [Guilds, GuildMessages, MessageContent] });
client.login('MTI1MDAzODU1OTg2ODU4NDAzOA.GLULvN.xY2Po31Z6t6miTJUYRAP4PtJe60TCVZlk8IhxY');

client.once('ready', () => console.log(client.user.tag+' 준비 완료!'));

client.on('messageCreate', (msg) => {
    if (msg.author.bot) return
        const cmd = msg.content
    
        if (cmd == 'ㅎㅇ')
        msg.reply('안녕하세요!')
    
        if (cmd == '오늘 어때?')
        msg.channel.send('저는 좋아요!')
    
        if (cmd == '이 메세지 삭제해줘') {
        msg.delete()
        msg.reply('삭제했어요!')
        }
    });
