let handler = async (m, { conn, text, usedPrefix, command }) => {
  if (!text) return conn.reply(m.chat, `𝙄𝙣𝙜𝙧𝙚𝙨𝙚 𝙪𝙣 𝙩𝙚𝙭𝙩𝙤 𝙥𝙖𝙧𝙖 𝙘𝙖𝙢𝙗𝙞𝙖𝙧 𝙚𝙡 𝙣𝙤𝙢𝙗𝙧𝙚 𝙙𝙚 𝙪𝙨𝙪𝙖𝙧𝙞𝙤 𝙙𝙚𝙡 𝙗𝙤𝙩.`, m, rcanal)
  try {
    await conn.updateProfileName(text)
    return conn.reply(m.chat, '✅️ 𝙎𝙚 𝙝𝙖 𝙘𝙤𝙣𝙛𝙞𝙜𝙪𝙧𝙖𝙙𝙤 𝙚𝙡 𝙣𝙤𝙢𝙗𝙧𝙚 𝙙𝙚𝙡 𝙗𝙤𝙩 𝙘𝙤𝙣 𝙚𝙭𝙞𝙩𝙤.', m, rcanal)
  } catch (e) {
    console.log(e)
    throw `❌ 𝙊𝙘𝙪𝙧𝙧𝙞𝙤 𝙪𝙣 𝙚𝙧𝙧𝙤𝙧 𝙞𝙣𝙚𝙨𝙥𝙚𝙧𝙖𝙙𝙤, 𝙞𝙣𝙩𝙚𝙣𝙩𝙖𝙡𝙤 𝙙𝙚 𝙣𝙪𝙚𝙫𝙤.`
  }
}
handler.help = ['nuevonombrebot <teks>']
handler.tags = ['owner']
handler.command = /^(nuevonombrebot|nuevonombre|cambianombre)$/i

handler.owner = true
export default handler
