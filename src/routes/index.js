import express from "express";

const Router = express.Router();

Router.get("/", (req, res) => {
    res.end();
});

module.exports = Router;
