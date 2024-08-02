import { webp2png } from '../lib/webp2mp4.js'
let handler = async (m, { conn, usedPrefix, command }) => {
const notStickerMessage = `᥀·࣭࣪̇˖☄️◗ 𝙍𝙚𝙨𝙥𝙤𝙣𝙙𝙖 𝙖 𝙪𝙣 𝙨𝙩𝙞𝙘𝙠𝙚𝙧 𝙨𝙞𝙣 𝙢𝙤𝙫𝙞𝙢𝙞𝙚𝙣𝙩𝙤 𝙥𝙖𝙧𝙖 𝙪𝙨𝙖𝙧 𝙚𝙨𝙩𝙚 𝙘𝙤𝙢𝙖𝙣𝙙𝙤.`
const q = m.quoted || m
const mime = q.mediaType || ''
if (!/sticker/.test(mime)) return m.reply(notStickerMessage)
const media = await q.download()
let out = await webp2png(media).catch(_ => null) || Buffer.alloc(0)
await conn.sendFile(m.chat, out, 'error.png', `᥀·࣭࣪̇˖🌆◗ ${wm}...✨•༄`, m)
}
handler.help = ['toimg (reply)']
handler.tags = ['sticker']
handler.command = ['toimg', 'img', 'jpg']
export default handler