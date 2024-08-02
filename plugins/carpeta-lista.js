let handler = async (m, { conn, command, text, usedPrefix }) => {
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }

const sections = [{
title: '📑 𝙇𝙄𝙎𝙏𝘼 𝘿𝙀 𝙀𝙓𝙊𝙏𝙄𝘾𝙊 𝘽𝙊𝙏 📑',
rows: [
{title: "❮👤 𝙇𝙄𝙎𝙏𝘼 𝘿𝙀 𝘽𝙇𝙊𝙌𝙐𝙀𝘼𝘿𝙊𝙎 👤❯:", rowId: `${usedPrefix}listablock`, description: ``},
{title: "❮📢 𝙇𝙄𝙎𝙏𝘼 𝘿𝙀 𝘼𝘿𝙑𝙀𝙍𝙏𝙄𝘿𝙊𝙎 📢❯:", rowId: `${usedPrefix}listaadv`, description: ``},
{title: "❮🎉 𝙇𝙄𝙎𝙏𝘼 𝘿𝙀 𝙈𝙀𝙉𝙐𝙎 🎉❯:", rowId: `${usedPrefix}menlist`, description: ``},
{title: "❮🚮 𝙇𝙄𝙎𝙏𝘼 𝘾𝙃𝘼𝙏𝙎 𝘽𝘼𝙉𝙀𝘼𝘿𝙊𝙎 𝘿𝙀𝙇 𝘽𝙊𝙏 🚮❯:", rowId: `${usedPrefix}chatbans`, description: ``},
{title: "❮👥 𝙇𝙄𝙎𝙏𝘼 𝘿𝙀 𝙐𝙎𝙐𝘼𝙍𝙄𝙊𝙎 𝘽𝘼𝙉𝙀𝘼𝘿𝙊𝙎 👥❯:", rowId: `${usedPrefix}userbans`, description: ``},
{title: "❮🏆 𝙇𝙄𝙎𝙏𝘼 𝘿𝙀 𝙐𝙎𝙐𝘼𝙍𝙄𝙊𝙎 𝙋𝙍𝙀𝙈𝙄𝙐𝙈 🏆❯:", rowId: `${usedPrefix}listprems`, description: ``},
{title: "❮📞 𝙇𝙄𝙎𝙏𝘼 𝘿𝙀 𝘼𝙎𝙄𝙎𝙏𝙀𝙉𝘾𝙄𝘼 𝘼𝙇 𝘽𝙊𝙏 📞❯:", rowId: `${usedPrefix}listasistencia`, description: ``},
{title: "❮👑 𝙇𝙄𝙎𝙏𝘼 𝘿𝙀 𝘼𝘿𝙈𝙄𝙉𝙎 𝘿𝙀𝙇 𝘽𝙊𝙏 👑❯:", rowId: `${usedPrefix}adminsbot`, description: ``}]}]

const listMessage = {
  text: `🪐 𝙇𝙄𝙎𝙏𝘼𝙎 𝘿𝙄𝙎𝙋𝙊𝙉𝙄𝘽𝙇𝙀𝙎...`,
  footer: wm,
  title: `🪐 𝙀𝙓𝙊𝙏𝙄𝘾𝙊 𝘽𝙊𝙏 𝙈𝘿 🪐`,
  buttonText: `Ver Lista`,
  sections
}
await conn.sendMessage(m.chat, listMessage, {quoted: fkontak})}
handler.command = /^listas|lists?$/i
export default handler
