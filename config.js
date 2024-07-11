const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '0716479403') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_22_41_07_11_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUyLFxuICAgICAgICA1MyxcbiAgICAgICAgMTU0LFxuICAgICAgICAxMjIsXG4gICAgICAgIDIzMyxcbiAgICAgICAgODYsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjM3LFxuICAgICAgICAyMzksXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjIxLFxuICAgICAgICAxNjgsXG4gICAgICAgIDU4LFxuICAgICAgICA0NyxcbiAgICAgICAgMjAyLFxuICAgICAgICAxNzEsXG4gICAgICAgIDIxNCxcbiAgICAgICAgOTYsXG4gICAgICAgIDg0LFxuICAgICAgICAxMDUsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTA3LFxuICAgICAgICA5NCxcbiAgICAgICAgOSxcbiAgICAgICAgMzEsXG4gICAgICAgIDU3LFxuICAgICAgICAxMTgsXG4gICAgICAgIDgyLFxuICAgICAgICAzMSxcbiAgICAgICAgMTg2LFxuICAgICAgICAxNTMsXG4gICAgICAgIDgwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExNyxcbiAgICAgICAgMTQwLFxuICAgICAgICAyMjUsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTI5LFxuICAgICAgICAyMzAsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTU2LFxuICAgICAgICA2MixcbiAgICAgICAgNCxcbiAgICAgICAgMTc2LFxuICAgICAgICAyMzgsXG4gICAgICAgIDU1LFxuICAgICAgICA3OSxcbiAgICAgICAgMjQxLFxuICAgICAgICAxNzUsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjEzLFxuICAgICAgICAxMzcsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTYsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTkyLFxuICAgICAgICAyNTEsXG4gICAgICAgIDIxLFxuICAgICAgICAxMDIsXG4gICAgICAgIDY4LFxuICAgICAgICAxMDksXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjAsXG4gICAgICAgIDQ3LFxuICAgICAgICA2NlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYwLFxuICAgICAgICAxMDEsXG4gICAgICAgIDIyMyxcbiAgICAgICAgNzAsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjMsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTksXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTQxLFxuICAgICAgICAxNTUsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMjA0LFxuICAgICAgICAzMyxcbiAgICAgICAgNyxcbiAgICAgICAgMTMsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTkwLFxuICAgICAgICAxMTAsXG4gICAgICAgIDM2LFxuICAgICAgICA0NixcbiAgICAgICAgNixcbiAgICAgICAgMTE1LFxuICAgICAgICAyMTQsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMyxcbiAgICAgICAgNTMsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjQxLFxuICAgICAgICAxMzYsXG4gICAgICAgIDE1OCxcbiAgICAgICAgNzRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMxLFxuICAgICAgICAxODIsXG4gICAgICAgIDE3OCxcbiAgICAgICAgNjEsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTI5LFxuICAgICAgICA1OCxcbiAgICAgICAgNDEsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjAwLFxuICAgICAgICA3MyxcbiAgICAgICAgMTUsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxNDIsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTYyLFxuICAgICAgICA4NSxcbiAgICAgICAgMjE0LFxuICAgICAgICA5NyxcbiAgICAgICAgMjA0LFxuICAgICAgICA0OCxcbiAgICAgICAgNixcbiAgICAgICAgOTUsXG4gICAgICAgIDE2MSxcbiAgICAgICAgNSxcbiAgICAgICAgODUsXG4gICAgICAgIDE0MixcbiAgICAgICAgMjI5LFxuICAgICAgICAyMCxcbiAgICAgICAgMTkwLFxuICAgICAgICAxMTlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2OCxcbiAgICAgICAgNjksXG4gICAgICAgIDE0OSxcbiAgICAgICAgODksXG4gICAgICAgIDMxLFxuICAgICAgICAxNDksXG4gICAgICAgIDYxLFxuICAgICAgICA1MSxcbiAgICAgICAgNzMsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTU1LFxuICAgICAgICA4NyxcbiAgICAgICAgMjAxLFxuICAgICAgICA5NCxcbiAgICAgICAgMTU1LFxuICAgICAgICAyNSxcbiAgICAgICAgNjEsXG4gICAgICAgIDIxLFxuICAgICAgICA1MyxcbiAgICAgICAgMjE3LFxuICAgICAgICAyMjAsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTMwLFxuICAgICAgICAxMTAsXG4gICAgICAgIDIwMixcbiAgICAgICAgMjQ0LFxuICAgICAgICAyMDYsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTcxLFxuICAgICAgICAxMDksXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTA1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxLFxuICAgICAgICAxMzAsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjEsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjQxLFxuICAgICAgICAyNDQsXG4gICAgICAgIDUyLFxuICAgICAgICA0NCxcbiAgICAgICAgMTksXG4gICAgICAgIDEwMixcbiAgICAgICAgMTA5LFxuICAgICAgICAxMzMsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTI1LFxuICAgICAgICAwLFxuICAgICAgICAzMixcbiAgICAgICAgMTYsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTkwLFxuICAgICAgICAxNzMsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTIyLFxuICAgICAgICAxMSxcbiAgICAgICAgMTksXG4gICAgICAgIDM4LFxuICAgICAgICAyMDUsXG4gICAgICAgIDIyNyxcbiAgICAgICAgODksXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTk2LFxuICAgICAgICAxMThcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICA0NixcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDExMFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICA1M1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3MCxcbiAgICAgICAgOTksXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjM0LFxuICAgICAgICA0NCxcbiAgICAgICAgMTQyLFxuICAgICAgICAyMyxcbiAgICAgICAgNjQsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTU2LFxuICAgICAgICAxNDAsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMzUsXG4gICAgICAgIDExLFxuICAgICAgICAyMTAsXG4gICAgICAgIDU3LFxuICAgICAgICAxNDMsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMSxcbiAgICAgICAgMzksXG4gICAgICAgIDEyNSxcbiAgICAgICAgNTUsXG4gICAgICAgIDEzMyxcbiAgICAgICAgNzEsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTYyLFxuICAgICAgICAyMCxcbiAgICAgICAgMjM4LFxuICAgICAgICAyMjcsXG4gICAgICAgIDUxLFxuICAgICAgICAxMTUsXG4gICAgICAgIDE4NixcbiAgICAgICAgMzgsXG4gICAgICAgIDUzLFxuICAgICAgICAyMTMsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTA4LFxuICAgICAgICA4OCxcbiAgICAgICAgMTYwLFxuICAgICAgICAxMzksXG4gICAgICAgIDM5LFxuICAgICAgICAyMDQsXG4gICAgICAgIDY1LFxuICAgICAgICAyMTgsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTIwLFxuICAgICAgICA4NixcbiAgICAgICAgMzAsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTEzLFxuICAgICAgICAxMTEsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMzAsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTM4LFxuICAgICAgICAxODcsXG4gICAgICAgIDg2LFxuICAgICAgICAxNDMsXG4gICAgICAgIDIzMCxcbiAgICAgICAgOTksXG4gICAgICAgIDYxLFxuICAgICAgICAyMjYsXG4gICAgICAgIDYyLFxuICAgICAgICAxMzFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDYwLFxuICBcImFkdlNlY3JldEtleVwiOiBcImRUVGtqcFZaUytxMDRvSmlpWVN3a2Z5UTM0M3ZHM2Mzb0tNaEl2RHFlcTA9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjU0NzE2NDc5NDAzQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCIyQUM1ODE1NEE4MkNDN0Y2OEI3NUVBQzBBODdBM0I3NFwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjA3Mzc2OThcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyNTQ3MTY0Nzk0MDNAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkQ2RUI3NEU1NEIzQkE3MjM4NUNGN0EzNjY5NkIyMTM3XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMDczNzY5OFxuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjI1NDcxNjQ3OTQwM0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiQTMxMjkwNkY2OThBODUyOUVENEZEMzBCRUQ0MjgyRTlcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIwNzM3NzAyXG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjU0NzE2NDc5NDAzQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCIzODM2REE1QkRDNEUyOEQ4OTc4MzlCNkNCNDlDMkUzRlwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjA3Mzc3MDJcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiQWtSYnRyLVVTai14VTdpQW91WG1oQVwiLFxuICBcInBob25lSWRcIjogXCIyZGIzNWIzMi05YTBiLTQzZmQtODU1NS0wMzI3N2Y1MmQ5ZTNcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTU3LFxuICAgICAgODQsXG4gICAgICA4NSxcbiAgICAgIDI3LFxuICAgICAgOTgsXG4gICAgICAyMjYsXG4gICAgICAzMixcbiAgICAgIDExMCxcbiAgICAgIDIwOSxcbiAgICAgIDEzMSxcbiAgICAgIDczLFxuICAgICAgMTEwLFxuICAgICAgODIsXG4gICAgICAxMSxcbiAgICAgIDE5NyxcbiAgICAgIDIzMixcbiAgICAgIDgwLFxuICAgICAgNjYsXG4gICAgICAxODQsXG4gICAgICAyMzhcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTg2LFxuICAgICAgOSxcbiAgICAgIDEwLFxuICAgICAgNDEsXG4gICAgICAxMTMsXG4gICAgICA3OCxcbiAgICAgIDIwMixcbiAgICAgIDQxLFxuICAgICAgMTIwLFxuICAgICAgMTcwLFxuICAgICAgMTMsXG4gICAgICAxNyxcbiAgICAgIDE1MyxcbiAgICAgIDEwNixcbiAgICAgIDI0OCxcbiAgICAgIDIwNCxcbiAgICAgIDk3LFxuICAgICAgMTc3LFxuICAgICAgMTYzLFxuICAgICAgMjEwXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIk1YQVgxQlcyXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyNTQ3MTY0Nzk0MDM6MUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTY2MDQ4MzAxNjcxMTU6MUBsaWRcIixcbiAgICBcIm5hbWVcIjogXCJQaWNreUJsaW5kQXNzXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDUGI5N3ZzRkVKcS93YlFHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJ5WVgyUVYxRGlYS2VBdWIrUmJ0V2F4MEFHeXhGdFFIcm5KMEsweUJMS2xFPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcImQ3QzhtSTlHVDNlN0c3enhmVWtpbmx4V0xsUlZqRUJULzVtK01Zc3ljQWI2cG9Wd3A1SWQzdHpJN21kV2RiL3BJWFlLZmdKaFNRaUtvWm1uSjhYY0FRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIkdvS1o5Vkc5QzM5UnVSZ2Fub2ZuTjJDZXpBN1FjM1MyMmRqNUlIY0R3dlVCLzdoWWJSZkMwK243N0hNN0N6dXQwMGlQTWdxekNqNG5IVDBlK2ZjUGhRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjI1NDcxNjQ3OTQwMzoxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMixcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICA4NixcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMCxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgODFcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMDczNzY5NSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQU93WlwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBT3daLmpzb24iOiAie1wia2V5RGF0YVwiOlwiTURyN3owMVVLMitsRnBkL1NMRFpIcjBvNm00MjFqMXJyQUUyRTRpZ2JuZz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxNjAxOTQ1MzM0LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjA3Mzc2OTYzMTdcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
