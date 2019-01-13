CREATE DATABASE Lister;

USE Lister;

CREATE TABLE VideoGames(
    vg_ID INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    vg_name VARCHAR(70),
    vg_company VARCHAR(70),
    vg_year INT,
    vg_gender VARCHAR(70),
    vg_create TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);