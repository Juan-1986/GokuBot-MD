import fetch from 'node-fetch'  

const isLinkTik = /tiktok.com/i 
const isLinkYt = /youtube.com|youtu.be/i 
const isLinkTel = /telegram.com|t.me/i 
const isLinkFb = /facebook.com|fb.me/i 
const isLinkIg = /instagram.com/i 
const isLinkTw = /twitter.com|x.com/i 
const isLinkDc = /discord.com|discord.gg/i 
const isLinkTh = /threads.net/i 
const isLinkTch = /twitch.tv/i
  
let handler = m => m
handler.before = async function (m, { conn, isAdmin, isBotAdmin, isOwner, isROwner }) {
if (!m.isGroup) return 
if (isAdmin || isOwner || m.fromMe || isROwner || !isBotAdmin) return

//if (!isAdmin || !isOwner || !isROwner || m.fromMe || !isBotAdmin) return

let chat = global.db.data.chats[m.chat]
let bot = global.db.data.settings[this.user.jid] || {}
let delet = m.key.participant
let bang = m.key.id
let toUser = `${m.sender.split("@")[0]}`
let aa = toUser + '@s.whatsapp.net'
    
const isAntiLinkTik = isLinkTik.exec(m.text)
const isAntiLinkYt = isLinkYt.exec(m.text)
const isAntiLinkTel = isLinkTel.exec(m.text)
const isAntiLinkFb = isLinkFb.exec(m.text)
const isAntiLinkIg = isLinkIg.exec(m.text)
const isAntiLinkTw = isLinkTw.exec(m.text)
const isAntiLinkDc = isLinkDc.exec(m.text)
const isAntiLinkTh = isLinkTh.exec(m.text)
const isAntiLinkTch = isLinkTch.exec(m.text)
 
if (chat.antiTiktok && isAntiLinkTik) {  
if (chat.delete) return conn.sendMessage(m.chat, { text: '❌⃟⸽✯› 𝘿𝙚𝙗𝙚 𝙙𝙚 𝙙𝙚𝙨𝙖𝙘𝙩𝙞𝙫𝙖𝙧 𝙡𝙖 𝙤𝙥𝙘𝙞𝙤𝙣 𝙙𝙚 (#on antidelete), 𝙥𝙖𝙧𝙖 𝙦𝙪𝙚 𝙚𝙡 𝙗𝙤𝙩 𝙣𝙤 𝙚𝙣𝙫𝙞𝙚 𝙢𝙚𝙣𝙨𝙖𝙟𝙚𝙨 𝙚𝙡𝙞𝙢𝙞𝙣𝙖𝙙𝙤𝙨.' }, { quoted: m })  
if (isBotAdmin) {
await conn.reply(m.chat, `🚨⃟⸽✯› 𝙃𝙤𝙡𝙖 𝙥𝙖𝙧𝙩𝙞𝙘𝙞𝙥𝙖𝙣𝙩𝙚: *@${toUser}*\n• 𝙉𝙤 𝙚𝙨𝙩𝙖 𝙥𝙚𝙧𝙢𝙞𝙩𝙞𝙙𝙤 𝙢𝙖𝙣𝙙𝙖𝙧 𝙚𝙣𝙡𝙖𝙘𝙚𝙨 𝙙𝙚 𝙏𝙞𝙠𝙏𝙤𝙠, 𝙨𝙚𝙧𝙖𝙨 𝙚𝙡𝙞𝙢𝙞𝙣𝙖𝙙𝙤 𝙙𝙚 𝙞𝙣𝙢𝙚𝙙𝙞𝙖𝙩𝙤.`, null, { mentions: [aa] })
await conn.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: bang, participant: delet }})
let remove = await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
if (remove[0].status === '404') return
}}
    
