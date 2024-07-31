import fetch from 'node-fetch'
import moment from 'moment-timezone'
import axios from 'axios'
import fs from 'fs'
const { generateWAMessageFromContent, prepareWAMessageMedia, proto }  = (await import(global.baileys))

let handler = m => m
handler.before = async function (m, { conn, isAdmin, isBotAdmin, isOwner, isROwner } ) {
global.key = ''


//global.gitHub = { contextInfo: { externalAdReply: { mediaUrl: md, mediaType: 'VIDEO', description: dev, title: , body: 'Grupos ofc', thumbnailUrl: pp, sourceUrl: nn }}}
//global.whats = { contextInfo: { externalAdReply: { mediaUrl: md, mediaType: 'VIDEO', description: saludo, title: saludo, body: dev, thumbnailUrl: pp, sourceUrl: md }}}
//global.youtube = { contextInfo: { externalAdReply: { showAdAttribution: true, mediaUrl: yt, mediaType: 'VIDEO', description: '刷岬標⑨稖食岫︶祰岬夅禇岬? 岬? 鈦酷禈岬壦⑨禇食岬? 岫溼祪鈦酷祪恕 岬堘祲恕 矢岬掅禈岬€岬樶祰岬? : ' + yt, title: 'YouTube', body: 'CuriosityBot-MD', thumbnailUrl: pp, sourceUrl: yt }}}
global.fgif = { key: { fromMe: false, participant: "0@s.whatsapp.net", ...(m.chat ? { remoteJid: "6285736178354-1625305606@g.us" } : {})}, message: { videoMessage: { title: wm, "h": `Hmm`, 'seconds': '999999999', 'gifPlayback': 'true', 'caption': wm,  'jpegThumbnail': imagen1}}}
global.fgclink = { key: { fromMe: false, participant: "0@s.whatsapp.net", remoteJid: "0@s.whatsapp.net" }, message: { groupInviteMessage: { groupJid: "6285736178354-1625305606@g.us", inviteCode: null, groupName: "CuriosityBot-MD", caption: wm2, jpegThumbnail: imagen1}}}
global.fdocs = { key: { participant : "0@s.whatsapp.net" }, message: { documentMessage: { title: wm, jpegThumbnail: imagen1}}}
global.ftoko = { key: { fromMe: false, participant: "0@s.whatsapp.net", ...(m.chat ? { remoteJid: "17608914335@s.whatsapp.net" } : {})}, message: { productMessage: { product: { productImage: { mimetype: "image/jpeg", jpegThumbnail: imagen1}, title: wm,  description: wm, currencyCode: "USD", priceAmount1000: "99999999", retailerId: "Ghost", productImageCount: 1 }, businessOwnerJid: "0@s.whatsapp.net" }}}
global.fimg = { key: { participant: "0@s.whatsapp.net" }, message: { imageMessage: { url: ig, mimetype: "image/jpeg", fileLength: fsizedoc, height: 306, width: 366, jpegThumbnail: imagen1}}}
global.ftextt = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "6285736178354-1625305606@g.us" } : {})}, message: {  "extendedTextMessage": { "text":wm, "title": wm, 'jpegThumbnail': imagen1}}}
global.fliveLoc = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat  ? { remoteJid: "status@broadcast" } : {}) }, message: { "liveLocationMessage": { "caption":"By: " + global.wm2 ,"h": `${wm}`, 'jpegThumbnail': imagen1}}}
global.fliveLoc2 = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "status@broadcast" } : {}) }, message: { "liveLocationMessage": { "title": "wm","h": wm, 'jpegThumbnail': imagen1}}}
global.fliveLoc3 = { key: {participants: '0@s.whatsapp.net', 'fromMe': false, 'id': '3B64558B07848BD81108C1D14712018E'}, 'message': {'locationMessage': {'name': wm, 'jpegThumbnail': imagen1, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${wm},;;;\nFN:${wm},\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabell:Ponsel\nEND:VCARD`}}, 'participant': '0@s.whatsapp.net'}
global.fpoll = {key: { fromMe: false, participant: "0@s.whatsapp.net", remoteJid: "status@broadcast" }, message: { pollCreationMessage: { name: wm, selectableOptionsCount: 1}}}
global.fdocument = {key: { participant: "0@s.whatsapp.net"}, message: {documentMessage: {title: `${wm}\n   ${wm}`, jpegThumbnail: imagen1}}}
global.faketick = { key: { participant: "0@s.whatsapp.net", "remoteJid": "5493873687620-5493873452653@g.us", "fromMe": false, "id": "3B64558B07848BD81108C1D14712018E" }, "message": { "stickerMessage": { "fileSha256": "uZiOJzqOvrOo2WGjnMKgX2MMQMyasT+ZDgqUczpIBmY=", "thumbnail": icon, "mimetype": "image/webp", "height": 64, "width": 64, "directPath": "/v/t62.15575-24/56110107_763365384384977_5720135628188301198_n.enc?oh=450f8f684b06f0ba2dbc9779e5f06774&oe=605B81EE", "fileLength": "60206", "firstFrameLength": 3626, "isAnimated": false } }, "messageTimestamp": "1614070775", "status": "PENDING" }
global.fakeimg = { key: {participant: "0@s.whatsapp.net", ...(false ? { remoteJid: "5493873687620-5493873452653@g.us" } : {})}, message: { imageMessage: { title: `*${wm}*`, "h": `Hmm`, 'seconds': '99999', 'imagePlayback': 'true', 'caption': `${wm2}\n          ${wm}`, jpegThumbnail: imagen1 }}}
global.fakemsg = { key: { fromMe: false, participant: "0@s.whatsapp.net", ...(false ? { remoteJid: "5493873687620-5493873452653@g.us" } : {}) }, message: { extendedTextMessage: { text: `${wm}\n${wm}`, title: `${wm}`, jpegThumbnail: imagen1}}}
global.flocation = {key : {participant : "0@s.whatsapp.net" },message: {locationMessage: {name: `${wm}\n   ${wm}`,jpegThumbnail: imagen1}}}
global.estiloaudio = { key: {  fromMe: false, participant: "0@s.whatsapp.net", ...(false ? { remoteJid: "5493873687620-5493873452653@g.us" } : {}) }, message: { audioMessage: { mimetype: "audio/ogg; codecs=opus", seconds: "99569", ptt: "true" }}}	
global.fvideo = {key: { fromMe: false,participant: "0@s.whatsapp.net", ...(false ? { remoteJid: "5493873687620-5493873452653@g.us" } : {}) },message: { "videoMessage": { "title": `${wm}`, "h": `Hmm`, 'seconds': '2022', 'caption': `${wm}`, 'jpegThumbnail': imagen1}}}
global.fgclink = {key: {participant: "0@s.whatsapp.net", remoteJid: "0@s.whatsapp.net" }, message: { groupInviteMessage: { groupJid: "5493873687620-5493873452653@g.us", inviteCode: "m", groupName: "wmJs", caption: `${wm}\n      ${wm}`, jpegThumbnail: imagen1}}}
global.fproducto2 = { key: { fromMe: false, participant: "0@s.whatsapp.net", ...(false ? { remoteJid: "status@broadcast" } : {})}, message: { productMessage: { product: { productImage: { mimetype: "image/jpeg", jpegThumbnail: imagen1}, title: `${wm}`, retailerId: "GokuBot-MD", productImageCount: 1 }, businessOwnerJid: "0@s.whatsapp.net" }}}	
global.fproducto = { key: { fromMe: false, participant: "0@s.whatsapp.net", ...(false ? { remoteJid: "17608914335@s.whatsapp.net" } : {}) }, message: { productMessage: { product: { productImage:{ "mimetype": "image/jpeg", jpegThumbnail: imagen1 }, title: `${wm}`, description: "GokuBot-MD", currencyCode: "USD", priceAmount1000: "200000000", retailerId: "Ghost", productImageCount: 1 }, businessOwnerJid: "0@s.whatsapp.net" }}}
global.fakevoimg = { key: { fromMe: false, participant: "0@s.whatsapp.net", remoteJid: "status@broadcast" }, message: { imageMessage: { mimetype: 'image/jpeg', caption: wm, jpegThumbnail: imagen1, viewOnce: true }}}
global.fakevovid = { key: { fromMe: false, participant: '0@s.whatsapp.net', remoteJid: 'status@broadcast' }, message: { videoMessage: { mimetype: 'video/mp4', caption: wm, jpegThumbnail: imagen1, viewOnce: true }}}	
global.fpay = { key: { participant: "0@s.whatsapp.net", remoteJid: "5493873687620-5493873452653@g.us", fromMe: false, id: "3B64558B07848BD81108C1D14712018E" }, message: { requestPaymentMessage: { currencyCodeIso4217: "USD", amount1000: "100000", requestFrom: "19145948340@s.whatsapp.net", noteMessage: { extendedTextMessage: { text: wm }}, expiryTimestamp: "0", amount: { value: "100000", offset: 1000, currencyCode: "USD" }, background: { id: "BBB9307B17C17F928E57A7435E45033E", fileLength: "94896", width: 64, height: 64, mimetype: "image/webp", placeholderArgb: 4288282521, textArgb: 4278190080, subtextArgb: 4288282521}}}}
global.twa = {key: {participant: "0@s.whatsapp.net", remoteJid: "0@s.whatsapp.net"}, message: { groupInviteMessage: { groupJid: "5493873687620-5493873452653@g.us", inviteCode: "m", groupName: "P", caption: wm, jpegThumbnail: imagen1}}}
global.fakemek = {key: {participant: "0@s.whatsapp.net",remoteJid: "0@s.whatsapp.net"}, message: {groupInviteMessage: {groupJid: "5493873687620-5493873452653@g.us", inviteCode: "m",groupName: "P", caption: 'CuriosityBot-MD', jpegThumbnail: null}}}
global.fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
  
const estilo = { key: {  fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "5219992095479-1625305606@g.us" } : {}) }, message: { orderMessage: { itemCount : -999999, status: 1, surface : 1, message: 'Super Bot WhatsApp', orderTitle: 'Bang', thumbnail: gokuImgs, sellerJid: '0@s.whatsapp.net' }}}
const estiloaudio = { key: {  fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "5219992095479-1625305606@g.us" } : {}) }, message: { "audioMessage": { "mimetype":"audio/ogg; codecs=opus", "seconds": "99569", "ptt": "true"}}} 

let ftroli = { key: { remoteJid: 'status@broadcast', participant: '0@s.whatsapp.net' }, message: { orderMessage: { itemCount: 99, status: 1, surface: 1, message: wm, orderTitle: wm, sellerJid: '0@s.whatsapp.net' } } }
let fgif = {key: {participant : '0@s.whatsapp.net'}, message: {"videoMessage": { "title": wm, "h": `Hmm`, 'seconds': '999999999', 'gifPlayback': 'true', 'caption': bottime, 'thumbnailUrl': gokuMenus }}}                          
let enlace = { contextInfo: { externalAdReply: {title: wm, body: 'WhatsApp Bot' , sourceUrl: gokuAll, thumbnail: await(await fetch(gokuMenus)).buffer() }}}
let enlace2 = { contextInfo: { externalAdReply: { showAdAttribution: true, mediaUrl: yt, mediaType: 'VIDEO', description: '', title: wm, body: 'WhatsApp Bot', thumbnailUrl: gokuMenus, sourceUrl: gokuAll }}}
let dos = [enlace, enlace2]  

global.gokuAll = [ig, fb, canal, grupo1, yt, paypal, md, creador, telegram].getRandom()
global.gokuMenus = [gokuMenu1, gokuMenu2, gokuMenu3].getRandom()
global.gokuImgs = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10].getRandom()
global.gokuLinks = [canal, grupo1].getRandom()
global.gokuImagens = [imagen1, imagen2, imagen3, imagen4, imagen5].getRandom()

global.wait = "•𝅚𝅚𝅚𝅚═════════════•"
global.waitt = "•𝅚𝅚𝅚𝅚𝅚𝅚════════════•"
global.waittt = "•𝅚𝅚𝅚𝅚𝅚𝅚𝅚𝅚𝅚𝅚𝅚𝅚═════════•"
global.waitttt = "•𝅚𝅚𝅚𝅚𝅚𝅚𝅚𝅚𝅚𝅚𝅚𝅚𝅚𝅚𝅚𝅚𝅚𝅚𝅚𝅚𝅚𝅚════•"
global.waittttt = "•𝅚𝅚𝅚𝅚𝅚𝅚𝅚𝅚𝅚𝅚𝅚𝅚𝅚𝅚𝅚𝅚𝅚𝅚𝅚𝅚𝅚𝅚𝅚𝅚𝅚𝅚𝅚𝅚═•"

global.destraba = `⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞   ⏞`
  
}
export default handler

// Mensaje de espera
// await mensajesEditados(conn, m)
global.mensajesEditados = async function(conn, m) {
const mensajes = [waitt, waittt, waitttt, waittttt]
key = await conn.sendMessage(m.chat, { text: wait, quoted: m })
for (let i = 0; i < mensajes.length; i++) {
await new Promise(resolve => setTimeout(resolve, 1000))
await conn.sendMessage(m.chat, { text: mensajes[i], edit: key })
}}

function pickRandom(list) {
return list[Math.floor(Math.random() * list.length)]
  }	
