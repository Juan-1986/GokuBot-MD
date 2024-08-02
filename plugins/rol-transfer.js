const items = ['limit', 'exp', 'money'];
const confirmation = {};

async function handler(m, { conn, args, usedPrefix, command }) {
  if (confirmation[m.sender]) return conn.sendMessage(m.chat, {text: '⦉❌⦊ » 𝘼𝙪𝙣 𝙣𝙤 𝙝𝙖𝙮 𝙛𝙤𝙣𝙙𝙤𝙨 𝙙𝙚 𝙩𝙧𝙖𝙣𝙨𝙛𝙚𝙧𝙚𝙣𝙘𝙞𝙖, 𝙧𝙚𝙜𝙧𝙚𝙨𝙚 𝙥𝙧𝙤𝙣𝙩𝙤.', mentions: [m.sender]}, {quoted: m});
  const user = global.db.data.users[m.sender];
  const item = items.filter((v) => v in user && typeof user[v] == 'number');
  const lol = `⦉🍁⦊ » 𝙀𝙅𝙀𝙈𝙋𝙇𝙊 𝘿𝙀 𝙐𝙎𝙊:
*${usedPrefix + command}*  [tipo] [cantidad] [@user]

𝙊𝙏𝙍𝙊 𝙀𝙅𝙀𝙈𝙋𝙇𝙊:
*${usedPrefix + command} exp 65 @${m.sender.split('@')[0]}*

ᴀʀᴛɪᴄᴜʟᴏs ᴛʀᴀɴsғᴇʀɪʙʟᴇs:
💎 *limit* = diamantes
⚡ *exp* = experiencia
🪙 *money* = monedas
`.trim();
  const type = (args[0] || '').toLowerCase();
  if (!item.includes(type)) return conn.sendMessage(m.chat, {text: lol, mentions: [m.sender]}, {quoted: m});
  const count = Math.min(Number.MAX_SAFE_INTEGER, Math.max(1, (isNumber(args[1]) ? parseInt(args[1]) : 1))) * 1;
  const who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : args[2] ? (args[2].replace(/[@ .+-]/g, '') + '@s.whatsapp.net') : '';
  if (!who) return conn.sendMessage(m.chat, {text: '⦉👤⦊ » 𝙈𝙚𝙣𝙨𝙞𝙤𝙣𝙚 𝙖𝙡 𝙪𝙨𝙪𝙖𝙧𝙞𝙤 𝙦𝙪𝙚 𝙙𝙚𝙨𝙚𝙖 𝙩𝙧𝙖𝙣𝙛𝙚𝙧𝙞𝙧𝙡𝙚.', mentions: [m.sender]}, {quoted: m});
  if (!(who in global.db.data.users)) return conn.sendMessage(m.chat, {text: `*⦉👤⦊ »  El usuario ${who} no está registrado en la base de datos.*`, mentions: [m.sender]}, {quoted: m});
  if (user[type] * 1 < count) return conn.sendMessage(m.chat, {text: `*⦉❌⦊ »  No tienes suficientes ${type} para transferir.*`, mentions: [m.sender]}, {quoted: m});
const confirm = `*⦉🎒⦊ » ¿Está seguro de que desea transferir ${count} ${type} a @${(who || '').replace(/@s\.whatsapp\.net/g, '')}?* 

ᴇsᴄʀɪʙᴀ sɪɴ ᴘʀᴇғɪᴊᴏ:
*si = para acertar*
*no = para cancelar*

• 𝙩𝙞𝙚𝙣𝙚𝙨 60 𝙨𝙚𝙜𝙪𝙣𝙙𝙤𝙨 𝙥𝙖𝙧𝙖 𝙧𝙚𝙖𝙡𝙞𝙯𝙖𝙧...`.trim();
  await conn.sendMessage(m.chat, {text: confirm, mentions: [who]}, {quoted: m});
  confirmation[m.sender] = { sender: m.sender, to: who, message: m, type, count, timeout: setTimeout(() => (conn.sendMessage(m.chat, {text: '*⦉⏳⦊ »  Se acabó el tiempo, no se obtuvo respuesta. Transferencia cancelada.*', mentions: [m.sender]}, {quoted: m}), delete confirmation[m.sender]), 60 * 1000)};
}

handler.before = async (m) => {
  if (m.isBaileys) return;
  if (!(m.sender in confirmation)) return;
  if (!m.text) return;
  const { timeout, sender, message, to, type, count } = confirmation[m.sender];
  if (m.id === message.id) return;
  const user = global.db.data.users[sender];
  const _user = global.db.data.users[to];
  if (/^No|no$/i.test(m.text)) {
    clearTimeout(timeout);
    delete confirmation[sender];
    return conn.sendMessage(m.chat, {text: '*⦉✅⦊ » Cancelado, la transferencia no se realizará.*', mentions: [m.sender]}, {quoted: m});
  }
  if (/^Si|si$/i.test(m.text)) {
    const previous = user[type] * 1;
    const _previous = _user[type] * 1;
    user[type] -= count * 1;
    _user[type] += count * 1;
    if (previous > user[type] * 1 && _previous < _user[type] * 1) {
      conn.sendMessage(m.chat, {text: `*⦉✅⦊ »  Se transfirierón correctamente ${count} ${type} a @${(to || '').replace(/@s\.whatsapp\.net/g, '')}*`, mentions: [to]}, {quoted: m});
    } else {
      user[type] = previous;
      _user[type] = _previous;
      conn.sendMessage(m.chat, {text: `*⦉❌⦊ »  Error al transferir ${count} ${type} a @${(to || '').replace(/@s\.whatsapp\.net/g, '')}*`, mentions: [to]}, {quoted: m});
    }
    clearTimeout(timeout);
    delete confirmation[sender];
  }
};
handler.help = ['transfer'].map((v) => v + ' [tipo] [cantidad] [@tag]');
handler.tags = ['xp'];
handler.command = ['payxp', 'transfer', 'darxp', 'transferir'];
handler.disabled = false;
export default handler;

function special(type) {
  const b = type.toLowerCase();
  const special = (['common', 'uncommon', 'mythic', 'legendary', 'pet'].includes(b) ? ' Crate' : '');
  return special;
}
function isNumber(x) {
  return !isNaN(x);
}
