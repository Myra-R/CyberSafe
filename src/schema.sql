DROP DATABASE IF EXISTS cyberSafeDB;
CREATE DATABASE cyberSafeDB;

USE cyberSafeDB;

CREATE TABLE userscore (
    id AUTO INTEGER PRIMARY KEY NOT NULL,
    score INT(10) NOT NULL,
    negatives TEXT NOT NULL,
    positives TEXT NOT NULL,
    FOREIGN KEY (users_id) REFERENCES users(id)
)

CREATE TABLE users (
    id AUTO INTEGER PRIMARY KEY NOT NULL,
    email VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL
)

/* Store positives/negatives as a JSON object to work with sequelize*/

/* Scoring rubric: 
    Password criteria:
        >12 characters +?
        <11 characters -?
    Email criteria:

    Quiz criteria:

    Out of 100? 
    Passing level? 
*/
