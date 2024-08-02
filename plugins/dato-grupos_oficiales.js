let handler = async (m, { conn, command }) => {
 
 let media = gokuImgs

let str = `

𝘿𝙀𝙎𝘼𝙍𝙍𝙊𝙇𝙇𝙇
`
await conn.sendButton(m.chat, str, wm, media, [
['CUENTAS', '.cuentas'],
['DONAR', '.donar'],
['MENU', '/menu']], null, null, m)}

handler.command = /^grupos|gruposgoku|gokugroup|gruposofc$/i
handler.register = true
export default handler
