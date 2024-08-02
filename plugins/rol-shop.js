const xpperlimit = 350;
const handler = async (m, {conn, command, args}) => {
const img = imagen2;
  let count = command.replace(/^buy/i, '');
  count = count ? /all/i.test(count) ? Math.floor(global.db.data.users[m.sender].exp / xpperlimit) : parseInt(count) : args[0] ? parseInt(args[0]) : 1;
  count = Math.max(1, count);
  if (global.db.data.users[m.sender].exp >= xpperlimit * count) {
    global.db.data.users[m.sender].exp -= xpperlimit * count;
    global.db.data.users[m.sender].limit += count;
const texto = `
⦉✅⦊ » 𝗖𝗢𝗠𝗣𝗥𝗔 𝗘𝗫𝗜𝗧𝗢𝗦𝗔!!!

• 𝗖𝗢𝗠𝗣𝗥𝗔𝗦𝗧𝗘: +${count} diamantes 💎 `;
 await conn.sendButton(m.chat, texto, `⚡ 𝗚𝗔𝗦𝗧𝗔𝗦𝗧𝗘: -${xpperlimit * count} de XP`, img, [['𝗠𝗘𝗡𝗨 𝗥𝗣𝗚 🎒', '/menurpg'], ['𝗕𝗔𝗟𝗔𝗡𝗖𝗘 🪐', '/balance']], m);
  } else conn.sendButton(m.chat, `⦉❌⦊ » 𝙉𝙤 𝙩𝙞𝙚𝙣𝙚𝙨 𝙨𝙪𝙛𝙞𝙘𝙞𝙚𝙣𝙩𝙚 𝙚𝙭𝙥 𝙥𝙖𝙧𝙖 𝙘𝙤𝙢𝙥𝙧𝙖𝙧 ${count} 𝘿𝙞𝙖𝙢𝙖𝙣𝙩𝙚(𝙨) 💎`, wm, img, [['𝗠𝗘𝗡𝗨 𝗥𝗣𝗚 🎒', '/menurpg'], ['𝗠𝗜𝗡𝗔𝗥 𝗘𝗫𝗣 ⛏️', '/minar']], m);
};
handler.help = ['Buy', 'Buyall'];
handler.tags = ['xp'];
handler.command = ['buy', 'buyall'];
handler.disabled = false;
handler.register = true
export default handler;
