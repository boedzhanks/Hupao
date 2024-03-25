/*
› Create By Haikal
› Base Ori Haikal

🌷 KALAU MAU RENAME TARO CREDITS GUA : HW MODS WA☆ */

require('./tao.js')
const { default: makeWASocket, useMultiFileAuthState, DisconnectReason, fetchLatestBaileysVersion, generateForwardMessageContent, prepareWAMessageMedia, generateWAMessageFromContent, generateMessageID, downloadContentFromMessage, makeInMemoryStore, jidDecode, getAggregateVotesInPollMessage, proto } = require("@whiskeysockets/baileys")
const fs = require('fs')
const pino = require('pino')
const chalk = require('chalk')
const path = require('path')
const readline = require("readline");
const CFonts = require('cfonts')
const spin = require('spinnies')
const axios = require('axios')
const FileType = require('file-type')
const yargs = require('yargs/yargs')
const _ = require('lodash')
const { Boom } = require('@hapi/boom')
const PhoneNumber = require('awesome-phonenumber')
const { color, bgcolor } = require('./lib/color')
let d = new Date
let locale = 'id'
let gmt = new Date(0).getTime() - new Date('1 Januari 2021').getTime()
let weton = ['Pahing', 'Pon','Wage','Kliwon','Legi'][Math.floor(((d * 1) + gmt) / 84600000) % 5]
let week = d.toLocaleDateString(locale, { weekday: 'long' })
const calender = d.toLocaleDateString("id", {
day: 'numeric',
month: 'long',
year: 'numeric'
})
let setting = JSON.parse(fs.readFileSync('./config.json'));

const usePairingCode = true
const { imageToWebp, videoToWebp, writeExifImg, writeExifVid } = require('./lib/exif')
const { smsg, isUrl, generateMessageTag, getBuffer, getSizeMedia, fetchJson, await, sleep } = require('./lib/myfunc')
const question = (text) => {
  const rl = readline.createInterface({
input: process.stdin,
output: process.stdout
  });
  return new Promise((resolve) => {
rl.question(text, resolve)
  })
};
/*const fkontak = { key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { 'contactMessage': { 'displayName': `Hupao By Boedzhanks`, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XLBoedzhanks;,;;;\nFN:${pushname},\nitem1.TEL;waid=${sender.split('@')[0]}:${sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`, 'jpegThumbnail': { url: 'https://telegra.ph/file/3c485ff201d9337be14ef.jpg' }}}}*/
//=================================================//
var low
try {
low = require('lowdb')
} catch (e) {
low = require('./lib/lowdb')}
//=================================================//
const { Low, JSONFile } = low
const mongoDB = require('./lib/mongoDB')
//=================================================//
//=================================================//
const store = makeInMemoryStore({ logger: pino().child({ level: 'silent', stream: 'store' }) })
//=================================================//
global.opts = new Object(yargs(process.argv.slice(2)).exitProcess(false).parse())
global.db = new Low(
/https?:\/\//.test(opts['db'] || '') ?
new cloudDBAdapter(opts['db']) : /mongodb/.test(opts['db']) ?
new mongoDB(opts['db']) :
new JSONFile(`./src/database.json`)
)
global.DATABASE = global.db // Backwards Compatibility
global.loadDatabase = async function loadDatabase() {
if (global.db.READ) return new Promise((resolve) => setInterval(function () { (!global.db.READ ? (clearInterval(this), resolve(global.db.data == null ? global.loadDatabase() : global.db.data)) : null) }, 1 * 1000))
if (global.db.data !== null) return
global.db.READ = true
await global.db.read()
global.db.READ = false
global.db.data = {
users: {},
chats: {},
game: {},
database: {},
settings: {},
setting: {},
others: {},
sticker: {},
...(global.db.data || {})}
  global.db.chain = _.chain(global.db.data)}
