import { webp2mp4 } from '../lib/webp2mp4.js'
import { ffmpeg } from '../lib/converter.js'
let handler = async (m, { conn, usedPrefix, command }) => {
if (!m.quoted) throw `᥀·࣭࣪̇˖☄️◗ 𝙍𝙚𝙨𝙥𝙤𝙣𝙙𝙖 𝙖 𝙪𝙣 𝙨𝙩𝙞𝙘𝙠𝙚𝙧 𝙚𝙣 𝙢𝙤𝙫𝙞𝙢𝙞𝙚𝙣𝙩𝙤 𝙥𝙖𝙧𝙖 𝙪𝙨𝙖𝙧 𝙚𝙨𝙩𝙚 𝙘𝙤𝙢𝙖𝙣𝙙𝙤.`
let mime = m.quoted.mimetype || ''
if (!/webp|audio/.test(mime)) throw `᥀·࣭࣪̇˖❌◗ 𝙉𝙤 𝙫𝙖𝙡𝙞𝙙𝙤, 𝙧𝙚𝙨𝙥𝙤𝙣𝙙𝙖 𝙖 𝙪𝙣 𝙨𝙩𝙞𝙘𝙠𝙚𝙧 𝙚𝙣 𝙢𝙤𝙫𝙞𝙢𝙞𝙚𝙣𝙩𝙤.`
let media = await m.quoted.download()
let out = Buffer.alloc(0)
if (/webp/.test(mime)) {
out = await webp2mp4(media)
} else if (/audio/.test(mime)) {
out = await ffmpeg(media, [
'-filter_complex', 'color',
'-pix_fmt', 'yuv420p',
'-crf', '51',
'-c:a', 'copy',
'-shortest'
], 'mp3', 'mp4')
}
await conn.sendFile(m.chat, out, 'error.mp4', 'ExoticoBot-MD / Convertidor de Stickers', m, 0, { thumbnail: out })
}
handler.help = ['tovideo']
handler.tags = ['sticker']
handler.command = ['tovideo']
export default handler
