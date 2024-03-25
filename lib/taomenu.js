const chalk = require('chalk')
const fs = require('fs')

global.menu = `
Nama saya *Hupao Bot*

 *✎ Owner : Boedzhanks*
 
Jika ada masalah, hubungi *.Owner*

┌ ◦ Menampilkan Semua Fitur: *.allmenu*
└ ◦ Menampilkan Menu Simpel: *simpel*

copyright *©Boedzhanks* and all rights reserved`

global.simpel = `
┏❏═┅═━–〈 Menu Simpel
┆
┆☂︎ *.allmenu*
┆☂︎ *.tools*
┆☂︎ *.gamemenu*
┆☂︎ *.groupmenu*
┆☂︎ *.animemenu*
┆☂︎ *.funmenu*
┆☂︎ *.ownermenu*
┆☂︎ *.addmenu*
┆☂︎ *.randommenu*
┆☂︎ *.textmaker*
┗─────────────────⬣`

global.taall = `
∘₊✧──────『𝗔𝗹𝗹 𝗠𝗲𝗻𝘂』──────

┌  ◦ *𝗜𝗻𝗳𝗼 𝗠𝗲𝗻𝘂*
│  ◦ sc
│  ◦ tqto
│  ◦ donasi
│  ◦ owner
│  ◦ bot
│  ◦ sosmed
│  ◦ panel
│  ◦ daftar
┗─────────────────⬣  
┌  ◦ *𝗧𝗼𝗼𝗹𝘀*
│  ◦  igstalk
│  ◦  ig (linknya)
│  ◦  fbdl (linknya)
│  ◦  twitvideo (linknya)
│  ◦  tiktok (belum work)
│  ◦  tiktokaudio (belum work)
│  ◦  ytmp3 (linknya)
│  ◦  ytmp4 (linknya)
│  ◦  ytsearch (linknya)
│  ◦  play (query)
│  ◦  githubclone
│  ◦  tomp4 (belum work)
│  ◦  tomp3
│  ◦  tovn
│  ◦  togif (belum work)
│  ◦  tourl
│  ◦  smeme
│  ◦  tiktokstalk
│  ◦  ffstalk
│  ◦  hd
│  ◦  myip
│  ◦  menfes
│  ◦  createqr
│  ◦  sticker
│  ◦  kalkulator
┗─────────────────⬣  
┌  ◦ *𝗥𝗮𝗻𝗱𝗼𝗺 𝗠𝗲𝗻𝘂*
│  ◦  nope
│  ◦  tutorial
│  ◦  wm
│  ◦  jodoh
│  ◦  wmvideo
│  ◦  emojimix
│  ◦  emojimix2
│  ◦  attp (textnya)
│  ◦  ttp (textnya)
│  ◦  afk (textnya)
│  ◦  gambar (textnya)
│  ◦  quotesanime
│  ◦  faktaunik
│  ◦  katabijak
│  ◦  pantun
│  ◦  bucin
│  ◦  quotes
│  ◦  darkjokes
│  ◦  google
│  ◦  couple
│  ◦  coffe
│  ◦  getname
│  ◦  getpic
│  ◦  setppgroup
│  ◦  lirik
│  ◦  cerpen
│  ◦  qcimg
│  ◦  ceritahoror
│  ◦  cuaca
┗─────────────────⬣  
┌  ◦ *ᴀᴅᴠᴀɴᴄᴇᴅ*
│  ◦ >
│  ◦ =>
│  ◦ $
┗─────────────────⬣  
┌  ◦ *Anime Menu*
│  ◦  waifu
│  ◦  waifu2
│  ◦  neko
│  ◦  loli
│  ◦  kill
│  ◦  pat
│  ◦  lick
│  ◦  bite
│  ◦  yeet
│  ◦  bonk
│  ◦  wink
│  ◦  poke
│  ◦  nom
│  ◦  slap
│  ◦  smile
│  ◦  wave
│  ◦  blush
│  ◦  smug
│  ◦  glomp
│  ◦  happy
│  ◦  dance
│  ◦  cringe
│  ◦  highfive
│  ◦  handhold
┗─────────────────⬣  
┌  ◦ *𝗚𝗿𝗼𝘂𝗽 𝗠𝗲𝗻𝘂*
│  ◦. welcome on / off
│  ◦. antilink on / off
│  ◦. antitoxic on / off
│  ◦. pushkontak (textnya)
│  ◦. pushcontid (id group)
│  ◦. bcgc (textnya)
│  ◦. hidetag (textnya)
│  ◦. kick (628xx)
│  ◦. add (628xx)
│  ◦. promote (628xx)
│  ◦. demote (628xx)
│  ◦. sendlinkgc (628xx)
│  ◦. editgroup close / open
│  ◦. editinfo on / off
│  ◦. join (linknya)
│  ◦. editsubjek (textnya)
│  ◦. editdesk (textnya)
│  ◦. tagall (textnya)
│  ◦. inspect (linknya)
│  ◦. linkgroup
│  ◦. resetlinkgc
│  ◦. promoteall
│  ◦. demoteall
│  ◦. larangan
│  ◦. buatsw
│  ◦. buatswimage
│  ◦. buatswvideo
│  ◦. swin
│  ◦. vnsw
│  ◦. buatswptv
│  ◦. toptv
│  ◦. buatsws
┗─────────────────⬣  
┌  ◦ *𝗠𝗲𝗻𝘂 𝗚𝗮𝗺𝗲*
│  ◦.ᴛᴛᴄ
│  ◦.ᴅᴇʟᴛᴄ
│  ◦.ꜱᴜɪᴛᴘᴠᴘ
│  ◦.ᴛᴇʙᴀᴋ ᴋᴀᴛᴀ
│  ◦.ᴛᴇʙᴀᴋ ɢᴀᴍʙᴀʀ
│  ◦.ᴛᴇʙᴀᴋ ʟɪʀɪᴋ
│  ◦.ᴛᴇʙᴀᴋ ᴋᴀʟɪᴍᴀᴛ
│  ◦.ᴛᴇʙᴀᴋ ʟᴀɢᴜ
│  ◦.ᴛᴇʙᴀᴋ ʟᴏɴᴛᴏɴɢ
│  ◦.ꜰᴀᴍɪʟʏ100
│  ◦.ᴋᴜɪꜱᴍᴀᴛʜ ɴᴏᴏʙ
│  ◦.ᴋᴜɪꜱᴍᴀᴛʜ ᴇᴀꜱʏ
│  ◦.ᴋᴜɪꜱᴍᴀᴛʜ ᴍᴇᴅɪᴜᴍ
│  ◦.ᴋᴜɪꜱᴍᴀᴛʜ ʜᴀʀᴅ
│  ◦.ᴋᴜɪꜱᴍᴀᴛʜ ᴇxᴛʀᴇᴍᴇ
│  ◦.ᴋᴜɪꜱᴍᴀᴛʜ ɪᴍᴘᴏꜱꜱɪʙʟᴇ
│  ◦.ᴋᴜɪꜱᴍᴀᴛʜ ɪᴍᴘᴏꜱꜱɪʙʟᴇ2
┗─────────────────⬣    
┌  ◦ *𝗠𝗲𝗻𝘂 𝗢𝘄𝗻𝗲𝗿*
│  ◦. setppbot
│  ◦. addprem (628xx)
│  ◦. delprem (628xx)
│  ◦. listprem
│  ◦. pengguna add (628xx)
│  ◦. pengguna del (628xx)
│  ◦. listban
│  ◦. hapusdb (628xx@s.whatsapp.net)
│  ◦. listdb
│  ◦. block
│  ◦. pppanjang
│  ◦. unblock
┗─────────────────⬣  
┌  ◦ *𝗙𝘂𝗻 𝗠𝗲𝗻𝘂*
│  ◦.ᴀʀᴛɪɴᴀᴍᴀ (ᴛᴇxᴛɴʏᴀ)
│  ◦.ᴀʀᴛɪᴍɪᴍᴘɪ (ᴛᴇxᴛɴʏᴀ)
│  ◦.ᴋᴇᴄᴏᴄᴏᴋᴀɴᴘᴀꜱᴀɴɢᴀɴ (ᴛᴇxᴛɴʏᴀ)
│  ◦.ᴋᴇᴄᴏᴄᴏᴋᴀɴɴᴀᴍᴀ (ᴛᴇxᴛɴʏᴀ)
│  ◦.ᴊᴀᴅɪᴀɴᴘᴇʀɴɪᴋᴀʜᴀɴ (ᴛᴇxᴛɴʏᴀ)
│  ◦.ʀᴇᴊᴇᴋɪ (ᴛᴇxᴛɴʏᴀ)
│  ◦.ꜱɪꜰᴀᴛᴜꜱᴀʜᴀ (ᴛᴇxᴛɴʏᴀ)
│  ◦.ᴘᴇᴋᴇʀᴊᴀᴀɴ (ᴛᴇxᴛɴʏᴀ)
│  ◦.ᴀʀᴛɪᴛᴀʀᴏᴛ (ᴛᴇxᴛɴʏᴀ)
│  ◦.ᴘᴏᴛᴇɴꜱɪᴘᴇɴʏᴀᴋɪᴛ (ᴛᴇxᴛɴʏᴀ)
│  ◦.ʀᴀᴍᴀʟᴀɴɴᴀꜱɪʙ (ᴛᴇxᴛɴʏᴀ)
│  ◦.ʜᴀʀɪꜱᴀɴɢᴀʀ (ᴛᴇxᴛɴʏᴀ)
│  ◦.ʜᴀʀɪʙᴀɪᴋ (ᴛᴇxᴛɴʏᴀ)
│  ◦.ꜰᴇɴɢꜱʜᴜɪ (ᴛᴇxᴛɴʏᴀ)
│  ◦.ɴᴀɢᴀʜᴀʀɪ (ᴛᴇxᴛɴʏᴀ)
│  ◦.ʜᴀʀɪɴᴀᴀꜱ (ᴛᴇxᴛɴʏᴀ)
│  ◦.ᴡᴇᴛᴏɴ (ᴛᴇxᴛɴʏᴀ)
│  ◦.ᴘᴇʀᴜɴᴛᴜɴɢᴀɴ (ᴛᴇxᴛɴʏᴀ)
│  ◦.ᴀʀᴀʜʀᴇᴊᴇᴋɪ (ᴛᴇxᴛɴʏᴀ)
│  ◦.ꜱɪꜰᴀᴛ (ᴛᴇxᴛɴʏᴀ)
│  ◦.ᴋᴇʙᴇʀᴜɴᴛᴜɴɢᴀɴ (ᴛᴇxᴛɴʏᴀ)
│  ◦.ᴍᴇᴍᴀɴᴄɪɴɢ (ᴛᴇxᴛɴʏᴀ)
│  ◦.ᴍᴀꜱᴀꜱᴜʙᴜʀ (ᴛᴇxᴛɴʏᴀ)
│  ◦.ᴢᴏᴅɪᴀᴋ (ᴛᴇxᴛɴʏᴀ)
│  ◦.ꜱʜɪᴏ (ᴛᴇxᴛɴʏᴀ)
┗─────────────────⬣   
┌  ◦ *𝗔𝗱𝗱 𝗠𝗲𝗻𝘂*
│  ◦  setcmd
│  ◦  delcmd
│  ◦  listcmd
│  ◦  setppbot
│  ◦  addpdf
│  ◦  delpdf
│  ◦  listpdf
│  ◦  yopdf
│  ◦  sendpdf
│  ◦  addzip
│  ◦  delzip
│  ◦  listzip
│  ◦  yozip
│  ◦  sendzip
│  ◦  addapk
│  ◦  delapk
│  ◦  listapk
│  ◦  yoapk
│  ◦  sendapk
│  ◦  addvn
│  ◦  delvn
│  ◦  listvn
│  ◦  addmsg
│  ◦  sendlist
│  ◦  listmsg
│  ◦  delmsg
│  ◦  getmsg
┗─────────────────⬣
┌  ◦ *𝗧𝗲𝘅𝘁 𝗠𝗮𝗸𝗲𝗿*
│  ◦. blackpink
│  ◦. rainbow2
│  ◦. water_pipe
│  ◦. halloween
│  ◦. sketch
│  ◦. sircuit
│  ◦. discovery
│  ◦. metallic2
│  ◦. fiction
│  ◦. demon
│  ◦. transformer
│  ◦. berry
│  ◦. thunder
│  ◦. magma
│  ◦. 3dstone
│  ◦. neon
│  ◦. glitch
│  ◦. harry_potter
│  ◦. embossed
│  ◦. broken
│  ◦. papercut
│  ◦. gradient
│  ◦. glossy
│  ◦. watercolor
│  ◦. multicolor
│  ◦. neon_devil
│  ◦. underwater
│  ◦. bear
│  ◦. wonderfulg
│  ◦. christmas
│  ◦. neon_light
│  ◦. snow
│  ◦. cloudsky
│  ◦. luxury2
│  ◦. gradient2
│  ◦. summer
│  ◦. writing
│  ◦. engraved
│  ◦. summery
│  ◦. 3dglue
│  ◦. metaldark
│  ◦. neonlight
│  ◦. oscar
│  ◦. minion
│  ◦. holographic
│  ◦. purple
│  ◦. glossyb
│  ◦. deluxe2
│  ◦. glossyc
│  ◦. fabric
│  ◦. neonc
│  ◦. newyear
│  ◦. newyear2
│  ◦. metals
│  ◦. xmas
│  ◦. blood
│  ◦. darkg
│  ◦. joker
│  ◦. wicker
│  ◦. natural
│  ◦. firework
│  ◦. skeleton
│  ◦. balloon
│  ◦. balloon2
│  ◦. balloon3
│  ◦. balloon4
│  ◦. balloon5
│  ◦. balloon6
│  ◦. balloon7
│  ◦. steel
│  ◦. gloss
│  ◦. denim
│  ◦. decorate
│  ◦. decorate2
│  ◦. peridot
│  ◦. rock
│  ◦. glass
│  ◦. glass2
│  ◦. glass3
│  ◦. glass4
│  ◦. captain_as2
│  ◦. robot
│  ◦. equalizer
│  ◦. toxic
│  ◦. sparkling
│  ◦. sparkling2
│  ◦. sparkling3
│  ◦. decorative
│  ◦. chocolate
│  ◦. strawberry
│  ◦. koifish
│  ◦. bread
│  ◦. matrix
│  ◦. blood2
│  ◦. neonligth2
│  ◦. thunder2
│  ◦. 3dbox
│  ◦. neon2
│  ◦. roadw
│  ◦. bokeh
│  ◦. gneon
│  ◦. advanced
│  ◦. dropwater
│  ◦. wall
│  ◦. chrismast
│  ◦. honey
│  ◦. drug
│  ◦. marble
│  ◦. marble2
│  ◦. ice
│  ◦. juice
│  ◦. rusty
│  ◦. abstra
│  ◦. biscuit
│  ◦. wood
│  ◦. scifi
│  ◦. metalr
│  ◦. purpleg
│  ◦. shiny
│  ◦. jewelry
│  ◦. jewelry2
│  ◦. metalh
│  ◦. golden
│  ◦. glitter
│  ◦. metale
│  ◦. carbon
│  ◦. candy
│  ◦. metalb
│  ◦. gemb
│  ◦. 3dchrome
│  ◦. metalb2
│  ◦. metalg
┗─────────────────⬣`

