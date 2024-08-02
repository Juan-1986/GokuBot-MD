import {join} from 'path';
import {promises} from 'fs';
const handler = async (m, {conn, args, usedPrefix, __dirname}) => {
  const imgr = imagen1;
  const _package = JSON.parse(await promises.readFile(join(__dirname, '../package.json')).catch((_) => ({}))) || {};
  const user = global.db.data.users[m.sender];
  if (user.health >= 100) return conn.sendButton(m.chat, `⦉❤️⦊ » 𝗧𝘂 𝘀𝗮𝗹𝘂𝗱 𝗲𝘀𝘁𝗮 𝗹𝗹𝗲𝗻𝗮!!!\n• Salud: ${user.health}`, wm, imgr, [[`𝗠𝗘𝗡𝗨 𝗥𝗣𝗚 🎒`, `${usedPrefix}menurpg`], ['𝗔𝗩𝗘𝗡𝗧𝗨𝗥𝗔𝗥 ⛰️', `${usedPrefix}adventure`], m)
  const heal = 40 + (user.cat * 4);
  const count = Math.max(1, Math.min(Number.MAX_SAFE_INTEGER, (isNumber(args[0]) && parseInt(args[0]) || Math.round((90 - user.health) / heal)))) * 1;
  if (user.potion < count) {
    return conn.reply(m.chat, `⦉💔⦊ » 𝙉𝙤 𝙩𝙞𝙚𝙣𝙚𝙨 𝙥𝙤𝙘𝙞𝙤𝙣𝙚𝙨 𝙥𝙖𝙧𝙖 𝙘𝙪𝙧𝙖𝙧𝙩𝙚...

• 𝙉𝙚𝙘𝙚𝙨𝙞𝙩𝙖𝙨:
» ${count - user.potion} 𝙙𝙚 𝙥𝙤𝙘𝙞𝙤𝙣 𝙥𝙖𝙧𝙖 𝙘𝙪𝙧𝙖𝙧𝙩𝙚. 🧪


Salud: ${user.health}
Pocion: ${user.potion}

🎁 𝘾𝙤𝙢𝙥𝙧𝙖 𝙥𝙤𝙘𝙞𝙤𝙣𝙚𝙨 𝙥𝙖𝙧𝙖 𝙘𝙪𝙧𝙖𝙧𝙩𝙚.`, m);
  }
  user.potion -= count * 1; // 1 potion = count (1)
  user.health += heal * count;
  conn.sendButton(m.chat, `⦉❤️⦊ » 𝙏𝙪 𝙨𝙖𝙡𝙪𝙙 𝙚𝙨𝙩𝙖 𝙡𝙡𝙚𝙣𝙖!!!`, `𝙐𝙨𝙖𝙨𝙩𝙚: ${count} 𝙙𝙚 𝙥𝙤𝙘𝙞𝙤𝙣. 🧪\n\n⦉❤️⦊ » 𝗦𝗔𝗟𝗨𝗗: ${user.health}`, imgr, [[`𝗠𝗘𝗡𝗨 𝗥𝗣𝗚 🎒`, `${usedPrefix}menurpg`], ['𝗔𝗩𝗘𝗡𝗧𝗨𝗥𝗔𝗥 ⛰️', `${usedPrefix}adventure`]], m)
  //conn.reply(m.chat, `*Tu salud esta completa*\n\nHaz usado: ${count} para curarte.\n\nTu salud: ${user.health}.\nesta completa.`, m);
};
handler.help = ['heal'];
handler.tags = ['rpg'];
handler.command = /^(heal|curar)$/i;
handler.register = true
export default handler;
function isNumber(number) {
  if (!number) return number;
  number = parseInt(number);
  return typeof number == 'number' && !isNaN(number);
}
