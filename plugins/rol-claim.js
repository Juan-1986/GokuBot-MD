import fetch from 'node-fetch';
const handler = async (m, {isPrems, conn}) => {
  const fkontak = {'key': {'participants': '0@s.whatsapp.net', 'remoteJid': 'status@broadcast', 'fromMe': false, 'id': 'Halo'}, 'message': {'contactMessage': {'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}, 'participant': '0@s.whatsapp.net',
  };
  const goku = imagen1;
  const dos = [md];
  const user = global.db.data.users[m.sender];
  const premium = user.premium;

  const exp = `${pickRandom([500, 600, 700, 800, 900, 999, 1000, 1300, 1500, 1800])}` * 1;
  const exppremium = `${pickRandom([1000, 1500, 1800, 2100, 2500, 2900, 3300, 3600, 4000, 4500])}` * 1;

  const money = `${pickRandom([300, 500, 700, 900, 500, 800, 900, 1100, 1350, 1500])}` * 1;
  const moneypremium = `${pickRandom([800, 1300, 1600, 1900, 2200, 2500, 2700, 3000, 3300, 3500])}` * 1;

  const potion = `${pickRandom([1, 2, 3, 4, 5])}` * 1;
  const potionpremium = `${pickRandom([2, 4, 6, 9, 12])}` * 1;

  const tiketcoin = `${pickRandom([1, 0, 0, 2, 0])}` * 1;
  const tiketcoinpremium = `${pickRandom([2, 1, 1, 3, 4])}` * 1;

  const eleksirb = `${pickRandom([1, 1, 1, 3, 1, 2, 2, 1, 5, 8])}` * 1;
  const eleksirbpremium = `${pickRandom([3, 3, 5, 3, 8, 3, 4, 4, 10, 7])}` * 1;

  const umpan = `${pickRandom([10, 20, 30, 40, 50, 60, 70, 80, 90, 100])}` * 1;
  const umpanpremium = `${pickRandom([30, 60, 90, 120, 150, 180, 210, 240, 270, 300])}` * 1;



  const recompensas = {
    exp: premium ? exppremium : exp,
    money: premium ? moneypremium : money,
    potion: premium ? potionpremium : potion,
    tiketcoin: premium ? tiketcoinpremium : tiketcoin,
    eleksirb: premium ? eleksirbpremium : eleksirb,
    umpan: premium ? umpanpremium : umpan,
  };

  const time = user.lastclaim + 7200000; // 2 Horas 7200000
  if (new Date - user.lastclaim < 7200000) return await await conn.sendButton(m.chat, `𝙔𝙖 𝙧𝙚𝙩𝙞𝙧𝙖𝙨𝙩𝙚 𝙚𝙡 𝙧𝙚𝙜𝙖𝙡𝙤, 𝙫𝙪𝙚𝙡𝙫𝙖 𝙚𝙣 *${msToTime(time - new Date())}* 𝙥𝙖𝙧𝙖 𝙫𝙤𝙡𝙫𝙚𝙧 𝙖 𝙧𝙚𝙘𝙡𝙖𝙢𝙖𝙧 ⏳`, wm, null, [['𝗠𝗘𝗡𝗨 𝗥𝗣𝗚 🎒', '/menurpg']], m)
  let texto = '';
  for (const reward of Object.keys(recompensas)) {
    if (!(reward in user)) continue;
    user[reward] += recompensas[reward];
    texto += `𝙂𝙖𝙣𝙖𝙨𝙩𝙚 𝙪𝙣 𝙧𝙚𝙜𝙖𝙡𝙤!!! 🥳`;
  }
  const text = `
┌⋄ 🎉 •─────────────• 🎉 ⋄─•
┃      ¡¡¡𝗨𝗡 𝗥𝗘𝗚𝗔𝗟𝗢 𝗣𝗔𝗥𝗔 𝗧𝗜!!!
└⋄ 🎉 •─────────────• 🎉 ⋄─•

⚡ ${exp}
🪙 ${money}
🧪 ${potion}

 ${texto}
`;
  const img = imagen3;
  //await conn.sendFile(m.chat, img, 'goku.jpg', text, fkontak);
  await conn.sendButton(m.chat, text, texto, img, [['𝗠𝗘𝗡𝗨 𝗥𝗣𝗚 🎒', '/menurpg'], ['𝗔𝗕𝗥𝗜𝗥 𝗖𝗢𝗙𝗥𝗘 🎁', '/cofre']], m)
  user.lastclaim = new Date * 1;
};
handler.help = ['daily'];
handler.tags = ['xp'];
handler.command = ['daily', 'reclamar', 'reclamo', 'regalo', 'claim'];
handler.register = true
export default handler;

function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)];
}

function msToTime(duration) {
  const milliseconds = parseInt((duration % 1000) / 100);
  let seconds = Math.floor((duration / 1000) % 60);
  let minutes = Math.floor((duration / (1000 * 60)) % 60);
  let hours = Math.floor((duration / (1000 * 60 * 60)) % 24);

  hours = (hours < 10) ? '0' + hours : hours;
  minutes = (minutes < 10) ? '0' + minutes : minutes;
  seconds = (seconds < 10) ? '0' + seconds : seconds;

  return hours + ' Horas ' + minutes + ' Minutos';