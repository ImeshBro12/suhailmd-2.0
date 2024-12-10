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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_07_30_12_10_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIwLFxuICAgICAgICAyMjksXG4gICAgICAgIDI2LFxuICAgICAgICA4MixcbiAgICAgICAgMjQzLFxuICAgICAgICAxMDYsXG4gICAgICAgIDEyNixcbiAgICAgICAgNjksXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTE5LFxuICAgICAgICAyMTUsXG4gICAgICAgIDIzMSxcbiAgICAgICAgNjEsXG4gICAgICAgIDExNyxcbiAgICAgICAgMjMxLFxuICAgICAgICA1NixcbiAgICAgICAgMTAwLFxuICAgICAgICAxOTUsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTYxLFxuICAgICAgICA0MSxcbiAgICAgICAgNjYsXG4gICAgICAgIDYsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTQ4LFxuICAgICAgICA5MixcbiAgICAgICAgMjI0LFxuICAgICAgICAxNixcbiAgICAgICAgMTU1LFxuICAgICAgICAyMjQsXG4gICAgICAgIDE1OCxcbiAgICAgICAgNzZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjUzLFxuICAgICAgICAyMzYsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTcyLFxuICAgICAgICAyMTksXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTY3LFxuICAgICAgICAxNzMsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTkwLFxuICAgICAgICAxMDgsXG4gICAgICAgIDU2LFxuICAgICAgICAxMzMsXG4gICAgICAgIDQ1LFxuICAgICAgICAxODUsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjUzLFxuICAgICAgICAxNTgsXG4gICAgICAgIDUzLFxuICAgICAgICA5NSxcbiAgICAgICAgMTU1LFxuICAgICAgICA1NCxcbiAgICAgICAgNTcsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTk4LFxuICAgICAgICAyMTgsXG4gICAgICAgIDMsXG4gICAgICAgIDQ0LFxuICAgICAgICAxMyxcbiAgICAgICAgMTMsXG4gICAgICAgIDIzNixcbiAgICAgICAgNTNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQwLFxuICAgICAgICAxMDksXG4gICAgICAgIDI0MixcbiAgICAgICAgMixcbiAgICAgICAgMjAwLFxuICAgICAgICAyOSxcbiAgICAgICAgNzgsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTc4LFxuICAgICAgICAyMTIsXG4gICAgICAgIDkzLFxuICAgICAgICA0OCxcbiAgICAgICAgMjIxLFxuICAgICAgICA3NyxcbiAgICAgICAgMjQyLFxuICAgICAgICAxMDAsXG4gICAgICAgIDU5LFxuICAgICAgICAxNzAsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjU0LFxuICAgICAgICAxMjMsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjksXG4gICAgICAgIDYwLFxuICAgICAgICA0NyxcbiAgICAgICAgNzEsXG4gICAgICAgIDEsXG4gICAgICAgIDcwLFxuICAgICAgICAxNTcsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTIxLFxuICAgICAgICA2OFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjEsXG4gICAgICAgIDI0MSxcbiAgICAgICAgNzUsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTU5LFxuICAgICAgICAxMjEsXG4gICAgICAgIDY1LFxuICAgICAgICAxMjQsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjIzLFxuICAgICAgICA2MCxcbiAgICAgICAgNzYsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTkwLFxuICAgICAgICAxMTgsXG4gICAgICAgIDIxNCxcbiAgICAgICAgOTMsXG4gICAgICAgIDg3LFxuICAgICAgICA2MyxcbiAgICAgICAgMTY0LFxuICAgICAgICAxNjEsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjI1LFxuICAgICAgICAxMjksXG4gICAgICAgIDE1NCxcbiAgICAgICAgNCxcbiAgICAgICAgNDgsXG4gICAgICAgIDc5LFxuICAgICAgICAxNCxcbiAgICAgICAgNzksXG4gICAgICAgIDEwNSxcbiAgICAgICAgNTJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0LFxuICAgICAgICAxMzMsXG4gICAgICAgIDUxLFxuICAgICAgICA4MyxcbiAgICAgICAgMTY4LFxuICAgICAgICAzNCxcbiAgICAgICAgODYsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTA0LFxuICAgICAgICAxMTksXG4gICAgICAgIDI0LFxuICAgICAgICA5LFxuICAgICAgICA1NixcbiAgICAgICAgMTQ1LFxuICAgICAgICAzNixcbiAgICAgICAgMjQ2LFxuICAgICAgICA3MCxcbiAgICAgICAgMjE5LFxuICAgICAgICAzNCxcbiAgICAgICAgMTYsXG4gICAgICAgIDE2LFxuICAgICAgICAxOTAsXG4gICAgICAgIDk4LFxuICAgICAgICA0OSxcbiAgICAgICAgMjE1LFxuICAgICAgICAxODIsXG4gICAgICAgIDIyNixcbiAgICAgICAgNTksXG4gICAgICAgIDI0NixcbiAgICAgICAgMTU3LFxuICAgICAgICA2MCxcbiAgICAgICAgNzdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTE2LFxuICAgICAgICA4LFxuICAgICAgICA5OCxcbiAgICAgICAgOTgsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjM0LFxuICAgICAgICAyMyxcbiAgICAgICAgMzIsXG4gICAgICAgIDMzLFxuICAgICAgICAyMjYsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjExLFxuICAgICAgICAxMTQsXG4gICAgICAgIDI0OSxcbiAgICAgICAgNTEsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTQ3LFxuICAgICAgICA3MixcbiAgICAgICAgMTY5LFxuICAgICAgICAyMSxcbiAgICAgICAgMTMsXG4gICAgICAgIDUzLFxuICAgICAgICAxMjcsXG4gICAgICAgIDQ1LFxuICAgICAgICAxNTQsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTMzLFxuICAgICAgICAxODQsXG4gICAgICAgIDYyLFxuICAgICAgICAxMDMsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDc0XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDExMyxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAxLFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICA3MixcbiAgICAgICAgICA2NixcbiAgICAgICAgICAzNixcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDExOVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5MSxcbiAgICAgICAgNzYsXG4gICAgICAgIDQ3LFxuICAgICAgICA1MixcbiAgICAgICAgNTIsXG4gICAgICAgIDEsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTkyLFxuICAgICAgICA0MixcbiAgICAgICAgMTE2LFxuICAgICAgICAxMyxcbiAgICAgICAgMTMwLFxuICAgICAgICAyMDYsXG4gICAgICAgIDM2LFxuICAgICAgICA2MixcbiAgICAgICAgMTM2LFxuICAgICAgICAzMyxcbiAgICAgICAgMTAwLFxuICAgICAgICAyNTUsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTg3LFxuICAgICAgICAyMjEsXG4gICAgICAgIDIyMSxcbiAgICAgICAgOTAsXG4gICAgICAgIDksXG4gICAgICAgIDIzOCxcbiAgICAgICAgNDYsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjksXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTUyLFxuICAgICAgICA4NyxcbiAgICAgICAgMCxcbiAgICAgICAgODEsXG4gICAgICAgIDEyOSxcbiAgICAgICAgOTcsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjQ3LFxuICAgICAgICA5MyxcbiAgICAgICAgMjUxLFxuICAgICAgICAxMTksXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTYwLFxuICAgICAgICAxMTYsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjE2LFxuICAgICAgICAxMjYsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTYzLFxuICAgICAgICAzNixcbiAgICAgICAgMTg2LFxuICAgICAgICAxMTksXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTg3LFxuICAgICAgICAxNTksXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTAzLFxuICAgICAgICAyMTAsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTU5LFxuICAgICAgICAxMTUsXG4gICAgICAgIDc5LFxuICAgICAgICAyMDMsXG4gICAgICAgIDEzMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTgwLFxuICBcImFkdlNlY3JldEtleVwiOiBcInJMZUdySklUQVlXTTYwdkdpaVNtVm9oUDZqeWdFbmxJbjBTY1BYM0Q5NE09XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIkVwZ1NqNEVKUzBLVmtOUzFJanJuc0FcIixcbiAgXCJwaG9uZUlkXCI6IFwiMGE1YTA4M2ItMzg2ZS00NTFkLWE3Y2EtYjhkMDlkZDQyNjQ4XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEzOCxcbiAgICAgIDY1LFxuICAgICAgMTIsXG4gICAgICAxMTYsXG4gICAgICAyMyxcbiAgICAgIDk4LFxuICAgICAgMjI3LFxuICAgICAgMjU0LFxuICAgICAgMTA0LFxuICAgICAgMjUyLFxuICAgICAgMjQ3LFxuICAgICAgMjIyLFxuICAgICAgMixcbiAgICAgIDkxLFxuICAgICAgMTgsXG4gICAgICAxMCxcbiAgICAgIDE3MSxcbiAgICAgIDUzLFxuICAgICAgNDYsXG4gICAgICAzMlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA0MCxcbiAgICAgIDE3MixcbiAgICAgIDExMixcbiAgICAgIDE4NCxcbiAgICAgIDcwLFxuICAgICAgMTU1LFxuICAgICAgMTI2LFxuICAgICAgNCxcbiAgICAgIDEyMSxcbiAgICAgIDMsXG4gICAgICA1LFxuICAgICAgMjM5LFxuICAgICAgNDcsXG4gICAgICAxNzIsXG4gICAgICAyNDcsXG4gICAgICA2MCxcbiAgICAgIDE2MyxcbiAgICAgIDIxMCxcbiAgICAgIDExNyxcbiAgICAgIDIxMVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCIzS1lZVFBZWlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTQ3NDAxOTA5NTU6NzVAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJXRC5JbWVzaCBDaGFtaWthXCIsXG4gICAgXCJsaWRcIjogXCIxMjM3OTM4NDI0MTM1OTk6NzVAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDUHZxaWRRSEVQN2IzN29HR0FZZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJybHVSQzZZVVFReVlwaHI2L1JzOGMzTU03aE9oUk1USmFRNm95R0JnSFVrPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIlNKcXZ5NnJyYklKQW9EZUxTZUJDaWQ4dFh0Ymtva05tQ2ppbVl2K3kwYkZSbHFnMWVXSm9oOWZ6NVlxdGUzZFdreGhqRldqMkdpTm5UUjFZbHFWZkRRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIkRPN3h3aUdtODNodG02U2x3VElCc2l0djBFU3BCM2M3czJ0dUhxbFlGa25VSkdFLzdpaXZZbWd2RHZQTmpJNVdFTkt3djE5WVNkUm5FYTZwYUZwOWhRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjk0NzQwMTkwOTU1Ojc1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAyNixcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDczXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzM4MTU4MTEsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFKeVVcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUp5VS5qc29uIjogIntcImtleURhdGFcIjpcIjZaOGNBNXFGdWtROHdWZ3ZWSzM2dEtWL1ZuME1JODJoSWR2RU15eWIzYTQ9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MjA1NTM3MDEwNixcImN1cnJlbnRJbmRleFwiOjEzLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIKfQ=="  // PUT your SESSION_ID 


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
