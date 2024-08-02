let media = gokuImgs
let handler = async (m, { conn, command }) => {
let user = db.data.users[m.sender]
let donar = `
Desarrollo
`
await conn.sendButton(m.chat, donar, wm, media, [
['Grupos', '.grupos'],
['Menu ', '#menu']], null, [
['PayPal', `${paypal}`]], m)}
handler.command = /^dona(te|si)|donar|apoyar|paypal|donating$/i
handler.exp = 80
export default handler
