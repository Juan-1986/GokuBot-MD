let handler = async (m, { conn, text, usedPrefix, command }) => {
    if (!text) throw '𝙄𝙣𝙜𝙧𝙚𝙨𝙚 𝙚𝙡 𝙩𝙚𝙭𝙩𝙤 𝙥𝙖𝙧𝙖 𝙧𝙚𝙥𝙤𝙧𝙩𝙖𝙧 𝙪𝙣 𝙘𝙤𝙢𝙖𝙣𝙙𝙤 𝙚𝙧𝙧𝙤𝙣𝙚𝙤.'
    if (text.length < 10) throw '𝙀𝙡 𝙩𝙚𝙭𝙩𝙤 𝙣𝙤 𝙙𝙚𝙗𝙚 𝙘𝙤𝙣𝙩𝙚𝙣𝙚𝙧 𝙢𝙚𝙣𝙤𝙨 𝙙𝙚 10 𝙘𝙖𝙧𝙖𝙘𝙩𝙚𝙧𝙚𝙨, 𝙞𝙣𝙩𝙚𝙣𝙩𝙖𝙡𝙤 𝙙𝙚 𝙣𝙪𝙚𝙫𝙤.'
    if (text.length > 1000) throw '𝙀𝙡 𝙡𝙞𝙢𝙞𝙩𝙚 𝙢𝙖𝙭𝙞𝙢𝙤 𝙚𝙨 𝙙𝙚 𝙘𝙖𝙧𝙖𝙘𝙩𝙚𝙧𝙚𝙨 𝙚𝙨 𝙙𝙚 1000, 𝙞𝙣𝙩𝙚𝙣𝙩𝙖𝙡𝙤 𝙙𝙚 𝙣𝙪𝙚𝙫𝙤.'
    const teks = `
🗃️ • 𝗦𝗠𝗦 𝗥𝗘𝗣𝗢𝗥𝗧𝗘 • 🗃️

ᴜsᴜᴀʀɪᴏ:
• wa.me/${m.sender.split`@`[0]}

ᴍᴇɴsᴀᴊᴇ:
• ${text}
`
    await conn.reply(global.owner[0][0] + '@s.whatsapp.net', m.quoted ? teks + m.quoted.text : teks, m, { mentions: conn.parseMention(teks) })
    m.reply('✅ 𝙀𝙡 𝙧𝙚𝙥𝙤𝙧𝙩𝙚 𝙛𝙪𝙚 𝙚𝙣𝙫𝙞𝙖𝙙𝙤 𝙖 𝙡𝙤𝙨 𝙙𝙚𝙨𝙖𝙧𝙧𝙤𝙡𝙡𝙖𝙙𝙤𝙧𝙚𝙨 𝙙𝙚𝙡 𝙗𝙤𝙩.')
}
handler.help = ['reportar']
handler.tags = ['info']
handler.command = /^(reporte|report|reportar|bug|error)$/i

export default handler