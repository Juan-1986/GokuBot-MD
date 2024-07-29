import {watchFile, unwatchFile} from 'fs';
import chalk from 'chalk';
import {fileURLToPath} from 'url';
import fs from 'fs'; 
import cheerio from 'cheerio';
import fetch from 'node-fetch';
import axios from 'axios';
import moment from 'moment-timezone'

global.botnumber = ""
global.confirmCode = ""

//┌┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈•『 GokuBot-MD 』
//└┈•➣ Titulos y mas.
global.packname = '𝙂𝘰𝘬𝘶𝘽𝘰𝘵-𝙈𝘋'
global.author = '• ByJuan1986 •'
global.textobot = '• WhatsApp Bot •'
global.wm = '𝙂𝘰𝘬𝘶𝘽𝘰𝘵-𝙈𝘋 │ ᵇʸʲᵘᵃⁿ¹⁹⁸⁶'
global.wm2 = '🪐 𝙂𝙊𝙆𝙐𝘽𝙊𝙏 │ ʷʰᵃᵗˢᵃᵖᵖ-ᵇᵒᵗ 🪐'
global.des = '• WhatsApp bot multi device.'

//┌┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈•『 GokuBot-MD 』
//└┈•➣ Cuentas y otros.
global.yt = ''
global.fb = ''
global.md = 'https://github.com/ByJuan1986/GokuBot-MD'
global.paypal = ''
global.telegram = ''
global.grupo1 = ''
global.ig = ''
global.creador = 'https://wa.me/573108625104'

//┌┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈•『 GokuBot-MD 』
//└┈•➣ Imagenes aleatorios.
global.img1 = ''
global.img2 = ''
global.img3 = ''
global.img4 = ''
global.img5 = ''
global.img6 = ''
global.img7 = ''
global.img8 = ''
global.img9 = ''
global.img10 = ''

//┌┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈•『 GokuBot-MD 』
//└┈•➣ otros imagenes aleatorios.
global.imagen1 = ''
global.imagen2 = ''
global.imagen3 = ''
global.imagen4 = ''
global.imagen5 = ''

//┌┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈•『 GokuBot-MD 』
//└┈•➣ Apartado de menus.
global.gokuMenu1 = ''
global.gokuMenu2 = ''
global.gokuMenu3 = ''

//┌┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈•『 GokuBot-MD 』
//└┈•➣ Apartado de mensionar al bot y mandar un sticker img
global.gokuStick = ''

/*
//┌┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈•『 GokuBot-MD 』
//└┈•➣ Ignorar esta parte
global.raiz = './'
global.aniD = 'sessions/'
global.dirP = raiz//+aniD
global.authFile = join(__dirname, `sessions/`)
global.authFileRespald = join(__dirname, `sesionRespaldo/`)
global.temp = join(__dirname, 'tmp')
global.media = raiz+'media/'
global.jadibts = join(__dirname, 'jadibts/')
global.raiz = './Menu1.jpg'
*/

//┌┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈•『 GokuBot-MD 』
//└┈•➣ Reacciones.
global.rwait = '⏳'
global.done = '✅'
global.error = '⛔'
global.reacgoku = '⭐'

//┌┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈•『 GokuBot-MD 』
//└┈•➣ Tiempo.
var ase = new Date(); var hour = ase.getHours(); switch(hour){ case 0: hour = 'Linda Mañana'; break; case 1: hour = 'Linda Mañana'; break; case 2: hour = 'Linda Mañana'; break; case 3: hour = 'Linda Mañana'; break; case 4: hour = 'linda mañana'; break; case 5: hour = 'Linda Mañana'; break; case 6: hour = 'Linda Mañana'; break; case 7: hour = 'Linda Mañana'; break; case 8: hour = 'Linda Mañana'; break; case 9: hour = 'Linda Mañana'; break; case 10: hour = 'Lindo Dia'; break; case 11: hour = 'Lindo Dia'; break; case 12: hour = 'Lindo Dia'; break; case 13: hour = 'Lindo Dia'; break; case 14: hour = 'Linda Tarde'; break; case 15: hour = 'Linda Tarde'; break; case 16: hour = 'Linda Tarde'; break; case 17: hour = 'Linda Tarde'; break; case 18: hour = 'Linda Noche'; break; case 19: hour = 'Linda Noche'; break; case 20: hour = 'Linda Noche'; break; case 21: hour = 'Linda Noche'; break; case 22: hour = 'Linda Noche'; break; case 23: hour = 'Linda Noche'; break;}
global.saludo = '🌎' + hour;

//┌┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈•『 GokuBot-MD 』
//└┈•➣ Tiempo
global.d = new Date(new Date + 3600000);
global.locale = 'es';
global.dia = d.toLocaleDateString(locale, {weekday: 'long'});
global.fecha = d.toLocaleDateString('es', {day: 'numeric', month: 'numeric', year: 'numeric'});
global.mes = d.toLocaleDateString('es', {month: 'long'});
global.año = d.toLocaleDateString('es', {year: 'numeric'});
global.tiempo = d.toLocaleString('en-US', {hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true});

