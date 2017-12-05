DROP DATABASE IF EXISTS CheapoMail;
CREATE DATABASE CheapoMail;
USE CheapoMail;

DROP TABLE IF EXISTS Users;
CREATE TABLE Users (
id int NOT NULL AUTO_INCREMENT,
firstname varchar(255),
lastname varchar(255),
username varchar(32),
password varchar(255),
PRIMARY KEY (id)
);

INSERT INTO Users(firstname, lastname, username, password) VALUES ('John', 'Brown', 'admin', "482c811da5d5b4bc6d497ffa98491e38");

DROP TABLE IF EXISTS Messages;
CREATE TABLE Messages (
id int NOT NULL AUTO_INCREMENT,
recipient_ids varchar(255),
sender_id int,
subject text,
body text,
date_sent date,
PRIMARY KEY (id)
);


DROP TABLE IF EXISTS Message_read;
CREATE TABLE Message_read (
id int NOT NULL AUTO_INCREMENT,
message_id  int,
reader_id   int,
date_read   date,
PRIMARY KEY (id)
);