global.nsfw = ` `
global.ownermenu = `
┌  ◦ *𝗠𝗲𝗻𝘂 𝗢𝘄𝗻𝗲𝗿*
│  ◦. setppbot
│  ◦. pppanjang
│  ◦. addprem (628xx)
│  ◦. delprem (628xx)
│  ◦. listprem
│  ◦. pengguna add (628xx)
│  ◦. pengguna del (628xx)
│  ◦. listban
│  ◦. hapusdb (628xx@s.whatsapp.net)
│  ◦. listdb
│  ◦. block
│  ◦. unblock
│  ◦. >
│  ◦. =>
│  ◦. $
└ `

global.animemenu = `
┌  ◦ *Anime Menu*
│  ◦  waifu
│  ◦  waifu2
│  ◦  neko
│  ◦  loli
│  ◦  kill
│  ◦  pat
│  ◦  lick
│  ◦  bite
│  ◦  yeet
│  ◦  bonk
│  ◦  wink
│  ◦  poke
│  ◦  nom
│  ◦  slap
│  ◦  smile
│  ◦  wave
│  ◦  blush
│  ◦  smug
│  ◦  glomp
│  ◦  happy
│  ◦  dance
│  ◦  cringe
│  ◦  highfive
│  ◦  handhold
└  `

