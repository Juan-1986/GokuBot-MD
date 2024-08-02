// Esta función es para la versión LATAM 

import fs from 'fs'
const rutaArchivo = './prefijos.json'
const existeArchivo = fs.existsSync(rutaArchivo)

let handler = m => m
handler.before = async function (m, { conn, isAdmin, isOwner, isROwner, isBotAdmin } ) {
if (!m.isGroup) return 
if (m.fromMe) return
if (isAdmin || isOwner || m.fromMe || isROwner || !isBotAdmin) return
//if (!isAdmin || !isOwner || !isROwner || m.fromMe || !isBotAdmin) return
  
let delet = m.key.participant
let bang = m.key.id

let chat = global.db.data.chats[m.chat]
if (chat.antifake) {
let texto = `🚨 𝙀𝙡 𝙥𝙖𝙧𝙩𝙞𝙘𝙞𝙥𝙖𝙣𝙩𝙚: *@${m.sender.split`@`[0]}*, 𝙣𝙤 𝙚𝙨 𝙗𝙞𝙣𝙫𝙚𝙣𝙞𝙙𝙤/𝙖 𝙚𝙣 𝙚𝙨𝙩𝙚 𝙜𝙧𝙪𝙥𝙤.\n• 𝙎𝙚𝙧𝙖 𝙚𝙡𝙞𝙢𝙞𝙣𝙖𝙙𝙤 𝙙𝙚 𝙞𝙣𝙢𝙚𝙙𝙞𝙖𝙩𝙤.`

if (existeArchivo) {
try {
const contenido = fs.readFileSync(rutaArchivo, 'utf-8')
const prefijos = JSON.parse(contenido)
const comienzaConPrefijo = prefijos.some(prefijo => m.sender.startsWith(prefijo))
if (comienzaConPrefijo) {
await conn.sendMessage(m.chat, { text: texto, mentions: [m.sender] }, { quoted: m })
await conn.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: bang, participant: delet }})
let responseb = await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
if (responseb[0].status === "404") return   
}
} catch (error) {
console.log('Error "prefijos.json": ', error)
return
}} else {
if (m.sender.startsWith('6') || m.sender.startsWith('9') ||  m.sender.startsWith('7') ||  m.sender.startsWith('4') || m.sender.startsWith('2')) {
await conn.sendMessage(m.chat, { text: texto, mentions: [m.sender] }, { quoted: m })
await conn.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: bang, participant: delet }})
let responseb = await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
if (responseb[0].status === "404") return   
}}

}}
export default handler
