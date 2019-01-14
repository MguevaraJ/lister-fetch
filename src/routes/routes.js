const express = require('express');
const path = require('path');
const colors = require('colors');
const connection = require("../config/DB_connection.js");
const router = express.Router();

router.get("/", (req, res) => {
    res.type("text/html");
    res.sendFile(path.join(__dirname, "../public/html/index.html"));
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
        res.send("POST: Data sended successfully");
    } catch (err) {
        console.log("POST:", err);
    }
});

module.exports = router;