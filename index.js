const express = require("express")
const app = express()

app.use(express.json())

app.get('/',(req,res)=>{
    console.log(req.query)
    res.send(req.query['hub.challenge'])
})

app.post('/',(req,res)=>{
    console.log(req.body.entry[0].changes)
    res.status(200)
})

port = process.env.PORT || 5000
app.listen(port,()=>console.log(`server listening on port ${port}`))