const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_12_13_06_18_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg0LFxuICAgICAgICA4OSxcbiAgICAgICAgMTkwLFxuICAgICAgICAyMTQsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjM2LFxuICAgICAgICAyNDEsXG4gICAgICAgIDg4LFxuICAgICAgICAxOTMsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTAyLFxuICAgICAgICA3LFxuICAgICAgICAyNDcsXG4gICAgICAgIDc3LFxuICAgICAgICAyNyxcbiAgICAgICAgODUsXG4gICAgICAgIDE5MCxcbiAgICAgICAgNjIsXG4gICAgICAgIDkzLFxuICAgICAgICAzNixcbiAgICAgICAgMTksXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjAwLFxuICAgICAgICAxNDIsXG4gICAgICAgIDI5LFxuICAgICAgICAxODYsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjIyLFxuICAgICAgICAyMjQsXG4gICAgICAgIDkxLFxuICAgICAgICAyMTIsXG4gICAgICAgIDY2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDU2LFxuICAgICAgICAxMDQsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTEwLFxuICAgICAgICA5NCxcbiAgICAgICAgMTc4LFxuICAgICAgICAyMDAsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTE3LFxuICAgICAgICA5MyxcbiAgICAgICAgMzQsXG4gICAgICAgIDksXG4gICAgICAgIDE0LFxuICAgICAgICA3MCxcbiAgICAgICAgNDksXG4gICAgICAgIDUzLFxuICAgICAgICA0NyxcbiAgICAgICAgMjgsXG4gICAgICAgIDExNCxcbiAgICAgICAgNzYsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTUzLFxuICAgICAgICAyMDIsXG4gICAgICAgIDExNixcbiAgICAgICAgMzIsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTAxLFxuICAgICAgICAyMyxcbiAgICAgICAgMTU0LFxuICAgICAgICA3MyxcbiAgICAgICAgMTQsXG4gICAgICAgIDc1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDgsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTYwLFxuICAgICAgICAxNTYsXG4gICAgICAgIDExLFxuICAgICAgICAxNjMsXG4gICAgICAgIDExNyxcbiAgICAgICAgNDEsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTU1LFxuICAgICAgICAxNDYsXG4gICAgICAgIDAsXG4gICAgICAgIDgyLFxuICAgICAgICA4OSxcbiAgICAgICAgMTU3LFxuICAgICAgICAzOSxcbiAgICAgICAgOTIsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTE0LFxuICAgICAgICAyMDEsXG4gICAgICAgIDg4LFxuICAgICAgICAyMzEsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTY0LFxuICAgICAgICAxOTgsXG4gICAgICAgIDUsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjExLFxuICAgICAgICA4NSxcbiAgICAgICAgMTcyLFxuICAgICAgICAyLFxuICAgICAgICA2NlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5MSxcbiAgICAgICAgOSxcbiAgICAgICAgMTE3LFxuICAgICAgICAyMzMsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTUyLFxuICAgICAgICAxMDIsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTM2LFxuICAgICAgICAxMTIsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTU3LFxuICAgICAgICA0OSxcbiAgICAgICAgMjIxLFxuICAgICAgICAxNDgsXG4gICAgICAgIDEsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTMzLFxuICAgICAgICAxOTcsXG4gICAgICAgIDIwMyxcbiAgICAgICAgNDMsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTUyLFxuICAgICAgICAyNDAsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjUyLFxuICAgICAgICA4MyxcbiAgICAgICAgMjM1LFxuICAgICAgICAxNzcsXG4gICAgICAgIDkzLFxuICAgICAgICAxMzUsXG4gICAgICAgIDY2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMTIsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTM5LFxuICAgICAgICAyMTAsXG4gICAgICAgIDUyLFxuICAgICAgICAxODIsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTgwLFxuICAgICAgICAxNTQsXG4gICAgICAgIDc4LFxuICAgICAgICAxMzgsXG4gICAgICAgIDE3LFxuICAgICAgICAxMzIsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMzAsXG4gICAgICAgIDE0NyxcbiAgICAgICAgOTQsXG4gICAgICAgIDU2LFxuICAgICAgICAyNDcsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTY4LFxuICAgICAgICAxNjYsXG4gICAgICAgIDIwLFxuICAgICAgICAxNCxcbiAgICAgICAgMTM0LFxuICAgICAgICA2NCxcbiAgICAgICAgMTI0LFxuICAgICAgICAyMTQsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTM2LFxuICAgICAgICAyNCxcbiAgICAgICAgODNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjUyLFxuICAgICAgICA2MixcbiAgICAgICAgODQsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMzcsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTc0LFxuICAgICAgICAyMDcsXG4gICAgICAgIDExNCxcbiAgICAgICAgMixcbiAgICAgICAgMTE2LFxuICAgICAgICAzMyxcbiAgICAgICAgMjM0LFxuICAgICAgICAxMjYsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTk2LFxuICAgICAgICAxOTksXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTg3LFxuICAgICAgICAyMDQsXG4gICAgICAgIDczLFxuICAgICAgICAyMTIsXG4gICAgICAgIDM3LFxuICAgICAgICA5NSxcbiAgICAgICAgMzEsXG4gICAgICAgIDI0LFxuICAgICAgICAxMDUsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMzIsXG4gICAgICAgIDgwLFxuICAgICAgICAxODYsXG4gICAgICAgIDEyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE5MixcbiAgICAgICAgICAyMCxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgOTdcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDEsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMCxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICA2MixcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMjRcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTEsXG4gICAgICAgIDE5MCxcbiAgICAgICAgODEsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTI4LFxuICAgICAgICAyMDAsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTY2LFxuICAgICAgICAxNjgsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMzAsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTg4LFxuICAgICAgICAzOCxcbiAgICAgICAgMTg4LFxuICAgICAgICAxLFxuICAgICAgICA2NSxcbiAgICAgICAgNDQsXG4gICAgICAgIDE5MyxcbiAgICAgICAgNjQsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMzksXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTQ5LFxuICAgICAgICAyNyxcbiAgICAgICAgMTgyLFxuICAgICAgICAxMjQsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTYwLFxuICAgICAgICAxNzYsXG4gICAgICAgIDY2LFxuICAgICAgICAxODYsXG4gICAgICAgIDIzLFxuICAgICAgICAxODAsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjM1LFxuICAgICAgICAxNzMsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTY2LFxuICAgICAgICAzOSxcbiAgICAgICAgNzIsXG4gICAgICAgIDY5LFxuICAgICAgICA2MCxcbiAgICAgICAgODMsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjI3LFxuICAgICAgICAxODAsXG4gICAgICAgIDEyMixcbiAgICAgICAgODMsXG4gICAgICAgIDY1LFxuICAgICAgICAyNSxcbiAgICAgICAgMTY4LFxuICAgICAgICAxNzIsXG4gICAgICAgIDYwLFxuICAgICAgICA5NixcbiAgICAgICAgMTU0LFxuICAgICAgICAxODUsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjQyLFxuICAgICAgICAyMDksXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjEwLFxuICAgICAgICAyNTIsXG4gICAgICAgIDJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDQzLFxuICBcImFkdlNlY3JldEtleVwiOiBcIlFhR0pOeWNhZ0hhdnM5WENyTzRFYmRZZEtSL3dCcS9WeklvYUdGR0lvbmc9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIng3bVJ3aGhvUXZLR0ZER0kwb29mSXdcIixcbiAgXCJwaG9uZUlkXCI6IFwiNDU3MzY4OGItNDhjMy00YTcwLTg0ZDQtNTYzYmY0MTBjNDVjXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIyNixcbiAgICAgIDkyLFxuICAgICAgMCxcbiAgICAgIDE2NixcbiAgICAgIDcsXG4gICAgICAxNDIsXG4gICAgICAxNzksXG4gICAgICAyMyxcbiAgICAgIDYzLFxuICAgICAgMTA4LFxuICAgICAgMTIsXG4gICAgICAxOTIsXG4gICAgICAwLFxuICAgICAgMTg1LFxuICAgICAgNzEsXG4gICAgICAxNjksXG4gICAgICA2NCxcbiAgICAgIDkxLFxuICAgICAgMTY0LFxuICAgICAgMTk0XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDgxLFxuICAgICAgMTY2LFxuICAgICAgMjcsXG4gICAgICA5NSxcbiAgICAgIDU3LFxuICAgICAgMTMxLFxuICAgICAgODAsXG4gICAgICAxMzIsXG4gICAgICAzMCxcbiAgICAgIDEyMixcbiAgICAgIDE3NixcbiAgICAgIDE5NyxcbiAgICAgIDEzNCxcbiAgICAgIDksXG4gICAgICA5MyxcbiAgICAgIDQ1LFxuICAgICAgMTU0LFxuICAgICAgNDEsXG4gICAgICAxNzYsXG4gICAgICAxMjBcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiVkM0UUs4N0RcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjI2Mzc3MTQ4MjczMjoxMEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIkpBWURFTlwiLFxuICAgIFwibGlkXCI6IFwiMTM5MDI0MjQ5NDM0MzEwOjEwQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0oyRXVlWURFUHJ6eGJNR0dBTWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiSjMyT2NIczBtVm5HRU4yMXFZd1dXMEFhMGdWQ2EyNmdackJrYUlkQ0VTcz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJCbHpwbmo2NEtHM0JTU2VyQTBWSTl5ZHVBSEpycm92QlUwRkZMS1dkTjd4blVTMzlJK21JNzg3cXZqRkUrSHUwUmhVT2xNQ29jdWtYQUxFdURGUnhBdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJ5VC85K1VyZjl4c2NMQWVnY25wOGdGVFZySjNQejhHYStaSE04MlJGaVdiejJEbVdzM09Mc21hSmFPb1FQUXJIT0hDUHVBNDZJU3dUZVhUU1ZkcW9CUT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyNjM3NzE0ODI3MzI6MTBAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAxNixcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDUsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICA2NixcbiAgICAgICAgICAxNyxcbiAgICAgICAgICA0M1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzE4NzEyODMwLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBSGovXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFIai8uanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


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
