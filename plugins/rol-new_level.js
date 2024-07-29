import {canLevelUp, xpRange} from '../lib/levelling.js';
import {levelup} from '../lib/canvas.js';

const handler = async (m, {conn}) => {
  const name = conn.getName(m.sender);
  const user = global.db.data.users[m.sender];
  if (!canLevelUp(user.level, user.exp, global.multiplier)) {
    const {min, xp, max} = xpRange(user.level, global.multiplier);
    throw ` « ⚡ ❮ 𝗕𝗔𝗟𝗔𝗡𝗖𝗘 : 𝗡𝗜𝗩𝗘𝗟 ❯ ⚡ » 

• ɴᴏᴍʙʀᴇ: *${name}*
• ɴɪᴠᴇʟ: *${user.level}* » *${user.exp - min}*

• 𝗧𝗲 𝗳𝗮𝗹𝘁𝗮: *${max - user.exp}* 𝗽𝗮𝗿𝗮 𝘀𝘂𝗯𝗶𝗿 𝗱𝗲 𝗻𝗶𝘃𝗲𝗹.
`.trim();
  }
  const before = user.level * 1;
  while (canLevelUp(user.level, user.exp, global.multiplier)) user.level++;
  if (before !== user.level) {
    const teks = `𝘚𝘶𝘣𝘪𝘴𝘵𝘦 𝘥𝘦 𝘯𝘪𝘷𝘦𝘭!!!!`;
    const str = `
✦ « 🎊 ❮ 𝗡𝗨𝗘𝗩𝗢 𝗡𝗜𝗩𝗘𝗟 ❯ 🎊 » ✦

🔙 ɴɪᴠᴇʟ ᴀɴᴛᴇʀɪᴏʀ: *${before}*

🔜 ɴɪᴠᴇʟ ᴀᴄᴛᴜᴀʟ: *${user.level}*

• ᴍɪᴇɴᴛʀᴀs ᴍᴀs ᴜsᴇs ᴇʟ ʙᴏᴛ, ᴍᴀs sᴜʙɪʀᴀs ᴅᴇ ɴɪᴠᴇʟ.`.trim();
    try {
      const img = await levelup(teks, user.level);
      conn.fakeReply(m.chat, img, str, '573108625104@s.whatsapp.net', '⚡ 𝗚𝗼𝗸𝘂𝗕𝗼𝘁-𝗠𝗗 ⚡', 'status@broadcast')  
      //conn.sendFile(m.chat, img, 'levelup.jpg', str, m);
    } catch (e) {
      m.reply(str);
    }
  }
};

handler.help = ['levelup'];
handler.tags = ['xp'];

handler.command = ['nivel', 'lvl', 'levelup', 'level'];
handler.register = true;
export default handler;