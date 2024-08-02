import {createHash} from 'crypto';
const handler = async function(m, {args}) {
  if (!args[0]) throw `⦉👤⦊ » 𝙄𝙣𝙜𝙧𝙚𝙨𝙚 𝙨𝙪 𝙘𝙤𝙙𝙞𝙜𝙤 𝙙𝙚 𝙨𝙚𝙧𝙞𝙚 (𝙫𝙚𝙧𝙞𝙛𝙞𝙘𝙖𝙘𝙞𝙤𝙣)\n\n𝙀𝙅𝙀𝙈𝙋𝙇𝙊:\n${usedPrefix + command} dsd82k29\n\n• Si no se acuerda, puede ver su codigo usando este comando:\n\`#myns\``;
  const user = global.db.data.users[m.sender];
  const sn = createHash('md5').update(m.sender).digest('hex');
  if (args[0] !== sn) throw `⦉✖️⦊ » 𝙀𝙡 𝙘𝙤𝙙𝙞𝙜𝙤 𝙚𝙨 𝙞𝙣𝙘𝙤𝙧𝙧𝙚𝙘𝙩𝙤, 𝙫𝙚𝙧𝙞𝙛𝙞𝙦𝙪𝙚 𝙦𝙪𝙚 𝙨𝙚𝙖 𝙘𝙤𝙧𝙧𝙚𝙘𝙩𝙤.`;
  user.registered = false;
  m.reply(`⦉✅⦊ » 𝙔𝙖 𝙣𝙤 𝙚𝙨𝙩𝙖𝙨 𝙧𝙚𝙜𝙞𝙨𝙩𝙧𝙖𝙙𝙤, 𝙨𝙚 𝙚𝙡𝙞𝙢𝙞𝙣𝙤 𝙩𝙪 𝙧𝙚𝙜𝙞𝙨𝙩𝙧𝙤 𝙘𝙤𝙣 𝙚𝙭𝙞𝙩𝙤.`);
};
handler.help = ['', 'ister'].map((v) => 'unreg' + v + ' <numero de serie>');
handler.tags = ['xp'];
handler.command = /^unreg(ister)?$/i;
handler.register = true;
export default handler;

