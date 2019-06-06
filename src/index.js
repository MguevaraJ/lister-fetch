import dotenv from 'dotenv'
import express from 'express'
import morgan from 'morgan'
import { join } from 'path'
import { black, bgGreen, green } from 'colors'

const app = express()
dotenv.config()

// settings
app.set('port', process.env.PORT || 4000)

// middlewares
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(morgan('dev'))
app.use(express.static(join(__dirname, 'public')))

// routes
app.use(require("./routes/index.js"));
app.use('/api/games', require('./routes/api/index.js'))

app.listen(app.get('port'), () => {
  console.log(bgGreen(black(' SERVER ')) + green(": Listen on port '" + app.get('port') + "'"))
})
