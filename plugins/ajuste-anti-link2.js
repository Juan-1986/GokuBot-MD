let linkRegex = /\b((https?:\/\/|www\.)?[\w-]+\.[\w-]+(?:\.[\w-]+)*(\/[\w\.\-\/]*)?)\b/i
let handler = m => m
handler.before = async function (m, { isAdmin, isBotAdmin, isOwner, isROwner, participants }) {
if (!m.isGroup) return 
if (isAdmin || isOwner || m.fromMe || isROwner || !isBotAdmin) return
let chat = global.db.data.chats[m.chat]
let delet = m.key.participant
let bang = m.key.id
const user = `@${m.sender.split`@`[0]}`
let bot = global.db.data.settings[this.user.jid] || {}
const isGroupLink = linkRegex.exec(m.text) 
if (chat.antiLink2 && isGroupLink !== null) {
if (chat.delete) return conn.sendMessage(m.chat, { text: '❌⃟⸽✯› 𝘿𝙚𝙗𝙚 𝙙𝙚 𝙙𝙚𝙨𝙖𝙘𝙩𝙞𝙫𝙖𝙧 𝙡𝙖 𝙤𝙥𝙘𝙞𝙤𝙣 𝙙𝙚 (#on antidelete), 𝙥𝙖𝙧𝙖 𝙦𝙪𝙚 𝙚𝙡 𝙗𝙤𝙩 𝙣𝙤 𝙚𝙣𝙫𝙞𝙚 𝙢𝙚𝙣𝙨𝙖𝙟𝙚𝙨 𝙚𝙡𝙞𝙢𝙞𝙣𝙖𝙙𝙤𝙨.' }, { quoted: m }) 
if (isBotAdmin) {
const linkThisGroup = `https://chat.whatsapp.com/${await this.groupInviteCode(m.chat)}`
if (m.text.includes(linkThisGroup)) return !0
}     
if (isBotAdmin) {
await conn.sendMessage(m.chat, { text: `🛑⃟⸽✯› 𝙃𝙤𝙡𝙖 *${user}*\n• 𝙎𝙚𝙧𝙖𝙨 𝙚𝙡𝙞𝙢𝙞𝙣𝙖𝙙𝙤 𝙙𝙚 𝙞𝙣𝙢𝙚𝙙𝙞𝙖𝙩𝙤 𝙥𝙤𝙧 𝙢𝙖𝙣𝙙𝙖𝙧 𝙪𝙣 𝙚𝙣𝙡𝙖𝙘𝙚 𝙙𝙚𝙨𝙘𝙤𝙣𝙤𝙘𝙞𝙙𝙤...`, mentions: [m.sender] }, { quoted: m })    
await conn.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: bang, participant: delet }})
let remove = await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
if (remove[0].status === '404') return
}}
return !0
}
export default handler
