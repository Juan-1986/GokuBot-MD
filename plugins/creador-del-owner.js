import { readdirSync, unlinkSync, existsSync, promises as fs, rmSync } from 'fs'
import path from 'path'

var handler = async (m, { conn, usedPrefix }) => {

if (global.conn.user.jid !== conn.user.jid) {
return conn.reply(m.chat, '👤 • 𝙐𝙨𝙚 𝙚𝙨𝙩𝙚 𝙘𝙤𝙢𝙖𝙣𝙙𝙤 𝙚𝙣 𝙚𝙡 𝙗𝙤𝙩 𝙥𝙧𝙞𝙣𝙘𝙞𝙥𝙖𝙡.', m, gokuAll, )
}
await conn.reply(m.chat, '♻️ • 𝙄𝙣𝙞𝙘𝙞𝙖𝙣𝙙𝙤 𝙚𝙡𝙞𝙢𝙞𝙣𝙖𝙘𝙞𝙤𝙣 𝙙𝙚 𝙙𝙖𝙩𝙤𝙨 𝙚𝙭𝙚𝙥𝙩𝙤 (creds.json)...*', m, gokuAll, )
m.react(rwait)

let sessionPath = './GokuBotSession/'

try {

if (!existsSync(sessionPath)) {
return await conn.reply(m.chat, '🚩 *La carpeta está vacía*', m, gokuAll, )
}
let files = await fs.readdir(sessionPath)
let filesDeleted = 0
for (const file of files) {
if (file !== 'creds.json') {
await fs.unlink(path.join(sessionPath, file))
filesDeleted++;
}
}
if (filesDeleted === 0) {
await conn.reply(m.chat, '🚩 *La carpeta esta vacía*',  m, rcanal, )
} else {
m.react(done)
await conn.reply(m.chat, `🚩 *Se eliminaron ${filesDeleted} archivos de sesión, excepto el archivo creds.json*`,  m, rcanal, )
conn.reply(m.chat, `🚩 *¡Hola! ¿logras verme?*`, m, rcanal, )

}
} catch (err) {
console.error('Error al leer la carpeta o los archivos de sesión:', err);
await conn.reply(m.chat, '🚩 *Ocurrió un fallo*',  m, rcanal, )
}

}
handler.help = ['dsowner']
handler.tags = ['fix', 'owner']
handler.command = /^(delai|delyaemori|dsowner|clearallsession)$/i

handler.rowner = true

export default handler