import { sticker } from '../lib/sticker.js'
let handler = m => m

handler.all = async function (m, {conn}) {
let chat = global.db.data.chats[m.chat]
    
if (m.mentionedJid.includes(this.user.jid) && m.isGroup && !chat.isBanned) {
let stiker = await sticker(imagen1, false, global.packname, global.author)  
this.sendFile(m.chat, gokuStick, 'sticker.webp', null, m, false, { 
contextInfo: { externalAdReply: { title: wm, body: wm2, sourceUrl: md, thumbnail: gokuImgs}}})}
    
return !0 }
export default handler