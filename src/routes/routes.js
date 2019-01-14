const express = require('express');
const path = require('path');
const colors = require('colors');
const connection = require("../config/DB_connection.js");
const router = express.Router();

router.get("/", (req, res) => {
    res.status(200);
    res.contentType("text/html");
    res.sendFile(path.join(__dirname, "../public/html/index.html"));
});

router.get("/games", async (req, res) => {

    const games = await connection.query("SELECT * FROM Videogames");
    res.status(200);
    res.contentType("application/json");
    res.json(games);
});

router.post("/", async (req, res) => {
    try {

        const { vg_name, vg_company, vg_year, vg_gender } = req.body;

        let resGame = {
            vg_name,
            vg_company,
            vg_year,
            vg_gender
        };

        await connection.query("INSERT INTO videogames SET ?", [resGame]);
        res.status(200);
        res.send(colors.green("POST: Data sended successfully"));
    } catch (err) {
        res.status(400);
        console.log(colors.red("POST:", err));
    }
});

module.exports = router;