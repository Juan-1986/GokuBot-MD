import { execSync } from 'child_process'

var handler = async (m, { conn, text }) => {

m.react('🏷️') 
try {

const stdout = execSync('git pull' + (m.fromMe && text ? ' ' + text : ''));
let messager = stdout.toString()

if (messager.includes('✅ » ➢ 𝙂𝙤𝙠𝙪𝘽𝙤𝙩-𝙈𝘿 𝙮𝙖 𝙨𝙚 𝙚𝙣𝙘𝙪𝙚𝙣𝙩𝙧𝙖 𝙖𝙘𝙩𝙪𝙖𝙡𝙞𝙯𝙖𝙙𝙤.')) messager = '✅ » ➢ 𝙂𝙤𝙠𝙪𝘽𝙤𝙩-𝙈𝘿 𝙮𝙖 𝙚𝙨𝙩𝙖 𝙖 𝙡𝙖 𝙫𝙚𝙧𝙨𝙞𝙤𝙣 𝙢𝙖𝙨 𝙧𝙚𝙘𝙞𝙚𝙣𝙩𝙚.'

if (messager.includes('• 𝘼𝙘𝙩𝙪𝙖𝙡𝙞𝙯𝙖𝙣𝙙𝙤...')) messager = '• 𝘾𝙖𝙧𝙜𝙖𝙣𝙙𝙤 𝙙𝙖𝙩𝙤𝙨 𝙖𝙘𝙩𝙪𝙖𝙡𝙞𝙯𝙖𝙙𝙤𝙨, 𝙚𝙨𝙥𝙚𝙧𝙚 𝙪𝙣 𝙢𝙤𝙢𝙚𝙣𝙩𝙤...\n\n' + stdout.toString()
conn.reply(m.chat, messager, m, rcanal,)

} catch { 
try {

const status = execSync('git status --porcelain')

if (status.length > 0) {
const conflictedFiles = status.toString().split('\n').filter(line => line.trim() !== '').map(line => {
if (line.includes('.npm/') || line.includes('.cache/') || line.includes('tmp/') || line.includes('GokuBotSession/') || line.includes('npm-debug.log')) {
return null
}
return '*→ ' + line.slice(3) + '*'}).filter(Boolean)
if (conflictedFiles.length > 0) {
const errorMessage = `✅ » ➢ Se han hecho cambios locales qué entran en conflicto con las Actualizaciones del Repositorio, Para actualizar, reinstala el Bot o realiza las actualizaciones manualmente.\n\n*ARCHIVOS EN CONFLICTO:*\n\n${conflictedFiles.join('\n')}`
await conn.reply(m.chat, errorMessage, m, rcanal,)
}
}
} catch (error) {
console.error(error)
let errorMessage2 = '🚫 » ➢ 𝙊𝙘𝙪𝙧𝙧𝙞𝙤 𝙪𝙣 𝙚𝙧𝙧𝙤𝙧 𝙞𝙣𝙚𝙨𝙥𝙚𝙧𝙖𝙙𝙤.'
if (error.message) {
errorMessage2 += '\n𝙀𝙍𝙍𝙊𝙍: ' + error.message;
}
await conn.reply(m.chat, errorMessage2, m, rcanal,)
}
}

}

handler.help = ['update', 'actualizar']
handler.tags = ['owner']
handler.command = ['update', 'actualizar']
handler.rowner = true

export default handler