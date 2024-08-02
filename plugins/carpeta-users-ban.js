let handler = async (m, { conn, isOwner }) => {
let users = Object.entries(global.db.data.users).filter(user => user[1].banned)
let caption = `
╭• •┄•『👤 𝙐𝙎𝙀𝙍𝙎 𝘽𝘼𝙉 👤』
│ʟɪsᴛᴀ ᴅᴇ ᴜsᴜᴀʀɪᴏs ʙᴀɴᴇᴀᴅᴏs
│ᴅᴇʟ ʙᴏᴛ ᴘᴏʀ ɪɴᴄᴜᴍᴘʟɪᴍɪᴇɴᴛᴏ
│ᴏ ᴏᴛʀᴏ ᴛɪᴘᴏ ᴅᴇ ᴄᴀsᴏ.
╰• •┄• •┄• •┄• •┄• •┄• •┄• •┄•

𝗧𝗢𝗧𝗔𝗟: *${users.length} Usuarios*
• ${users ? '' + users.map(([jid], i) => `

𝗡𝘂𝗺𝗲𝗿𝗼: *${i + 1}.* ${conn.getName(jid) == undefined ? 'Sin Usuarios Baneados' : conn.getName(jid)}

𝗨𝘀𝘂𝗮𝗿𝗶𝗼𝘀:
${isOwner ? '@' + jid.split`@`[0] : jid}\n•┄• •┄• •┄• •┄• •┄• •┄•`.trim()).join('\n') : ''}

𝘓𝘰𝘴 𝘶𝘴𝘶𝘢𝘳𝘪𝘰𝘴 𝘮𝘦𝘯𝘴𝘪𝘰𝘯𝘢𝘥𝘰𝘴 𝘯𝘰 𝘱𝘶𝘦𝘥𝘦𝘯 𝘶𝘴𝘢𝘳 𝘢 ${wm}.
`.trim()

await conn.reply(m.chat, caption, m, { mentions: await conn.parseMention(caption) })}
handler.command = /^userbans|banusers$/i

export default handler
