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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_02_07_06_12_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEyLFxuICAgICAgICAxNDgsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTkwLFxuICAgICAgICAxNzIsXG4gICAgICAgIDQwLFxuICAgICAgICAxNjUsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjEsXG4gICAgICAgIDI3LFxuICAgICAgICAxODQsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTc3LFxuICAgICAgICAxMzgsXG4gICAgICAgIDIxMixcbiAgICAgICAgNDQsXG4gICAgICAgIDM0LFxuICAgICAgICAxMDMsXG4gICAgICAgIDUwLFxuICAgICAgICAxNyxcbiAgICAgICAgMjQ0LFxuICAgICAgICAzNyxcbiAgICAgICAgNjksXG4gICAgICAgIDE1MixcbiAgICAgICAgNTYsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTEzLFxuICAgICAgICAyNDgsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTk4LFxuICAgICAgICAyMzksXG4gICAgICAgIDExNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTgsXG4gICAgICAgIDEyNixcbiAgICAgICAgNjMsXG4gICAgICAgIDY5LFxuICAgICAgICAxOSxcbiAgICAgICAgNDksXG4gICAgICAgIDYyLFxuICAgICAgICAxMTIsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjE3LFxuICAgICAgICA5NCxcbiAgICAgICAgMTAsXG4gICAgICAgIDM5LFxuICAgICAgICA4MyxcbiAgICAgICAgMTYyLFxuICAgICAgICAyMjEsXG4gICAgICAgIDUwLFxuICAgICAgICA2LFxuICAgICAgICAyMjgsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTg1LFxuICAgICAgICAzNSxcbiAgICAgICAgMjAyLFxuICAgICAgICA3OCxcbiAgICAgICAgMTQ3LFxuICAgICAgICAyMjIsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTY1LFxuICAgICAgICAxMTQsXG4gICAgICAgIDE1NCxcbiAgICAgICAgNjYsXG4gICAgICAgIDEyMVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYwLFxuICAgICAgICA4OCxcbiAgICAgICAgMTg5LFxuICAgICAgICAyMDcsXG4gICAgICAgIDIwLFxuICAgICAgICA3MCxcbiAgICAgICAgNDcsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxMjAsXG4gICAgICAgIDU1LFxuICAgICAgICA1MixcbiAgICAgICAgMTQ1LFxuICAgICAgICAzLFxuICAgICAgICAxOSxcbiAgICAgICAgMTcsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTE0LFxuICAgICAgICAxMjIsXG4gICAgICAgIDIxNixcbiAgICAgICAgODYsXG4gICAgICAgIDk5LFxuICAgICAgICA5MyxcbiAgICAgICAgMjAwLFxuICAgICAgICAyMzIsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMzcsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTg4LFxuICAgICAgICAyMDksXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTA4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDUyLFxuICAgICAgICAxOTIsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjUsXG4gICAgICAgIDExNSxcbiAgICAgICAgMjI1LFxuICAgICAgICAxODYsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTg3LFxuICAgICAgICA4NSxcbiAgICAgICAgMTg4LFxuICAgICAgICAxNzMsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjA1LFxuICAgICAgICAxMDcsXG4gICAgICAgIDE0OCxcbiAgICAgICAgNDAsXG4gICAgICAgIDM4LFxuICAgICAgICAyMTMsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTI3LFxuICAgICAgICAxNyxcbiAgICAgICAgMzAsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTQxLFxuICAgICAgICA3MSxcbiAgICAgICAgNjEsXG4gICAgICAgIDkzLFxuICAgICAgICAzOSxcbiAgICAgICAgNjgsXG4gICAgICAgIDYxLFxuICAgICAgICAxMTlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0LFxuICAgICAgICAzNyxcbiAgICAgICAgMjIsXG4gICAgICAgIDE5MixcbiAgICAgICAgMSxcbiAgICAgICAgMjIxLFxuICAgICAgICAxNDYsXG4gICAgICAgIDg2LFxuICAgICAgICAxOTcsXG4gICAgICAgIDE0NixcbiAgICAgICAgODQsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTgyLFxuICAgICAgICAxNjksXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjAsXG4gICAgICAgIDYzLFxuICAgICAgICAxNjYsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTI3LFxuICAgICAgICA5NCxcbiAgICAgICAgMTIxLFxuICAgICAgICAxNyxcbiAgICAgICAgMjYsXG4gICAgICAgIDE5MSxcbiAgICAgICAgNyxcbiAgICAgICAgMTA2LFxuICAgICAgICA5OSxcbiAgICAgICAgNDcsXG4gICAgICAgIDY5LFxuICAgICAgICAxNjAsXG4gICAgICAgIDEyNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTYsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjM4LFxuICAgICAgICAxMjIsXG4gICAgICAgIDE3MixcbiAgICAgICAgMjQxLFxuICAgICAgICAzNSxcbiAgICAgICAgMjAxLFxuICAgICAgICAxNjAsXG4gICAgICAgIDE2MixcbiAgICAgICAgMjAyLFxuICAgICAgICAxNjksXG4gICAgICAgIDE1OCxcbiAgICAgICAgOTAsXG4gICAgICAgIDE3NSxcbiAgICAgICAgNzQsXG4gICAgICAgIDYsXG4gICAgICAgIDM5LFxuICAgICAgICAxODQsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjMsXG4gICAgICAgIDE4MyxcbiAgICAgICAgNjMsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTM1LFxuICAgICAgICA1NyxcbiAgICAgICAgMTMsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTI4LFxuICAgICAgICAyMDUsXG4gICAgICAgIDIxOCxcbiAgICAgICAgNThcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMTE1XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDgzLFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICA2NixcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDM1XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTE5LFxuICAgICAgICAyNDYsXG4gICAgICAgIDgsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjE4LFxuICAgICAgICA4NSxcbiAgICAgICAgMjE2LFxuICAgICAgICA3MixcbiAgICAgICAgMTkxLFxuICAgICAgICA2MCxcbiAgICAgICAgNDIsXG4gICAgICAgIDYzLFxuICAgICAgICAyNixcbiAgICAgICAgOTMsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTI2LFxuICAgICAgICA4LFxuICAgICAgICAzMyxcbiAgICAgICAgMTA0LFxuICAgICAgICAxMzMsXG4gICAgICAgIDEzMixcbiAgICAgICAgMjM5LFxuICAgICAgICA1NyxcbiAgICAgICAgOTUsXG4gICAgICAgIDE4OSxcbiAgICAgICAgNDIsXG4gICAgICAgIDI1MixcbiAgICAgICAgMjUsXG4gICAgICAgIDI5LFxuICAgICAgICA1MyxcbiAgICAgICAgMTk5LFxuICAgICAgICAxOTQsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMzMsXG4gICAgICAgIDI1LFxuICAgICAgICA2MSxcbiAgICAgICAgMjQzLFxuICAgICAgICAxMixcbiAgICAgICAgODQsXG4gICAgICAgIDE0NCxcbiAgICAgICAgNTAsXG4gICAgICAgIDE1NixcbiAgICAgICAgODEsXG4gICAgICAgIDEwMyxcbiAgICAgICAgNDksXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjI3LFxuICAgICAgICAyNSxcbiAgICAgICAgNTUsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjAsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTk5LFxuICAgICAgICAyNTMsXG4gICAgICAgIDQ1LFxuICAgICAgICAxNDAsXG4gICAgICAgIDU4LFxuICAgICAgICA0OSxcbiAgICAgICAgMjE3LFxuICAgICAgICA0MSxcbiAgICAgICAgNDAsXG4gICAgICAgIDIyLFxuICAgICAgICAxMTMsXG4gICAgICAgIDlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDY4LFxuICBcImFkdlNlY3JldEtleVwiOiBcIitNTVR2Q3dqYmcwd3lmMXc1dzdnVjZ3ZTFhUEFBakpaSjZ3OC91enpuSHM9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjYzNzEyNDczNTUxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCIyNzlBQTRFNzUxN0VBQTQ3Q0FFNjEzMUJEOUJGOEY5MlwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MTgxNTgwNzFcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyNjM3MTI0NzM1NTFAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjVFNkU1NzJGQTI4RDQzQTNCMUIzN0VEQTNDNDg5NjM0XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcxODE1ODA3M1xuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJqUVFoZnV0ZFNGbXcxZkRWTzdNZFhBXCIsXG4gIFwicGhvbmVJZFwiOiBcIjMwOTM1N2EyLTFlN2EtNGJhMi05NjVjLTZjYzExZmI3NzQyY1wiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA3MixcbiAgICAgIDk3LFxuICAgICAgMjQwLFxuICAgICAgNTYsXG4gICAgICAyNTQsXG4gICAgICAxMTAsXG4gICAgICAyMDYsXG4gICAgICAzMCxcbiAgICAgIDYxLFxuICAgICAgNzUsXG4gICAgICA2MCxcbiAgICAgIDE5MCxcbiAgICAgIDEyNCxcbiAgICAgIDI5LFxuICAgICAgOTMsXG4gICAgICAzMixcbiAgICAgIDIyNSxcbiAgICAgIDkyLFxuICAgICAgMjE1LFxuICAgICAgMjJcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNjUsXG4gICAgICAxMzMsXG4gICAgICAyMDIsXG4gICAgICAxODAsXG4gICAgICAxNTMsXG4gICAgICAxNjQsXG4gICAgICA2NSxcbiAgICAgIDUxLFxuICAgICAgMjMwLFxuICAgICAgMjE3LFxuICAgICAgMTY2LFxuICAgICAgMjQzLFxuICAgICAgMyxcbiAgICAgIDMzLFxuICAgICAgMTg0LFxuICAgICAgMjExLFxuICAgICAgMTAxLFxuICAgICAgOCxcbiAgICAgIDYzLFxuICAgICAgMTUxXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIk1KTktMWTdGXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyNjM3MTI0NzM1NTE6NjBAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjE1NDcwNDk3MzcwOTUyMjo2MEBsaWRcIixcbiAgICBcIm5hbWVcIjogXCJMSUwtVEpBWS1URUNIXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDUC9YL1pZR0VQQ0ZwTE1HR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCIrZjNaK056TzNnaXB2OWd2Nlh3S2pFd1YySDdXTGcrKytic2JrS2JlNjBVPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcInA2YTBUMEV3SE5VNDN2N1lVdnRtSXhFSk5ZY3I5QW5hRGRTVmtsRXdwT28xNkRBSTVhcGs0cXFWaC9LeEZBVmNYaVFJelkra0NEa0RPVlZGMHptSkFRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIk1mTnV6Ri93OUQ3L2xlYVhWZk5uVVczMXJpWDRlQkZyU0h2bjc1cTNuWDM0NDJwZjhLRzB5R09qZzlIVDBERHBzWjZRTWgxUGNsR0ZxZEs2TW5ZaUR3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjI2MzcxMjQ3MzU1MTo2MEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICA4LFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICA2OVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzE4MTU4MDY4LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBT3N6XCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFPc3ouanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJodVhJa0FOcFBURFo4aWlCaldiM1NkNjFXTnVLUThNdis5QVphNmZRcFBzPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE2NTg4MDkzNDAsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MTgxNDYwOTEwMDdcIn0iCn0="  // PUT your SESSION_ID 


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
