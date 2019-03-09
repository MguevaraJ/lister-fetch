const express = require('express');
const colors = require('colors');
const connection = require("../config/DB_connection.js");
const router = express.Router();

router.get("/", async (req, res) => {

    try {
        const games = await connection.query("SELECT * FROM Videogames");
        res.status(200);
        res.contentType("application/json");
        res.json(games);
    } catch(err) {
        res.status(400);
        res.json({"error":"true"});
    }
});

router.get("/delete/:id", async (req, res) => {

    try {
        await connection.query("DELETE FROM videogames WHERE vg_id=?",[req.params.id]);
        res.status(200);
        res.contentType("application/json");
        res.json({"delete":"true"});
    }catch(err) {
        res.status(400);
        res.contentType("application/json");
        res.json({"delete":"false"});
    }
});

router.post("/update/:id", async (req, res) => {
   try {
        await connection.query("UPDATE videogames SET ? WHERE vg_id=?",[req.body,req.params.id]);
        res.status(200);
        console.log(colors.green("POST: Data recived successfully"));
   }catch(err) {
        res.status(400);
        console.log(colors.red("POST:", err));
   }
});

router.post("/insert", async (req,res) => {
    try {
        await connection.query("INSERT INTO videogames SET ?", [req.body]);
        res.status(200);
        console.log(colors.green("POST: Data recived successfully"));
    } catch (err) {
        res.status(400);
        console.log(colors.red("POST:", err));
    }
});

module.exports = router;