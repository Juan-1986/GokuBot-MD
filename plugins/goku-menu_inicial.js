let handler = async (m, { conn, command, usedPrefix }) => {
let pp = imagen3.getRandom()
let name = await conn.getName(m.sender)
let _uptime = process.uptime() * 1000
let _muptime
if (process.send) { process.send('uptime')
_muptime = await new Promise(resolve => { process.once('message', resolve) 
setTimeout(resolve, 1000) }) * 1000}
let uptime = clockString(_uptime)
let estado = `
┌────⋄ 𝙂𝙤𝙠𝙪𝘽𝙤𝙩-𝙈𝘿 ⋄─────•⊰
┃👋🏻 𝘏𝘰𝘭𝘢, 𝘣𝘪𝘦𝘯𝘷𝘦𝘯𝘪𝘥𝘰/𝘢!!!
└────────────────────•⊰
ʙᴏᴛ: *activo*`
await conn.sendButton(m.chat, estado, `${wm}`, pp, [
['𝗠𝗘𝗡𝗨', '.menucompleto'],
['𝗠𝗘𝗡𝗨 𝗟𝗜𝗦𝗧', '#menulist']], null, [
['GokuBot-MD', `${canal}`]], m)
}
handler.help = ['menu']
handler.tags = ['menu']
handler.command = /^(menu|help|comandos)$/i
export default handler

function clockString(ms) {
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}
                      