global.groupmenu = `
┌  ◦ *𝗚𝗿𝗼𝘂𝗽 𝗠𝗲𝗻𝘂*
│  ◦. welcome on / off
│  ◦. antilink on / off
│  ◦. antitoxic on / off
│  ◦. pushkontak (textnya)
│  ◦. pushcontid (id group)
│  ◦. bcgc (textnya)
│  ◦. hidetag (textnya)
│  ◦. kick (628xx)
│  ◦. add (628xx)
│  ◦. promote (628xx)
│  ◦. demote (628xx)
│  ◦. sendlinkgc (628xx)
│  ◦. editgroup close / open
│  ◦. editinfo on / off
│  ◦. join (linknya)
│  ◦. editsubjek (textnya)
│  ◦. editdesk (textnya)
│  ◦. tagall (textnya)
│  ◦. inspect (linknya)
│  ◦. linkgroup
│  ◦. resetlinkgc
│  ◦. promoteall
│  ◦. demoteall
│  ◦. larangan
│  ◦. buatsw
│  ◦. buatswimage
│  ◦. buatswvideo
│  ◦. swin
│  ◦. vnsw
│  ◦. buatswptv
│  ◦. toptv
│  ◦. buatsws
└  `

global.tools = `
┌  ◦ *𝗧𝗼𝗼𝗹𝘀*
│  ◦  igstalk
│  ◦  ig (linknya)
│  ◦  fbdl (linknya)
│  ◦  twitvideo (linknya)
│  ◦  tiktokvideo (linknya)
│  ◦  ytmp3 (linknya)
│  ◦  ytmp4 (linknya)
│  ◦  ytsearch (linknya)
│  ◦  play (query)
│  ◦  githubclone
│  ◦  tomp4 (belum work)
│  ◦  tomp3
│  ◦  tovn
│  ◦  togif (belum work)
│  ◦  tourl
│  ◦  smeme
│  ◦  stalktiktok
│  ◦  ffstalk
│  ◦  hd
│  ◦  myip
│  ◦  menfes
│  ◦  createqr
│  ◦  sticker
│  ◦  kalkulator
└ `

