const express = require('express')

const app = express()
const port = 5000

//static files
app.use(express.static('public'))
app.use('/css', express.static(__dirname + 'public/css'))
app.use('/img', express.static(__dirname + 'public/img'))
app.use('/js', express.static(__dirname + 'public/js'))

//Templating Engine
app.set('views', './src/vies')
app.set('views engine', 'ejs')

//Routes
const newsRouter = require('./src/routes/news')

app.use('/', newsRouter)

//listen on port 5000
app.listen(port, () => console.log(`Listing on port ${port}`))