import express from "express";
import { green, red } from "colors";
import pool from "../config/DB_connection.js";
const router = express.Router();

router.get("/", async (req, res) => {

    try {
        const games = await pool.query("SELECT * FROM Videogames");
        res.status(200);
        res.contentType("application/json");
        res.json(games);
    } catch(err) {
        res.status(400);
        res.json({"error":"true"});
    }
});

router.delete("/delete/:id", async (req, res) => {

    try {
        await pool.query("DELETE FROM videogames WHERE vg_id=?",[req.params.id]);
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
        await pool.query("UPDATE videogames SET ? WHERE vg_id=?",[req.body,req.params.id]);
        res.status(200);
        res.end();
        console.log(green("POST: Data recived successfully"));
   }catch(err) {
        res.status(400);
        res.end();
        console.log(red("POST:", err));
   }
});

router.post("/insert", async (req,res) => {
    try {
        await pool.query("INSERT INTO videogames SET ?", [req.body]);
        res.status(200);
        res.end();
        console.log(green("POST: Data recived successfully"));
    } catch (err) {
        res.status(400);
        res.end();
        console.log(red("POST:", err));
    }
});

module.exports = router;