global.randommenu = `
┌  ◦ *𝗥𝗮𝗻𝗱𝗼𝗺 𝗠𝗲𝗻𝘂*
│  ◦  nope
│  ◦  tutorial
│  ◦  wm (teks)
│  ◦  jodoh
│  ◦  wmvideo
│  ◦  emojimix
│  ◦  emojimix2
│  ◦  afk (textnya)
│  ◦  quotes
│  ◦  darkjokes
│  ◦  google
│  ◦  ppcp
│  ◦  coffe
│  ◦  getname
│  ◦  getpic
│  ◦  setppgroup
│  ◦  lirik (belum work)
│  ◦  qcimg (teks)
│  ◦  cuaca
└  `

global.islammenu = `
┌  ◦ *𝗜𝘀𝗹𝗮𝗺 𝗠𝗲𝗻𝘂*
│  ◦. jadwalsholat
│  ◦. kisahnabi
│  ◦. alquranaudio
│  ◦. asmaulhusna
│  ◦. alquran
│  ◦. listsurah
└  `

global.textmaker = `
┌  ◦ *𝗧𝗲𝘅𝘁 𝗠𝗮𝗸𝗲𝗿*
│  ◦. blackpink
│  ◦. rainbow2
│  ◦. water_pipe
│  ◦. halloween
│  ◦. sketch
│  ◦. sircuit
│  ◦. discovery
│  ◦. metallic2
│  ◦. fiction
│  ◦. demon
│  ◦. transformer
│  ◦. berry
│  ◦. thunder
│  ◦. magma
│  ◦. 3dstone
│  ◦. neon
│  ◦. glitch
│  ◦. harry_potter
│  ◦. embossed
│  ◦. broken
│  ◦. papercut
│  ◦. gradient
│  ◦. glossy
│  ◦. watercolor
│  ◦. multicolor
│  ◦. neon_devil
│  ◦. underwater
│  ◦. bear
│  ◦. wonderfulg
│  ◦. christmas
│  ◦. neon_light
│  ◦. snow
│  ◦. cloudsky
│  ◦. luxury2
│  ◦. gradient2
│  ◦. summer
│  ◦. writing
│  ◦. engraved
│  ◦. summery
│  ◦. 3dglue
│  ◦. metaldark
│  ◦. neonlight
│  ◦. oscar
│  ◦. minion
│  ◦. holographic
│  ◦. purple
│  ◦. glossyb
│  ◦. deluxe2
│  ◦. glossyc
│  ◦. fabric
│  ◦. neonc
│  ◦. newyear
│  ◦. newyear2
│  ◦. metals
│  ◦. xmas
│  ◦. blood
│  ◦. darkg
│  ◦. joker
│  ◦. wicker
│  ◦. natural
│  ◦. firework
│  ◦. skeleton
│  ◦. balloon
│  ◦. balloon2
│  ◦. balloon3
│  ◦. balloon4
│  ◦. balloon5
│  ◦. balloon6
│  ◦. balloon7
│  ◦. steel
│  ◦. gloss
│  ◦. denim
│  ◦. decorate
│  ◦. decorate2
│  ◦. peridot
│  ◦. rock
│  ◦. glass
│  ◦. glass2
│  ◦. glass3
│  ◦. glass4
│  ◦. captain_as2
│  ◦. robot
│  ◦. equalizer
│  ◦. toxic
│  ◦. sparkling
│  ◦. sparkling2
│  ◦. sparkling3
│  ◦. decorative
│  ◦. chocolate
│  ◦. strawberry
│  ◦. koifish
│  ◦. bread
│  ◦. matrix
│  ◦. blood2
│  ◦. neonligth2
│  ◦. thunder2
│  ◦. 3dbox
│  ◦. neon2
│  ◦. roadw
│  ◦. bokeh
│  ◦. gneon
│  ◦. advanced
│  ◦. dropwater
│  ◦. wall
│  ◦. chrismast
│  ◦. honey
│  ◦. drug
│  ◦. marble
│  ◦. marble2
│  ◦. ice
│  ◦. juice
│  ◦. rusty
│  ◦. abstra
│  ◦. biscuit
│  ◦. wood
│  ◦. scifi
│  ◦. metalr
│  ◦. purpleg
│  ◦. shiny
│  ◦. jewelry
│  ◦. jewelry2
│  ◦. metalh
│  ◦. golden
│  ◦. glitter
│  ◦. metale
│  ◦. carbon
│  ◦. candy
│  ◦. metalb
│  ◦. gemb
│  ◦. 3dchrome
│  ◦. metalb2
│  ◦. metalg
└  `

