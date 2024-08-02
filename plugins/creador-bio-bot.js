let handler = async (m, { conn, text }) => {
   if (!text) return conn.reply(m.chat, '❕ • *_Ingrese el texto que cambiar en el bot._*', m, canal)
     try {
                await conn.updateProfileStatus(text).catch(_ => _)
                conn.reply(m.chat, `✅ Cambiado con exito!!!!`, m, canal)
} catch {
       throw '⛔ Error inesperado, intentalo de nuevo...'
     }
}
handler.help = ['nuevabiobot <teks>']
handler.tags = ['owner']
handler.command = /^nuevabiobot|setbotbot$/i
handler.owner = true

export default handler