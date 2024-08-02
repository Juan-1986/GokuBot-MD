global.math = global.math ? global.math : {}
let handler = async (m, { conn }) => {
  
let id = m.chat
if (!m.quoted) return
if (m.quoted.sender != conn.user.jid) return
if (!/^❮🪐❯ » 𝘾𝙐𝘼𝙉𝙏𝙊 𝙀𝙎: /i.test(m.quoted.text)) return
if (!(m.chat in global.math)) return conn.reply(m.chat, `${lenguajeGB['smsAvisoMG']()}𝙔𝘼 𝙎𝙀 𝙍𝙀𝙎𝙋𝙊𝙉𝘿𝙄𝙊 𝙀𝙎𝙏𝘼 𝙋𝙍𝙀𝙂𝙐𝙉𝙏𝘼\n𝙏𝙃𝙄𝙎 𝙌𝙐𝙀𝙎𝙏𝙄𝙊𝙉 𝙃𝘼𝙎 𝘼𝙇𝙍𝙀𝘼𝘿𝙔 𝘽𝙀𝙀𝙉 𝘼𝙉𝙎𝙒𝙀𝙍𝙀𝘿`, m)
if (m.quoted.id == global.math[id][0].id) {
let math = global.math[id][1]
let exotico = global.db.data.users[m.sender].limit += 30
let milogro = global.db.data.users[m.sender].money += 500
if (m.text == math.result) {
 
await conn.sendButton(m.chat, `❮🟢❯ » 𝙍𝙚𝙨𝙥𝙪𝙚𝙨𝙩𝙖 𝙘𝙤𝙧𝙧𝙚𝙘𝙩𝙖!!!\n\n𝙂𝘼𝙉𝘼𝙉𝘾𝙄𝘼𝙎:\n𝘌𝘟𝘗: *_${math.bonus}_* ⚡\n𝘉𝘖𝘕𝘖: *_${milogro} BotCoins_* 🪙\n𝘋𝘪𝘢𝘮𝘢𝘯𝘵𝘦𝘴: *_${exotico}_* 💎`, wm, null, [['𝗢𝗧𝗥𝗔 𝗩𝗘𝗭 🔙', `/math ${math.mode}`], ['𝗠𝗘𝗡𝗨 𝗝𝗨𝗘𝗚𝗢𝗦 🎰', `.menujuegos`]], null, null, m)
global.db.data.users[m.sender].exp += math.bonus

clearTimeout(global.math[id][3])
delete global.math[id]
} else {
if (--global.math[id][2] == 0) {
await conn.sendButton(m.chat, `❮🔴❯ » 𝙍𝙚𝙨𝙥𝙪𝙚𝙨𝙩𝙖 𝙞𝙣𝙘𝙤𝙧𝙧𝙚𝙘𝙩𝙖, 𝙥𝙚𝙧𝙙𝙞𝙨𝙩𝙚 𝙩𝙤𝙙𝙤𝙨 𝙡𝙤𝙨 𝙞𝙣𝙩𝙚𝙣𝙩𝙤𝙨.\n\n• 𝙀𝙇 𝙍𝙀𝙎𝙐𝙇𝙏𝘼𝘿𝙊 𝙀𝙎:\n*${math.result}*`, wm, null, [['𝗢𝗧𝗥𝗔 𝗩𝗘𝗭 🔙', `/math ${math.mode}`], ['𝗠𝗘𝗡𝗨 𝗝𝗨𝗘𝗚𝗢𝗦 🎰', `.menujuegos`]], null, null, m)
clearTimeout(global.math[id][3])
delete global.math[id]
} else conn.reply(m.chat, `❮🔴❯ » 𝙍𝙚𝙨𝙥𝙪𝙚𝙨𝙩𝙖 𝙞𝙣𝙘𝙤𝙧𝙧𝙚𝙘𝙩𝙖, 𝙩𝙚 𝙦𝙪𝙚𝙙𝙖𝙣 *${global.math[id][2]}* 𝙞𝙣𝙩𝙚𝙣𝙩𝙤𝙨.`, m)
}}}

handler.customPrefix = /^-?[0-9]+(\.[0-9]+)?$/
handler.command = new RegExp
handler.exp = 0
handler.register = true
export default handler

/*global.math = global.math ? global.math : {};
const handler = async (m, {conn}) => {
  const id = m.chat;
  if (!m.quoted) return;
  if (m.quoted.sender != conn.user.jid) return;
  if (!/^• 𝘾𝙐𝘼𝙉𝙏𝙊 𝙀𝙎: /i.test(m.quoted.text)) return;
  if (!(m.chat in global.math)) return conn.reply(m.chat, `᥀·࣭࣪̇˖🎮◗ 𝙀𝙨𝙚 𝙞𝙣𝙩𝙚𝙣𝙩𝙤 𝙮𝙖 𝙝𝙖 𝙩𝙚𝙧𝙢𝙞𝙣𝙖𝙙𝙤.`, m);

  if (m.quoted.id == global.math[id][0].id) {
    const math = global.math[id][1];
    if (m.text == math.result) {
      conn.reply(m.chat, `᥀·࣭࣪̇˖✅◗ 𝙂𝘼𝙉𝘼𝙎𝙏𝙀!!!\n\n• 𝙊𝙗𝙩𝙞𝙚𝙣𝙚𝙨:\n*${math.bonus}* 𝙭𝙥`, m);

      global.db.data.users[m.sender].exp += math.bonus;
      clearTimeout(global.math[id][3]);
      delete global.math[id];
    } else {
      if (--global.math[id][2] == 0) {
        conn.reply(m.chat, `᥀·࣭࣪̇˖🎮◗ 𝙎𝙚 𝙖𝙘𝙖𝙗𝙖𝙧𝙤𝙣 𝙩𝙪𝙨 𝙤𝙥𝙤𝙧𝙩𝙪𝙣𝙞𝙙𝙖𝙙𝙚𝙨...\n\n• 𝙍𝙚𝙨𝙥𝙪𝙚𝙨𝙩𝙖:\n*${math.result}*`, m);

        clearTimeout(global.math[id][3]);
        delete global.math[id];
      } else conn.reply(m.chat, `᥀·࣭࣪̇˖🚫◗ 𝙄𝙉𝘾𝙊𝙍𝙍𝙀𝘾𝙏𝙊!!!\n\n• 𝙏𝙄𝙀𝙉𝙀𝙎:\n${global.math[id][2]} 𝙞𝙣𝙩𝙚𝙣𝙩𝙤𝙨...`, m);
    }
  }
};
handler.customPrefix = /^-?[0-9]+(\.[0-9]+)?$/;
handler.command = new RegExp;
export default handler;*/
