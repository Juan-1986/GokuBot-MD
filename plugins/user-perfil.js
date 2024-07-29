import {createHash} from 'crypto';
import PhoneNumber from 'awesome-phonenumber';
import fetch from 'node-fetch';
const handler = async (m, {conn, usedPrefix, participants, isPrems}) => {
  let pp = imagen1;
  const who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender;
  if (!(who in global.db.data.users)) throw `⦉👤⦊ » 𝙀𝙡 𝙪𝙨𝙪𝙖𝙧𝙞𝙤 𝙦𝙪𝙚 𝙢𝙚𝙣𝙨𝙞𝙤𝙣𝙖𝙨𝙩𝙚, 𝙣𝙤 𝙚𝙨𝙩𝙖 𝙧𝙚𝙜𝙞𝙨𝙩𝙧𝙖𝙙𝙤 𝙚𝙣 𝙢𝙞 𝙗𝙖𝙨𝙚 𝙙𝙚 𝙙𝙖𝙩𝙤𝙨 𝙥𝙖𝙧𝙖 𝙫𝙚𝙧 𝙨𝙪 𝙥𝙚𝙧𝙛𝙞𝙡.`;
  try {
    pp = await conn.profilePictureUrl(who);
  } catch (e) {
  } finally {
    const {name, limit, lastclaim, registered, regTime, age, premiumTime} = global.db.data.users[who];
    const username = conn.getName(who);
    const prem = global.prems.includes(who.split `@` [0]);
    const sn = createHash('md5').update(who).digest('hex');
    const str = `• 👤 » ɴᴏᴍʙʀᴇ:
» @${who.replace(/@.+/, '')}

• 📅 » ᴇᴅᴀᴅ:
» ${registered ? age + ' años' : ''}

• ✔️ » ɴᴜᴍᴇʀᴏ ᴅᴇ sᴇʀɪᴇ:
» ${sn}

• 🔢 » ɴᴜᴍᴇʀᴏ:
» ${PhoneNumber('+' + who.replace('@s.whatsapp.net', '')).getNumber('international')}

• 🥏 » ɴᴜᴍᴇʀᴏ ᴅɪʀᴇᴄᴛᴏ:
» wa.me/${who.split`@`[0]}
`;
    conn.sendMessage(m.chat, {image: {url: pp}, caption: str}, {quoted: m});
  }
};
handler.help = ['profile [@user]'];
handler.tags = ['xp'];
handler.command = /^perfil|profile?$/i;
handler.register = true
export default handler;
