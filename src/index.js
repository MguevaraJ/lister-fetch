const dotenv = require('dotenv');
const express = require("express");
const morgan = require("morgan");
const path = require("path");
const colors = require("colors");

const app = express()
dotenv.config()

// settings
app.set('port', process.env.PORT || 4000)

// middlewares
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(morgan('dev'))
app.use(express.static(path.join(__dirname, 'public')))

// routes
app.use(require("./routes/index.js"));
app.use('/api/games', require('./routes/api/index.js'))

app.listen(app.get('port'), () => {
  console.log(colors.bgGreen(colors.black(' SERVER ')) + colors.green(": Listen on port '" + app.get('port') + "'"))
})
