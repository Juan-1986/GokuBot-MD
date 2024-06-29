import { watchFile, unwatchFile } from 'fs' 
import chalk from 'chalk'
import { fileURLToPath } from 'url'
import fs from 'fs'
import cheerio from 'cheerio'
import fetch from 'node-fetch'
import axios from 'axios'
import moment from 'moment-timezone' 

// •┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄•「⎋〘 𝙂𝙤𝙠𝙪𝘽𝙤𝙩-𝙈𝘿 〙⎋」•┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄•

global.owner = [
['573108625104', 'Punisher⁩', true],
['5493873232212', 'MultiBot-OFC', true],
['5493873232221']
]

// •┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄•「⎋〘 𝙂𝙤𝙠𝙪𝘽𝙤𝙩-𝙈𝘿 〙⎋」•┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄•

global.mods = []
global.prems = []  
 
// •┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄•「⎋〘 𝙂𝙤𝙠𝙪𝘽𝙤𝙩-𝙈𝘿 〙⎋」•┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄•

global.packname = `𝙂𝙤𝙠𝙪𝘽𝙤𝙩-𝙈𝘿`
global.author = '𝙂𝙤𝙠𝙪𝘽𝙤𝙩-𝙈𝘿'
global.wait = '𝙀𝙨𝙥𝙚𝙧𝙚 𝙪𝙣 𝙢𝙤𝙢𝙚𝙣𝙩𝙤...'
global.botname = '☁️ 𝆹𝅥𝅯𝙂𝆭𝙤𝙠𝆭𝙪𝘽𝆭𝙤𝙩-𝙈𝘿𝆹𝅥𝅯 ☁️'
global.textbot = `𝙒𝙝𝙖𝙩𝙨𝘼𝙥𝙥 𝘽𝙤𝙩 𝘽𝙚𝙩𝙖`
global.listo = '⦅•~•⦆ 𝙟𝙨𝙟𝙟𝙨𝙟𝙟𝙨𝙟𝙨𝙨𝙟 𝙖𝙦𝙪𝙞 𝙩𝙞𝙚𝙣𝙚𝙨!'
global.namechannel = '𝙂𝙤𝙠𝙪𝘽𝙤𝙩-𝙈𝘿'

// •┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄•「⎋〘 𝙂𝙤𝙠𝙪𝘽𝙤𝙩-𝙈𝘿 〙⎋」•┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄•

global.catalogo = fs.readFileSync('./storage/img/catalogo.png')
global.miniurl = fs.readFileSync('./storage/img/miniurl.jpg')

// •┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄•「⎋〘 𝙂𝙤𝙠𝙪𝘽𝙤𝙩-𝙈𝘿 〙⎋」•┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄•

global.imagen1 = ''
global.imagen2 = ''
global.imagen3 = ''
global.imagen4 = ''
global.imagen5 = ''

// •┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄•「⎋〘 𝙂𝙤𝙠𝙪𝘽𝙤𝙩-𝙈𝘿 〙⎋」•┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄•

global.img1 = ''
global.img2 = ''
global.img3 = ''
global.img4 = ''
global.img5 = ''

// •┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄•「⎋〘 𝙂𝙤𝙠𝙪𝘽𝙤𝙩-𝙈𝘿 〙⎋」•┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄•

global.gokuFotos1 = [imagen1, imagen2, imagen3, imagen4, imagen5]
global.gokuFotos2 = [img1, img2, img3, img4, img5]
globla.gokuLinks = [group, canal, md, creador]

// •┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄•「⎋〘 𝙂𝙤𝙠𝙪𝘽𝙤𝙩-𝙈𝘿 〙⎋」•┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄•

global.group = 'https://chat.whatsapp.com/FkjjdPygRntIhOtbJ7MwkG'
global.canal = 'https://whatsapp.com/channel/0029Va6GrhF17EmnN4eF5F25'
global.creador = 'https://wa.me/573108625104'
global.md = 'https://github.com/ByJuan1986/GokuBot-MD'

// •┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄•「⎋〘 𝙂𝙤𝙠𝙪𝘽𝙤𝙩-𝙈𝘿 〙⎋」•┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄•

global.estilo = { key: {  fromMe: false, participant: `0@s.whatsapp.net`, ...(false ? { remoteJid: "5219992095479-1625305606@g.us" } : {}) }, message: { orderMessage: { itemCount : -999999, status: 1, surface : 1, message: botname, orderTitle: 'Bang', thumbnail: catalogo, sellerJid: '0@s.whatsapp.net'}}}

// •┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄•「⎋〘 𝙂𝙤𝙠𝙪𝘽𝙤𝙩-𝙈𝘿 〙⎋」•┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄•

global.cheerio = cheerio
global.fs = fs
global.fetch = fetch
global.axios = axios
global.moment = moment	

// •┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄•「⎋〘 𝙂𝙤𝙠𝙪𝘽𝙤𝙩-𝙈𝘿 〙⎋」•┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄•

global.multiplier = 69 
global.maxwarn = '2' // máxima advertencias

// •┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄•「⎋〘 𝙂𝙤𝙠𝙪𝘽𝙤𝙩-𝙈𝘿 〙⎋」•┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄•

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})