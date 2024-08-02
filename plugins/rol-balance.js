const handler = async (m, {usedPrefix}) => {
  let who;
  if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender;
  else who = m.sender;
  const name = conn.getName(who);
 const text = `
Nombre:
• ${name}

Diamantes:
• ${global.db.data.users[who].diamond} 💎

Experiencia:
• ${global.db.data.users[who].exp} ⚡

Monedas:
• ${global.db.data.users[who].money} 🪙`;

  await conn.sendButton(m.chat, text, wm, null, [['𝗠𝗜𝗡𝗔𝗥 𝗗𝗜𝗔𝗠𝗔𝗡𝗧𝗘𝗦 💎', '/minar2'], ['𝗠𝗜𝗡𝗔𝗥 𝗘𝗫𝗣 ⚡', '.minar'], ['𝗠𝗜𝗡𝗔𝗥 𝗠𝗢𝗡𝗘𝗗𝗔𝗦 🪙', '#minar3'], ['𝗠𝗘𝗡𝗨 𝗥𝗣𝗚 🎒', '!menurpg']], m)
};
handler.help = ['bal'];
handler.tags = ['xp'];
handler.command = ['bal', 'diamantes', 'diamond', 'balance'];
export default handler;
