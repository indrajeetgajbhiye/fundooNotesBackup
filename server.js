const express = require("express")
const app = express()
const path = require('path')
app.use(express.static(__dirname + "/dist"))

app.listen(process.env.PORT || 8080)

// path location strategy 

app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname + '/dist/fundooNotes/index.html'))
})

console.log('listnening on port')