import { createHash } from 'crypto'
let Reg = /\|?(.*)([.|] *?)([0-9]*)$/i
let handler = async function (m, { conn, text, usedPrefix, command }) {
  let user = global.db.data.users[m.sender]
  let name2 = conn.getName(m.sender)
  let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
  if (user.registered === true) throw `⦉✔️⦊ » 𝙔𝙖 𝙚𝙨𝙩𝙖𝙨 𝙧𝙚𝙜𝙞𝙨𝙩𝙧𝙖𝙙𝙤, 𝙥𝙖𝙧𝙖 𝙫𝙤𝙡𝙫𝙚𝙧 𝙖 𝙧𝙚𝙜𝙞𝙨𝙩𝙧𝙖𝙧𝙩𝙚 𝙩𝙞𝙚𝙣𝙚𝙨 𝙦𝙪𝙚 𝙗𝙤𝙧𝙧𝙖𝙧 𝙚𝙡 𝙧𝙚𝙜𝙞𝙨𝙩𝙧𝙤.\n\n𝙀𝙅𝙀𝙈𝙋𝙇𝙊:\n𝙐𝙨𝙚 𝙚𝙡 𝙘𝙤𝙢𝙖𝙣𝙙𝙤 ( ${usedPrefix}myns ) 𝙥𝙖𝙧𝙖 𝙘𝙤𝙥𝙞𝙖𝙧 𝙩𝙪 𝙘𝙤𝙙𝙞𝙜𝙤.`
  if (!Reg.test(text)) throw `⦉✖️⦊ » 𝙀𝙡 𝙘𝙤𝙢𝙖𝙣𝙙𝙤 𝙞𝙣𝙜𝙧𝙚𝙨𝙖𝙙𝙤 𝙚𝙨 𝙞𝙣𝙘𝙤𝙧𝙧𝙚𝙘𝙩𝙤, 𝙙𝙚𝙗𝙚 𝙙𝙚 𝙪𝙨𝙖𝙧𝙡𝙤 𝙙𝙚 𝙚𝙨𝙩𝙖 𝙛𝙤𝙧𝙢𝙖.\n\n𝙀𝙅𝙀𝙈𝙋𝙇𝙊:\n${usedPrefix + command} nombre.edad\n\n𝙊𝙏𝙍𝙊 𝙀𝙅𝙀𝙈𝙋𝙇𝙊:\n${usedPrefix + command} ${name2}.20`
  let [_, name, splitter, age] = text.match(Reg)
  if (!name) throw '⦉👤⦊ » 𝙉𝙤𝙢𝙗𝙧𝙚 𝙛𝙖𝙡𝙩𝙖𝙣𝙩𝙚, 𝙣𝙤 𝙥𝙪𝙚𝙙𝙚𝙨 𝙧𝙚𝙜𝙞𝙨𝙩𝙧𝙖𝙧𝙩𝙚 𝙨𝙞𝙣 𝙣𝙞𝙣𝙜𝙪𝙣 𝙣𝙤𝙢𝙗𝙧𝙚 𝙚𝙨𝙥𝙚𝙨𝙞𝙛𝙞𝙘𝙖𝙙𝙤, 𝙞𝙣𝙩𝙚𝙣𝙩𝙖𝙡𝙤 𝙙𝙚 𝙣𝙪𝙚𝙫𝙤 𝙖𝙜𝙧𝙚𝙜𝙖𝙣𝙙𝙤 𝙩𝙪 𝙣𝙤𝙢𝙗𝙧𝙚.'
  if (!age) throw '⦉👤⦊ » 𝙉𝙤 𝙥𝙪𝙚𝙙𝙚𝙨 𝙧𝙚𝙜𝙞𝙨𝙩𝙧𝙖𝙧𝙩𝙚 𝙨𝙞𝙣 𝙡𝙖 𝙚𝙙𝙖𝙙 𝙚𝙨𝙥𝙚𝙨𝙞𝙛𝙞𝙘𝙖𝙙𝙖, 𝙞𝙣𝙩𝙚𝙣𝙩𝙖𝙡𝙤 𝙙𝙚 𝙣𝙪𝙚𝙫𝙤 𝙖𝙜𝙧𝙚𝙜𝙖𝙣𝙙𝙤 𝙩𝙪 𝙚𝙙𝙖𝙙.'
  if (name.length >= 30) throw '⦉✖️⦊ » 𝙀𝙡 𝙣𝙤𝙢𝙗𝙧𝙚 𝙣𝙤 𝙙𝙚𝙗𝙚 𝙙𝙚 𝙘𝙤𝙣𝙩𝙚𝙣𝙚𝙧 𝙢𝙖𝙨 𝙙𝙚 30 𝙘𝙖𝙧𝙖𝙘𝙩𝙚𝙧𝙚𝙨, 𝙞𝙣𝙩𝙚𝙣𝙩𝙖𝙡𝙤 𝙙𝙚 𝙣𝙪𝙚𝙫𝙤.' 
  age = parseInt(age)
  if (age > 999) throw '⦉❌⦊ » 𝙀𝙙𝙖𝙙 𝙚𝙧𝙧𝙤𝙣𝙚𝙤, 𝙨𝙤𝙡𝙤 𝙨𝙚 𝙖𝙙𝙢𝙞𝙩𝙚 𝙝𝙖𝙨𝙩𝙖 999.'
  if (age < 5) throw '⦉❌⦊ » 𝙉𝙤 𝙨𝙚 𝙖𝙘𝙚𝙥𝙩𝙖𝙣 𝙣𝙞𝙣̃𝙤𝙨 𝙪𝙨𝙖𝙣𝙙𝙤 𝙚𝙡 𝙗𝙤𝙩, 𝙚𝙨 𝙥𝙤𝙧 𝙨𝙪 𝙗𝙞𝙚𝙣...'
  user.name = name.trim()
  user.age = age
  user.regTime = + new Date
  user.registered = true
let sn = createHash('md5').update(m.sender).digest('hex').slice(0, 6)        
let img = imagen2;
  await conn.sendMessage(m.chat, { react: { text: '✅', key: m.key } })
let gokureg = `
❒•──────────────────•⋄
│𝗩𝗘𝗥𝗜𝗙𝗜𝗘𝗗 𝗦𝗨𝗖𝗖𝗘𝗦𝗦𝗙𝗨𝗟𝗟𝗬
❒•──────────────────•⋄

⋄ 👤 » 𝗡𝗼𝗺𝗯𝗿𝗲:
⌑ ${name}

⋄ ✔️ » 𝗡𝗼𝗺𝗯𝗿𝗲 𝗼𝗿𝗴:
⌑ @${name2}

⋄ 📅 » 𝗘𝗱𝗮𝗱:
⌑ ${age}

⋄ ⏰ » 𝗙𝗲𝗰𝗵𝗮 𝗱𝗲 𝘃𝗲𝗿𝗶𝗳𝗶𝗰𝗮𝗰𝗶𝗼𝗻:
⌑ ${regTime}

⋄ ✅ » 𝗥𝗲𝗴𝗶𝘀𝘁𝗿𝗼:
⌑ ᴠᴇʀɪғɪᴄᴀᴅᴏ.`
conn.sendMessage(m.chat, {
text: gokureg,
contextInfo: {
externalAdReply: {
title: '⚡ • 𝙂𝙤𝙠𝙪𝘽𝙤𝙩-𝙈𝘿 : 𝙑𝙀𝙍𝙄𝙁𝙔 • ⚡',
body: 'ᴠᴇʀɪғɪᴄᴀᴅᴏ/ᴀ ᴄᴏɴ ᴇxɪᴛᴏ, ᴘᴜᴇᴅᴇ ᴜsᴀʀ sᴜs ғᴜɴᴄɪᴏɴᴇs.', 
thumbnaiUrl: img, 
sourceUrl: `${md}`,
mediaType: 1,
showAdAttribution: true,
renderLargerThumbnail: false,
}}}, { quoted: m })
await m.reply(`\`𝗖𝗢𝗗𝗜𝗚𝗢 𝗗𝗘 𝗩𝗘𝗥𝗜𝗙𝗜𝗖𝗔𝗖𝗜𝗢𝗡:\`\n> ${sn}`)        
}
handler.help = ['reg'].map(v => v + ' <nombre.edad>')
handler.tags = ['rg']

handler.command = ['verify', 'verificar', 'reg', 'register', 'registrar'] 

export default handler