if (chat.antiYoutube && isAntiLinkYt) {
if (chat.delete) return conn.sendMessage(m.chat, { text: '❌⃟⸽✯› 𝘿𝙚𝙗𝙚 𝙙𝙚 𝙙𝙚𝙨𝙖𝙘𝙩𝙞𝙫𝙖𝙧 𝙡𝙖 𝙤𝙥𝙘𝙞𝙤𝙣 𝙙𝙚 (#on antidelete), 𝙥𝙖𝙧𝙖 𝙦𝙪𝙚 𝙚𝙡 𝙗𝙤𝙩 𝙣𝙤 𝙚𝙣𝙫𝙞𝙚 𝙢𝙚𝙣𝙨𝙖𝙟𝙚𝙨 𝙚𝙡𝙞𝙢𝙞𝙣𝙖𝙙𝙤𝙨.' }, { quoted: m })  
if (isBotAdmin) {
await conn.reply(m.chat, `🚨⃟⸽✯› 𝙃𝙤𝙡𝙖 𝙥𝙖𝙧𝙩𝙞𝙘𝙞𝙥𝙖𝙣𝙩𝙚: *@${toUser}*\n• 𝙉𝙤 𝙚𝙨𝙩𝙖 𝙥𝙚𝙧𝙢𝙞𝙩𝙞𝙙𝙤 𝙢𝙖𝙣𝙙𝙖𝙧 𝙚𝙣𝙡𝙖𝙘𝙚𝙨 𝙙𝙚 𝙔𝙤𝙪𝙏𝙪𝙗𝙚, 𝙨𝙚𝙧𝙖𝙨 𝙚𝙡𝙞𝙢𝙞𝙣𝙖𝙙𝙤 𝙙𝙚 𝙞𝙣𝙢𝙚𝙙𝙞𝙖𝙩𝙤.`, null, { mentions: [aa] })
await conn.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: bang, participant: delet }})
let remove = await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
if (remove[0].status === '404') return
}}
    
if (chat.antiTelegram && isAntiLinkTel) {
if (chat.delete) return conn.sendMessage(m.chat, { text: '❌⃟⸽✯› 𝘿𝙚𝙗𝙚 𝙙𝙚 𝙙𝙚𝙨𝙖𝙘𝙩𝙞𝙫𝙖𝙧 𝙡𝙖 𝙤𝙥𝙘𝙞𝙤𝙣 𝙙𝙚 (#on antidelete), 𝙥𝙖𝙧𝙖 𝙦𝙪𝙚 𝙚𝙡 𝙗𝙤𝙩 𝙣𝙤 𝙚𝙣𝙫𝙞𝙚 𝙢𝙚𝙣𝙨𝙖𝙟𝙚𝙨 𝙚𝙡𝙞𝙢𝙞𝙣𝙖𝙙𝙤𝙨.' }, { quoted: m })   
if (isBotAdmin) {
await conn.reply(m.chat, `🚨⃟⸽✯› 𝙃𝙤𝙡𝙖 𝙥𝙖𝙧𝙩𝙞𝙘𝙞𝙥𝙖𝙣𝙩𝙚: *@${toUser}*\n• 𝙉𝙤 𝙚𝙨𝙩𝙖 𝙥𝙚𝙧𝙢𝙞𝙩𝙞𝙙𝙤 𝙢𝙖𝙣𝙙𝙖𝙧 𝙚𝙣𝙡𝙖𝙘𝙚𝙨 𝙙𝙚 𝙏𝙚𝙡𝙚𝙜𝙧𝙖𝙢, 𝙨𝙚𝙧𝙖𝙨 𝙚𝙡𝙞𝙢𝙞𝙣𝙖𝙙𝙤 𝙙𝙚 𝙞𝙣𝙢𝙚𝙙𝙞𝙖𝙩𝙤.`, null, { mentions: [aa] })
await conn.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: bang, participant: delet }})
let remove = await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
if (remove[0].status === '404') return
}}
    
