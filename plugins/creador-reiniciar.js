import { spawn } from 'child_process'

var handler = async (m, { conn, isROwner, text }) => {

if (!process.send) throw 'Dont: node mini.js\nDo: node index.js'
if (conn.user.jid == conn.user.jid) {
await conn.reply(m.chat, '𝙍𝙀𝙄𝙉𝙄𝘾𝙄𝘼𝙉𝘿𝙊 𝘿𝘼𝙏𝙊𝙎....', m, rcanal, )
process.send('reset')
} else throw '✅ » ➢ 𝙇𝙞𝙨𝙩𝙤, 𝙚𝙣𝙩𝙧𝙖 𝙖 𝙡𝙖 𝙘𝙤𝙣𝙨𝙤𝙡𝙖 𝙮 𝙥𝙤𝙣 *(npm start)* 𝙥𝙖𝙧𝙖 𝙖𝙘𝙩𝙞𝙫𝙖𝙧𝙡𝙤.'

}
handler.help = ['restart']
handler.tags = ['owner']
handler.command = ['restart','reiniciar'] 

handler.rowner = true

export default handler