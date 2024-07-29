import { createHash } from 'crypto'
let handler = async function (m, { conn, text, usedPrefix }) {
let sn = createHash('md5').update(m.sender).digest('hex')

conn.fakeReply(m.chat, sn, '573108625104@s.whatsapp.net', wm, 'status@broadcast')
await m.reply(`☝🏻 Ese es tu codigo de serie.`)    
}
handler.help = ['myns']
handler.tags = ['rg']
handler.command = /^(myns|ceksn)$/i
handler.register = true
export default handler