if (chat.antiFacebook && isAntiLinkFb) {
if (chat.delete) return conn.sendMessage(m.chat, { text: '❌⃟⸽✯› 𝘿𝙚𝙗𝙚 𝙙𝙚 𝙙𝙚𝙨𝙖𝙘𝙩𝙞𝙫𝙖𝙧 𝙡𝙖 𝙤𝙥𝙘𝙞𝙤𝙣 𝙙𝙚 (#on antidelete), 𝙥𝙖𝙧𝙖 𝙦𝙪𝙚 𝙚𝙡 𝙗𝙤𝙩 𝙣𝙤 𝙚𝙣𝙫𝙞𝙚 𝙢𝙚𝙣𝙨𝙖𝙟𝙚𝙨 𝙚𝙡𝙞𝙢𝙞𝙣𝙖𝙙𝙤𝙨.' }, { quoted: m })  
if (isBotAdmin) {
await conn.reply(m.chat, `🚨⃟⸽✯› 𝙃𝙤𝙡𝙖 𝙥𝙖𝙧𝙩𝙞𝙘𝙞𝙥𝙖𝙣𝙩𝙚: *@${toUser}*\n• 𝙉𝙤 𝙚𝙨𝙩𝙖 𝙥𝙚𝙧𝙢𝙞𝙩𝙞𝙙𝙤 𝙢𝙖𝙣𝙙𝙖𝙧 𝙚𝙣𝙡𝙖𝙘𝙚𝙨 𝙙𝙚 𝙁𝙖𝙘𝙚𝙗𝙤𝙤𝙠, 𝙨𝙚𝙧𝙖𝙨 𝙚𝙡𝙞𝙢𝙞𝙣𝙖𝙙𝙤 𝙙𝙚 𝙞𝙣𝙢𝙚𝙙𝙞𝙖𝙩𝙤.`, null, { mentions: [aa] })
await conn.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: bang, participant: delet }})
let remove = await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
if (remove[0].status === '404') return 
}}
    
if (chat.antiInstagram && isAntiLinkIg) {
if (chat.delete) return conn.sendMessage(m.chat, { text: '❌⃟⸽✯› 𝘿𝙚𝙗𝙚 𝙙𝙚 𝙙𝙚𝙨𝙖𝙘𝙩𝙞𝙫𝙖𝙧 𝙡𝙖 𝙤𝙥𝙘𝙞𝙤𝙣 𝙙𝙚 (#on antidelete), 𝙥𝙖𝙧𝙖 𝙦𝙪𝙚 𝙚𝙡 𝙗𝙤𝙩 𝙣𝙤 𝙚𝙣𝙫𝙞𝙚 𝙢𝙚𝙣𝙨𝙖𝙟𝙚𝙨 𝙚𝙡𝙞𝙢𝙞𝙣𝙖𝙙𝙤𝙨.' }, { quoted: m })  
if (isBotAdmin) {
await conn.reply(m.chat, `🚨⃟⸽✯› 𝙃𝙤𝙡𝙖 𝙥𝙖𝙧𝙩𝙞𝙘𝙞𝙥𝙖𝙣𝙩𝙚: *@${toUser}*\n• 𝙉𝙤 𝙚𝙨𝙩𝙖 𝙥𝙚𝙧𝙢𝙞𝙩𝙞𝙙𝙤 𝙢𝙖𝙣𝙙𝙖𝙧 𝙚𝙣𝙡𝙖𝙘𝙚𝙨 𝙙𝙚 𝙄𝙣𝙨𝙩𝙖𝙜𝙧𝙖𝙢, 𝙨𝙚𝙧𝙖𝙨 𝙚𝙡𝙞𝙢𝙞𝙣𝙖𝙙𝙤 𝙙𝙚 𝙞𝙣𝙢𝙚𝙙𝙞𝙖𝙩𝙤.`, null, { mentions: [aa] })
await conn.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: bang, participant: delet }})
let remove = await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
if (remove[0].status === '404') return 
}}
    
