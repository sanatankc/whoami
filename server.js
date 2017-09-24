const express = require('express')
const app = express()

app.get('/', (req, res) => {
    const ipArr = req.ip.split(':')

    const ipaddress = ipArr[ipArr.length - 1]
    const language = req.headers['accept-language'].split(',')[0]
    const softwareRegex = /\(([^)]+)\)/
    const software = softwareRegex.exec(req.headers['user-agent'])[1]

    const responseJSON = {
        ipaddress,
        language,
        software
    }
    res.json(responseJSON)
})

app.listen(process.env.PORT || 4000)

