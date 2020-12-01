DROP DATABASE IF EXISTS cyberSafeDB;
CREATE DATABASE cyberSafeDB;

USE cyberSafeDB;

CREATE TABLE userscore (
    id AUTO INTEGER PRIMARY KEY NOT NULL,
    score INT(10) NOT NULL,
    negatives json NOT NULL,
    positives json NOT NULL
)

CREATE TABLE users (
    id AUTO INTEGER PRIMARY KEY NOT NULL,
    email VARCHAR(30) NOT NULL,
    password VARCHAR(30) NOT NULL
)

/* Scoring rubric: 
    Password criteria:
        >12 characters +?
        <11 characters -?
    Quiz criteria:
        How many questions?
        Points +/- per question?
    Out of 100? 
    Passing level? 
*/