loadDatabase()
//=================================================//
const spinner = { 
  "interval": 120,
  "frames": [
"︵‿︵‿︵‿︵‿︵‿︵‿︵",
"‿︵‿︵‿︵‿︵‿︵‿︵‿",
"︵‿︵‿︵‿︵‿︵‿︵‿︵",
"‿︵‿︵‿︵‿︵‿︵‿︵‿",
"︵‿︵‿︵‿︵‿︵‿︵‿︵",
"‿︵‿︵‿︵‿︵‿︵‿︵‿",
"︵‿︵‿︵‿︵‿︵‿︵‿︵",
"‿︵‿︵‿︵‿︵‿︵‿︵‿",
"︵‿︵‿︵‿︵‿︵‿︵‿︵",
"‿︵‿︵‿︵‿︵‿︵‿︵‿",
"︵‿︵‿︵‿︵‿︵‿︵‿︵",
"‿︵‿︵‿︵‿︵‿︵‿︵‿",
"︵‿︵‿︵‿︵‿︵‿︵‿︵",
"‿︵‿︵‿︵‿︵‿︵‿︵‿",
"︵‿︵‿︵‿︵‿︵‿︵‿︵",
"‿︵‿︵‿︵‿︵‿︵‿︵‿"
  ]}
let globalSpinner;
const getGlobalSpinner = (disableSpins = false) => {
if(!globalSpinner) globalSpinner = new spin({ color: 'crimson', succeedColor: 'green', spinner, disableSpins});
return globalSpinner;
}
let spins = getGlobalSpinner(false)
const start = (id, text) => {
spins.add(id, {text: text})
}
const success = (id, text) => {
spins.succeed(id, {text: text})

}
//=================================================//
CFonts.say("SC BY BOEDZHANKS", {
   font: 'chrome',
  align: 'left',
  gradient: ['red', 'magenta'],
});
CFonts.say(
  "Sc Bot By Boedzhanks\nBase: Ori HwMods\nRecodeBy:Boedzhanks\nHwVersion:22\nRuning:Panel\n\n\nSc Ini Udah No Enc, Jangan Dijual!\n\n\n",
  {
    colors: ["system"],
    font: "console",
    align: "center",
  },
);
console.log(color(`INFO:`, "red"), color(`\n𖦹`, "yellow"), color(`Jika code tidak muncul enter 1-2x lagi`, "green"), color(`\n𖦹`, "yellow"), color(`Type nomor harus 62xxx bukan 08xxx\n`, "green"))
//=================================================//
async function connectToWhatsApp() {
const { state, saveCreds } = await useMultiFileAuthState(global.sessionName)
const tao = makeWASocket({
logger: pino({ level: "silent" }),
printQRInTerminal: !usePairingCode,
auth: state,
browser: ['Chrome (Linux)', '', '']
});
if(usePairingCode && !tao.authState.creds.registered) {
		const phoneNumber = await question(color('\n\n\nSilahkan masukin nomor Whatsapp Awali dengan 62:\n', 'magenta'));
		const code = await tao.requestPairingCode(phoneNumber.trim())
		console.log(color(`⚠︎ Kode Pairing Bot Whatsapp kamu :`,"gold"), color(`${code}`, "white"))

	}
//=================================================//
tao.decodeJid = (jid) => {
if (!jid) return jid
if (/:\d+@/gi.test(jid)) {
let decode = jidDecode(jid) || {}
return decode.user && decode.server && decode.user + '@' + decode.server || jid
} else return jid
}
//=================================================//
tao.ev.on('messages.upsert', async chatUpdate => {
try {
mek = chatUpdate.messages[0]
if (!mek.message) return
mek.message = (Object.keys(mek.message)[0] === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message
if (mek.key && mek.key.remoteJid === 'status@broadcast') return
if (!tao.public && !mek.key.fromMe && chatUpdate.type === 'notify') return
if (mek.key.id.startsWith('BAE5') && mek.key.id.length === 16) return
m = smsg(tao, mek, store)
require("./hupao.js")(tao, m, chatUpdate, store)
} catch (err) {
console.log(err)
}
})
/*
tao.ev.on('call', async (celled) => {
let botNumber = await tao.decodeJid(tao.user.id)
let koloi = global.anticall
if (!koloi) return
console.log(celled)
for (let kopel of celled) {
if (kopel.isGroup == false) {
if (kopel.status == "offer") {
let nomer = await tao.sendTextWithMentions(kopel.from, `*${tao.user.name}* tidak bisa menerima panggilan ${kopel.isVideo ? `video` : `suara`}. Maaf @${kopel.from.split('@')[0]} kamu akan diblokir. Silahkan hubungi Owner membuka blok !`)
tao.sendContact(kopel.from, owner.map( i => i.split("@")[0]), nomer)
await sleep(8000)
await tao.updateBlockStatus(kopel.from, "block")
}
}
}
})
*/
//=================================================//
    	/*tao.ev.on['group-participants.update']) {
      const anu = tao.ev.on['group-participants.update']
      if (global.db.data == null) await loadDatabase()
      console.log(anu)
      try {
        let metadata = await tao.groupMetadata(anu.id);
        let participants = anu.participants;
          for (let num of participants) {
          var bg = `https://telegra.ph/file/693937ad61381deec1b93.jpg`
          let ppuser2 = `https://telegra.ph/file/24fa902ead26340f3df2c.png`
          let nameUser = await tao.getName(num)
          let membr = metadata.participants.length 
          let wlc = `https://api.popcat.xyz/welcomecard?background=${bg}&text1=WELCOME&text2=+${nameUser}&text3=Member+${membr}&avatar=${ppuser2}`
          let lefts = `https://api.popcat.xyz/welcomecard?background=${bg}&text1=GOODBYE&text2=+${nameUser}&text3=Member+${membr}&avatar=${ppuser2}`
            if ( anu.action === 'add' ) {
              await tao.sendMessage(anu.id, { image: { url: wlc }, caption: `✧━━━━━[ *WELCOME* ]━━━━━✧\n\nHello @${num.split("@")[0]} Welcome To *${metadata.subject}*\n\nIkuti saluran Fauzidev di WhatsApp: https://whatsapp.com/channel/0029VaEP90i4o7qVT97zrM1J`, mentions: [num] })
            } else if ( anu.action === 'remove' ) {
              await tao.sendMessage(anu.id, { image: { url: lefts }, caption: `✧━━━━━[ *GOOD BYE* ]━━━━━✧\n\nGoodbye @${num.split("@")[0]} I Hope You Don't Come Back\n\nIkuti saluran Fauzidev di WhatsApp: https://whatsapp.com/channel/0029VaEP90i4o7qVT97zrM1J`, mentions: [num]}) 
            } else if ( anu.action === 'promote' ) {
              tao.sendMessage(anu.id, { mentions: [num], text: `@${num.split("@")[0]} Congratulations, Now you are a Group Admin` })
            } else if ( anu.action === 'demote' ) {
              tao.sendMessage(anu.id, { mentions: [num], text: `@${num.split("@")[0]} Hahaha You are in demote` })
            }
          }
      } catch (err) {
      console.log(`ERROR DIBAGIAN ` + err)
    }
        }*/
    tao.ev.on('group-participants.update', async (anu) => {
console.log(anu)
      try {
        let metadata = await tao.groupMetadata(anu.id);
        let participants = anu.participants;
          for (let num of participants) {
          var bg = `https://telegra.ph/file/693937ad61381deec1b93.jpg`
          let ppuser2 = `https://telegra.ph/file/24fa902ead26340f3df2c.png`
          let nameUser = await tao.getName(num)
          let membr = metadata.participants.length 
          let wlc = `https://api.popcat.xyz/welcomecard?background=${bg}&text1=WELCOME&text2=+${nameUser}&text3=Member+${membr}&avatar=${ppuser2}`
          let lefts = `https://api.popcat.xyz/welcomecard?background=${bg}&text1=GOODBYE&text2=+${nameUser}&text3=Member+${membr}&avatar=${ppuser2}`
            if ( anu.action === 'add' ) {
              await tao.sendMessage(anu.id, { image: { url: wlc }, caption: `✧━━━━━[ *WELCOME* ]━━━━━✧\n\nHello @${num.split("@")[0]} Welcome To *${metadata.subject}*`, mentions: [num] })
            } else if ( anu.action === 'remove' ) {
              await tao.sendMessage(anu.id, { image: { url: lefts }, caption: `✧━━━━━[ *GOOD BYE* ]━━━━━✧\n\nGoodbye @${num.split("@")[0]} I Hope You Don't Come Back`, mentions: [num]}) 
            } else if ( anu.action === 'promote' ) {
              tao.sendMessage(anu.id, { mentions: [num], text: `@${num.split("@")[0]} Congratulations, Now you are a Group Admin` })
            } else if ( anu.action === 'demote' ) {
              tao.sendMessage(anu.id, { mentions: [num], text: `@${num.split("@")[0]} Hahaha You are in demote` })
            }
          }
      } catch (err) {
      console.log(`ERROR DIBAGIAN ` + err)
    }
    })
  /*  tao.ev.on('group-participants.update', async (anu) => {
console.log(anu)
try {
let metadata = await tao.groupMetadata(anu.id)
let participants = anu.participants
let nameUser = await tao.getName(anu.id)
const groupName = metadata.subject
const groupDesc = metadata.desc
let mem = metadata.participants.length
for (let num of participants) {
try {
ppuser = await tao.profilePictureUrl(anu.id, 'image')
} catch {
ppuser = 'https://tinyurl.com/yx93l6da'
}
try {
ppgroup = await tao.profilePictureUrl(anu.id, 'image')
} catch {
ppgroup = 'https://tinyurl.com/yx93l6da'
}
if (anu.action == 'add') {
let wel = `Hii @${num.split("@")[0]},\nWelcome To ${groupName}`
tao.sendMessage(anu.id, {
                    document: fs.readFileSync('./basetao/media/doc.pdf'), 
                    jpegThumbnail: fs.readFileSync('./basetao/image/okta.jpg'),
                    mimetype: 'application/pdf',
                    fileLength: 99999,
                    pageCount: '100',
                    fileName: `${ownername}`,
                    caption: wel,
                    contextInfo: {
                        externalAdReply: {
                            showAdAttribution: true,
                            title: `© Welcome Message`,
                            body: `${botname}`,
                            thumbnailUrl: 'https://telegra.ph/file/fecf53c0b70fd1018bf3e.jpg',
                            sourceUrl: 'https://whatsapp.com/channel/0029VaF1TzwJf05gzljsO43l',
                            mediaType: 1,
                            renderLargerThumbnail: true
                    }}})
} else if (anu.action == 'remove') {
let txtLeft = `GoodBye @${num.split("@")[0]} 👋\nLeaving From ${groupName}`
tao.sendMessage(anu.id, {
                    document: fs.readFileSync('./basetao/media/doc.pdf'), 
                    jpegThumbnail: fs.readFileSync('./basetao/image/okta.jpg'),
                    mimetype: 'application/pdf',
                    fileLength: 99999,
                    pageCount: '100',
                    fileName: `${ownername}`,
                    caption: txtLeft,
                    contextInfo: {
                        externalAdReply: {
                            showAdAttribution: true,
                            title: `© GoodBye Message`,
                            body: `${botname}`,
                            thumbnailUrl: 'https://telegra.ph/file/fecf53c0b70fd1018bf3e.jpg',
                            sourceUrl: 'https://whatsapp.com/channel/0029VaF1TzwJf05gzljsO43l',
                            mediaType: 1,
                            renderLargerThumbnail: true
                    }}})
} else if (anu.action == 'promote') {
let a = `Congratulations @${num.split("@")[0]}, on being promoted to admin of this group ${metadata.subject} 🎉`
tao.sendMessage(anu.id, {
                    document: fs.readFileSync('./basetao/media/doc.pdf'), 
                    jpegThumbnail: fs.readFileSync('./basetao/media/okta.jpg'),
                    mimetype: 'application/pdf',
                    fileLength: 99999,
                    pageCount: '100',
                    fileName: `${ownername}`,
                    caption: a,
                    contextInfo: {
                        externalAdReply: {
                            showAdAttribution: true,
                            title: `Promoted In ${groupName}`,
                            body: `${botname}`,
                            thumbnailUrl: 'https://telegra.ph/file/fecf53c0b70fd1018bf3e.jpg',
                            sourceUrl: 'https://whatsapp.com/channel/0029VaF1TzwJf05gzljsO43l',
                            mediaType: 1,
                            renderLargerThumbnail: true
                    }}})
} else if (anu.action == 'demote') {
let a = `Congratulations @${num.split("@")[0]}, on being promoted to admin of this group ${metadata.subject} 🎉`
tao.sendMessage(anu.id, {
                    document: fs.readFileSync('./basetao/media/doc.pdf'), 
                    jpegThumbnail: fs.readFileSync('./basetao/image/okta.jpg'),
                    mimetype: 'application/pdf',
                    fileLength: 99999,
                    pageCount: '100',
                    fileName: `${ownername}`,
                    caption: a,
                    contextInfo: {
                        externalAdReply: {
                            showAdAttribution: true,
                            title: `Demoted In ${groupName}`,
                            body: `${botname}`,
                            thumbnailUrl: 'https://telegra.ph/file/fecf53c0b70fd1018bf3e.jpg',
                            sourceUrl: 'https://whatsapp.com/channel/0029VaF1TzwJf05gzljsO43l',
                            mediaType: 1,
                            renderLargerThumbnail: true
                    }}})
}
}
} catch (err) {
console.log("Eror Di Bagian Welcome Group "+err)
}
})*/
    /*tao.ev.on('group-participants.update', async (anu) => {
const { welcome } = require ('./lib/welcome')
const iswel = _welcome.includes(anu.id)
const isLeft = _left.includes(anu.id)
welcome(iswel, isLeft, juna, anu)
})*/
//=================================================//
tao.ev.on('contacts.update', update => {
for (let contact of update) {
let id = tao.decodeJid(contact.id)
if (store && store.contacts) store.contacts[id] = { id, name: contact.notify }}})
//=================================================//
tao.getName = (jid, withoutContact  = false) => {
id = tao.decodeJid(jid)
withoutContact = tao.withoutContact || withoutContact 
let v
if (id.endsWith("@g.us")) return new Promise(async (resolve) => {
v = store.contacts[id] || {}
if (!(v.name || v.subject)) v = tao.groupMetadata(id) || {}
resolve(v.name || v.subject || PhoneNumber('+' + id.replace('@s.whatsapp.net', '')).getNumber('international'))
})
else v = id === '0@s.whatsapp.net' ? {
id,
name: 'WhatsApp'
} : id === tao.decodeJid(tao.user.id) ?
tao.user :
(store.contacts[id] || {})
return (withoutContact ? '' : v.name) || v.subject || v.verifiedName || PhoneNumber('+' + jid.replace('@s.whatsapp.net', '')).getNumber('international')}
//=================================================//
tao.sendContact = async (jid, kon, quoted = '', opts = {}) => {
let list = []
for (let i of kon) {
list.push({
displayName: await tao.getName(i + '@s.whatsapp.net'),
vcard: `BEGIN:VCARD\nVERSION:3.0\nN:${await tao.getName(i + '@s.whatsapp.net')}\nFN:${await tao.getName(i + '@s.whatsapp.net')}\nitem1.TEL;waid=${i}:${i}\nitem1.X-ABLabel:Ponsel\nitem2.EMAIL;type=INTERNET:hardiansyahramadhani084@gmail.com\nitem2.X-ABLabel:Email\nitem3.URL:https://www.facebook.com/boedzhanks.store\nitem3.X-ABLabel:Instagram\nitem4.ADR:;;Indonesia;;;;\nitem4.X-ABLabel:Region\nEND:VCARD`})}
//=================================================//
tao.sendMessage(jid, { contacts: { displayName: `${list.length} Kontak`, contacts: list }, ...opts }, { quoted })}
//=================================================//
//Kalau Mau Self Lu Buat Jadi false
tao.public = true
//=================================================//
//=================================================//
tao.ev.on('creds.update', saveCreds)
 //=================================================//
 tao.downloadMediaMessage = async (message) => {
let mime = (message.msg || message).mimetype || ''
let messageType = message.mtype ? message.mtype.replace(/Message/gi, '') : mime.split('/')[0]
const stream = await downloadContentFromMessage(message, messageType)
let buffer = Buffer.from([])
for await(const chunk of stream) {
buffer = Buffer.concat([buffer, chunk])}
return buffer} 
 //=================================================//
 tao.sendImage = async (jid, path, caption = '', quoted = '', options) => {
let buffer = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
return await tao.sendMessage(jid, { image: buffer, caption: caption, ...options }, { quoted })}
//=================================================//
tao.sendText = (jid, text, quoted = '', options) => tao.sendMessage(jid, { text: text, ...options }, { quoted })
//=================================================//
tao.sendTextWithMentions = async (jid, text, quoted, options = {}) => tao.sendMessage(jid, { text: text, contextInfo: { mentionedJid: [...text.matchAll(/@(\d{0,16})/g)].map(v => v[1] + '@s.whatsapp.net') }, ...options }, { quoted })
 //=================================================//
tao.sendImageAsSticker = async (jid, path, quoted, options = {}) => {
let buff = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
let buffer
if (options && (options.packname || options.author)) {
buffer = await writeExifImg(buff, options)
} else {
buffer = await imageToWebp(buff)}
await tao.sendMessage(jid, { sticker: { url: buffer }, ...options }, { quoted })
return buffer}
 //=================================================//
tao.sendVideoAsSticker = async (jid, path, quoted, options = {}) => {
let buff = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
let buffer
if (options && (options.packname || options.author)) {
buffer = await writeExifVid(buff, options)
} else {
buffer = await videoToWebp(buff)}
await tao.sendMessage(jid, { sticker: { url: buffer }, ...options }, { quoted })
return buffer}
 //=================================================//
 tao.downloadAndSaveMediaMessage = async (message, filename, attachExtension = true) => {
let quoted = message.msg ? message.msg : message
let mime = (message.msg || message).mimetype || ''
let messageType = message.mtype ? message.mtype.replace(/Message/gi, '') : mime.split('/')[0]
const stream = await downloadContentFromMessage(quoted, messageType)
let buffer = Buffer.from([])
for await(const chunk of stream) {
buffer = Buffer.concat([buffer, chunk])}
let type = await FileType.fromBuffer(buffer)
trueFileName = attachExtension ? (filename + '.' + type.ext) : filename
// save to file
await fs.writeFileSync(trueFileName, buffer)
return trueFileName}
//=================================================
 tao.cMod = (jid, copy, text = '', sender = tao.user.id, options = {}) => {
//let copy = message.toJSON()
let mtype = Object.keys(copy.message)[0]
let isEphemeral = mtype === 'ephemeralMessage'
if (isEphemeral) {
mtype = Object.keys(copy.message.ephemeralMessage.message)[0]}
let msg = isEphemeral ? copy.message.ephemeralMessage.message : copy.message
let content = msg[mtype]
if (typeof content === 'string') msg[mtype] = text || content
else if (content.caption) content.caption = text || content.caption
else if (content.text) content.text = text || content.text
if (typeof content !== 'string') msg[mtype] = {
...content,
...options}
if (copy.key.participant) sender = copy.key.participant = sender || copy.key.participant
else if (copy.key.participant) sender = copy.key.participant = sender || copy.key.participant
if (copy.key.remoteJid.includes('@s.whatsapp.net')) sender = sender || copy.key.remoteJid
else if (copy.key.remoteJid.includes('@broadcast')) sender = sender || copy.key.remoteJid
copy.key.remoteJid = jid
copy.key.fromMe = sender === tao.user.id
return proto.WebMessageInfo.fromObject(copy)}
tao.sendFile = async(jid, PATH, fileName, quoted = {}, options = {}) => {
let types = await tao.getFile(PATH, true)
let { filename, size, ext, mime, data } = types
let type = '', mimetype = mime, pathFile = filename
if (options.asDocument) type = 'document'
if (options.asSticker || /webp/.test(mime)) {
let { writeExif } = require('./lib/sticker.js')
let media = { mimetype: mime, data }
pathFile = await writeExif(media, { packname: global.packname, author: global.packname2, categories: options.categories ? options.categories : [] })
await fs.promises.unlink(filename)
type = 'sticker'
mimetype = 'image/webp'}
else if (/image/.test(mime)) type = 'image'
else if (/video/.test(mime)) type = 'video'
else if (/audio/.test(mime)) type = 'audio'
else type = 'document'
await tao.sendMessage(jid, { [type]: { url: pathFile }, mimetype, fileName, ...options }, { quoted, ...options })
return fs.promises.unlink(pathFile)}
tao.parseMention = async(text) => {
return [...text.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net')}
//=================================================//
tao.copyNForward = async (jid, message, forceForward = false, options = {}) => {
let vtype
if (options.readViewOnce) {
message.message = message.message && message.message.ephemeralMessage && message.message.ephemeralMessage.message ? message.message.ephemeralMessage.message : (message.message || undefined)
vtype = Object.keys(message.message.viewOnceMessage.message)[0]
delete(message.message && message.message.ignore ? message.message.ignore : (message.message || undefined))
delete message.message.viewOnceMessage.message[vtype].viewOnce
message.message = {
...message.message.viewOnceMessage.message}}
let mtype = Object.keys(message.message)[0]
let content = await generateForwardMessageContent(message, forceForward)
let ctype = Object.keys(content)[0]
let context = {}
if (mtype != "conversation") context = message.message[mtype].contextInfo
content[ctype].contextInfo = {
...context,
...content[ctype].contextInfo}
const waMessage = await generateWAMessageFromContent(jid, content, options ? {
...content[ctype],
...options,
...(options.contextInfo ? {
contextInfo: {
...content[ctype].contextInfo,
...options.contextInfo}} : {})} : {})
await tao.relayMessage(jid, waMessage.message, { messageId:  waMessage.key.id })
return waMessage}
//=================================================//
tao.getFile = async (PATH, save) => {
let res
let data = Buffer.isBuffer(PATH) ? PATH : /^data:.*?\/.*?;base64,/i.test(PATH) ? Buffer.from(PATH.split`,`[1], 'base64') : /^https?:\/\//.test(PATH) ? await (res = await getBuffer(PATH)) : fs.existsSync(PATH) ? (filename = PATH, fs.readFileSync(PATH)) : typeof PATH === 'string' ? PATH : Buffer.alloc(0)
//if (!Buffer.isBuffer(data)) throw new TypeError('Result is not a buffer')
let type = await FileType.fromBuffer(data) || {
mime: 'application/octet-stream',
ext: '.bin'
}
filename = path.join(__filename, '../src/' + new Date * 1 + '.' + type.ext)
if (data && save) fs.promises.writeFile(filename, data)
return {
res,
filename,
	size: await getSizeMedia(data),
...type,
data
}
}
tao.serializeM = (m) => smsg(tao, m, store)
tao.ev.on("connection.update", async (update) => {
const { connection, lastDisconnect } = update;
if (connection === "close") {
  let reason = new Boom(lastDisconnect?.error)?.output.statusCode;
  if (reason === DisconnectReason.badSession) {
console.log(`Bad Session File, Please Delete Session and Scan Again`);
process.exit();
  } else if (reason === DisconnectReason.connectionClosed) {
console.log("Connection closed, reconnecting....");
connectToWhatsApp();
  } else if (reason === DisconnectReason.connectionLost) {
console.log("Connection Lost from Server, reconnecting...");
connectToWhatsApp();
  } else if (reason === DisconnectReason.connectionReplaced) {
console.log("Connection Replaced, Another New Session Opened, Please Restart Bot");
process.exit();
  } else if (reason === DisconnectReason.loggedOut) {
console.log(`Device Logged Out, Please Delete Folder Session yusril and Scan Again.`);
process.exit();
  } else if (reason === DisconnectReason.restartRequired) {
console.log("Restart Required, Restarting...");
connectToWhatsApp();
  } else if (reason === DisconnectReason.timedOut) {
console.log("Connection TimedOut, Reconnecting...");
connectToWhatsApp();
  } else {
console.log(`Unknown DisconnectReason: ${reason}|${connection}`);
connectToWhatsApp();
  }
} else if (connection === 'connecting') {
//console.log(`${color(`[`,`white`)+color(`1`,`red`)+color(`]`,`white`)}`,`WA v${version.join('.')}`)
//await sleep(400) 
console.log(`${color(`[`,`white`)+color(`2`,`red`)+color(`]`,`white`)}`,`${calender}`)
//await sleep(400) 
console.log(`${color(`[`,`white`)+color(`3`,`red`)+color(`]`,`white`)}`,`Base Sc:HW`)
//await sleep(400)  
console.log(`${color(`[`,`white`)+color(`4`,`red`)+color(`]`,`white`)}`,"date 5") 
//await sleep(400)  
console.log(color(`─[`,`magenta`),`「`,  color(`Boedzhanks`,`red`), `」`,  color(`]─`,`magenta`))
//await sleep(400)  
start(`1`,`Connecting...`)
} else if (connection === "open") {
  tao.sendMessage('6283129109022' + "@s.whatsapp.net", { text: `*Hupao Bot*
  Telah Terhubung!!, Ketik .Menu untuk menampilkan command!` });
  success(`1`,`[■■■■■■■■■■■■■■■] Connected`) 
}
// console.log('Connected...', update)
});
return tao
}
connectToWhatsApp()
let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update ${__filename}`))
delete require.cache[file]
require(file)
})
