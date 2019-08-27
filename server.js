const express = require('express')
const path = require('path')
const app = express()

app.use(express.static('./dist/football-app'))

app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, '/dist/football-app/index.html'))
})

app.listen(process.env.PORT || 8080, ()=>{
    console.log("Server Started")
}) 