if (chat.antiTwitter && isAntiLinkTw) {
if (chat.delete) return conn.sendMessage(m.chat, { text: '❌⃟⸽✯› 𝘿𝙚𝙗𝙚 𝙙𝙚 𝙙𝙚𝙨𝙖𝙘𝙩𝙞𝙫𝙖𝙧 𝙡𝙖 𝙤𝙥𝙘𝙞𝙤𝙣 𝙙𝙚 (#on antidelete), 𝙥𝙖𝙧𝙖 𝙦𝙪𝙚 𝙚𝙡 𝙗𝙤𝙩 𝙣𝙤 𝙚𝙣𝙫𝙞𝙚 𝙢𝙚𝙣𝙨𝙖𝙟𝙚𝙨 𝙚𝙡𝙞𝙢𝙞𝙣𝙖𝙙𝙤𝙨.' }, { quoted: m })  
if (isBotAdmin) {
await conn.reply(m.chat, `🚨⃟⸽✯› 𝙃𝙤𝙡𝙖 𝙥𝙖𝙧𝙩𝙞𝙘𝙞𝙥𝙖𝙣𝙩𝙚: *@${toUser}*\n• 𝙉𝙤 𝙚𝙨𝙩𝙖 𝙥𝙚𝙧𝙢𝙞𝙩𝙞𝙙𝙤 𝙢𝙖𝙣𝙙𝙖𝙧 𝙚𝙣𝙡𝙖𝙘𝙚𝙨 𝙙𝙚 𝙏𝙬𝙞𝙩𝙩𝙚𝙧, 𝙨𝙚𝙧𝙖𝙨 𝙚𝙡𝙞𝙢𝙞𝙣𝙖𝙙𝙤 𝙙𝙚 𝙞𝙣𝙢𝙚𝙙𝙞𝙖𝙩𝙤.`, null, { mentions: [aa] })
await conn.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: bang, participant: delet }})
let remove = await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
if (remove[0].status === '404') return
}}

if (chat.antiDiscord && isAntiLinkDc) {
if (chat.delete) return conn.sendMessage(m.chat, { text: '❌⃟⸽✯› 𝘿𝙚𝙗𝙚 𝙙𝙚 𝙙𝙚𝙨𝙖𝙘𝙩𝙞𝙫𝙖𝙧 𝙡𝙖 𝙤𝙥𝙘𝙞𝙤𝙣 𝙙𝙚 (#on antidelete), 𝙥𝙖𝙧𝙖 𝙦𝙪𝙚 𝙚𝙡 𝙗𝙤𝙩 𝙣𝙤 𝙚𝙣𝙫𝙞𝙚 𝙢𝙚𝙣𝙨𝙖𝙟𝙚𝙨 𝙚𝙡𝙞𝙢𝙞𝙣𝙖𝙙𝙤𝙨.' }, { quoted: m })  
if (isBotAdmin) {
await conn.reply(m.chat, `🚨⃟⸽✯› 𝙃𝙤𝙡𝙖 𝙥𝙖𝙧𝙩𝙞𝙘𝙞𝙥𝙖𝙣𝙩𝙚: *@${toUser}*\n• 𝙉𝙤 𝙚𝙨𝙩𝙖 𝙥𝙚𝙧𝙢𝙞𝙩𝙞𝙙𝙤 𝙢𝙖𝙣𝙙𝙖𝙧 𝙚𝙣𝙡𝙖𝙘𝙚𝙨 𝙙𝙚 𝘿𝙞𝙨𝙘𝙤𝙧𝙙, 𝙨𝙚𝙧𝙖𝙨 𝙚𝙡𝙞𝙢𝙞𝙣𝙖𝙙𝙤 𝙙𝙚 𝙞𝙣𝙢𝙚𝙙𝙞𝙖𝙩𝙤.`, null, { mentions: [aa] })
await conn.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: bang, participant: delet }})
let remove = await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
if (remove[0].status === '404') return
}}

