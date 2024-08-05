import {watchFile, unwatchFile} from 'fs';
import chalk from 'chalk';
import {fileURLToPath} from 'url';
import fs from 'fs'; 
import cheerio from 'cheerio';
import fetch from 'node-fetch';
import axios from 'axios';
import moment from 'moment-timezone';

//┌┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈•『 GokuBot-MD 』
//└┈•➣ Ignorar esto.
global.botnumber = ""
global.confirmCode = ""


//┌┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈•『 GokuBot-MD 』
//└┈•➣ Read More.
var more = String.fromCharCode(8206)
global.readMore = more.repeat(850)


//┌┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈•『 GokuBot-MD 』
//└┈•➣ Titulos y mas.
global.packname = '𝙂𝘰𝘬𝘶𝘽𝘰𝘵-𝙈𝘋';
global.author = '• ByJuan1986 •';
global.textobot = '• WhatsApp Bot •';
global.gt = 'GokuBot-MD';
global.gokubot1 = 'GokuBot';
global.vs = '1.6.0'
global.library = 'Baileys'
global.baileys = '@whiskeysockets/baileys'
global.lenguaje = 'Español'
global.dev = 'ByJuan1986'
global.devnum = '+57 310 8625104'
global.fsizedoc = '50'
global.fpagedoc = '100'
global.gokubot2 = 'https://github.com/ByJuan1986';
global.nomorown = '573108625104';
global.wm = '𝙂𝘰𝘬𝘶𝘽𝘰𝘵-𝙈𝘋 │ ᵇʸʲᵘᵃⁿ¹⁹⁸⁶';
global.wm2 = '🪐 𝙂𝙊𝙆𝙐𝘽𝙊𝙏 │ ʷʰᵃᵗˢᵃᵖᵖ-ᵇᵒᵗ 🪐';
global.des = '• WhatsApp bot multi device.';
global.vs = '1.7.5';

global.gokuImgs = 'https://i.postimg.cc/vH61KxqM/Goku-Bot-01.jpg';
global.gokuImagens = 'https://i.postimg.cc/fy1VLMb6/Goku-Bot-04.jpg';
global.gokuAll = 'https://github.com/ByJuan1986/GokuBot-MD';

//┌┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈•『 GokuBot-MD 』
//└┈•➣ Cuentas y otros.
global.yt = 'https://youtube.com/@mundodragonballgokubot';
global.fb = 'https://www.facebook.com/groups/992399634839160/';
global.md = 'https://github.com/ByJuan1986/GokuBot-MD';
global.paypal = '';
global.telegram = '';
global.grupo1 = '';
global.ig = 'https://i.postimg.cc/KztpbzHK/goku-07.jpg';
global.asistencia = 'https://wa.me/5493873232221';
global.creador = 'https://wa.me/573108625104';


//┌┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈•『 GokuBot-MD 』
//└┈•➣ Imagenes aleatorios.
global.img1 = 'https://i.postimg.cc/vH61KxqM/Goku-Bot-01.jpg';
global.img2 = 'https://i.postimg.cc/zDQbpFk0/Goku-Bot-02.jpg';
global.img3 = 'https://i.postimg.cc/HnrJdrTw/Goku-Bot-03.jpg';
global.img4 = 'https://i.postimg.cc/fy1VLMb6/Goku-Bot-04.jpg';
global.img5 = 'https://i.postimg.cc/mgfcWZJ9/Goku-Bot-05.jpg';
global.img6 = 'https://i.postimg.cc/vmJ2C93F/Goku-06.jpg';
global.img7 = 'https://i.postimg.cc/KztpbzHK/goku-07.jpg';
global.img8 = 'https://i.postimg.cc/fRgrj1db/goku-08.jpg';
global.img9 = 'https://i.postimg.cc/jjwk8v64/Goku-09.jpg';
global.img10 = 'https://i.postimg.cc/Twz8q1KQ/Goku-10.jpg';


//┌┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈•『 GokuBot-MD 』
//└┈•➣ otros imagenes aleatorios.
global.imagen1 = 'https://i.postimg.cc/Y0Y5X7g7/Goku-11.jpg';
global.imagen2 = 'https://i.postimg.cc/KcThcPWW/Goku-12.jpg';
global.imagen3 = 'https://i.postimg.cc/HsCDrJDk/Goku-13.jpg';
global.imagen4 = 'https://i.postimg.cc/tTHt3HXW/Goku-14.jpg';
global.imagen5 = 'https://i.postimg.cc/nhCkZkRj/Goku-15.jpg'; 