global.infomenu = `
┌  ◦ *𝗜𝗻𝗳𝗼 𝗠𝗲𝗻𝘂*
│  ◦ sc
│  ◦ tqto
│  ◦ donasi
│  ◦ owner
│  ◦ bot
│  ◦ sosmed
│  ◦ panel
│  ◦ daftar
└  `

global.addmenu = `
┌  ◦ *𝗔𝗱𝗱 𝗠𝗲𝗻𝘂*
│  ◦  setcmd
│  ◦  delcmd
│  ◦  listcmd
│  ◦  setppbot
│  ◦  addpdf
│  ◦  delpdf
│  ◦  listpdf
│  ◦  yopdf
│  ◦  sendpdf
│  ◦  addzip
│  ◦  delzip
│  ◦  listzip
│  ◦  yozip
│  ◦  sendzip
│  ◦  addapk
│  ◦  delapk
│  ◦  listapk
│  ◦  yoapk
│  ◦  sendapk
│  ◦  addvn
│  ◦  delvn
│  ◦  listvn
│  ◦  addmsg
│  ◦  sendlist
│  ◦  listmsg
│  ◦  delmsg
│  ◦  getmsg
└ `
 
global.funmenu = `
┌  ◦ *𝗙𝘂𝗻 𝗠𝗲𝗻𝘂*
│  ◦.ᴀʀᴛɪɴᴀᴍᴀ (ᴛᴇxᴛɴʏᴀ)
│  ◦.ᴀʀᴛɪᴍɪᴍᴘɪ (ᴛᴇxᴛɴʏᴀ)
│  ◦.ᴋᴇᴄᴏᴄᴏᴋᴀɴᴘᴀꜱᴀɴɢᴀɴ (ᴛᴇxᴛɴʏᴀ)
│  ◦.ᴋᴇᴄᴏᴄᴏᴋᴀɴɴᴀᴍᴀ (ᴛᴇxᴛɴʏᴀ)
│  ◦.ᴊᴀᴅɪᴀɴᴘᴇʀɴɪᴋᴀʜᴀɴ (ᴛᴇxᴛɴʏᴀ)
│  ◦.ʀᴇᴊᴇᴋɪ (ᴛᴇxᴛɴʏᴀ)
│  ◦.ꜱɪꜰᴀᴛᴜꜱᴀʜᴀ (ᴛᴇxᴛɴʏᴀ)
│  ◦.ᴘᴇᴋᴇʀᴊᴀᴀɴ (ᴛᴇxᴛɴʏᴀ)
│  ◦.ᴀʀᴛɪᴛᴀʀᴏᴛ (ᴛᴇxᴛɴʏᴀ)
│  ◦.ᴘᴏᴛᴇɴꜱɪᴘᴇɴʏᴀᴋɪᴛ (ᴛᴇxᴛɴʏᴀ)
│  ◦.ʀᴀᴍᴀʟᴀɴɴᴀꜱɪʙ (ᴛᴇxᴛɴʏᴀ)
│  ◦.ʜᴀʀɪꜱᴀɴɢᴀʀ (ᴛᴇxᴛɴʏᴀ)
│  ◦.ʜᴀʀɪʙᴀɪᴋ (ᴛᴇxᴛɴʏᴀ)
│  ◦.ꜰᴇɴɢꜱʜᴜɪ (ᴛᴇxᴛɴʏᴀ)
│  ◦.ɴᴀɢᴀʜᴀʀɪ (ᴛᴇxᴛɴʏᴀ)
│  ◦.ʜᴀʀɪɴᴀᴀꜱ (ᴛᴇxᴛɴʏᴀ)
│  ◦.ᴡᴇᴛᴏɴ (ᴛᴇxᴛɴʏᴀ)
│  ◦.ᴘᴇʀᴜɴᴛᴜɴɢᴀɴ (ᴛᴇxᴛɴʏᴀ)
│  ◦.ᴀʀᴀʜʀᴇᴊᴇᴋɪ (ᴛᴇxᴛɴʏᴀ)
│  ◦.ꜱɪꜰᴀᴛ (ᴛᴇxᴛɴʏᴀ)
│  ◦.ᴋᴇʙᴇʀᴜɴᴛᴜɴɢᴀɴ (ᴛᴇxᴛɴʏᴀ)
│  ◦.ᴍᴇᴍᴀɴᴄɪɴɢ (ᴛᴇxᴛɴʏᴀ)
│  ◦.ᴍᴀꜱᴀꜱᴜʙᴜʀ (ᴛᴇxᴛɴʏᴀ)
│  ◦.ᴢᴏᴅɪᴀᴋ (ᴛᴇxᴛɴʏᴀ)
│  ◦.ꜱʜɪᴏ (ᴛᴇxᴛɴʏᴀ)
└  
`

