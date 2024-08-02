const handler = async (m, {conn, text, usedPrefix, command}) => {
  if (!text) throw `𝙄𝙣𝙜𝙧𝙚𝙨𝙚 𝙪𝙣 𝙥𝙧𝙚𝙛𝙞𝙟𝙤 𝙥𝙖𝙧𝙖 𝙪𝙨𝙖𝙧 𝙚𝙨𝙩𝙚 𝙘𝙤𝙢𝙖𝙣𝙙𝙤.\n\n𝙋𝙤𝙧 𝙚𝙟𝙚𝙢𝙥𝙡𝙤: ${usedPrefix + command} /`;
  global.prefix = new RegExp('^[' + (text || global.opts['prefix'] || '‎xzXZ/i!#$%+£¢€¥^°=¶∆×÷π√✓©®:;?&.\\-').replace(/[|\\{}()[\]^$+*?.\-\^]/g, '\\$&') + ']');
 // await m.reply(`*✅️ 𝙋𝙧𝙚𝙛𝙞𝙟𝙤 𝙘𝙖𝙢𝙗𝙞𝙖𝙙𝙤 𝙖: ${text}*`);
  conn.fakeReply(m.chat, `✅️ 𝙋𝙍𝙀𝙁𝙄𝙅𝙊 𝘾𝙊𝙉𝙁𝙄𝙂𝙐𝙍𝘼𝘿𝙊 𝘾𝙊𝙉 𝙀𝙓𝙄𝙏𝙊 𝘼: *${text}*`, '0@s.whatsapp.net', '🪐 𝙂𝙤𝙠𝙪𝘽𝙤𝙩-𝙈𝘿 / 𝙋𝙧𝙚𝙛𝙞𝙭 ✨')
};
handler.help = ['prefix'].map((v) => v + ' [prefix]');
handler.tags = ['owner'];
handler.command = /^(prefix)$/i;
handler.rowner = true;
export default handler;