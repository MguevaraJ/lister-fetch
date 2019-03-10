const express = require("express");
const morgan = require("morgan");
const path = require("path");
const colors = require("colors");
const app = express();

//settings
app.set('port', process.env.PORT || 3030);

//middlewares
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(morgan("dev"));
app.use(express.static(path.join(__dirname, "public")));

//routes
app.use("/api/games",require("./routes/routes.js"));

app.listen(app.get('port'), () => {
    console.log(" SERVER ".black.bgGreen + colors.green(": Listen on port \'" + app.get('port') + "\'")); 
});
