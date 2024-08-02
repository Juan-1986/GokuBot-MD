const handler = async (m, {conn, text, usedPrefix, command}) => {
  let who;
  if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : false;
  else who = m.chat;
  const user = global.db.data.users[who];
  if (!who) throw `👤 • 𝙀𝙩𝙞𝙦𝙪𝙚𝙩𝙚 𝙖𝙡 𝙪𝙨𝙪𝙖𝙧𝙞𝙤 𝙥𝙧𝙚𝙢𝙞𝙪𝙢 𝙙𝙚𝙡 𝙗𝙤𝙩 𝙥𝙖𝙧𝙖 𝙦𝙪𝙞𝙩𝙖𝙧𝙡𝙚 𝙚𝙡 𝙥𝙧𝙚𝙢𝙞𝙪𝙢.`;
  if (!user) throw `👤 • 𝙀𝙡 𝙪𝙨𝙪𝙖𝙧𝙞𝙤 𝙢𝙚𝙣𝙨𝙞𝙤𝙣𝙖𝙙𝙤, 𝙣𝙤 𝙚𝙨𝙩𝙖 𝙧𝙚𝙜𝙞𝙨𝙩𝙧𝙖𝙙𝙤 𝙚𝙣 𝙢𝙞 𝙗𝙖𝙨𝙚 𝙙𝙚 𝙙𝙖𝙩𝙤𝙨.`;
  if (user.premiumTime = 0) throw '👤 • 𝙀𝙡 𝙪𝙨𝙪𝙖𝙧𝙞𝙤 𝙣𝙤 𝙚𝙨 𝙪𝙣 𝙪𝙨𝙪𝙖𝙧𝙞𝙤 𝙥𝙧𝙚𝙢𝙞𝙪𝙢 𝙙𝙚𝙡 𝙗𝙤𝙩.';
  const txt = text.replace('@' + who.split`@`[0], '').trim();

  user.premiumTime = 0;

  user.premium = false;

  const textdelprem = `✅ • 𝙀𝙡 @${who.split`@`[0]} 𝙮𝙖 𝙣𝙤 𝙚𝙨 𝙥𝙧𝙚𝙢𝙞𝙪𝙢 𝙚𝙣 𝙚𝙡 𝙗𝙤𝙩.`;
  m.reply(textdelprem, null, {mentions: conn.parseMention(textdelprem)});
};
handler.help = ['delprem <@user>'];
handler.tags = ['owner'];
handler.command = /^(remove|-|del)premium$/i;
handler.group = true;
handler.rowner = true;
export default handler;
