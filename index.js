const express = require("express")
const axios = require("axios")
const app = express()
const dotEnv = require('dotenv')
dotEnv.config()

app.use(express.json())

app.get('/',(req,res)=>{
    console.log(req.query)
    res.send(req.query['hub.challenge'])
})

app.post('/',async (req,res)=>{
    console.log(req.body.entry[0].changes)
    await axios.post(process.env.DISCORD_WEBHOOK_URL,{
        content:"notif from facebook webhook"
    })
    res.status(200)
})

port = process.env.PORT || 5000
app.listen(port,()=>console.log(`server listening on port ${port}`))