global.gamemenu = `
┌  ◦ *𝗠𝗲𝗻𝘂 𝗚𝗮𝗺𝗲*
│  ◦.ᴛᴛᴄ
│  ◦.ᴅᴇʟᴛᴄ
│  ◦.ꜱᴜɪᴛᴘᴠᴘ
│  ◦.ᴛᴇʙᴀᴋ ᴋᴀᴛᴀ
│  ◦.ᴛᴇʙᴀᴋ ɢᴀᴍʙᴀʀ
│  ◦.ᴛᴇʙᴀᴋ ʟɪʀɪᴋ
│  ◦.ᴛᴇʙᴀᴋ ᴋᴀʟɪᴍᴀᴛ
│  ◦.ᴛᴇʙᴀᴋ ʟᴀɢᴜ
│  ◦.ᴛᴇʙᴀᴋ ʟᴏɴᴛᴏɴɢ
│  ◦.ꜰᴀᴍɪʟʏ100
│  ◦.ᴋᴜɪꜱᴍᴀᴛʜ ɴᴏᴏʙ
│  ◦.ᴋᴜɪꜱᴍᴀᴛʜ ᴇᴀꜱʏ
│  ◦.ᴋᴜɪꜱᴍᴀᴛʜ ᴍᴇᴅɪᴜᴍ
│  ◦.ᴋᴜɪꜱᴍᴀᴛʜ ʜᴀʀᴅ
│  ◦.ᴋᴜɪꜱᴍᴀᴛʜ ᴇxᴛʀᴇᴍᴇ
│  ◦.ᴋᴜɪꜱᴍᴀᴛʜ ɪᴍᴘᴏꜱꜱɪʙʟᴇ
│  ◦.ᴋᴜɪꜱᴍᴀᴛʜ ɪᴍᴘᴏꜱꜱɪʙʟᴇ2
└  
`
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})
