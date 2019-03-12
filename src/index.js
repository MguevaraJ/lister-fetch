import express from "express";
import morgan from "morgan";
import { join } from "path";
import { black, bgGreen, green } from "colors";
const app = express();

//settings
app.set('port', process.env.PORT || 3030);

//middlewares
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(morgan("dev"));
app.use(express.static(join(__dirname, "public")));

//routes
app.use("/api/games",require("./routes/routes.js"));

app.listen(app.get('port'), () => {
    console.log(" SERVER ".black.bgGreen + green(": Listen on port \'" + app.get('port') + "\'")); 
});
