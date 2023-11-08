const express = require('express')
const path = require('path')

const expressApp = express()

expressApp.listen(process.env.PORT ?? 3000, () => {
    const port = process.env.PORT ?? 3000
    console.log(`Server live on ${port}`)
})

expressApp.use('/', express.static(path.join(__dirname, "public")))

expressApp.get('/discord', function(request, response){ 
    response.redirect("https://discord.gg/dZpuSFmqGf")
})

expressApp.get("/*", function(request, response){
    response.redirect("https://rustware.xyz/")
})