const cors = require('cors')
const express = require('express')
const app = express()
const axios = require('axios')

app.use(cors())


app.get('/',  async(req, res) => {

    const { data }  = await axios('https://api.themoviedb.org/3/discover/movie?api_key=7afef708d9a76377be7967f18b11eb84&primary_release_date.gte=2020-01-01&primary_release_date.lte=2020-12-31')
    return res.json(data)
})



app.listen('4567')

