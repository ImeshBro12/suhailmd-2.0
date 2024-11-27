const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_04_10_11_27_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTYsXG4gICAgICAgIDE2OCxcbiAgICAgICAgNjAsXG4gICAgICAgIDQ5LFxuICAgICAgICAxNTgsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMzIsXG4gICAgICAgIDEzMixcbiAgICAgICAgNixcbiAgICAgICAgOCxcbiAgICAgICAgMjAzLFxuICAgICAgICAxMixcbiAgICAgICAgMTY5LFxuICAgICAgICAyNDYsXG4gICAgICAgIDcyLFxuICAgICAgICAxMDQsXG4gICAgICAgIDM0LFxuICAgICAgICAxMjIsXG4gICAgICAgIDExMixcbiAgICAgICAgMTc1LFxuICAgICAgICAxNDQsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTgzLFxuICAgICAgICA0OCxcbiAgICAgICAgMjUzLFxuICAgICAgICAzMyxcbiAgICAgICAgNDIsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTQzLFxuICAgICAgICAyMCxcbiAgICAgICAgNjcsXG4gICAgICAgIDkyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQ5LFxuICAgICAgICAxOTksXG4gICAgICAgIDE0NSxcbiAgICAgICAgODUsXG4gICAgICAgIDQ4LFxuICAgICAgICAxNzYsXG4gICAgICAgIDM0LFxuICAgICAgICAxNTMsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTMwLFxuICAgICAgICAxLFxuICAgICAgICAxNTYsXG4gICAgICAgIDc2LFxuICAgICAgICAzMyxcbiAgICAgICAgMjA0LFxuICAgICAgICA4MixcbiAgICAgICAgMTE2LFxuICAgICAgICAyOCxcbiAgICAgICAgMjQxLFxuICAgICAgICAxNDIsXG4gICAgICAgIDE1LFxuICAgICAgICAyMDQsXG4gICAgICAgIDExNixcbiAgICAgICAgNTksXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTgwLFxuICAgICAgICA2NyxcbiAgICAgICAgNTcsXG4gICAgICAgIDcsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTkxLFxuICAgICAgICAxMThcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwOCxcbiAgICAgICAgMSxcbiAgICAgICAgNjIsXG4gICAgICAgIDIwNSxcbiAgICAgICAgNTgsXG4gICAgICAgIDE2MixcbiAgICAgICAgODMsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAyMCxcbiAgICAgICAgNjYsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTkxLFxuICAgICAgICAyNDIsXG4gICAgICAgIDEsXG4gICAgICAgIDcxLFxuICAgICAgICA0NixcbiAgICAgICAgMTI1LFxuICAgICAgICA2MyxcbiAgICAgICAgOSxcbiAgICAgICAgNTIsXG4gICAgICAgIDQ3LFxuICAgICAgICAzNyxcbiAgICAgICAgMTkwLFxuICAgICAgICAxMTcsXG4gICAgICAgIDE5MyxcbiAgICAgICAgOTIsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTE5LFxuICAgICAgICAyNixcbiAgICAgICAgMTY5LFxuICAgICAgICA3M1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzOCxcbiAgICAgICAgMTEwLFxuICAgICAgICAxODUsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMzgsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTU1LFxuICAgICAgICAyMTgsXG4gICAgICAgIDE2LFxuICAgICAgICAxODksXG4gICAgICAgIDgyLFxuICAgICAgICAzMSxcbiAgICAgICAgMTcxLFxuICAgICAgICA2OSxcbiAgICAgICAgODksXG4gICAgICAgIDkyLFxuICAgICAgICA5MixcbiAgICAgICAgNDksXG4gICAgICAgIDIxNyxcbiAgICAgICAgODUsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjEzLFxuICAgICAgICA3MixcbiAgICAgICAgMTczLFxuICAgICAgICAyMjUsXG4gICAgICAgIDEyMixcbiAgICAgICAgMzAsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTc2LFxuICAgICAgICAyNDgsXG4gICAgICAgIDE0LFxuICAgICAgICAzOVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjQsXG4gICAgICAgIDcxLFxuICAgICAgICAxMTgsXG4gICAgICAgIDk3LFxuICAgICAgICAxMjAsXG4gICAgICAgIDE1NyxcbiAgICAgICAgNyxcbiAgICAgICAgNzMsXG4gICAgICAgIDk2LFxuICAgICAgICA1OCxcbiAgICAgICAgMjI0LFxuICAgICAgICA1NixcbiAgICAgICAgMjYsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTkyLFxuICAgICAgICA3OSxcbiAgICAgICAgMTc1LFxuICAgICAgICAyLFxuICAgICAgICAxNzYsXG4gICAgICAgIDI2LFxuICAgICAgICAyMjMsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjEyLFxuICAgICAgICA1NixcbiAgICAgICAgMTg0LFxuICAgICAgICAxMjIsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjI2LFxuICAgICAgICAxODEsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTkzLFxuICAgICAgICA3NVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDUsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTMsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjEzLFxuICAgICAgICAxODksXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjE3LFxuICAgICAgICA5OSxcbiAgICAgICAgMTY5LFxuICAgICAgICAyMTQsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTE2LFxuICAgICAgICAxOTksXG4gICAgICAgIDIwMixcbiAgICAgICAgMjIsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTM0LFxuICAgICAgICAyNTAsXG4gICAgICAgIDc0LFxuICAgICAgICA1OSxcbiAgICAgICAgNixcbiAgICAgICAgMjQzLFxuICAgICAgICAyNDIsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjEyLFxuICAgICAgICAxOTEsXG4gICAgICAgIDQ4LFxuICAgICAgICA2MSxcbiAgICAgICAgNzEsXG4gICAgICAgIDM5LFxuICAgICAgICAxMTdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAyNixcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDEyM1xuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICA0LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICA3XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTksXG4gICAgICAgIDgxLFxuICAgICAgICAyMjQsXG4gICAgICAgIDc3LFxuICAgICAgICAxNDIsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTQ5LFxuICAgICAgICAxOTcsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTU5LFxuICAgICAgICA2NyxcbiAgICAgICAgNTYsXG4gICAgICAgIDE4NixcbiAgICAgICAgMixcbiAgICAgICAgOTQsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMzksXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjMxLFxuICAgICAgICAxMzYsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTAxLFxuICAgICAgICAxMTksXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTAyLFxuICAgICAgICA5MSxcbiAgICAgICAgNDYsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjQzLFxuICAgICAgICAxMDQsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTU5LFxuICAgICAgICA0MyxcbiAgICAgICAgMTQxLFxuICAgICAgICA1OCxcbiAgICAgICAgMjExLFxuICAgICAgICA5NCxcbiAgICAgICAgMTYxLFxuICAgICAgICAxNjQsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjEsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTI1LFxuICAgICAgICA0MyxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxOTIsXG4gICAgICAgIDIzLFxuICAgICAgICAyMzgsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjksXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTM2LFxuICAgICAgICAyNTMsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjEzLFxuICAgICAgICAxMjcsXG4gICAgICAgIDE2MixcbiAgICAgICAgMjEwLFxuICAgICAgICA5NCxcbiAgICAgICAgNjYsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMzMsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogNixcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJ0WVVyTGJxRGJ4ZEs3Y0Rub0d2ZDJZN2JKeDFySXp3a3ZRcXFEZEpMWlRzPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJQUUtWVkVoUVNndW1kLTlvSHA4QjNBXCIsXG4gIFwicGhvbmVJZFwiOiBcIjJkMGZmMzM4LWM5ZjgtNGQ1ZC04ODcxLTMyMDBmNzdhYjBiYlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMTIsXG4gICAgICAyMDAsXG4gICAgICA4MSxcbiAgICAgIDI1MSxcbiAgICAgIDE2NyxcbiAgICAgIDcyLFxuICAgICAgODEsXG4gICAgICAyMDQsXG4gICAgICAxMjcsXG4gICAgICAxNjUsXG4gICAgICA1NSxcbiAgICAgIDE0NCxcbiAgICAgIDE2NyxcbiAgICAgIDM5LFxuICAgICAgMTQwLFxuICAgICAgMzQsXG4gICAgICAxNDgsXG4gICAgICAxMjMsXG4gICAgICA2MixcbiAgICAgIDI3XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIxMyxcbiAgICAgIDAsXG4gICAgICA2MixcbiAgICAgIDIzOCxcbiAgICAgIDQyLFxuICAgICAgMjEsXG4gICAgICAxNzIsXG4gICAgICAzMixcbiAgICAgIDI5LFxuICAgICAgMjQxLFxuICAgICAgMjQzLFxuICAgICAgMTg3LFxuICAgICAgMTEwLFxuICAgICAgMjEyLFxuICAgICAgMTg1LFxuICAgICAgMTU0LFxuICAgICAgMTY5LFxuICAgICAgMjExLFxuICAgICAgMTczLFxuICAgICAgMTc4XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIks1RzVSWUI2XCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5NDc0MDE5MDk1NTo0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiV0QuSW1lc2ggQ2hhbWlrYVwiLFxuICAgIFwibGlkXCI6IFwiMTIzNzkzODQyNDEzNTk5OjRAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDUERxaWRRSEVLTzNtcm9HR0FNZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJybHVSQzZZVVFReVlwaHI2L1JzOGMzTU03aE9oUk1USmFRNm95R0JnSFVrPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIlAweHlabHdSY3R0dzNRd0Q1eERXUWtieGtFRVcrWHFkRS82cUZWbU0wVTZYRlRDRkV3R3YyT3czUWNET2xRYTlWdEJXWnlNL1pBUmpGOXc5eUtnR0JBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIlVJTGR5SHhGYndRbTRZVThid3NYVVp0WHlDZGV5ZExOeXdOLzBFZ0dIempVVkJvRm8ySGorZlkyZVo4WDBPUS9BVE96a1JaTkVoK21tVmJOTGRQVkFnPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjk0NzQwMTkwOTU1OjRAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAyMCxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAxMixcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAxMixcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgNzNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczMjY4MDYxOCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUp3WFwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBSndYLmpzb24iOiAie1wia2V5RGF0YVwiOlwialZNNmxjQmEvQ0NNTEU4cGZ1K00vbHE1dTk0OTBHTWxoUXVnSzFMb0p1OD1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoyMDU1MzcwMDk2LFwiY3VycmVudEluZGV4XCI6MixcImRldmljZUluZGV4ZXNcIjpbMCwyXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MzI2ODA2MDE5MjdcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
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