//┌┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈•『 GokuBot-MD 』
//└┈•➣ Aleatorio.
global.wm2 = `${dia} ${fecha}\nGokuBot-MD`;
global.gt = 'GokuBot-MD';
global.mysticbot = 'GokuBot';
global.mysticbot = 'https://github.com/ByJuan1986';
global.nomorown = '573108625104';
global.pdoc = ['application/vnd.openxmlformats-officedocument.presentationml.presentation', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', 'application/vnd.ms-excel', 'application/msword', 'application/pdf', 'text/rtf'];
global.cmenut = '❖––––––『';
global.cmenub = '┊✦ ';
global.cmenuf = '╰━═┅═━––––––๑\n';
global.cmenua = '\n⌕ ❙❘❙❙❘❙❚❙❘❙❙❚❙❘❙❘❙❚❙❘❙❙❚❙❘❙❙❘❙❚❙❘ ⌕\n     ';
global.dmenut = '*❖─┅──┅〈*';
global.dmenub = '*┊»*';
global.dmenub2 = '*┊*';
global.dmenuf = '*╰┅────────┅✦*';
global.htjava = '⫹⫺';
global.htki = '*⭑•̩̩͙⊱•••• ☪*';
global.htka = '*☪ ••••̩̩͙⊰•⭑*';
global.comienzo = '• • ◕◕════';
global.fin = '════◕◕ • •';
global.botdate = `*Fecha:*  ${moment.tz('America/Mexico_City').format('DD/MM/YY')}`;
global.bottime = `*Hora:* ${moment.tz('America/Mexico_City').format('HH:mm:ss')}`;
global.fgif = {key: {participant: '0@s.whatsapp.net'}, message: {'videoMessage': {'title': wm, 'h': `Hmm`, 'seconds': '999999999', 'gifPlayback': 'true', 'caption': bottime, 'jpegThumbnail': fs.readFileSync('./Menu.png')}}};
global.multiplier = 99;
global.flaaa = [
  'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=water-logo&script=water-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextColor=%23000&shadowGlowColor=%23000&backgroundColor=%23000&text=',
  'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=crafts-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&text=',
  'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=amped-logo&doScale=true&scaleWidth=800&scaleHeight=500&text=',
  'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&text=',
  'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&fillColor1Color=%23f2aa4c&fillColor2Color=%23f2aa4c&fillColor3Color=%23f2aa4c&fillColor4Color=%23f2aa4c&fillColor5Color=%23f2aa4c&fillColor6Color=%23f2aa4c&fillColor7Color=%23f2aa4c&fillColor8Color=%23f2aa4c&fillColor9Color=%23f2aa4c&fillColor10Color=%23f2aa4c&fillOutlineColor=%23f2aa4c&fillOutline2Color=%23f2aa4c&backgroundColor=%23101820&text=',
];

//┌┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈•『 GokuBot-MD 』
//└┈•➣ Cargando.
global.wait = '❮⏳❯ ▰▱▱▱▱▱▱▱▱▱'
global.waitt = '❮⏳❯ ▰▰▰▰▱▱▱▱▱▱'
global.waittt = '❮⏳❯ ▰▰▰▰▰▱▱▱▱▱'
global.waitttt = '❮⏳❯ ▰▰▰▰▰▰▰▱▱▱'
global.waittttt = '❮⏳❯ ▰▰▰▰▰▰▰▰▰▰'

//┌┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈•『 GokuBot-MD 』
//└┈•➣ Owners del bot.
global.owner = [['573108625104', 'GokuBot-MD', true], ['5491133982337']]
global.botNumberCode = ''
global.confirmCode = ''
global.suittag = ['573108625104']
global.mods = []
global.prems = []
global.isdev = [['573108625104']]


//┌┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈•『 GokuBot-MD 』
//└┈•➣ Ignorar ests parte.
global.vs = '1.6.0'
global.library = 'Baileys'
global.baileys = '@whiskeysockets/baileys'
global.lenguaje = 'Español'
global.menudi = ['⛶','❏','⫹⫺']
global.dev = 'ByJuan1986'
global.devnum = '+57 310 8625104'
global.fsizedoc = '50'
global.fpagedoc = '100'

global.d = new Date(new Date + 3600000)
global.locale = 'es'
global.dia = d.toLocaleDateString(locale, {weekday: 'long'})
global.fecha = d.toLocaleDateString('es', {day: 'numeric', month: 'numeric', year: 'numeric'})
global.mes = d.toLocaleDateString('es', {month: 'long'})
global.año = d.toLocaleDateString('es', {year: 'numeric'})
global.tiempo = d.toLocaleString('en-US', {hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true})

var more = String.fromCharCode(8206)
global.readMore = more.repeat(850)

let file = fileURLToPath(import.meta.url)
watchFile(file, () => { unwatchFile(file)
console.log(chalk.yellow('Se actualizo el archivo config.js'))
import(`${file}?update=${Date.now()}`)
})
 
