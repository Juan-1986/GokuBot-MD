let handler = async (m, { conn, command, usedPrefix }) => {
let gokulista = `
╭─────────────────────✧
│ ✐; 𝙂𝙤𝙠𝙪𝘽𝙤𝙩-𝙈𝘿. 🍁
│ ┆ ✐; 𝙇𝙄𝙎𝙏𝘼 𝘿𝙀 𝙈𝙀𝙉𝙐𝙎. ✨
╰─────────────────────✧

╭•≫ ──── ≪•◦ 🎉 ◦•≫ ──── ≪•⧐
│•╮${usedPrefix}menuinfo
│•┋${usedPrefix}menugroup
│•┋${usedPrefix}menuowner
│•┋${usedPrefix}menuaudios
│•┋${usedPrefix}menustickers
│•┋${usedPrefix}menurpg
│•┋${usedPrefix}menujuegos
│•┋${usedPrefix}menuhrms
│•┋${usedPrefix}menudown
│•┋${usedPrefix}menurandom
│•┋${usedPrefix}menuanime
│•╯${usedPrefix}menuserbot
╰•≫ ──── ≪•◦ 🎉 ◦•≫ ──── ≪•⧐`;

//•━━━━━━━━━━━━━━• ❮💥❯ •━━━━━━━━━━━━━━•

let menuinfo = `
╭─────────────────────✧
│ ✐; 𝙂𝙤𝙠𝙪𝘽𝙤𝙩-𝙈𝘿. ⚡
│ ┆ ✐; . 𝙈𝙀𝙉𝙐 𝙄𝙉𝙁𝙊𝙍𝙈𝘼𝘾𝙄𝙊𝙉 🪐
╰─────────────────────✧

╭•≫ ──── ≪•◦ 🗒️ ◦•≫ ──── ≪•⧐
│•╮${usedPrefix}estado
│•┋${usedPrefix}grupos
│•┋${usedPrefix}cuentas
│•┋${usedPrefix}velocidad
│•┋${usedPrefix}tipobot
│•┋${usedPrefix}menu
│•┋${usedPrefix}menlist
│•╯${usedPrefix}donar
╰•≫ ──── ≪•◦ 🗒️ ◦•≫ ──── ≪•⧐`; 

//•━━━━━━━━━━━━━━• ❮💥❯ •━━━━━━━━━━━━━━•

let menugroup = `
╭─────────────────────✧
│ ✐; 𝙂𝙤𝙠𝙪𝘽𝙤𝙩-𝙈𝘿. 👥
│ ┆ ✐; . 𝙈𝙀𝙉𝙐 𝙂𝙍𝙐𝙋𝘼𝙇 🥏
╰─────────────────────✧

╭•≫ ──── ≪•◦ 🌎 ◦•≫ ──── ≪•⧐
│•╮${usedPrefix}add  *nro*
│•┋${usedPrefix}kick : kick2
│•┋${usedPrefix}link
│•┋${usedPrefix}grupo
│•┋${usedPrefix}resetlink
│•┋${usedPrefix}hidetag
│•┋${usedPrefix}promote
│•┋${usedPrefix}demote
│•┋${usedPrefix}creargrupo
│•┋${usedPrefix}banchat
│•┋${usedPrefix}unbanchat
│•┋${usedPrefix}fantasmas
│•┋${usedPrefix}kickfantasmas
│•┋${usedPrefix}infogroup
│•┋${usedPrefix}join : unete  *enlace*
│•┋${usedPrefix}setwelcome  *texto*
│•┋${usedPrefix}setdesc  *texto*
│•┋${usedPrefix}setname  *texto*
│•┋${usedPrefix}setbye  *texto*
│•┋${usedPrefix}setpp  *imagen*
│•┋${usedPrefix}warn
│•┋${usedPrefix}delwarn
│•┋${usedPrefix}admins
│•╯${usedPrefix}tagall
╰•≫ ──── ≪•◦ 🌎 ◦•≫ ──── ≪•⧐`; 

//•━━━━━━━━━━━━━━• ❮💥❯ •━━━━━━━━━━━━━━•

let menuowner = `
╭─────────────────────✧
│ ✐; 𝙂𝙤𝙠𝙪𝘽𝙤𝙩-𝙈𝘿. 🎉
│ ┆ ✐; . 𝙈𝙀𝙉𝙐 𝙋𝙍𝙊𝙋𝙄𝙀𝙏𝘼𝙍𝙄𝙊 👑
╰─────────────────────✧

╭•≫ ──── ≪•◦ 🏮 ◦•≫ ──── ≪•⧐
│•╮${usedPrefix}banuser
│•┋${usedPrefix}unbanuser
│•┋${usedPrefix}reunion
│•┋${usedPrefix}setprefix
│•┋${usedPrefix}update
│•┋${usedPrefix}updat
│•┋${usedPrefix}setbiobot
│•┋${usedPrefix}restart
│•┋${usedPrefix}setdescbot
│•┋${usedPrefix}setnamebot
│•┋${usedPrefix}setppbot
│•┋${usedPrefix}actualizar
│•┋${usedPrefix}backup
│•┋${usedPrefix}addowner
│•┋${usedPrefix}addprem
│•┋${usedPrefix}block
│•┋${usedPrefix}unblock
│•╯${usedPrefix}boost
╰•≫ ──── ≪•◦ 🏮 ◦•≫ ──── ≪•⧐`; 

//•━━━━━━━━━━━━━━• ❮💥❯ •━━━━━━━━━━━━━━•

let menuaudios = `
╭─────────────────────✧
│ ✐; 𝙂𝙤𝙠𝙪𝘽𝙤𝙩-𝙈𝘿. 🎧
│ ┆ ✐; . 𝙈𝙀𝙉𝙐 𝘼𝙐𝘿𝙄𝙊𝙎 🔊
╰─────────────────────✧

\`ACTIVA LOS AUDIOS CON:\`
*#on audios*
${readMore}
🔊 \`USAR SIN PREFIJOS.\`
╭•≫ ──── ≪•◦ 🎧 ◦•≫ ──── ≪•⧐
│•╮ *_Momento XD_*
│•┋ *_El tóxico_*
│•┋ *_Moshi moshi_*
│•┋ *_Calla Fan de BTS_*
│•┋ *_Bien pensado Woody_*
│•┋ *_Jesucristo_*
│•┋ *_Wtf_*
│•┋ *_Una pregunta_*
│•┋ *_Que sucede_*
│•┋ *_Hablame_*
│•┋ *_Buenos dias_*
│•┋ *_Fiesta del admin_*
│•┋ *_Viernes_*
│•┋ *_Mierda de Bot_*
│•┋ *_Me olvidé_*
│•┋ *_Baneado_*
│•┋ *_Feliz navidad_*
│•┋ *_A nadie le importa_*
│•┋ *_Sexo_*
│•┋ *_Ara ara_*
│•┋ *_Hola_*
│•┋ *_Un pato_*
│•┋ *_Te amo_*
│•┋ *_Yamete_*
│•┋ *_Te diagnostico con gay_*
│•┋ *_Bañate_*
│•┋ *_Vivan los novios_*
│•┋ *_Marica quien_*
│•┋ *_Es puto_*
│•┋ *_La biblia_*
│•┋ *_Me voy_*
│•┋ *_Tengo los calzones del admin_*
│•┋ *_Entrada épica_*
│•┋ *_Esto va ser épico papus_*
│•┋ *_Ingresa épicamente_*
│•┋ *_No digas eso papu_*
│•┋ *_Ma ma masivo_*
│•┋ *_Masivo_*
│•┋ *_Onichan_*
│•┋ *_Bot puto_*
│•┋ *_Feliz cumpleaños_*
│•┋ *_Pasa pack Bot_*
│•┋ *_Atencion grupo_*
│•┋ *_Homero chino_*
│•┋ *_Oh me vengo_*
│•┋ *_Murio el grupo_*
│•┋ *_Siuuu_*
│•┋ *_Rawr_*
│•┋ *_uwu_*
│•┋ *_:c_*
│•┋ *_a_*
│•┋ *_Chao_*
│•┋ *_Hentai_*
│•┋ *_Triste_*
│•┋ *_Estoy triste_*
│•┋ *_Contexto_*
│•┋ *_Basado_*
│•┋ *_Fino señores_*
│•┋ *_Verdad que te engañe_*
│•┋ *_Sus_*
│•┋ *_Yokese_*
│•┋ *_Omaiga_*
│•┋ *_Nadie te preguntó_*
│•┋ *_Bueno si_*
│•┋ *_Usted está detenido_*
│•┋ *_No me hables_*
│•┋ *_No chupala_*
│•┋ *_El pepe_*
│•┋ *_Esto va para ti_*
│•┋ *_Abduzcan_*
│•┋ *_Joder_*
│•┋ *_Hablar primos_*
│•┋ *_Mmm_*
│•┋ *_Orale_*
│•┋ *_Cambiate a Movistar_*
│•┋ *_Que tal grupo_*
│•┋ *_La voz de hombre_*
│•┋ *_Pero esto_*
│•┋ *_Pikachu_*
│•┋ *_Niconico_*
│•┋ *_Nico nico_*
│•┋ *_Tal vez_*
│•┋ *_Buenas noches_*
│•┋ *_Porque ta tite_*
│•┋ *_Eres Fuerte_*
│•┋ *_Bueno Master_*
│•┋ *_Traiganle una falda_*
│•┋ *_Su nivel de pendejo_*
│•┋ *_Elmo sabe donde vives_*
│•┋ *_Y este quien es_*
│•┋ *_Motivación_*
│•┋ *_En caso de una investigación_*
│•┋ *_Buen día grupo_*
│•╯ *_Las reglas del grupo_*
╰•≫ ──── ≪•◦ 🎧 ◦•≫ ──── ≪•⧐`; 

//•━━━━━━━━━━━━━━• ❮💥❯ •━━━━━━━━━━━━━━•

let menustickers = `
╭─────────────────────✧
│ ✐; 𝙂𝙤𝙠𝙪𝘽𝙤𝙩-𝙈𝘿. 🎋
│ ┆ ✐; . 𝙈𝙀𝙉𝙐 𝙎𝙏𝙄𝘾𝙆𝙀𝙍𝙎 🧧
╰─────────────────────✧

╭•≫ ──── ≪•◦ 🍁 ◦•≫ ──── ≪•⧐
│•╮${usedPrefix}s  *img*
│•┋${usedPrefix}s  *gif*
│•┋${usedPrefix}s  *video*
│•┋${usedPrefix}dato
│•┋${usedPrefix}attp  *texto*
│•┋${usedPrefix}attp2  *texto*
│•┋${usedPrefix}attp3  *texto*
│•┋${usedPrefix}ttp  *texto*
│•┋${usedPrefix}ttp2  *texto*
│•┋${usedPrefix}ttp3  *texto*
│•┋${usedPrefix}ttp4  *texto*
│•┋${usedPrefix}ttp5  *texto*
│•╯${usedPrefix}wm  *texto|texto*
╰•≫ ──── ≪•◦ 🍁 ◦•≫ ──── ≪•⧐`; 

//•━━━━━━━━━━━━━━• ❮💥❯ •━━━━━━━━━━━━━━•

let menurpg = `
╭─────────────────────✧
│ ✐; 𝙂𝙤𝙠𝙪𝘽𝙤𝙩-𝙈𝘿. 💰
│ ┆ ✐; . 𝙈𝙀𝙉𝙐 𝙍𝙋𝙂 🏷️
╰─────────────────────✧

╭•≫ ──── ≪•◦ 👑 ◦•≫ ──── ≪•⧐
│•╮${usedPrefix}minar
│•┋${usedPrefix}minar2
│•┋${usedPrefix}minar3
│•┋${usedPrefix}work
│•┋${usedPrefix}claim
│•┋${usedPrefix}cofre
│•┋${usedPrefix}autolevelup
│•┋${usedPrefix}transfer
│•┋${usedPrefix}heal
│•┋${usedPrefix}aventura
│•┋${usedPrefix}robar  *@tag*
│•┋${usedPrefix}balance
│•┋${usedPrefix}buy 1
│•┋${usedPrefix}buyall
│•╯${usedPrefix}tops
╰•≫ ──── ≪•◦ 👑 ◦•≫ ──── ≪•⧐`; 

//•━━━━━━━━━━━━━━• ❮💥❯ •━━━━━━━━━━━━━━•

let menujuegos = `
╭─────────────────────✧
│ ✐; 𝙂𝙤𝙠𝙪𝘽𝙤𝙩-𝙈𝘿. 🎰
│ ┆ ✐; . 𝙈𝙀𝙉𝙐 𝙅𝙐𝙀𝙂𝙊𝙎 🎳
╰─────────────────────✧

╭•≫ ──── ≪•◦ 💥 ◦•≫ ──── ≪•⧐
│•╮${usedPrefix}gay  *@tag*
│•┋${usedPrefix}gay2  *@tag*
│•┋${usedPrefix}puto  *@tag*
│•┋${usedPrefix}puta  *@tag*
│•┋${usedPrefix}manca  *@tag*
│•┋${usedPrefix}manco  *@tag*
│•┋${usedPrefix}rata  *@tag*
│•┋${usedPrefix}tictactoe gokubot
│•┋${usedPrefix}delttt
│•┋${usedPrefix}suitpvp  *@tag*
│•┋${usedPrefix}acertijo
│•┋${usedPrefix}top  *texto*
│•┋${usedPrefix}topgays
│•┋${usedPrefix}topotakus
│•╯${usedPrefix}mates
╰•≫ ──── ≪•◦ 💥 ◦•≫ ──── ≪•⧐`; 

//•━━━━━━━━━━━━━━• ❮💥❯ •━━━━━━━━━━━━━━•

let menuhrms = `
╭─────────────────────✧
│ ✐; 𝙂𝙤𝙠𝙪𝘽𝙤𝙩-𝙈𝘿. 🎒
│ ┆ ✐; . 𝙈𝙀𝙉𝙐 𝙃𝙀𝙍𝙍𝘼𝙈𝙄𝙀𝙉𝙏𝘼𝙎 🧰
╰─────────────────────✧

╭•≫ ──── ≪•◦ 🌐 ◦•≫ ──── ≪•⧐
│•╮${usedPrefix}dalle  *texto*
│•┋${usedPrefix}chatgpt  *texto*
│•┋${usedPrefix}chatgptvoz  *texto*
│•┋${usedPrefix}delchatgpt
│•┋${usedPrefix}bot  *texto*
│•┋${usedPrefix}hd
│•┋${usedPrefix}reporte  *texto*
│•┋${usedPrefix}horario
│•┋${usedPrefix}qrcode  *texto*
│•┋${usedPrefix}inspec
│•┋${usedPrefix}del  *mensaje*
│•┋${usedPrefix}traducir  *texto*
│•┋${usedPrefix}gemini  *texto*
│•┋${usedPrefix}geminiimg  *texto • img*
│•┋${usedPrefix}toimg  *sticker img*
│•┋${usedPrefix}tovideo  *sticker video*
│•┋${usedPrefix}toaudio  *video*
│•╯${usedPrefix}tourl  *img • video*
╰•≫ ──── ≪•◦ 🌐 ◦•≫ ──── ≪•⧐`; 

//•━━━━━━━━━━━━━━• ❮💥❯ •━━━━━━━━━━━━━━•

let menudown = `
╭─────────────────────✧
│ ✐; 𝙂𝙤𝙠𝙪𝘽𝙤𝙩-𝙈𝘿. ⬇️
│ ┆ ✐; . 𝙈𝙀𝙉𝙐 𝘿𝙀𝙎𝘾𝘼𝙍𝙂𝘼𝙎 📲
╰─────────────────────✧

╭•≫ ──── ≪•◦ 🪐 ◦•≫ ──── ≪•⧐
│•╮${usedPrefix}play  *texto*
│•┋${usedPrefix}play2  *texto*
│•┋${usedPrefix}playlist  *texto*
│•┋${usedPrefix}apk  *texto*
│•┋${usedPrefix}m : mediafire  *enlace*
│•┋${usedPrefix}imagen  *texto*
│•┋${usedPrefix}pinterest  *texto*
│•┋${usedPrefix}tiktok  *enlace*
│•┋${usedPrefix}tiktokimg  *enlace*
│•┋${usedPrefix}ig  *enlace*
│•┋${usedPrefix}igstalk  *enlace*
│•┋${usedPrefix}twitter  *enlace*
│•┋${usedPrefix}playdoc  *enlace*
│•╯${usedPrefix}playdoc2  *enlace*
╰•≫ ──── ≪•◦ 🪐 ◦•≫ ──── ≪•⧐`; 

//•━━━━━━━━━━━━━━• ❮💥❯ •━━━━━━━━━━━━━━•

let menurandom = `
╭─────────────────────✧
│ ✐; 𝙂𝙤𝙠𝙪𝘽𝙤𝙩-𝙈𝘿. 🏮
│ ┆ ✐; . 𝙈𝙀𝙉𝙐 𝙍𝘼𝙉𝘿𝙊𝙈 🪔
╰─────────────────────✧

╭•≫ ──── ≪•◦ 🧧 ◦•≫ ──── ≪•⧐
│•╮${usedPrefix}messi
│•┋${usedPrefix}cr7
│•┋${usedPrefix}chico
│•┋${usedPrefix}chica
│•┋${usedPrefix}perro
│•┋${usedPrefix}gato
│•┋${usedPrefix}meme
│•┋${usedPrefix}bts
│•╯${usedPrefix}itzy
╰•≫ ──── ≪•◦ 🧧 ◦•≫ ──── ≪•⧐`; 

//•━━━━━━━━━━━━━━• ❮💥❯ •━━━━━━━━━━━━━━•

let menuanime = `
╭─────────────────────✧
│ ✐; 𝙂𝙤𝙠𝙪𝘽𝙤𝙩-𝙈𝘿. ⛩️
│ ┆ ✐; . 𝙈𝙀𝙉𝙐 𝘼𝙉𝙄𝙈𝙀 🌉
╰─────────────────────✧

╭•≫ ──── ≪•◦ 🌌 ◦•≫ ──── ≪•⧐
│•╮ _${usedPrefix}lolivid_
│•┋ _${usedPrefix}loli_
│•┋ _${usedPrefix}ppcouple_
│•┋ _${usedPrefix}neko_
│•┋ _${usedPrefix}waifu_
│•┋ _${usedPrefix}akira_
│•┋ _${usedPrefix}akiyama_
│•┋ _${usedPrefix}anna_
│•┋ _${usedPrefix}asuna_
│•┋ _${usedPrefix}ayuzawa_
│•┋ _${usedPrefix}boruto_
│•┋ _${usedPrefix}chiho_
│•┋ _${usedPrefix}chitoge_
│•┋ _${usedPrefix}deidara_
│•┋ _${usedPrefix}erza_
│•┋ _${usedPrefix}elaina_
│•┋ _${usedPrefix}eba_
│•┋ _${usedPrefix}emilia_
│•┋ _${usedPrefix}hestia_
│•┋ _${usedPrefix}hinata_
│•┋ _${usedPrefix}inori_
│•┋ _${usedPrefix}isuzu_
│•┋ _${usedPrefix}itachi_
│•┋ _${usedPrefix}itori_
│•┋ _${usedPrefix}kaga_
│•┋ _${usedPrefix}kagura_
│•┋ _${usedPrefix}kaori_
│•┋ _${usedPrefix}keneki_
│•┋ _${usedPrefix}kotori_
│•┋ _${usedPrefix}kurumi_
│•┋ _${usedPrefix}madara_
│•┋ _${usedPrefix}mikasa_
│•┋ _${usedPrefix}miku_
│•┋ _${usedPrefix}minato_
│•┋ _${usedPrefix}naruto_
│•┋ _${usedPrefix}nezuko_
│•┋ _${usedPrefix}sagiri_
│•┋ _${usedPrefix}sasuke_
│•┋ _${usedPrefix}sakura_
│•╯ _${usedPrefix}cosplay_
╰•≫ ──── ≪•◦ 🌌 ◦•≫ ──── ≪•⧐`; 

//•━━━━━━━━━━━━━━• ❮💥❯ •━━━━━━━━━━━━━━•

let menuserbot = `
╭─────────────────────✧
│ ✐; 𝙂𝙤𝙠𝙪𝘽𝙤𝙩-𝙈𝘿. 🌐
│ ┆ ✐; . 𝙈𝙀𝙉𝙐 𝙎𝙀𝙍𝘽𝙊𝙏 🤖
╰─────────────────────✧

╭•≫ ──── ≪•◦ 🌀 ◦•≫ ──── ≪•⧐
│•╮${usedPrefix}serbot
│•┋${usedPrefix}deletesession
│•┋${usedPrefix}stop
│•╯${usedPrefix}bots
╰•≫ ──── ≪•◦ 🌀 ◦•≫ ──── ≪•⧐
`;

//•━━━━━━━━━━━━━━• ❮💥❯ •━━━━━━━━━━━━━━•

let menucom = `
╭─────────────────────✧
│ ✐; 𝙂𝙤𝙠𝙪𝘽𝙤𝙩-𝙈𝘿. 🌎
│ ┆ ✐; . 𝙈𝙀𝙉𝙐 𝘾𝙊𝙈𝙋𝙇𝙀𝙏𝙊 ⛰️
╰─────────────────────✧
ᴠᴇʀᴠɪᴏɴ: 1.7.5
ʙᴏᴛ: ${wm}
ᴄʀᴇᴀᴅᴏʀ: ${creador}
•🏮•┈┈┈••┈┈┈••✦👑✦••┈┈┈••┈┈┈•🏮•
${readMore}
╭•≫ ──── ≪•◦ 🗒️ ◦•≫ ──── ≪•⧐
┃𝙈𝙀𝙉𝙐 𝙄𝙉𝙁𝙊𝙍𝙈𝘼𝘾𝙄𝙊𝙉
├──────────────⋄
│•╮${usedPrefix}estado
│•┋${usedPrefix}grupos
│•┋${usedPrefix}cuentas
│•┋${usedPrefix}velocidad
│•┋${usedPrefix}tipobot
│•┋${usedPrefix}menu
│•┋${usedPrefix}menlist
│•╯${usedPrefix}donar
╰•≫ ──── ≪•◦ 🗒️ ◦•≫ ──── ≪•⧐

╭•≫ ──── ≪•◦ 🎉 ◦•≫ ──── ≪•⧐
┃𝙇𝙄𝙎𝙏𝘼 𝘿𝙀 𝙈𝙀𝙉𝙐𝙎
├──────────────⋄
│•╮${usedPrefix}menuinfo
│•┋${usedPrefix}menugroup
│•┋${usedPrefix}menuowner
│•┋${usedPrefix}menuaudios
│•┋${usedPrefix}menusticker
│•┋${usedPrefix}menurpg
│•┋${usedPrefix}menujuegos
│•┋${usedPrefix}menuhrms
│•┋${usedPrefix}menudown
│•┋${usedPrefix}menurandom
│•┋${usedPrefix}menuanime
│•╯${usedPrefix}menuserbot
╰•≫ ──── ≪•◦ 🎉 ◦•≫ ──── ≪•⧐


╭•≫ ──── ≪•◦ 🌎 ◦•≫ ──── ≪•⧐
┃𝙈𝙀𝙉𝙐 𝙂𝙍𝙐𝙋𝘼𝙇
├──────────────⋄
│•╮${usedPrefix}add  *nro*
│•┋${usedPrefix}kick : kick2
│•┋${usedPrefix}link
│•┋${usedPrefix}grupo
│•┋${usedPrefix}resetlink
│•┋${usedPrefix}hidetag
│•┋${usedPrefix}promote
│•┋${usedPrefix}demote
│•┋${usedPrefix}creargrupo
│•┋${usedPrefix}banchat
│•┋${usedPrefix}unbanchat
│•┋${usedPrefix}fantasmas
│•┋${usedPrefix}kickfantasmas
│•┋${usedPrefix}infogroup
│•┋${usedPrefix}join : unete  *enlace*
│•┋${usedPrefix}setwelcome  *texto*
│•┋${usedPrefix}setdesc  *texto*
│•┋${usedPrefix}setname  *texto*
│•┋${usedPrefix}setbye  *texto*
│•┋${usedPrefix}setpp  *imagen*
│•┋${usedPrefix}warn
│•┋${usedPrefix}delwarn
│•┋${usedPrefix}admins
│•╯${usedPrefix}tagall
╰•≫ ──── ≪•◦ 🌎 ◦•≫ ──── ≪•⧐


╭•≫ ──── ≪•◦ 🏮 ◦•≫ ──── ≪•⧐
┃𝙈𝙀𝙉𝙐 𝙋𝙍𝙊𝙋𝙄𝙀𝙏𝘼𝙍𝙄𝙊
├──────────────⋄
│•╮${usedPrefix}banuser
│•┋${usedPrefix}unbanuser
│•┋${usedPrefix}reunion
│•┋${usedPrefix}setprefix
│•┋${usedPrefix}update
│•┋${usedPrefix}updat
│•┋${usedPrefix}setbiobot
│•┋${usedPrefix}restart
│•┋${usedPrefix}setdescbot
│•┋${usedPrefix}setnamebot
│•┋${usedPrefix}setppbot
│•┋${usedPrefix}actualizar
│•┋${usedPrefix}backup
│•┋${usedPrefix}addowner
│•┋${usedPrefix}addprem
│•┋${usedPrefix}block
│•┋${usedPrefix}unblock
│•╯${usedPrefix}boost
╰•≫ ──── ≪•◦ 🏮 ◦•≫ ──── ≪•⧐


╭•≫ ──── ≪•◦ 🍁 ◦•≫ ──── ≪•⧐
┃𝙈𝙀𝙉𝙐 𝙎𝙏𝙄𝘾𝙆𝙀𝙍𝙎
├──────────────⋄
│•╮${usedPrefix}s  *img*
│•┋${usedPrefix}s  *gif*
│•┋${usedPrefix}s  *video*
│•┋${usedPrefix}dato
│•┋${usedPrefix}attp  *texto*
│•┋${usedPrefix}attp2  *texto*
│•┋${usedPrefix}attp3  *texto*
│•┋${usedPrefix}ttp  *texto*
│•┋${usedPrefix}ttp2  *texto*
│•┋${usedPrefix}ttp3  *texto*
│•┋${usedPrefix}ttp4  *texto*
│•┋${usedPrefix}ttp5  *texto*
│•╯${usedPrefix}wm  *texto|texto*
╰•≫ ──── ≪•◦ 🍁 ◦•≫ ──── ≪•⧐


╭•≫ ──── ≪•◦ 👑 ◦•≫ ──── ≪•⧐
┃𝙈𝙀𝙉𝙐 𝙍𝙋𝙂
├──────────────⋄
│•╮${usedPrefix}minar
│•┋${usedPrefix}minar2
│•┋${usedPrefix}minar3
│•┋${usedPrefix}work
│•┋${usedPrefix}claim
│•┋${usedPrefix}cofre
│•┋${usedPrefix}autolevelup
│•┋${usedPrefix}transfer
│•┋${usedPrefix}heal
│•┋${usedPrefix}aventura
│•┋${usedPrefix}robar  *@tag*
│•┋${usedPrefix}balance
│•┋${usedPrefix}buy 1
│•┋${usedPrefix}buyall
│•╯${usedPrefix}tops
╰•≫ ──── ≪•◦ 👑 ◦•≫ ──── ≪•⧐


╭•≫ ──── ≪•◦ 💥 ◦•≫ ──── ≪•⧐
┃𝙈𝙀𝙉𝙐 𝙅𝙐𝙀𝙂𝙊𝙎
├──────────────⋄
│•╮${usedPrefix}gay  *@tag*
│•┋${usedPrefix}gay2  *@tag*
│•┋${usedPrefix}puto  *@tag*
│•┋${usedPrefix}puta  *@tag*
│•┋${usedPrefix}manca  *@tag*
│•┋${usedPrefix}manco  *@tag*
│•┋${usedPrefix}rata  *@tag*
│•┋${usedPrefix}tictactoe gokubot
│•┋${usedPrefix}delttt
│•┋${usedPrefix}suitpvp  *@tag*
│•┋${usedPrefix}acertijo
│•┋${usedPrefix}top  *texto*
│•┋${usedPrefix}topgays
│•┋${usedPrefix}topotakus
│•╯${usedPrefix}mates
╰•≫ ──── ≪•◦ 💥 ◦•≫ ──── ≪•⧐


╭•≫ ──── ≪•◦ 🌐 ◦•≫ ──── ≪•⧐
┃𝙈𝙀𝙉𝙐 𝙃𝙀𝙍𝙍𝘼𝙈𝙄𝙀𝙉𝙏𝘼𝙎
├──────────────⋄
│•╮${usedPrefix}dalle  *texto*
│•┋${usedPrefix}chatgpt  *texto*
│•┋${usedPrefix}chatgptvoz  *texto*
│•┋${usedPrefix}delchatgpt
│•┋${usedPrefix}bot  *texto*
│•┋${usedPrefix}hd
│•┋${usedPrefix}reporte  *texto*
│•┋${usedPrefix}horario
│•┋${usedPrefix}qrcode  *texto*
│•┋${usedPrefix}inspec
│•┋${usedPrefix}del  *mensaje*
│•┋${usedPrefix}traducir  *texto*
│•┋${usedPrefix}gemini  *texto*
│•┋${usedPrefix}geminiimg  *texto • img*
│•┋${usedPrefix}toimg  *sticker img*
│•┋${usedPrefix}tovideo  *sticker video*
│•┋${usedPrefix}toaudio  *video*
│•╯${usedPrefix}tourl  *img • video*
╰•≫ ──── ≪•◦ 🌐 ◦•≫ ──── ≪•⧐


╭•≫ ──── ≪•◦ 🪐 ◦•≫ ──── ≪•⧐
┃𝙈𝙀𝙉𝙐 𝘿𝙀𝙎𝘾𝘼𝙍𝙂𝘼𝙎
├──────────────⋄
│•╮${usedPrefix}play  *texto*
│•┋${usedPrefix}play2  *texto*
│•┋${usedPrefix}playlist  *texto*
│•┋${usedPrefix}apk  *texto*
│•┋${usedPrefix}m : mediafire  *enlace*
│•┋${usedPrefix}imagen  *texto*
│•┋${usedPrefix}pinterest  *texto*
│•┋${usedPrefix}tiktok  *enlace*
│•┋${usedPrefix}tiktokimg  *enlace*
│•┋${usedPrefix}ig  *enlace*
│•┋${usedPrefix}igstalk  *enlace*
│•┋${usedPrefix}twitter  *enlace*
│•┋${usedPrefix}playdoc  *enlace*
│•╯${usedPrefix}playdoc2  *enlace*
╰•≫ ──── ≪•◦ 🪐 ◦•≫ ──── ≪•⧐


╭•≫ ──── ≪•◦ 🧧 ◦•≫ ──── ≪•⧐
┃𝙈𝙀𝙉𝙐 𝙍𝘼𝙉𝘿𝙊𝙈
├──────────────⋄
│•╮${usedPrefix}messi
│•┋${usedPrefix}cr7
│•┋${usedPrefix}chico
│•┋${usedPrefix}chica
│•┋${usedPrefix}perro
│•┋${usedPrefix}gato
│•┋${usedPrefix}meme
│•┋${usedPrefix}bts
│•╯${usedPrefix}itzy
╰•≫ ──── ≪•◦ 🧧 ◦•≫ ──── ≪•⧐


╭•≫ ──── ≪•◦ 🌌 ◦•≫ ──── ≪•⧐
┃𝙈𝙀𝙉𝙐 𝙍𝘼𝙉𝘿𝙊𝙈 / 𝘼𝙉𝙄𝙈𝙀
├──────────────⋄
│•╮ _${usedPrefix}lolivid_
│•┋ _${usedPrefix}loli_
│•┋ _${usedPrefix}ppcouple_
│•┋ _${usedPrefix}neko_
│•┋ _${usedPrefix}waifu_
│•┋ _${usedPrefix}akira_
│•┋ _${usedPrefix}akiyama_
│•┋ _${usedPrefix}anna_
│•┋ _${usedPrefix}asuna_
│•┋ _${usedPrefix}ayuzawa_
│•┋ _${usedPrefix}boruto_
│•┋ _${usedPrefix}chiho_
│•┋ _${usedPrefix}chitoge_
│•┋ _${usedPrefix}deidara_
│•┋ _${usedPrefix}erza_
│•┋ _${usedPrefix}elaina_
│•┋ _${usedPrefix}eba_
│•┋ _${usedPrefix}emilia_
│•┋ _${usedPrefix}hestia_
│•┋ _${usedPrefix}hinata_
│•┋ _${usedPrefix}inori_
│•┋ _${usedPrefix}isuzu_
│•┋ _${usedPrefix}itachi_
│•┋ _${usedPrefix}itori_
│•┋ _${usedPrefix}kaga_
│•┋ _${usedPrefix}kagura_
│•┋ _${usedPrefix}kaori_
│•┋ _${usedPrefix}keneki_
│•┋ _${usedPrefix}kotori_
│•┋ _${usedPrefix}kurumi_
│•┋ _${usedPrefix}madara_
│•┋ _${usedPrefix}mikasa_
│•┋ _${usedPrefix}miku_
│•┋ _${usedPrefix}minato_
│•┋ _${usedPrefix}naruto_
│•┋ _${usedPrefix}nezuko_
│•┋ _${usedPrefix}sagiri_
│•┋ _${usedPrefix}sasuke_
│•┋ _${usedPrefix}sakura_
│•╯ _${usedPrefix}cosplay_
╰•≫ ──── ≪•◦ 🌌 ◦•≫ ──── ≪•⧐


╭•≫ ──── ≪•◦ 🌀 ◦•≫ ──── ≪•⧐
┃𝙈𝙀𝙉𝙐 𝙎𝙀𝙍𝘽𝙊𝙏
├──────────────⋄
│•╮${usedPrefix}serbot
│•┋${usedPrefix}deletesession
│•┋${usedPrefix}stop
│•╯${usedPrefix}bots
╰•≫ ──── ≪•◦ 🌀 ◦•≫ ──── ≪•⧐


╭•≫ ──── ≪•◦ 🟢 ◦•≫ ──── ≪•⧐
┃𝙈𝙀𝙉𝙐 𝙊𝙉 𝙔 𝙊𝙁𝙁
├──────────────⋄
│•╮${usedPrefix}on
│•╯${usedPrefix}off
╰•≫ ──── ≪•◦ 🔴 ◦•≫ ──── ≪•⧐`;

//•━━━━━━━━━━━━━━• ❮💥❯ •━━━━━━━━━━━━━━•

if (command == 'menulist') {
await conn.sendFile(m.chat, gokuImgs, 'goku.jpg', gokulista.trim(), m, true, {
contextInfo: {
'forwardingScore': 200,
'isForwarded': false,
externalAdReply: {
showAdAttribution: true,
renderLargerThumbnail: false,
title: `⊹⊱•🪐 𝗟𝗜𝗦𝗧𝗔 𝗗𝗘 𝗠𝗘𝗡𝗨𝗦 🪐•⊰⊹`,
body: `🏮 ʜᴏʟᴀ, ʙɪᴇɴᴠᴇɴɪᴅᴏ ᴀ ɢᴏᴋᴜʙᴏᴛ-ᴍᴅ 🏮`,
mediaType: 1,
sourceUrl: canal,
thumbnailUrl: gokuMenus
}}
}, { mentions: m.sender })
};

//•┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄•

if (command == 'menuinfo') {
await conn.sendFile(m.chat, gokuImgs, 'goku.jpg', menuinfo.trim(), m, true, {
contextInfo: {
'forwardingScore': 200,
'isForwarded': false,
externalAdReply: {
showAdAttribution: true,
renderLargerThumbnail: false,
title: `⊹⊱•👤 𝗠𝗘𝗡𝗨 𝗜𝗡𝗙𝗢𝗥𝗠𝗔𝗖𝗜𝗢𝗡 👤•⊰⊹`,
body: `🏮 ʜᴏʟᴀ, ʙɪᴇɴᴠᴇɴɪᴅᴏ ᴀ ɢᴏᴋᴜʙᴏᴛ-ᴍᴅ 🏮`,
mediaType: 1,
sourceUrl: canal,
thumbnailUrl: gokuMenus
}}
}, { mentions: m.sender })
};

//•┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄•

if (command == 'menugroup') {
await conn.sendFile(m.chat, gokuImgs, 'goku.jpg', menugroup.trim(), m, true, {
contextInfo: {
'forwardingScore': 200,
'isForwarded': false,
externalAdReply: {
showAdAttribution: true,
renderLargerThumbnail: false,
title: `⊹⊱•🌎 𝗠𝗘𝗡𝗨 𝗚𝗥𝗨𝗣𝗔𝗟 🌎•⊰⊹`,
body: `🏮 ʜᴏʟᴀ, ʙɪᴇɴᴠᴇɴɪᴅᴏ ᴀ ɢᴏᴋᴜʙᴏᴛ-ᴍᴅ 🏮`,
mediaType: 1,
sourceUrl: canal,
thumbnailUrl: gokuMenus
}}
}, { mentions: m.sender })
};

//•┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄•

if (command == 'menuowner') {
await conn.sendFile(m.chat, gokuImgs, 'goku.jpg', menuowner.trim(), m, true, {
contextInfo: {
'forwardingScore': 200,
'isForwarded': false,
externalAdReply: {
showAdAttribution: true,
renderLargerThumbnail: false,
title: `⊹⊱•👑 𝗠𝗘𝗡𝗨 𝗣𝗥𝗢𝗣𝗜𝗘𝗧𝗔𝗥𝗜𝗢 👑•⊰⊹`,
body: `🏮 ʜᴏʟᴀ, ʙɪᴇɴᴠᴇɴɪᴅᴏ ᴀ ɢᴏᴋᴜʙᴏᴛ-ᴍᴅ 🏮`,
mediaType: 1,
sourceUrl: canal,
thumbnailUrl: gokuMenus
}}
}, { mentions: m.sender })
};

//•┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄•

if (command == 'menuaudios') {
await conn.sendFile(m.chat, gokuImgs, 'goku.jpg', menuaudios.trim(), m, true, {
contextInfo: {
'forwardingScore': 200,
'isForwarded': false,
externalAdReply: {
showAdAttribution: true,
renderLargerThumbnail: false,
title: `⊹⊱•🎧 𝗠𝗘𝗡𝗨 𝗔𝗨𝗗𝗜𝗢𝗦 🎧•⊰⊹`,
body: `🏮 ʜᴏʟᴀ, ʙɪᴇɴᴠᴇɴɪᴅᴏ ᴀ ɢᴏᴋᴜʙᴏᴛ-ᴍᴅ 🏮`,
mediaType: 1,
sourceUrl: canal,
thumbnailUrl: gokuMenus
}}
}, { mentions: m.sender })
};

//•┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄•

if (command == 'menustickers') {
await conn.sendFile(m.chat, gokuImgs, 'goku.jpg', menustickers.trim(), m, true, {
contextInfo: {
'forwardingScore': 200,
'isForwarded': false,
externalAdReply: {
showAdAttribution: true,
renderLargerThumbnail: false,
title: `⊹⊱•🎨 𝗠𝗘𝗡𝗨 𝗦𝗧𝗜𝗖𝗞𝗘𝗥𝗦 🎨•⊰⊹`,
body: `🏮 ʜᴏʟᴀ, ʙɪᴇɴᴠᴇɴɪᴅᴏ ᴀ ɢᴏᴋᴜʙᴏᴛ-ᴍᴅ 🏮`,
mediaType: 1,
sourceUrl: canal,
thumbnailUrl: gokuMenus
}}
}, { mentions: m.sender })
};

//•┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄•

if (command == 'menurpg') {
await conn.sendFile(m.chat, gokuImgs, 'goku.jpg', menurpg.trim(), m, true, {
contextInfo: {
'forwardingScore': 200,
'isForwarded': false,
externalAdReply: {
showAdAttribution: true,
renderLargerThumbnail: false,
title: `⊹⊱•🎁 𝗠𝗘𝗡𝗨 𝗥𝗣𝗚 🎁•⊰⊹`,
body: `🏮 ʜᴏʟᴀ, ʙɪᴇɴᴠᴇɴɪᴅᴏ ᴀ ɢᴏᴋᴜʙᴏᴛ-ᴍᴅ 🏮`,
mediaType: 1,
sourceUrl: canal,
thumbnailUrl: gokuMenus
}}
}, { mentions: m.sender })
};

//•┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄•

if (command == 'menujuegos') {
await conn.sendFile(m.chat, gokuImgs, 'goku.jpg', menujuegos.trim(), m, true, {
contextInfo: {
'forwardingScore': 200,
'isForwarded': false,
externalAdReply: {
showAdAttribution: true,
renderLargerThumbnail: false,
title: `⊹⊱•🎳 𝗠𝗘𝗡𝗨 𝗝𝗨𝗘𝗚𝗢𝗦 🎳•⊰⊹`,
body: `🏮 ʜᴏʟᴀ, ʙɪᴇɴᴠᴇɴɪᴅᴏ ᴀ ɢᴏᴋᴜʙᴏᴛ-ᴍᴅ 🏮`,
mediaType: 1,
sourceUrl: canal,
thumbnailUrl: gokuMenus
}}
}, { mentions: m.sender })
};

//•┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄•

if (command == 'menuhrms') {
await conn.sendFile(m.chat, gokuImgs, 'goku.jpg', menuhrms.trim(), m, true, {
contextInfo: {
'forwardingScore': 200,
'isForwarded': false,
externalAdReply: {
showAdAttribution: true,
renderLargerThumbnail: false,
title: `⊹⊱•🧰 𝗠𝗘𝗡𝗨 𝗛𝗘𝗥𝗥𝗔𝗠𝗜𝗘𝗡𝗧𝗔𝗦 🧰•⊰⊹`,
body: `🏮 ʜᴏʟᴀ, ʙɪᴇɴᴠᴇɴɪᴅᴏ ᴀ ɢᴏᴋᴜʙᴏᴛ-ᴍᴅ 🏮`,
mediaType: 1,
sourceUrl: canal,
thumbnailUrl: gokuMenus
}}
}, { mentions: m.sender })
};

//•┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄•

if (command == 'menudown') {
await conn.sendFile(m.chat, gokuImgs, 'goku.jpg', menudown.trim(), m, true, {
contextInfo: {
'forwardingScore': 200,
'isForwarded': false,
externalAdReply: {
showAdAttribution: true,
renderLargerThumbnail: false,
title: `⊹⊱•📽️ 𝗠𝗘𝗡𝗨 𝗗𝗘𝗦𝗖𝗔𝗥𝗚𝗔𝗦 🔊•⊰⊹`,
body: `🏮 ʜᴏʟᴀ, ʙɪᴇɴᴠᴇɴɪᴅᴏ ᴀ ɢᴏᴋᴜʙᴏᴛ-ᴍᴅ 🏮`,
mediaType: 1,
sourceUrl: canal,
thumbnailUrl: gokuMenus
}}
}, { mentions: m.sender })
};

//•┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄•

if (command == 'menurandom') {
await conn.sendFile(m.chat, gokuImgs, 'goku.jpg', menurandom.trim(), m, true, {
contextInfo: {
'forwardingScore': 200,
'isForwarded': false,
externalAdReply: {
showAdAttribution: true,
renderLargerThumbnail: false,
title: `⊹⊱•⛰️ 𝗠𝗘𝗡𝗨 𝗥𝗔𝗡𝗗𝗢𝗠 ⛰️•⊰⊹`,
body: `🏮 ʜᴏʟᴀ, ʙɪᴇɴᴠᴇɴɪᴅᴏ ᴀ ɢᴏᴋᴜʙᴏᴛ-ᴍᴅ 🏮`,
mediaType: 1,
sourceUrl: canal,
thumbnailUrl: gokuMenus
}}
}, { mentions: m.sender })
};

//•┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄•

if (command == 'menuanime') {
await conn.sendFile(m.chat, gokuImgs, 'goku.jpg', menuanime.trim(), m, true, {
contextInfo: {
'forwardingScore': 200,
'isForwarded': false,
externalAdReply: {
showAdAttribution: true,
renderLargerThumbnail: false,
title: `⊹⊱•⛩️ 𝗠𝗘𝗡𝗨 𝗥𝗔𝗡𝗗𝗢𝗠 𝗔𝗡𝗜𝗠𝗘 ⛩️•⊰⊹`,
body: `🏮 ʜᴏʟᴀ, ʙɪᴇɴᴠᴇɴɪᴅᴏ ᴀ ɢᴏᴋᴜʙᴏᴛ-ᴍᴅ 🏮`,
mediaType: 1,
sourceUrl: canal,
thumbnailUrl: gokuMenus
}}
}, { mentions: m.sender })
};

//•┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄•

if (command == 'menuserbot') {
await conn.sendFile(m.chat, gokuImgs, 'goku.jpg', menuserbot.trim(), m, true, {
contextInfo: {
'forwardingScore': 200,
'isForwarded': false,
externalAdReply: {
showAdAttribution: true,
renderLargerThumbnail: false,
title: `⊹⊱•🤖 𝗠𝗘𝗡𝗨 𝗦𝗘𝗥 𝗕𝗢𝗧 🤖•⊰⊹`,
body: `🏮 ʜᴏʟᴀ, ʙɪᴇɴᴠᴇɴɪᴅᴏ ᴀ ɢᴏᴋᴜʙᴏᴛ-ᴍᴅ 🏮`,
mediaType: 1,
sourceUrl: canal,
thumbnailUrl: gokuMenus
}}
}, { mentions: m.sender })
};

//•┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄•

if (command == 'allmenu' || command == 'menucompleto' || command == 'menuall' || command == 'menutodo') {
 await conn.sendMessage(m.chat, { text: menucom,
contextInfo:{
forwardingScore: 9999999,
isForwarded: false, 
"externalAdReply": {
"showAdAttribution": true,
"containsAutoReply": true,
title: `🍁✨ 𝗠𝗘𝗡𝗨 𝗖𝗢𝗠𝗣𝗟𝗘𝗧𝗢 ✨🍁`,
body: `𝘉𝘪𝘦𝘯𝘷𝘦𝘯𝘪𝘥𝘰 𝘢𝘭 𝘮𝘦𝘯𝘶 𝘤𝘰𝘮𝘱𝘭𝘦𝘵𝘰 𝘥𝘦 𝘎𝘰𝘬𝘶𝘉𝘰𝘵-𝘔𝘋!`,
"previewType": "PHOTO",
thumbnailUrl: gokuMenus, 
sourceUrl: canal}}},
{ quoted: m})
}};

//•┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄•

handler.command = /^(menulist|menuinfo|menugroup|menuowner|menuaudios|menustickers|menurpg|menujuegos|menuhrms|menurandom|menudown|menuanime|menuserbot|allmenu|menucompleto|menuall|menutodo)$/i
export default handler
