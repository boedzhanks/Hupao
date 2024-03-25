const fs = require('fs')
const chalk = require('chalk')

global.gr = 'https://wa.me/6283129109022?text=bang+aku+mau+donasi+i+love+yuuu'
global.ig = 'https://instagram/boedzhhttps://www.instagram.com/boedzhanks.store/' // ubah aja
global.ofc = 'https://chat.whatsapp.com/Lhw9jBIZnBDF7wkEcwyZ1D'
global.okta = 'https://www.facebook.com/boedzhanks.store'
global.gh = 'https://github.com/Boedzhanks'
global.saluran = 'https://whatsapp.com/channel/0029VaFfHadL2ATu3IAERZ2T'
global.email = 'hardiansyahramadhani084@gmail.com' //serah
global.region = 'indonesia' // serah
global.dana = '083807175250'
global.gopay = '083807175250'
global.pulsa = '083807175250'
//—————「 Set Nama Own & Bot 」—————//
global.ownername = 'Boedzhanks' //ubah jadi nama mu, note tanda ' gausah di hapus!
//=================================================//
global.owner = ['6283129109022'] // ubah aja pake nomor lu
global.premium = ['6283129109022']
//==========================BY Hw Mods=======================//
global.lolkey = 'a8e86232771f9bc1826742c1'
global.zenz = 'zenzkey_41b4fe7a5d' // https://api.zahwazein.xyz
global.keyopenai = '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'
//====================BY Hw Mods=============================//
global.botname = 'Hupao' //ubah jadi nama bot mu, note tanda ' gausah di hapus!
global.packname = 'Boedzhanks' // ubah aja ini nama sticker
global.ta = '•' //cuma simbol
global.author = '' // ubah aja ini nama sticker
global.prefa = ['','!','.',',','🐤','🗿']
global.sessionName = 'session' //Gausah Juga
global.sp = '⭔' // Gausah Juga
global.wlcm = []
global.wlcmm = []
global.anticall = true
//=================================================//


//imgnya disini
global.thum = fs.readFileSync("./base/image/thum.jpeg") 
global.good = fs.readFileSync("./base/image/good.jpeg") 
global.vidmenu = fs.readFileSync("./base/video/mainmenu.mp4")

global.mess = {
    done: 'Done Kak 😁',
    admin: 'Fitur ini buat _*Admin Group*_ loo',
    botAdmin: 'Perintah Ini Hanya Bisa Digunakan Ketika Bot Menjadi Admin Group !',
    owner: 'Fitur ini buat _*owner*_ loo',
    group: 'Fitur ini buat _*Group Chat*_ loo',
    private: 'Fitur ini buat _*Admin Group*_ loo',
    wait: 'Lu olang tunggu bentar loo',
    endLimit: 'Lu olang punya limit sudah abis, tunggu jam 12 malam untuk reset',
    error: '*Fitur Error!!!*',
    prem : 'Fitur ini buat _*Member Premium*_ loo'
}
//=================================================//
//Gausah Juga
global.limitawal = {
    premium: "Infinity",
    free: 100
}

//=================================================//
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})