if (chat.antiThreads && isAntiLinkTh) {
if (chat.delete) return conn.sendMessage(m.chat, { text: '❌⃟⸽✯› 𝘿𝙚𝙗𝙚 𝙙𝙚 𝙙𝙚𝙨𝙖𝙘𝙩𝙞𝙫𝙖𝙧 𝙡𝙖 𝙤𝙥𝙘𝙞𝙤𝙣 𝙙𝙚 (#on antidelete), 𝙥𝙖𝙧𝙖 𝙦𝙪𝙚 𝙚𝙡 𝙗𝙤𝙩 𝙣𝙤 𝙚𝙣𝙫𝙞𝙚 𝙢𝙚𝙣𝙨𝙖𝙟𝙚𝙨 𝙚𝙡𝙞𝙢𝙞𝙣𝙖𝙙𝙤𝙨.' }, { quoted: m })  
if (isBotAdmin) {
await conn.reply(m.chat, `🚨⃟⸽✯› 𝙃𝙤𝙡𝙖 𝙥𝙖𝙧𝙩𝙞𝙘𝙞𝙥𝙖𝙣𝙩𝙚: *@${toUser}*\n• 𝙉𝙤 𝙚𝙨𝙩𝙖 𝙥𝙚𝙧𝙢𝙞𝙩𝙞𝙙𝙤 𝙢𝙖𝙣𝙙𝙖𝙧 𝙚𝙣𝙡𝙖𝙘𝙚𝙨 𝙙𝙚 𝙏𝙝𝙧𝙚𝙖𝙙𝙨, 𝙨𝙚𝙧𝙖𝙨 𝙚𝙡𝙞𝙢𝙞𝙣𝙖𝙙𝙤 𝙙𝙚 𝙞𝙣𝙢𝙚𝙙𝙞𝙖𝙩𝙤.`, null, { mentions: [aa] })
await conn.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: bang, participant: delet }})
let remove = await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
if (remove[0].status === '404') return
}}

if (chat.antiTwitch && isAntiLinkTch) {
if (chat.delete) return conn.sendMessage(m.chat, { text: '❌⃟⸽✯› 𝘿𝙚𝙗𝙚 𝙙𝙚 𝙙𝙚𝙨𝙖𝙘𝙩𝙞𝙫𝙖𝙧 𝙡𝙖 𝙤𝙥𝙘𝙞𝙤𝙣 𝙙𝙚 (#on antidelete), 𝙥𝙖𝙧𝙖 𝙦𝙪𝙚 𝙚𝙡 𝙗𝙤𝙩 𝙣𝙤 𝙚𝙣𝙫𝙞𝙚 𝙢𝙚𝙣𝙨𝙖𝙟𝙚𝙨 𝙚𝙡𝙞𝙢𝙞𝙣𝙖𝙙𝙤𝙨.' }, { quoted: m })  
if (isBotAdmin) {
await conn.reply(m.chat, `🚨⃟⸽✯› 𝙃𝙤𝙡𝙖 𝙥𝙖𝙧𝙩𝙞𝙘𝙞𝙥𝙖𝙣𝙩𝙚: *@${toUser}*\n• 𝙉𝙤 𝙚𝙨𝙩𝙖 𝙥𝙚𝙧𝙢𝙞𝙩𝙞𝙙𝙤 𝙢𝙖𝙣𝙙𝙖𝙧 𝙚𝙣𝙡𝙖𝙘𝙚𝙨 𝙙𝙚 𝙏𝙬𝙞𝙩𝙘𝙝, 𝙨𝙚𝙧𝙖𝙨 𝙚𝙡𝙞𝙢𝙞𝙣𝙖𝙙𝙤 𝙙𝙚 𝙞𝙣𝙢𝙚𝙙𝙞𝙖𝙩𝙤.`, null, { mentions: [aa] })
await conn.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: bang, participant: delet }})
let remove = await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
if (remove[0].status === '404') return
}}

return !0
}
export default handler
