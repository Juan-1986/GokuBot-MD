global.math = global.math ? global.math : {};
const handler = async (m, {conn, args, usedPrefix, command}) => {
  const mat =`
❮🪐❯ » 𝙄𝙣𝙜𝙧𝙚𝙨𝙖 𝙡𝙖 𝙙𝙞𝙛𝙞𝙘𝙪𝙡𝙩𝙖𝙙 𝙙𝙚 𝙟𝙪𝙜𝙖𝙙𝙖.

• 𝗗𝗜𝗙𝗜𝗖𝗨𝗟𝗧𝗔𝗗𝗘𝗦:
${Object.keys(modes).join(' | ')}

•𝗘𝗝𝗘𝗠𝗣𝗟𝗢 𝗗𝗘 𝗨𝗦𝗢:
*${usedPrefix}mates medium*
`.trim();
  if (args.length < 1) return await conn.reply(m.chat, mat, m);

  const mode = args[0].toLowerCase();
  if (!(mode in modes)) return await conn.reply(m.chat, mat, m);


  const id = m.chat;
  if (id in global.math) return conn.reply(m.chat, '❮🛑❯ » 𝙉𝙤 𝙨𝙚 𝙝𝙖 𝙧𝙚𝙨𝙪𝙚𝙡𝙩𝙤 𝙚𝙡 𝙟𝙪𝙚𝙜𝙤 𝙩𝙤𝙙𝙖𝙫𝙞𝙖, 𝙩𝙚𝙧𝙢𝙞𝙣𝙖𝙡𝙤 𝙥𝙖𝙧𝙖 𝙨𝙚𝙜𝙪𝙞𝙧 𝙘𝙤𝙣 𝙤𝙩𝙧𝙤.', global.math[id][0]);
  const math = genMath(mode);
  global.math[id] = [
    await conn.reply(m.chat, `❮🪐❯ » 𝘾𝙐𝘼𝙉𝙏𝙊 𝙀𝙎: *${math.str}*?\n\n• 𝙏𝙄𝙀𝙈𝙋𝙊: *${(math.time / 1000).toFixed(2)} segundos*\n• 𝘽𝙊𝙉𝙊: *${math.bonus}* 𝙙𝙚 𝙭𝙥`, m),
    math, 4,
    setTimeout(() => {
      if (global.math[id]) {
        conn.reply(m.chat, `❮⏳❯ » 𝙏𝙞𝙚𝙢𝙥𝙤 𝙙𝙚 𝙚𝙨𝙥𝙚𝙧𝙖 𝙘𝙖𝙙𝙪𝙘𝙖𝙙𝙖.\n\n• 𝙍𝙀𝙎𝙋𝙐𝙀𝙎𝙏𝘼:\n*${math.result}*`, m),

        delete global.math[id];
      }
    }, math.time),
  ];
};
handler.help = ['math <mode>'];
handler.tags = ['fun'];
handler.command = /^math|mates|matemáticas/i;
export default handler;

const modes = {
  noob: [-3, 3, -3, 3, '+-', 15000, 10],
  easy: [-10, 10, -10, 10, '*/+-', 20000, 40],
  medium: [-40, 40, -20, 20, '*/+-', 40000, 150],
  hard: [-100, 100, -70, 70, '*/+-', 60000, 350],
  extreme: [-999999, 999999, -999999, 999999, '*/', 99999, 9999],
  impossible: [-99999999999, 99999999999, -99999999999, 999999999999, '*/', 30000, 35000],
  impossible2: [-999999999999999, 999999999999999, -999, 999, '/', 30000, 50000],
};

const operators = {
  '+': '+',
  '-': '-',
  '*': '×',
  '/': '÷',
};

function genMath(mode) {
  const [a1, a2, b1, b2, ops, time, bonus] = modes[mode];
  let a = randomInt(a1, a2);
  const b = randomInt(b1, b2);
  const op = pickRandom([...ops]);
  let result = (new Function(`return ${a} ${op.replace('/', '*')} ${b < 0 ? `(${b})` : b}`))();
  if (op == '/') [a, result] = [result, a];
  return {
    str: `${a} ${operators[op]} ${b}`,
    mode,
    time,
    bonus,
    result,
  };
}

function randomInt(from, to) {
  if (from > to) [from, to] = [to, from];
  from = Math.floor(from);
  to = Math.floor(to);
  return Math.floor((to - from) * Math.random() + from);
}

function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)];
}