//┌┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈•『 GokuBot-MD 』
//└┈•➣ Apartado de menus.
global.gokuMenu1 = 'https://i.postimg.cc/nhCkZkRj/Goku-15.jpg'; 
global.gokuMenu2 = 'https://i.postimg.cc/7hK3rGSn/Goku-18.jpg'; 
global.gokuMenu3 = 'https://i.postimg.cc/k4FNwh4Z/Goku-19.jpg'; 


//┌┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈•『 GokuBot-MD 』
//└┈•➣ Apartado de mensionar al bot y mandar un sticker img
global.gokuStick = 'https://i.postimg.cc/vH61KxqM/Goku-Bot-01.jpg'


//┌┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈•『 GokuBot-MD 』
//└┈•➣ Reacciones.
global.rwait = '⏳'; 
global.done = '✅';
global.error = '⛔'; 
global.reacgoku = '⭐'; 


//┌┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈•『 GokuBot-MD 』
//└┈•➣ Tiempo.
var ase = new Date(); var hour = ase.getHours(); switch(hour){ 
case 0: hour = 'Linda Mañana'; break; 
case 1: hour = 'Linda Mañana'; break; 
case 2: hour = 'Linda Mañana'; break; 
case 3: hour = 'Linda Mañana'; break; 
case 4: hour = 'Linda mañana'; break; 
case 5: hour = 'Linda Mañana'; break; 
case 6: hour = 'Linda Mañana'; break; 
case 7: hour = 'Linda Mañana'; break; 
case 8: hour = 'Linda Mañana'; break; 
case 9: hour = 'Linda Mañana'; break; 
case 10: hour = 'Lindo Dia'; break; 
case 11: hour = 'Lindo Dia'; break; 
case 12: hour = 'Lindo Dia'; break; 
case 13: hour = 'Lindo Dia'; break; 
case 14: hour = 'Linda Tarde'; break; 
case 15: hour = 'Linda Tarde'; break; 
case 16: hour = 'Linda Tarde'; break; 
case 17: hour = 'Linda Tarde'; break; 
case 18: hour = 'Linda Noche'; break; 
case 19: hour = 'Linda Noche'; break; 
case 20: hour = 'Linda Noche'; break; 
case 21: hour = 'Linda Noche'; break; 
case 22: hour = 'Linda Noche'; break; 
case 23: hour = 'Linda Noche'; break;
}
global.saludo = '🌎 ' + hour;


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
global.pdoc = ['application/vnd.openxmlformats-officedocument.presentationml.presentation', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', 'application/vnd.ms-excel', 'application/msword', 'application/pdf', 'text/rtf'];
global.botdate = `*Fecha:*  ${moment.tz('America/Mexico_City').format('DD/MM/YY')}`;
global.bottime = `*Hora:* ${moment.tz('America/Mexico_City').format('HH:mm:ss')}`;
global.fgif = {key: {participant: '0@s.whatsapp.net'}, message: {'videoMessage': {'title': wm, 'h': `Hmm`, 'seconds': '999999999', 'gifPlayback': 'true', 'caption': bottime, 'jpegThumbnail': imagen1 }}};
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
global.owner = [
['573108625104', '🏷️ 𝙂𝙤𝙠𝙪𝘽𝙤𝙩-𝙈𝘿 🏷️', true], 
['5491133982337']
['5493873232212'],
['5493873232221']
]


//┌┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈•『 GokuBot-MD 』
//└┈•➣ Etiquetado.
global.suittag = ['573108625104']


//┌┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈•『 GokuBot-MD 』
//└┈•➣ Usuarios moderadores.
global.mods = []


//┌┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈•『 GokuBot-MD 』
//└┈•➣ Usuarios premium.
global.prems = []


//┌┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈•『 GokuBot-MD 』
//└┈•➣ Ignorar esto.
global.isdev = [
['573108625104']
]

//┌┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈•『 GokuBot-MD 』
//└┈•➣ No tocar esto.
const file = fileURLToPath(import.meta.url);
watchFile(file, () => {
  unwatchFile(file);
  console.log(chalk.redBright('Update \'config.js\''));
  import(`${file}?update=${Date.now()}`);
});

 
