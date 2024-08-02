import axios from 'axios';
let previousCommitSHA = '';
let previousUpdatedAt = '';
let previousCommitUser = ''; 
const owner = 'ByJuan1986';
const repo = 'GokuBot-MD';
const handler = async (m, {conn, text, usedPrefix, command}) => {
 conn.sendMessage(m.chat, {text: `✅ » ➢ 𝙂𝙤𝙠𝙪𝘽𝙤𝙩-𝙈𝘿 𝙚𝙨𝙩𝙖𝙣 𝙚𝙣 𝙨𝙪 𝙫𝙚𝙧𝙨𝙞𝙤𝙣 𝙢𝙖𝙨 𝙧𝙚𝙘𝙞𝙚𝙣𝙩𝙚, 𝙩𝙚 𝙣𝙤𝙩𝙞𝙛𝙞𝙘𝙖𝙧𝙚𝙢𝙤𝙨 𝙘𝙪𝙖𝙣𝙙𝙤 𝙚𝙡 𝙧𝙚𝙥𝙤𝙨𝙞𝙩𝙤𝙧𝙞𝙤 𝙩𝙚𝙣𝙜𝙖 𝙖𝙡𝙜𝙪𝙣𝙖 𝙖𝙘𝙩𝙪𝙖𝙡𝙞𝙯𝙖𝙘𝙞𝙤𝙣.`}, {quoted: estilo});  
try {
  async function checkRepoUpdates() {
    try {
      const response = await axios.get(`https://api.github.com/repos/${owner}/${repo}/commits?per_page=1`);
      const {sha, commit: {message}, html_url, author: { login } } = response.data[0];

      if (sha !== previousCommitSHA || message !== previousUpdatedAt) {
        previousCommitSHA = sha;
        previousUpdatedAt = message;
        previousCommitUser = login
        conn.sendMessage(m.chat, {text: `✅ » ➢ 𝙂𝙊𝙆𝙐 𝘽𝙊𝙏 𝘼𝘾𝙏𝙐𝘼𝙇𝙄𝙕𝘼𝘿𝙊!!!!\n*- Repositorio:* ${html_url}\n*- Mensaje de commit:* ${message}\n*- Commit por:* ${login}`}, {quoted: estilo});
      }
    } catch (error) {
      console.error(error)
      m.reply('🚫 » ➢ 𝙀𝙧𝙧𝙤𝙧 𝙖𝙡 𝙫𝙚𝙧𝙞𝙛𝙞𝙘𝙖𝙧 𝙚𝙡 𝙧𝙚𝙥𝙤𝙨𝙞𝙩𝙤𝙧𝙞𝙤.');
    }
  }
  setInterval(checkRepoUpdates, 6000);
} catch (e) {
m.reply(e)
}
};
handler.command = /^(actualizacion|autoupdate|autoactualizar)/i;
handler.rowner = true;
export default handler;
