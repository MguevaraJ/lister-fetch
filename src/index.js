const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const path = require("path");
const colors = require("colors");

const app = express();

//settings
app.set('port', process.env.PORT || 3030);

//routes
app.use(require("./routes/routes.js"));

//middlewares
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(morgan("dev"));
app.use(express.static(path.join(__dirname, "public")));

app.listen(app.get('port'), () => {
    console.log(colors.green("server on port \'" + app.get('port') + "\'")); 
});
